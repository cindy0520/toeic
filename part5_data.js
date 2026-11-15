// 多益閱讀 Part 5 單句填空選擇題題庫（符合多益商務情境與考點水準）
const PART5_QUESTIONS = [
  // ===== 單元一：詞性辨析 (Part of Speech) =====
  {
    id: 1,
    category: "詞性辨析",
    level: "600分",
    sentence: "All visitors must present a valid photo identification card to the security guard upon -------.",
    options: ["arrive", "arrives", "arrival", "arriving"],
    answer: 2,
    zh: "所有訪客在抵達時都必須向警衛出示有效的附照片身分證件。",
    explanation: "介係詞 upon（一…就…）後方應接名詞或動名詞；此處「upon arrival」為多益高頻固定搭配，意為「一抵達時」，故選名詞 (C) arrival。"
  },
  {
    id: 2,
    category: "詞性辨析",
    level: "600分",
    sentence: "Ms. Lin was ------- promoted to regional sales director after exceeding her annual target.",
    options: ["recent", "recently", "recency", "more recent"],
    answer: 1,
    zh: "林小姐在超越年度目標後，最近剛被拔擢為區域銷售總監。",
    explanation: "空格位於助動詞 was 與過去分詞 promoted 之間，用來修飾動詞 promoted，應填入副詞 (B) recently（最近）。"
  },
  {
    id: 3,
    category: "詞性辨析",
    level: "600分",
    sentence: "The new inventory software has made our warehouse operations much more -------.",
    options: ["efficiency", "efficient", "efficiently", "efficiencies"],
    answer: 1,
    zh: "新的庫存軟體使我們的倉庫運作變得更有效率。",
    explanation: "「make + 受詞 + 受詞補語（形容詞）」為多益必考句型，more 後方需接形容詞 (B) efficient（有效率的）來修飾 operations。"
  },
  {
    id: 4,
    category: "詞性辨析",
    level: "800分",
    sentence: "Please review the attached contract ------- before signing and returning it to our legal department.",
    options: ["careful", "carefulness", "carefully", "caring"],
    answer: 2,
    zh: "在簽署並寄回法務部門之前，請仔細審閱隨附的合約。",
    explanation: "空格修飾前面的動詞 review（審閱），需使用副詞 (C) carefully（仔細地）。"
  },
  {
    id: 5,
    category: "詞性辨析",
    level: "800分",
    sentence: "The keynote speaker gave an ------- presentation on sustainable supply chain management.",
    options: ["impress", "impression", "impressive", "impressively"],
    answer: 2,
    zh: "主講人發表了一場關於永續供應鏈管理的精彩演講。",
    explanation: "冠詞 an 與名詞 presentation 之間需要形容詞來修飾，故選 (C) impressive（令人印象深刻的）。"
  },
  {
    id: 6,
    category: "詞性辨析",
    level: "800分",
    sentence: "Customer ------- is the top priority for every representative in our service center.",
    options: ["satisfy", "satisfied", "satisfactory", "satisfaction"],
    answer: 3,
    zh: "顧客滿意度是我們服務中心每一位專員的首要任務。",
    explanation: "空格位於名詞 Customer 之後、動詞 is 之前，構成複合名詞主詞「Customer satisfaction（顧客滿意度）」，故選名詞 (D) satisfaction。"
  },
  {
    id: 7,
    category: "詞性辨析",
    level: "800分",
    sentence: "The board of directors expressed ------- about the rising manufacturing costs this quarter.",
    options: ["concern", "concerned", "concerning", "concernedly"],
    answer: 0,
    zh: "董事會對本季不斷攀升的製造成本表達了關切。",
    explanation: "及物動詞 expressed（表達）後方缺少受詞，應填入名詞 (A) concern（關切；憂慮）。"
  },
  {
    id: 8,
    category: "詞性辨析",
    level: "990分",
    sentence: "Our consultants are ------- trained to handle complex corporate restructuring projects.",
    options: ["special", "specialize", "specially", "specialty"],
    answer: 2,
    zh: "我們的顧問都受過專門訓練，能處理複雜的企業重組專案。",
    explanation: "空格位於 be 動詞 are 與過去分詞 trained 之間，需填入副詞 (C) specially（專門地；特別地）來修飾 trained。"
  },
  {
    id: 9,
    category: "詞性辨析",
    level: "800分",
    sentence: "Due to the ------- of raw materials, the factory had to postpone its production schedule.",
    options: ["short", "shorten", "shortly", "shortage"],
    answer: 3,
    zh: "由於原物料短缺，工廠不得不延後生產時程。",
    explanation: "定冠詞 the 與介係詞 of 之間必須填入名詞，「a/the shortage of...」表示「…的短缺」，故選 (D) shortage。"
  },
  {
    id: 10,
    category: "詞性辨析",
    level: "990分",
    sentence: "The newly launched accounting tool is ------- compatible with all major operating systems.",
    options: ["full", "fully", "fullness", "fulfill"],
    answer: 1,
    zh: "新推出的會計工具與所有主流作業系統完全相容。",
    explanation: "空格修飾形容詞 compatible（相容的），需使用副詞 (B) fully（完全地）。"
  },

  // ===== 單元二：時態與語態 (Tense & Voice) =====
  {
    id: 11,
    category: "時態與語態",
    level: "600分",
    sentence: "The quarterly financial report ------- by the auditing committee next Friday morning.",
    options: ["reviews", "will review", "will be reviewed", "has reviewed"],
    answer: 2,
    zh: "季度財務報告將於下週五早上由審計委員會審核。",
    explanation: "主詞 report（報告）為無生命物，與動詞 review（審核）之間為被動關係，且時間副詞 next Friday morning 表示未來，故選未來被動式 (C) will be reviewed。"
  },
  {
    id: 12,
    category: "時態與語態",
    level: "600分",
    sentence: "Since opening its Taipei branch in 2021, Apex Logistics ------- its client base by 40 percent.",
    options: ["expands", "expanded", "has expanded", "will expand"],
    answer: 2,
    zh: "自從 2021 年開設台北分公司以來，Apex 物流的客戶群已擴展了 40%。",
    explanation: "句首出現「Since + 過去時間點」為現在完成式的典型訊號，主詞為單數 Apex Logistics，故選 (C) has expanded。"
  },
  {
    id: 13,
    category: "時態與語態",
    level: "800分",
    sentence: "By the time the CEO arrives at the venue, the marketing team ------- setting up the display booths.",
    options: ["finishes", "finished", "will have finished", "was finishing"],
    answer: 2,
    zh: "在執行長抵達會場時，行銷團隊將已經完成展示攤位的佈置。",
    explanation: "「By the time + 現在式子句」表示「到未來某時間點為止已經…」，主要子句需搭配未來完成式 (C) will have finished。"
  },
  {
    id: 14,
    category: "時態與語態",
    level: "800分",
    sentence: "All reimbursement requests ------- with original receipts will be processed within five business days.",
    options: ["submit", "submitting", "submitted", "to submit"],
    answer: 2,
    zh: "所有連同原始收據一起提交的報帳申請，將在五個工作天內處理完畢。",
    explanation: "此句主要動詞為 will be processed，空格處為修飾 requests 的分詞片語；「申請被提交」為被動關係，故選過去分詞 (C) submitted。"
  },
  {
    id: 15,
    category: "時態與語態",
    level: "600分",
    sentence: "The maintenance crew ------- the elevator cables when the power outage occurred.",
    options: ["inspected", "was inspecting", "inspects", "has inspected"],
    answer: 1,
    zh: "停電發生時，維修人員正在檢查電梯纜線。",
    explanation: "when 連接過去某個瞬間動作（occurred），當時正在進行的動作需使用過去進行式 (B) was inspecting。"
  },
  {
    id: 16,
    category: "時態與語態",
    level: "800分",
    sentence: "If the shipment ------- before noon today, we can still deliver it to the retailer tomorrow.",
    options: ["arrives", "arrived", "will arrive", "had arrived"],
    answer: 0,
    zh: "如果這批貨今天中午前送達，我們明天仍可配送給零售商。",
    explanation: "在表示條件的 If 副詞子句中，需用「現在簡單式代替未來式」，故選 (A) arrives。"
  },
  {
    id: 17,
    category: "時態與語態",
    level: "800分",
    sentence: "Several employees ------- to attend the mandatory cybersecurity workshop last week.",
    options: ["require", "required", "were required", "are requiring"],
    answer: 2,
    zh: "上週有幾位員工被要求參加強制的資安研討會。",
    explanation: "主詞 employees 與動詞 require 為被動關係（員工被要求），且時間為 last week（過去），故選過去被動式 (C) were required。"
  },
  {
    id: 18,
    category: "時態與語態",
    level: "990分",
    sentence: "Had the vendor notified us earlier about the delay, we ------- alternative suppliers.",
    options: ["contact", "will contact", "would have contacted", "had contacted"],
    answer: 2,
    zh: "若該供應商當初早點通知我們會延誤，我們當時就會聯繫替代供應商了。",
    explanation: "句首「Had + 主詞 + p.p.」為省略 if 的與過去事實相反假設語氣，主要子句應使用「would have + p.p.」，故選 (C) would have contacted。"
  },
  {
    id: 19,
    category: "時態與語態",
    level: "600分",
    sentence: "Our customer support hotline ------- 24 hours a day, seven days a week.",
    options: ["operate", "operates", "is operated", "operating"],
    answer: 1,
    zh: "我們的客服專線每週七天、每天 24 小時運作。",
    explanation: "陳述常態事實使用現在簡單式，主詞 hotline 為單數，且 operate 作「運作」解時常為主動語態，故選 (B) operates。"
  },
  {
    id: 20,
    category: "時態與語態",
    level: "990分",
    sentence: "The newly appointed CFO ------- at our Singapore headquarters for over a decade before transferring here.",
    options: ["works", "worked", "had worked", "has been working"],
    answer: 2,
    zh: "這位新任財務長在調任至此之前，已在新加坡總部工作超過十年。",
    explanation: "「調任（before transferring）」為過去動作，在此之前已持續發生的動作需用過去完成式 (C) had worked。"
  },

  // ===== 單元三：介係詞與連接詞 (Prepositions & Conjunctions) =====
  {
    id: 21,
    category: "介係詞與連接詞",
    level: "600分",
    sentence: "------- the heavy rain, the outdoor charity concert attracted more than 2,000 attendees.",
    options: ["Although", "Despite", "Even though", "Because"],
    answer: 1,
    zh: "儘管下著大雨，這場戶外公益演唱會仍吸引了超過兩千名觀眾。",
    explanation: "空格後方為名詞片語「the heavy rain」，並非完整子句，因此需選介係詞 (B) Despite（儘管）；Although / Even though / Because 皆為連接詞，後須接完整子句。"
  },
  {
    id: 22,
    category: "介係詞與連接詞",
    level: "600分",
    sentence: "The conference room is available for reservation ------- 9:00 A.M. and 5:00 P.M.",
    options: ["from", "between", "during", "among"],
    answer: 1,
    zh: "會議室在上午九點至下午五點之間可供預約。",
    explanation: "後方出現「and」連接兩個時間點，固定搭配為「between A and B」；若是 from 則須搭配 to。"
  },
  {
    id: 23,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "Ms. Chen decided to accept the job offer ------- the starting salary was slightly lower than expected.",
    options: ["even though", "in spite of", "due to", "regardless of"],
    answer: 0,
    zh: "儘管起薪比預期略低，陳小姐還是決定接受這份工作邀約。",
    explanation: "空格後方為完整子句「the starting salary was...」，且前後語意轉折，故選從屬連接詞 (A) even though；其餘三項皆為介係詞片語，後只能接名詞。"
  },
  {
    id: 24,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "Employees must submit their travel expense receipts ------- ten days of returning from a business trip.",
    options: ["within", "until", "since", "between"],
    answer: 0,
    zh: "員工必須在出差返國後的十天內提交差旅費收據。",
    explanation: "「within + 一段時間」表示「在…期間之內」，符合「十天內提交」的語意，故選 (A) within。"
  },
  {
    id: 25,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "------- you have any questions regarding your health benefits, please contact the HR department.",
    options: ["Unless", "Should", "Whether", "Whereas"],
    answer: 1,
    zh: "若您對健康保險福利有任何疑問，請聯繫人資部門。",
    explanation: "「Should + 主詞 + 原形動詞...」為假設語氣的倒裝句型，相當於「If you should have...（萬一您有…）」，為多益 Part 5 高頻考點，故選 (B) Should。"
  },
  {
    id: 26,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "All product manuals are written in both English and Japanese ------- international clients can read them easily.",
    options: ["in order to", "so that", "as well as", "such as"],
    answer: 1,
    zh: "所有產品手冊皆以英文與日文雙語撰寫，以便國際客戶能輕鬆閱讀。",
    explanation: "空格後方接完整子句「international clients can read...」，表示目的應選連接詞 (B) so that（為了；以便）；in order to 後方須接原形動詞。"
  },
  {
    id: 27,
    category: "介係詞與連接詞",
    level: "990分",
    sentence: "------- the proposed merger, neither company has issued an official statement to the press yet.",
    options: ["Concerning", "Concerned", "Provided", "Except"],
    answer: 0,
    zh: "關於這項擬議中的合併案，兩家公司目前都尚未向媒體發表正式聲明。",
    explanation: "(A) Concerning 作介係詞用，意為「關於；就…而言」（相當於 regarding / about），符合句意。"
  },
  {
    id: 28,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "The warranty covers all hardware defects ------- the device is used in accordance with the user manual.",
    options: ["provided that", "even if", "in case of", "prior to"],
    answer: 0,
    zh: "只要該裝置依使用手冊正常使用，保固即涵蓋所有硬體瑕疵。",
    explanation: "(A) provided that 意為「只要；倘若」，後接完整條件子句，符合保固條款語意。"
  },
  {
    id: 29,
    category: "介係詞與連接詞",
    level: "600分",
    sentence: "All passengers are reminded to keep their belongings with them ------- the duration of the flight.",
    options: ["throughout", "while", "until", "among"],
    answer: 0,
    zh: "提醒所有旅客在整個航程期間妥善保管隨身物品。",
    explanation: "「throughout the duration of...」為常見搭配，意為「在整個…期間」；while 為連接詞不可接名詞片語。"
  },
  {
    id: 30,
    category: "介係詞與連接詞",
    level: "990分",
    sentence: "The new downtown subway station is conveniently located ------- walking distance of our main office.",
    options: ["within", "under", "beside", "beyond"],
    answer: 0,
    zh: "新的市中心捷運站位置便利，距離我們總公司步行即可抵達。",
    explanation: "「within walking distance of...」為多益必背固定片語，意為「在…的步行距離內」，故選 (A) within。"
  },

  // ===== 單元四：多益高頻字彙與搭配 (Vocabulary & Collocations) =====
  {
    id: 31,
    category: "字彙與搭配",
    level: "600分",
    sentence: "To receive a full refund, customers must return the merchandise in its ------- packaging.",
    options: ["original", "frequent", "capable", "narrow"],
    answer: 0,
    zh: "若要獲得全額退款，顧客必須以原包裝退回商品。",
    explanation: "「original packaging」意為「原包裝」，符合退貨規定語意，故選 (A) original。"
  },
  {
    id: 32,
    category: "字彙與搭配",
    level: "800分",
    sentence: "The hotel offers ------- shuttle service to and from the airport for all registered guests.",
    options: ["confidential", "complimentary", "consecutive", "controversial"],
    answer: 1,
    zh: "飯店為所有入住登記的房客提供免費的機場接駁服務。",
    explanation: "(B) complimentary 意為「免費贈送的」（常考 complimentary breakfast / shuttle）；confidential（機密的）、consecutive（連續的）、controversial（有爭議的）。"
  },
  {
    id: 33,
    category: "字彙與搭配",
    level: "800分",
    sentence: "Applicants must have at least three years of ------- experience in digital marketing.",
    options: ["reluctant", "temporary", "relevant", "artificial"],
    answer: 2,
    zh: "應徵者必須具備至少三年數位行銷的相關經驗。",
    explanation: "「relevant experience」為徵才廣告高頻搭配詞，意為「相關經驗」，故選 (C) relevant。"
  },
  {
    id: 34,
    category: "字彙與搭配",
    level: "800分",
    sentence: "Management decided to ------- the deadline for the annual employee survey until next Wednesday.",
    options: ["exceed", "expose", "evade", "extend"],
    answer: 3,
    zh: "管理層決定將年度員工問卷調查的截止日期延長至下週三。",
    explanation: "「extend the deadline」意為「延長截止日期」；exceed（超過）、expose（揭露）、evade（規避）皆不合搭配，故選 (D) extend。"
  },
  {
    id: 35,
    category: "字彙與搭配",
    level: "800分",
    sentence: "Because the venue has limited seating -------, early registration is strongly recommended.",
    options: ["category", "capacity", "clarity", "charity"],
    answer: 1,
    zh: "由於場地座位容納量有限，強烈建議提早報名。",
    explanation: "「seating capacity」意為「座位容納量」，為多益活動公告常見搭配，故選 (B) capacity。"
  },
  {
    id: 36,
    category: "字彙與搭配",
    level: "990分",
    sentence: "The committee voted ------- to approve the updated travel reimbursement policy.",
    options: ["abundantly", "negligently", "unanimously", "ambiguously"],
    answer: 2,
    zh: "委員會全體一致投票通過更新後的差旅報帳政策。",
    explanation: "(C) unanimously 意為「全體一致地」，常與 vote / approve / agree 搭配；abundantly（豐富地）、negligently（疏忽地）、ambiguously（模稜兩可地）。"
  },
  {
    id: 37,
    category: "字彙與搭配",
    level: "800分",
    sentence: "Before signing the lease, tenants are advised to inspect the ------- thoroughly for any damage.",
    options: ["prospects", "procedures", "priorities", "premises"],
    answer: 3,
    zh: "在簽署租約前，建議房客徹底檢查房屋場所是否有任何損壞。",
    explanation: "(D) premises（恆複數）意為「營業場所；房屋及地產」，符合租賃檢查語意。"
  },
  {
    id: 38,
    category: "字彙與搭配",
    level: "990分",
    sentence: "The IT team is working around the clock to ------- the network outage affecting our main server.",
    options: ["resign", "resolve", "retain", "redeem"],
    answer: 1,
    zh: "資訊團隊正日以繼夜地搶修，以解決影響主伺服器的網路斷線問題。",
    explanation: "「resolve an outage / issue / problem」意為「解決問題／故障」，故選 (B) resolve；resign（辭職）、retain（保留）、redeem（兌換）。"
  },
  {
    id: 39,
    category: "字彙與搭配",
    level: "990分",
    sentence: "To remain ------- in the global market, the company invests heavily in product innovation.",
    options: ["compatible", "compulsory", "competitive", "comprehensive"],
    answer: 2,
    zh: "為了在全球市場保持競爭力，該公司大力投資產品創新。",
    explanation: "「remain competitive」意為「保持競爭力」，符合企業營運語意，故選 (C) competitive。"
  },
  {
    id: 40,
    category: "字彙與搭配",
    level: "990分",
    sentence: "Please note that late submissions will not be accepted under any -------.",
    options: ["consequences", "credentials", "commodities", "circumstances"],
    answer: 3,
    zh: "請注意，在任何情況下都不接受逾期繳交。",
    explanation: "「under any circumstances / under no circumstances」為多益必考固定片語，意為「在任何情況下（都不）」，故選 (D) circumstances。"
  }
];
