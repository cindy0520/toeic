// 多益閱讀 Part 5 動態出題引擎（每次換一批皆產生全新不重複的多益 800-990 分水準題目）
(function(global) {
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function makeQuestion(sig, category, level, sentence, optionsWithCorrectFirst, zh, explanation) {
    const correctText = optionsWithCorrectFirst[0];
    const shuffled = shuffle(optionsWithCorrectFirst);
    const answer = shuffled.indexOf(correctText);
    return {
      id: `gen_${sig}`,
      category,
      level,
      sentence,
      options: shuffled,
      answer,
      zh,
      explanation
    };
  }

  // ===== 1. 詞性辨析 (Part of Speech) 生成池 =====
  const POS_FAMILIES = [
    { v: "implement", n: "implementation", adj: "implementable", adv: "effectively", nZh: "實施；導入", adjZh: "可行的", advZh: "有效地" },
    { v: "authorize", n: "authorization", adj: "authoritative", adv: "authoritatively", nZh: "授權；核准", adjZh: "權威性的", advZh: "權威地" },
    { v: "expand", n: "expansion", adj: "expansive", adv: "extensively", nZh: "擴張；擴展", adjZh: "廣泛的", advZh: "廣泛地" },
    { v: "collaborate", n: "collaboration", adj: "collaborative", adv: "collaboratively", nZh: "合作；協作", adjZh: "合作的", advZh: "協同合作地" },
    { v: "evaluate", n: "evaluation", adj: "evaluative", adv: "thoroughly", nZh: "評估；評鑑", adjZh: "評估性的", advZh: "徹底地" },
    { v: "comply", n: "compliance", adj: "compliant", adv: "strictly", nZh: "遵守；合規", adjZh: "合規的", advZh: "嚴格地" },
    { v: "stabilize", n: "stabilization", adj: "stable", adv: "steadily", nZh: "穩定", adjZh: "穩定的", advZh: "穩定地" },
    { v: "modernize", n: "modernization", adj: "modern", adv: "rapidly", nZh: "現代化", adjZh: "現代化的", advZh: "迅速地" },
    { v: "distribute", n: "distribution", adj: "distributive", adv: "widely", nZh: "分發；配銷", adjZh: "配銷的", advZh: "廣泛地" },
    { v: "consult", n: "consultation", adj: "consultative", adv: "closely", nZh: "諮詢；協商", adjZh: "諮詢的", advZh: "密切地" },
    { v: "verify", n: "verification", adj: "verifiable", adv: "carefully", nZh: "驗證；核實", adjZh: "可驗證的", advZh: "仔細地" },
    { v: "negotiate", n: "negotiation", adj: "negotiable", adv: "skillfully", nZh: "協商；談判", adjZh: "可協商的", advZh: "巧妙地" },
    { v: "streamline", n: "streamlining", adj: "streamlined", adv: "significantly", nZh: "精簡；簡化", adjZh: "精簡化的", advZh: "顯著地" },
    { v: "consolidate", n: "consolidation", adj: "consolidated", adv: "strategically", nZh: "整合；合併", adjZh: "整合的", advZh: "策略性地" },
    { v: "compensate", n: "compensation", adj: "compensatory", adv: "fairly", nZh: "補償；薪酬", adjZh: "補償性的", advZh: "公平地" },
    { v: "accommodate", n: "accommodation", adj: "accommodating", adv: "promptly", nZh: "容納；配合", adjZh: "樂於配合的", advZh: "迅速地" },
    { v: "innovate", n: "innovation", adj: "innovative", adv: "creatively", nZh: "創新", adjZh: "創新的", advZh: "有創意地" },
    { v: "regulate", n: "regulation", adj: "regulatory", adv: "formally", nZh: "規範；監管", adj: "監管的", advZh: "正式地" }
  ];

  const POS_NOUN_FRAMES = [
    {
      tpl: (w) => `The board's final ------- of the regional restructuring plan will be announced on Friday.`,
      zh: (w) => `董事會對區域重組計畫的最終${w.nZh}將於週五公布。`,
      exp: (w) => `形容詞 final 與介係詞 of 之間需要名詞作主詞，故選名詞 ${w.n}（${w.nZh}）。`
    },
    {
      tpl: (w) => `Without formal ------- from the finance director, no capital expenditure may proceed.`,
      zh: (w) => `若沒有財務總監的正式${w.nZh}，任何資本支出皆不得進行。`,
      exp: (w) => `介係詞 Without 與形容詞 formal 後方缺少受詞名詞，故選 ${w.n}（${w.nZh}）。`
    },
    {
      tpl: (w) => `Our quarterly report highlights the successful ------- of new quality-assurance protocols.`,
      zh: (w) => `我們的季度報告重點說明了新品質保證規範的成功${w.nZh}。`,
      exp: (w) => `定冠詞 the 與形容詞 successful 後方需接名詞，故選 ${w.n}（${w.nZh}）。`
    },
    {
      tpl: (w) => `Senior management prioritized the ------- of cross-departmental workflows this fiscal year.`,
      zh: (w) => `高階管理層在本財政年度優先推動跨部門工作流程的${w.nZh}。`,
      exp: (w) => `定冠詞 the 與介係詞 of 之間需填入名詞，故選 ${w.n}（${w.nZh}）。`
    }
  ];

  const POS_ADV_FRAMES = [
    {
      tpl: (w) => `All incoming shipments are ------- inspected by customs specialists before entering the warehouse.`,
      zh: (w) => `所有進港貨物在進入倉庫前都會由海關專員${w.advZh}檢驗。`,
      exp: (w) => `空格位於 be 動詞 are 與過去分詞 inspected 之間，需使用副詞 ${w.adv}（${w.advZh}）來修飾動詞 inspected。`
    },
    {
      tpl: (w) => `The engineering division worked ------- with external suppliers to meet the launch deadline.`,
      zh: (w) => `工程部門與外部供應商${w.advZh}合作，以趕上上市期限。`,
      exp: (w) => `空格修飾前面的不及物動詞 worked，應填入副詞 ${w.adv}（${w.advZh}）。`
    },
    {
      tpl: (w) => `Customer retention rates have ------- improved since the launch of our loyalty program.`,
      zh: (w) => `自從推出會員忠誠計畫以來，顧客留存率已${w.advZh}提升。`,
      exp: (w) => `空格位於助動詞 have 與過去分詞 improved 之間，需填入副詞 ${w.adv}（${w.advZh}）。`
    },
    {
      tpl: (w) => `All regional managers are expected to review expense reports ------- before submitting them to headquarters.`,
      zh: (w) => `所有區域經理在將費用報告提交總部前，都應${w.advZh}審閱。`,
      exp: (w) => `空格修飾動詞 review（審閱），需填入副詞 ${w.adv}（${w.advZh}）。`
    },
    {
      tpl: (w) => `The newly installed automation software operates ------- across all three distribution centers.`,
      zh: (w) => `新安裝的自動化軟體在所有三個配送中心皆${w.advZh}運作。`,
      exp: (w) => `空格修飾不及物動詞 operates，需使用副詞 ${w.adv}（${w.advZh}）。`
    },
    {
      tpl: (w) => `Our legal team has ------- revised the vendor agreement to reflect updated privacy laws.`,
      zh: (w) => `我們的法務團隊已${w.advZh}修訂供應商協議，以符合最新的隱私法規。`,
      exp: (w) => `空格位於助動詞 has 與過去分詞 revised 之間，應填入副詞 ${w.adv}（${w.advZh}）。`
    }
  ];

  const POS_ADJ_FRAMES = [
    {
      tpl: (w) => `The task force presented ------- solutions to address the rising logistics costs.`,
      zh: (w) => `專案小組提出了${w.adjZh}解決方案，以因應不斷攀升的物流成本。`,
      exp: (w) => `空格位於動詞 presented 與複數名詞 solutions 之間，需填入形容詞 ${w.adj}（${w.adjZh}）修飾 solutions。`
    },
    {
      tpl: (w) => `Maintaining ------- standards across all overseas factories remains our chief operational goal.`,
      zh: (w) => `在所有海外工廠維持${w.adjZh}標準仍是我們的主要營運目標。`,
      exp: (w) => `空格修飾後方的名詞 standards，應使用形容詞 ${w.adj}（${w.adjZh}）。`
    },
    {
      tpl: (w) => `Clients found the new enterprise platform remarkably ------- and easy to navigate.`,
      zh: (w) => `客戶發現新的企業平台極為${w.adjZh}且易於操作。`,
      exp: (w) => `「find + 受詞 + 形容詞補語」為多益高頻句型，副詞 remarkably 後方需接形容詞 ${w.adj}（${w.adjZh}）。`
    },
    {
      tpl: (w) => `Several board members raised concerns about the ------- impact of the proposed tariff hike.`,
      zh: (w) => `幾位董事會成員對擬議調高關稅可能帶來的${w.adjZh}影響表達了關切。`,
      exp: (w) => `定冠詞 the 與名詞 impact 之間需填入形容詞，故選 ${w.adj}（${w.adjZh}）。`
    },
    {
      tpl: (w) => `To stay ahead of competitors, our R&D department fosters a highly ------- work culture.`,
      zh: (w) => `為保持領先競爭對手，我們的研發部門培養了高度${w.adjZh}工作文化。`,
      exp: (w) => `副詞 highly 後方與名詞 work culture 之間需填入形容詞 ${w.adj}（${w.adjZh}）。`
    },
    {
      tpl: (w) => `Under the revised contract, all delivery schedules remain ------- subject to mutual written consent.`,
      zh: (w) => `根據修訂後的合約，所有交貨時程經雙方書面同意後皆維持為${w.adjZh}狀態。`,
      exp: (w) => `連綴動詞 remain 後方需要形容詞作主詞補語，故選 ${w.adj}（${w.adjZh}）。`
    }
  ];

  function buildPOSPool() {
    const pool = [];
    POS_FAMILIES.forEach((w, wi) => {
      POS_NOUN_FRAMES.forEach((f, fi) => {
        pool.push({
          frameKey: `pos_n_${fi}`,
          wordKey: `pos_w_${wi}`,
          fn: () => makeQuestion(
            `pos_n_${wi}_${fi}`, "詞性辨析", fi % 2 === 0 ? "800分" : "990分",
            f.tpl(w), [w.n, w.v, w.adj, w.adv], f.zh(w), f.exp(w)
          )
        });
      });
      POS_ADV_FRAMES.forEach((f, fi) => {
        pool.push({
          frameKey: `pos_adv_${fi}`,
          wordKey: `pos_w_${wi}`,
          fn: () => makeQuestion(
            `pos_adv_${wi}_${fi}`, "詞性辨析", fi % 2 === 0 ? "800分" : "990分",
            f.tpl(w), [w.adv, w.v, w.n, w.adj], f.zh(w), f.exp(w)
          )
        });
      });
      POS_ADJ_FRAMES.forEach((f, fi) => {
        pool.push({
          frameKey: `pos_adj_${fi}`,
          wordKey: `pos_w_${wi}`,
          fn: () => makeQuestion(
            `pos_adj_${wi}_${fi}`, "詞性辨析", fi % 2 === 0 ? "800分" : "990分",
            f.tpl(w), [w.adj, w.v, w.n, w.adv], f.zh(w), f.exp(w)
          )
        });
      });
    });
    return pool;
  }

  // ===== 2. 時態與語態 (Tense & Voice) 生成池 =====
  const TENSE_SCENARIOS = [
    { subj: "the audit team", subjZh: "稽核團隊", v: "finalize", past: "finalized", pp: "finalized", ing: "finalizing", vs: "finalizes", obj: "the annual compliance report", objZh: "年度合規報告" },
    { subj: "our legal counsel", subjZh: "我們的法務顧問", v: "review", past: "reviewed", pp: "reviewed", ing: "reviewing", vs: "reviews", obj: "the licensing agreement", objZh: "授權合約" },
    { subj: "the logistics division", subjZh: "物流部門", v: "dispatch", past: "dispatched", pp: "dispatched", ing: "dispatching", vs: "dispatches", obj: "the replacement components", objZh: "替換零件" },
    { subj: "the research lab", subjZh: "研究實驗室", v: "complete", past: "completed", pp: "completed", ing: "completing", vs: "completes", obj: "clinical safety trials", objZh: "臨床安全試驗" },
    { subj: "the procurement office", subjZh: "採購處", v: "approve", past: "approved", pp: "approved", ing: "approving", vs: "approves", obj: "the vendor's revised quote", objZh: "供應商修訂後的報價" },
    { subj: "the IT department", subjZh: "資訊部門", v: "upgrade", past: "upgraded", pp: "upgraded", ing: "upgrading", vs: "upgrades", obj: "the cloud security firewall", objZh: "雲端安全防火牆" },
    { subj: "the marketing director", subjZh: "行銷總監", v: "launch", past: "launched", pp: "launched", ing: "launching", vs: "launches", obj: "the global branding campaign", objZh: "全球品牌推廣活動" },
    { subj: "the regional branch", subjZh: "區域分行", v: "submit", past: "submitted", pp: "submitted", ing: "submitting", vs: "submits", obj: "its quarterly revenue forecast", objZh: "季度營收預測" },
    { subj: "the manufacturing plant", subjZh: "製造工廠", v: "install", past: "installed", pp: "installed", ing: "installing", vs: "installs", obj: "automated assembly sensors", objZh: "自動化組裝感測器" },
    { subj: "the executive board", subjZh: "執行董事會", v: "ratify", past: "ratified", pp: "ratified", ing: "ratifying", vs: "ratifies", obj: "the acquisition proposal", objZh: "收購提案" }
  ];

  const TENSE_PATTERNS = [
    {
      id: "fut_perf", level: "800分",
      tpl: (s) => `By the end of next quarter, ${s.subj} ------- ${s.obj}.`,
      opts: (s) => [`will have ${s.pp}`, s.vs, `has ${s.pp}`, `was ${s.ing}`],
      zh: (s) => `到下個季度末為止，${s.subjZh}將會完成${s.objZh}的作業。`,
      exp: (s) => `出現「By the end of next quarter（到未來某時點為止）」，應使用未來完成式 will have ${s.pp}。`
    },
    {
      id: "past_perf", level: "800分",
      tpl: (s) => `Before the shareholders' meeting began, ${s.subj} had already ------- ${s.obj}.`,
      opts: (s) => [s.pp, s.v, s.ing, s.vs],
      zh: (s) => `在股東大會開始前，${s.subjZh}就已經完成了${s.objZh}。`,
      exp: (s) => `had already 後方接過去分詞 ${s.pp} 構成過去完成式，表示在過去另一個動作之前已經完成。`
    },
    {
      id: "subjunctive", level: "990分",
      tpl: (s) => `The CEO insisted that ${s.subj} ------- ${s.obj} prior to the press briefing.`,
      opts: (s) => [s.v, s.vs, s.past, `will ${s.v}`],
      zh: (s) => `執行長堅持要求${s.subjZh}在新聞簡報前完成${s.objZh}。`,
      exp: (s) => `表示要求、堅持的動詞 insisted 後接 that 子句時，需使用假設語氣「(should) + 原形動詞」，故選原形 ${s.v}。`
    },
    {
      id: "passive_modal", level: "800分",
      tpl: (s) => `According to company policy, ${s.obj} must ------- by ${s.subj} before Friday.`,
      opts: (s) => [`be ${s.pp}`, s.v, s.pp, `be ${s.ing}`],
      zh: (s) => `根據公司政策，${s.objZh}必須在週五前由${s.subjZh}完成。`,
      exp: (s) => `受詞變為主詞且後方有 by ${s.subj}，情態助動詞 must 後方需接被動原形 be ${s.pp}。`
    },
    {
      id: "time_clause", level: "800分",
      tpl: (s) => `Once ${s.subj} ------- ${s.obj}, the finance office will release the project funds.`,
      opts: (s) => [s.vs, `will ${s.v}`, `had ${s.pp}`, s.ing],
      zh: (s) => `一旦${s.subjZh}完成${s.objZh}，財務處就會撥放專案資金。`,
      exp: (s) => `Once 引導時間副詞子句時，需以現在簡單式代替未來式，配合單數主詞選 ${s.vs}。`
    },
    {
      id: "over_past", level: "800分",
      tpl: (s) => `Over the past six months, ${s.subj} ------- ${s.obj} three times to meet new regulations.`,
      opts: (s) => [`has ${s.pp}`, s.past, `will ${s.v}`, s.vs],
      zh: (s) => `在過去六個月裡，為符合新法規，${s.subjZh}已處理了三次${s.objZh}。`,
      exp: (s) => `「Over the past six months（過去六個月持續至今）」搭配次數，應使用現在完成式 has ${s.pp}。`
    },
    {
      id: "if_past_contrary", level: "990分",
      tpl: (s) => `If ${s.subj} ------- ${s.obj} earlier, we would have avoided the shipping penalty.`,
      opts: (s) => [`had ${s.pp}`, s.past, s.vs, `would ${s.v}`],
      zh: (s) => `如果${s.subjZh}當時能早點完成${s.objZh}，我們就能避免延遲出貨罰款了。`,
      exp: (s) => `主要子句為 would have avoided（與過去事實相反假設），因此 if 條件子句需用過去完成式 had ${s.pp}。`
    },
    {
      id: "inv_should", level: "990分",
      tpl: (s) => `------- ${s.subj} fail to ${s.v} ${s.obj} on time, please notify the operations VP immediately.`,
      opts: (s) => ["Should", "Had", "Were", "Did"],
      zh: (s) => `萬一${s.subjZh}未能準時完成${s.objZh}，請立即通知營運副總裁。`,
      exp: (s) => `句型為省略 if 的未來條件倒裝「Should + 主詞 + 原形動詞 fail」，表示「萬一…」。`
    },
    {
      id: "participle_past", level: "800分",
      tpl: (s) => `Any errors found in ${s.obj} ------- by ${s.subj} will be corrected in the next release.`,
      opts: (s) => [s.pp, s.v, s.ing, s.vs],
      zh: (s) => `在${s.subjZh}處理的${s.objZh}中所發現的任何錯誤，都將於下一版更正。`,
      exp: (s) => `空格為修飾名詞的被動分詞片語，因為後方有 by ${s.subj}，故選過去分詞 ${s.pp}。`
    },
    {
      id: "by_the_time", level: "990分",
      tpl: (s) => `By the time the external auditors arrived, ${s.subj} ------- ${s.obj}.`,
      opts: (s) => [`had ${s.pp}`, s.vs, `will ${s.v}`, s.ing],
      zh: (s) => `當外部稽核人員抵達時，${s.subjZh}早已完成了${s.objZh}。`,
      exp: (s) => `「By the time + 過去式」表示在過去某個時間點之前動作已完成，主句應選過去完成式 had ${s.pp}。`
    },
    {
      id: "currently_prog", level: "800分",
      tpl: (s) => `At the moment, ${s.subj} ------- ${s.obj} to prepare for next week's board review.`,
      opts: (s) => [`is ${s.ing}`, s.past, `had ${s.pp}`, `will ${s.v}`],
      zh: (s) => `目前，${s.subjZh}正在處理${s.objZh}，為下週的董事會審查做準備。`,
      exp: (s) => `句首出現「At the moment（目前此刻）」，搭配單數主詞應選現在進行式 is ${s.ing}。`
    },
    {
      id: "recommend_sub", level: "990分",
      tpl: (s) => `The advisory panel recommended that ${s.obj} ------- without further delay.`,
      opts: (s) => [`be ${s.pp}`, `was ${s.pp}`, `is ${s.pp}`, s.pp],
      zh: (s) => `顧問小組建議${s.objZh}應立即處理，不得再延誤。`,
      exp: (s) => `動詞 recommended 後接 that 子句需用假設語氣「(should) + 原形動詞」，被動語態選 be ${s.pp}。`
    }
  ];

  function buildTensePool() {
    const pool = [];
    TENSE_SCENARIOS.forEach((s, si) => {
      TENSE_PATTERNS.forEach((p, pi) => {
        pool.push({
          frameKey: `tense_p_${p.id}`,
          wordKey: `tense_s_${si}`,
          fn: () => makeQuestion(
            `tense_${si}_${pi}`, "時態與語態", p.level,
            p.tpl(s), p.opts(s), p.zh(s), p.exp(s)
          )
        });
      });
    });
    return pool;
  }

  // ===== 3. 介係詞與連接詞 (Prepositions & Conjunctions) 生成池 =====
  const PREP_CONJ_ITEMS = [
    {
      level: "800分",
      s: "------- the recent fluctuations in currency exchange rates, our export revenue remained remarkably steady.",
      opts: ["Despite", "Although", "Even though", "However"],
      zh: "儘管近期匯率波動，我們的出口營收仍保持相當穩定。",
      exp: "空格後方為名詞片語 the recent fluctuations...（無動詞），應選介係詞 Despite；Although / Even though 為連接詞，However 為副詞。"
    },
    {
      level: "990分",
      s: "------- the committee received over forty proposals, only three met all technical specifications.",
      opts: ["Although", "Despite", "In spite of", "Regardless of"],
      zh: "雖然委員會收到超過四十份提案，但只有三份符合所有技術規格。",
      exp: "空格後方為完整子句 the committee received...，需填入從屬連接詞 Although；其餘三項皆為介係詞片語。"
    },
    {
      level: "990分",
      s: "------- the updated safety guidelines, all laboratory staff must complete annual certification.",
      opts: ["Pursuant to", "As a result", "Provided that", "Whereas"],
      zh: "依據更新後的安全準則，所有實驗室人員都必須完成年度認證。",
      exp: "空格後接名詞片語，Pursuant to 意為「依據；依照（規定、法規）」，是多益 900+ 常見正式介係詞片語。"
    },
    {
      level: "800分",
      s: "The supplier agreed to expedite delivery, ------- we place the bulk order before 3:00 P.M.",
      opts: ["provided that", "in case of", "due to", "despite"],
      zh: "只要我們在下午三點前下達大宗訂單，供應商便同意加速交貨。",
      exp: "空格後方為完整子句並表示條件「只要…」，應選條件連接詞 provided that。"
    },
    {
      level: "800分",
      s: "Please avoid scheduling client calls ------- the scheduled server maintenance window.",
      opts: ["during", "while", "when", "since"],
      zh: "在排定的伺服器維護時段期間，請避免安排客戶通話。",
      exp: "空格後方為名詞片語 the scheduled server maintenance window，需用介係詞 during；while / when 為連接詞須接子句。"
    },
    {
      level: "990分",
      s: "Manufacturing output increased by 18 percent in Taipei, ------- production in Osaka remained unchanged.",
      opts: ["whereas", "despite", "therefore", "moreover"],
      zh: "台北的製造產量增加了 18%，而大阪的產量則維持不變。",
      exp: "前後子句形成對比關係，需使用對比連接詞 whereas（然而；相較之下）。"
    },
    {
      level: "800分",
      s: "All travel reimbursement forms must be submitted ------- ten business days of returning from a trip.",
      opts: ["within", "until", "during", "among"],
      zh: "所有差旅費報銷表格都必須在出差返國後的十個工作天內提交。",
      exp: "表示「在某段時間之內」，固定使用介係詞 within。"
    },
    {
      level: "990分",
      s: "------- his extensive experience in corporate law, Mr. Takahashi was selected to lead the compliance division.",
      opts: ["Given", "Because", "Since", "Although"],
      zh: "考量到高橋先生在企業法務領域的豐富經驗，他獲選領導合規部門。",
      exp: "空格後接名詞片語 his extensive experience...，Given 作介係詞意為「考量到；鑑於…」。"
    },
    {
      level: "800分",
      s: "No confidential documents may leave the premises ------- written permission from a department head.",
      opts: ["without", "unless", "except", "besides"],
      zh: "未經部門主管書面許可，任何機密文件皆不得帶離辦公場所。",
      exp: "空格後為名詞片語 written permission，表示「沒有…；未經…」應選介係詞 without。"
    },
    {
      level: "990分",
      s: "------- the high initial cost of automation, the plant recouped its investment within two years.",
      opts: ["Notwithstanding", "Even if", "Although", "Because"],
      zh: "儘管自動化初期成本高昂，該工廠仍在兩年內回收了投資。",
      exp: "空格後為名詞片語，Notwithstanding（儘管；雖然）為正式商業英文中常見的高階介係詞。"
    },
    {
      level: "800分",
      s: "------- conducting market research, the consulting firm interviewed over fifty retail executives.",
      opts: ["In addition to", "Moreover", "Furthermore", "Additionally"],
      zh: "除了進行市場調查外，該顧問公司還訪談了超過五十位零售業高管。",
      exp: "空格後接動名詞片語 conducting...，需用介係詞片語 In addition to；其餘三項皆為副詞。"
    },
    {
      level: "990分",
      s: "All full-time employees receive comprehensive health coverage, ------- of their job title or tenure.",
      opts: ["regardless", "instead", "contrary", "aside"],
      zh: "所有正職員工無論職稱或年資為何，皆享有全面的醫療保險。",
      exp: "固定搭配「regardless of + 名詞」，意為「不論；不管…」。"
    },
    {
      level: "800分",
      s: "The morning shuttle bus will be temporarily rerouted ------- ongoing road construction on Main Street.",
      opts: ["due to", "because", "since", "as"],
      zh: "由於主街正在進行道路施工，早班接駁巴士將暫時改道。",
      exp: "空格後方為名詞片語 ongoing road construction，需填入介係詞片語 due to。"
    },
    {
      level: "990分",
      s: "Please double-check every customs declaration ------- the shipment is not delayed at the port.",
      opts: ["so that", "in order to", "due to", "as well as"],
      zh: "請仔細核對每一份海關申報單，以免貨物在港口延誤。",
      exp: "空格後方為完整子句 the shipment is not delayed...，表目的應選連接詞片語 so that。"
    },
    {
      level: "800分",
      s: "Applicants should arrive at least fifteen minutes ------- their scheduled interview time.",
      opts: ["prior to", "in front of", "until", "during"],
      zh: "應徵者應於預定面試時間至少十五分鐘前抵達。",
      exp: "表示時間上的「在…之前」，商務正式用語選 prior to。"
    },
    {
      level: "990分",
      s: "Ms. Chen delivered the quarterly briefing ------- the Vice President of Operations, who was attending a summit.",
      opts: ["on behalf of", "in charge of", "in favor of", "in spite of"],
      zh: "陳小姐代表正在參加高峰會的營運副總裁發表了季度簡報。",
      exp: "「on behalf of...」意為「代表…」。"
    },
    {
      level: "800分",
      s: "Entry into the research cleanroom is strictly prohibited ------- authorized personnel.",
      opts: ["except for", "unless", "although", "whereas"],
      zh: "除經授權的人員外，嚴禁任何人進入研究無塵室。",
      exp: "「except for + 名詞片語」意為「除了…之外」，符合語意與文法結構。"
    },
    {
      level: "990分",
      s: "All equipment warranties are administered ------- the terms specified in Section 4 of the manual.",
      opts: ["in accordance with", "as opposed to", "with a view to", "in case of"],
      zh: "所有設備保固均依照手冊第四節所載明之條款執行。",
      exp: "「in accordance with...」意為「依照；符合（條款、規定）」。"
    },
    {
      level: "800分",
      s: "We recommend backing up all project files regularly ------- unexpected hardware failure.",
      opts: ["in case of", "in case", "although", "unless"],
      zh: "我們建議定期備份所有專案檔案，以防發生突發硬體故障。",
      exp: "空格後接名詞片語 unexpected hardware failure，應選介係詞片語 in case of；in case 後需接子句。"
    },
    {
      level: "990分",
      s: "The downtown flagship store will remain open until midnight ------- the holiday shopping season.",
      opts: ["throughout", "while", "until", "since"],
      zh: "在整個節慶購物季期間，市中心旗艦店將營業至午夜。",
      exp: "表示「貫穿整個（期間）」，應選介係詞 throughout。"
    }
  ];

  function buildPrepConjPool() {
    return PREP_CONJ_ITEMS.map((item, idx) => ({
      frameKey: `pc_${idx}`,
      wordKey: `pc_w_${idx}`,
      fn: () => makeQuestion(
        `pc_${idx}`, "介係詞與連接詞", item.level,
        item.s, item.opts, item.zh, item.exp
      )
    }));
  }

  // ===== 4. 字彙與搭配 (Vocabulary & Collocations) 生成池 =====
  const VOCAB_BANK = [
    {
      level: "800分",
      s: "Employees who incur authorized travel expenses will be ------- within two pay periods.",
      opts: ["reimbursed", "resigned", "restricted", "retrieved"],
      zh: "產生核准差旅費用的員工將在兩個發薪週期內獲得報銷。",
      exp: "「reimburse」意為「報銷；償還費用」，符合差旅費語境。"
    },
    {
      level: "990分",
      s: "The regulatory agency imposed ------- penalties on firms that failed to disclose environmental data.",
      opts: ["stringent", "lenient", "superficial", "complacent"],
      zh: "監管機構對未揭露環境數據的企業祭出嚴厲罰則。",
      exp: "「stringent」意為「嚴格的；嚴厲的」，常與 penalties / regulations / inspections 搭配。"
    },
    {
      level: "800分",
      s: "To ------- approval of your building permit, please attach the certified architectural blueprints.",
      opts: ["expedite", "exaggerate", "exhaust", "evacuate"],
      zh: "為加速核准您的建築許可，請附上經認證的建築藍圖。",
      exp: "「expedite」意為「加速；加快（流程、審批）」。"
    },
    {
      level: "990分",
      s: "After reviewing the audit findings, the board ------- voted to replace the external accounting firm.",
      opts: ["unanimously", "ambiguously", "reluctantly", "sparsely"],
      zh: "審閱稽核結果後，董事會一致表決通過更換外部會計師事務所。",
      exp: "「unanimously」意為「一致地；全體無異議地」。"
    },
    {
      level: "800分",
      s: "Conference attendees will receive a ------- tote bag and digital access to all keynote slides.",
      opts: ["complimentary", "compulsory", "confidential", "consecutive"],
      zh: "會議與會者將獲贈免費手提袋及所有主題演講簡報的數位存取權。",
      exp: "「complimentary」意為「免費贈送的」。"
    },
    {
      level: "990分",
      s: "Section 8 of the service contract clearly ------- that support requests must be answered within four hours.",
      opts: ["stipulates", "speculates", "simulates", "substitutes"],
      zh: "服務合約第八條明確規定，支援請求必須在四小時內回覆。",
      exp: "「stipulate」意為「（合約、條款）明確規定」。"
    },
    {
      level: "800分",
      s: "Raw material costs tend to ------- unpredictably during periods of global supply disruption.",
      opts: ["fluctuate", "formulate", "facilitate", "fabricate"],
      zh: "在全球供應中斷期間，原物料成本往往會不可預測地波動。",
      exp: "「fluctuate」意為「波動；起伏」。"
    },
    {
      level: "990分",
      s: "Expanding into renewable energy storage proved to be a highly ------- strategy for the utility company.",
      opts: ["lucrative", "liable", "lackluster", "lenient"],
      zh: "跨足再生能源儲能對該公用事業公司而言證明是一項獲利豐厚的策略。",
      exp: "「lucrative」意為「獲利豐厚的；賺錢的」。"
    },
    {
      level: "800分",
      s: "Cloud-based collaboration tools have made traditional fax machines largely ------- in modern offices.",
      opts: ["obsolete", "obvious", "obligatory", "optimistic"],
      zh: "雲端協作工具已使傳統傳真機在現代辦公室中幾乎遭到淘汰。",
      exp: "「obsolete」意為「過時的；被淘汰的」。"
    },
    {
      level: "990分",
      s: "Open-plan workspaces are not always ------- to tasks requiring prolonged, uninterrupted concentration.",
      opts: ["conducive", "conclusive", "conditional", "contagious"],
      zh: "開放式辦公空間並不總是有助於需要長時間、不中斷專注的任務。",
      exp: "「be conducive to...」意為「有助於…」。"
    },
    {
      level: "800分",
      s: "Please archive all written ------- with overseas distributors for at least seven years.",
      opts: ["correspondence", "convenience", "competence", "conference"],
      zh: "請將所有與海外經銷商的書面往來信件存檔至少七年。",
      exp: "「correspondence」意為「往來信件；通訊紀錄」。"
    },
    {
      level: "990分",
      s: "Disclosing unreleased product specifications to competitors could ------- our market advantage.",
      opts: ["jeopardize", "justify", "juvenate", "juxtapose"],
      zh: "向競爭對手洩漏未發表的產品規格可能會危及我們的市場優勢。",
      exp: "「jeopardize」意為「危及；損害」。"
    },
    {
      level: "800分",
      s: "Annual sales in the Asia-Pacific region ------- management's projections by more than 14 percent.",
      opts: ["surpassed", "surrendered", "suspended", "sustained"],
      zh: "亞太地區的年度銷售額超越了管理層預估的 14% 以上。",
      exp: "「surpass projections」意為「超越預期／預測」。"
    },
    {
      level: "990分",
      s: "Before signing the joint-venture agreement, the partners conducted an ------- review of all financial liabilities.",
      opts: ["exhaustive", "exhausted", "exclusive", "excessive"],
      zh: "在簽署合資協議前，合作夥伴對所有財務負債進行了徹底詳盡的審查。",
      exp: "「exhaustive」意為「詳盡徹底的」，注意與 exhausted（精疲力竭的）區分。"
    },
    {
      level: "800分",
      s: "The company completed its initial public offering and ------- acquired two software startups.",
      opts: ["subsequently", "simultaneously", "sparsely", "superficially"],
      zh: "該公司完成首次公開募股，隨後收購了兩家軟體新創公司。",
      exp: "「subsequently」意為「隨後；接著」。"
    },
    {
      level: "990分",
      s: "A ------- of senior urban planners will inspect the proposed high-speed rail corridor next Tuesday.",
      opts: ["delegation", "dedication", "deficiency", "deliberation"],
      zh: "一個由資深都市規劃師組成的代表團將於下週二視察擬議的高鐵走廊。",
      exp: "「delegation」意為「代表團」。"
    },
    {
      level: "800分",
      s: "Participation in the annual fire drill is ------- for every employee working on site.",
      opts: ["mandatory", "optional", "tentative", "fragile"],
      zh: "每位在現場工作的員工都必須強制參加年度消防演習。",
      exp: "「mandatory」意為「強制的；義務性的」。"
    },
    {
      level: "990分",
      s: "The revised compensation framework links executive ------- directly to long-term shareholder value.",
      opts: ["remuneration", "renovation", "repudiation", "restoration"],
      zh: "修訂後的薪酬架構將高階主管的報酬與長期股東價值直接掛鉤。",
      exp: "「remuneration」意為「報酬；薪酬」。"
    },
    {
      level: "800分",
      s: "As a standard -------, visitors must wear hard hats before entering the active construction zone.",
      opts: ["precaution", "predecessor", "prediction", "preference"],
      zh: "作為標準預防措施，訪客在進入施工區前必須配戴安全帽。",
      exp: "「precaution」意為「預防措施」。"
    },
    {
      level: "990分",
      s: "We appreciate your ------- patience while our technicians restore full power to the server cluster.",
      opts: ["continued", "contentious", "cautious", "courteous"],
      zh: "在我們的技術人員恢復伺服器叢集全面供電期間，感謝您持續的耐心等候。",
      exp: "「continued patience」意為「持續的耐心」，為商務公告常見高頻搭配。"
    },
    {
      level: "800分",
      s: "The logistics manager was praised for her ------- handling of the unexpected port strike.",
      opts: ["resourceful", "resentful", "reluctant", "redundant"],
      zh: "物流經理因機智妥善地處理突發港口罷工而受到讚揚。",
      exp: "「resourceful」意為「足智多謀的；善於應變的」。"
    },
    {
      level: "990分",
      s: "To prevent data breaches, all portable drives must be ------- before leaving company headquarters.",
      opts: ["encrypted", "enlisted", "enlarged", "entitled"],
      zh: "為防止資料外洩，所有可攜式硬碟在離開公司總部前都必須加密。",
      exp: "「encrypted」意為「加密的」，為資訊安全題型核心字彙。"
    },
    {
      level: "800分",
      s: "Our customer support team strives to resolve every billing inquiry in a prompt and ------- manner.",
      opts: ["courteous", "cautious", "contentious", "continuous"],
      zh: "我們的客服團隊致力於以迅速且禮貌的方式解決每筆帳務詢問。",
      exp: "「prompt and courteous」意為「迅速且有禮貌的」。"
    },
    {
      level: "990分",
      s: "The merger will allow both airlines to ------- overlapping flight routes and reduce fuel consumption.",
      opts: ["consolidate", "contradict", "contaminate", "contemplate"],
      zh: "此次合併將使兩家航空公司得以整合重疊航線並減少燃油消耗。",
      exp: "「consolidate」意為「整合；合併」。"
    }
  ];

  function buildVocabPool() {
    return VOCAB_BANK.map((item, idx) => ({
      frameKey: `voc_${idx}`,
      wordKey: `voc_w_${idx}`,
      fn: () => makeQuestion(
        `voc_${idx}`, "字彙與搭配", item.level,
        item.s, item.opts, item.zh, item.exp
      )
    }));
  }

  const POOLS = {
    "詞性辨析": buildPOSPool(),
    "時態與語態": buildTensePool(),
    "介係詞與連接詞": buildPrepConjPool(),
    "字彙與搭配": buildVocabPool()
  };

  function getSeenKey(cat) {
    return `toeic_p5_gen_seen_${cat}`;
  }

  function loadSeen(cat) {
    try {
      const raw = localStorage.getItem(getSeenKey(cat));
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return new Set(parsed);
      }
    } catch(e) {}
    return new Set();
  }

  function saveSeen(cat, set) {
    try {
      localStorage.setItem(getSeenKey(cat), JSON.stringify(Array.from(set)));
    } catch(e) {}
  }

  function pickUniqueBatch(candidates, limit, usedFrames, usedWords, picked) {
    for (const item of shuffle(candidates)) {
      if (picked.length >= limit) break;
      if (usedFrames.has(item.frameKey)) continue;
      if (item.wordKey && usedWords.has(item.wordKey)) continue;
      usedFrames.add(item.frameKey);
      if (item.wordKey) usedWords.add(item.wordKey);
      picked.push(item);
    }
  }

  // 生成指定數量且同批句型、單字皆不重複的全新 Part 5 題目
  global.generatePart5Batch = function(category, count) {
    const builders = category === 'all'
      ? [
          ...POOLS["詞性辨析"].map((b, i) => ({ ...b, key: `詞性辨析_${i}` })),
          ...POOLS["時態與語態"].map((b, i) => ({ ...b, key: `時態與語態_${i}` })),
          ...POOLS["介係詞與連接詞"].map((b, i) => ({ ...b, key: `介係詞與連接詞_${i}` })),
          ...POOLS["字彙與搭配"].map((b, i) => ({ ...b, key: `字彙與搭配_${i}` }))
        ]
      : (POOLS[category] || []).map((b, i) => ({ ...b, key: `${category}_${i}` }));

    if (builders.length === 0) return [];

    const seen = loadSeen(category);
    const available = builders.filter(b => !seen.has(b.key));
    const picked = [];
    const usedFrames = new Set();
    const usedWords = new Set();

    // 第一輪：優先從未看過的題目中挑選不同句型與不同字族
    pickUniqueBatch(available, count, usedFrames, usedWords, picked);

    // 若未看過的題目不足以湊滿不重複句型，重置已看紀錄再補齊（仍強制同批句型與字族不重複）
    if (picked.length < count) {
      seen.clear();
      const pickedKeys = new Set(picked.map(p => p.key));
      const rest = builders.filter(b => !pickedKeys.has(b.key));
      pickUniqueBatch(rest, count, usedFrames, usedWords, picked);
    }

    // 萬一某極端情況字族先用完，至少保證同批句型 (frameKey) 絕不重複
    if (picked.length < count) {
      const pickedKeys = new Set(picked.map(p => p.key));
      for (const item of shuffle(builders.filter(b => !pickedKeys.has(b.key)))) {
        if (picked.length >= count) break;
        if (usedFrames.has(item.frameKey)) continue;
        usedFrames.add(item.frameKey);
        picked.push(item);
      }
    }

    picked.forEach(p => seen.add(p.key));
    saveSeen(category, seen);

    return picked.map(p => p.fn());
  };
})(window);
