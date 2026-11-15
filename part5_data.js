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
  },

  // ===== 進階擴充題庫：詞性辨析 (ID 41-60) =====
  {
    id: 41,
    category: "詞性辨析",
    level: "800分",
    sentence: "All employees are required to adhere strictly to the safety ------- outlined in the company handbook.",
    options: ["regulate", "regulatory", "regulations", "regulating"],
    answer: 2,
    zh: "所有員工都必須嚴格遵守公司手冊中所列的各項安全規定。",
    explanation: "名詞 safety 後方缺少名詞作為介係詞 to 的受詞，構成複合名詞「safety regulations（安全規定）」，故選 (C) regulations。"
  },
  {
    id: 42,
    category: "詞性辨析",
    level: "800分",
    sentence: "The newly appointed CFO proposed a ------- plan to reduce operational expenses by 15 percent.",
    options: ["comprehend", "comprehensive", "comprehensively", "comprehension"],
    answer: 1,
    zh: "新任財務長提出了一項全面性的計畫，以將營運費用降低 15%。",
    explanation: "冠詞 a 與名詞 plan 之間需要形容詞來修飾，故選 (B) comprehensive（全面的；詳盡的）。"
  },
  {
    id: 43,
    category: "詞性辨析",
    level: "990分",
    sentence: "Prolonged supply chain disruptions could ------- affect our quarterly profit margins.",
    options: ["adverse", "adversely", "adversity", "adversarial"],
    answer: 1,
    zh: "長期的供應鏈中斷可能會對我們本季的利潤率造成不利影響。",
    explanation: "空格位於助動詞 could 與原形動詞 affect 之間，需填入副詞來修飾動詞 affect，故選 (B) adversely（不利地；負面地）。"
  },
  {
    id: 44,
    category: "詞性辨析",
    level: "800分",
    sentence: "Park only in the ------- visitor spaces located near the main entrance of the building.",
    options: ["designate", "designation", "designated", "designating"],
    answer: 2,
    zh: "請僅將車輛停放在位於大樓正門附近的指定訪客車位。",
    explanation: "空格修飾名詞片語 visitor spaces，表示「被指定的」車位，應選過去分詞作形容詞 (C) designated。"
  },
  {
    id: 45,
    category: "詞性辨析",
    level: "990分",
    sentence: "Thank you for your ------- response to our inquiry regarding the updated shipping schedule.",
    options: ["time", "timely", "timeliness", "timing"],
    answer: 1,
    zh: "感謝您對我們詢問最新出貨時程的及時回覆。",
    explanation: "形容詞所有格 your 與名詞 response 之間需要形容詞；注意 (B) timely 雖為 -ly 結尾但詞性是形容詞（及時的），為多益極高頻考點。"
  },
  {
    id: 46,
    category: "詞性辨析",
    level: "800分",
    sentence: "The accounting team discovered a minor ------- between the invoice total and the purchase order.",
    options: ["discrepancy", "discrepant", "discrepantly", "discrepancies"],
    answer: 0,
    zh: "會計團隊發現發票總額與採購單之間有微小的出入。",
    explanation: "前面有不定冠詞 a 與形容詞 minor，後方應接單數名詞 (A) discrepancy（差異；出入）。"
  },
  {
    id: 47,
    category: "詞性辨析",
    level: "800分",
    sentence: "Upgrading the server infrastructure will ------- improve data transfer speeds across all branches.",
    options: ["substance", "substantial", "substantially", "substantiate"],
    answer: 2,
    zh: "升級伺服器基礎設施將大幅提升所有分公司的資料傳輸速度。",
    explanation: "空格位於助動詞 will 與動詞 improve 之間，需用副詞修飾動詞 improve，故選 (C) substantially（大幅地；實質上）。"
  },
  {
    id: 48,
    category: "詞性辨析",
    level: "990分",
    sentence: "All ------- applicants must submit a portfolio demonstrating at least five years of architectural design experience.",
    options: ["prospect", "prospective", "prospectively", "prospectus"],
    answer: 1,
    zh: "所有準應徵者都必須提交一份能證明至少五年建築設計經驗的作品集。",
    explanation: "空格修飾名詞 applicants，應選形容詞 (B) prospective（未來的；潛在的；準…）。"
  },
  {
    id: 49,
    category: "詞性辨析",
    level: "800分",
    sentence: "The merger cannot proceed without the formal ------- of the regulatory commission.",
    options: ["authorize", "authorized", "authorization", "authoritative"],
    answer: 2,
    zh: "在未獲得監管委員會正式授權的情況下，該項合併案無法進行。",
    explanation: "形容詞 formal 後方與介係詞 of 之間需填入名詞，故選 (C) authorization（授權；核准）。"
  },
  {
    id: 50,
    category: "詞性辨析",
    level: "990分",
    sentence: "Our flagship retail store recorded higher revenue for three ------- quarters.",
    options: ["consecutively", "consecutive", "consecution", "consequence"],
    answer: 1,
    zh: "我們的旗艦零售店已連續三個季度創下更高的營收。",
    explanation: "數詞 three 與名詞 quarters 之間需要形容詞修飾，故選 (B) consecutive（連續的）。"
  },
  {
    id: 51,
    category: "詞性辨析",
    level: "800分",
    sentence: "The IT department is responsible for the regular ------- of all corporate network equipment.",
    options: ["maintain", "maintained", "maintenance", "maintainable"],
    answer: 2,
    zh: "資訊部門負責所有公司網路設備的定期維護。",
    explanation: "冠詞 the 與形容詞 regular 後方需填入名詞，故選 (C) maintenance（維護；保養）。"
  },
  {
    id: 52,
    category: "詞性辨析",
    level: "990分",
    sentence: "The keynote workshop has been ------- scheduled for the third Thursday of next month.",
    options: ["tentative", "tentatively", "tentativeness", "tent"],
    answer: 1,
    zh: "該場主題工作坊已暫定於下個月的第三個星期四舉行。",
    explanation: "空格位於助動詞 has been 與過去分詞 scheduled 之間，需用副詞 (B) tentatively（暫時地；暫定地）修飾 scheduled。"
  },
  {
    id: 53,
    category: "詞性辨析",
    level: "800分",
    sentence: "Replacing the outdated assembly line proved to be a ------- investment in the short term, yet it doubled output.",
    options: ["cost", "costly", "costliness", "costing"],
    answer: 1,
    zh: "更換老舊組裝線在短期內是一項昂貴的投資，但它使產量翻倍。",
    explanation: "冠詞 a 與名詞 investment 之間需填入形容詞；(B) costly 是以 -ly 結尾的形容詞，意為「昂貴的；代價高的」。"
  },
  {
    id: 54,
    category: "詞性辨析",
    level: "800分",
    sentence: "Full ------- with international environmental standards is mandatory for all suppliers.",
    options: ["comply", "compliant", "compliance", "compliantly"],
    answer: 2,
    zh: "所有供應商都必須完全遵守國際環保標準。",
    explanation: "形容詞 Full 後方需要名詞當主詞，「compliance with ...」為多益核心搭配，意為「遵守…」，故選 (C) compliance。"
  },
  {
    id: 55,
    category: "詞性辨析",
    level: "990分",
    sentence: "The architectural firm is ------- committed to incorporating sustainable materials into every project.",
    options: ["deep", "deeply", "depth", "deepen"],
    answer: 1,
    zh: "這家建築事務所深切致力於在每個專案中融入永續材料。",
    explanation: "修飾形容詞 committed（致力於…）需使用副詞 (B) deeply（深深地；深切地），固定搭配為「be deeply committed to」。"
  },
  {
    id: 56,
    category: "詞性辨析",
    level: "800分",
    sentence: "Management hopes that the flexible work policy will boost employee morale and overall -------.",
    options: ["produce", "productive", "productivity", "productively"],
    answer: 2,
    zh: "管理層希望彈性工作政策能提升員工士氣與整體生產力。",
    explanation: "and 連接對等名詞 morale 與空格，且前方有形容詞 overall 修飾，應選名詞 (C) productivity（生產力）。"
  },
  {
    id: 57,
    category: "詞性辨析",
    level: "990分",
    sentence: "Information shared during executive strategy meetings must remain ------- confidential.",
    options: ["strict", "strictly", "strictness", "stricter"],
    answer: 1,
    zh: "高階主管策略會議期間分享的資訊必須保持嚴格機密。",
    explanation: "空格用來修飾形容詞 confidential（機密的），需使用副詞 (B) strictly（嚴格地）。"
  },
  {
    id: 58,
    category: "詞性辨析",
    level: "800分",
    sentence: "Successful ------- of the new enterprise software requires two weeks of staff training.",
    options: ["implement", "implemented", "implementation", "implementing"],
    answer: 2,
    zh: "新企業軟體的成功導入需要為期兩週的員工培訓。",
    explanation: "形容詞 Successful 後方與介係詞 of 之間需要名詞作主詞，故選 (C) implementation（實施；導入）。"
  },
  {
    id: 59,
    category: "詞性辨析",
    level: "990分",
    sentence: "Ms. Nakamura offered several ------- insights that helped resolve the client's concerns.",
    options: ["value", "valued", "valuable", "valuably"],
    answer: 2,
    zh: "中村女士提出了幾項寶貴的見解，幫助解決了客戶的疑慮。",
    explanation: "修飾名詞 insights（見解），表示「有價值的；寶貴的」，應選形容詞 (C) valuable。"
  },
  {
    id: 60,
    category: "詞性辨析",
    level: "800分",
    sentence: "The downtown convention center is easily ------- by both subway and regional rail.",
    options: ["access", "accessible", "accessibility", "accessibly"],
    answer: 1,
    zh: "市中心會議中心搭乘地鐵或區域鐵路皆可輕鬆抵達。",
    explanation: "be 動詞 is 與副詞 easily 後方需要形容詞作主詞補語，故選 (B) accessible（可抵達的；易於使用的）。"
  },

  // ===== 進階擴充題庫：時態與語態 (ID 61-80) =====
  {
    id: 61,
    category: "時態與語態",
    level: "800分",
    sentence: "By the end of next month, our engineering team ------- testing the prototype for the new electric vehicle.",
    options: ["completes", "has completed", "will have completed", "was completing"],
    answer: 2,
    zh: "到下個月底為止，我們的工程團隊將會完成新款電動車原型的測試。",
    explanation: "句首出現「By the end of next month（到未來某個時間點為止）」，標準搭配未來完成式 (C) will have completed。"
  },
  {
    id: 62,
    category: "時態與語態",
    level: "990分",
    sentence: "------- you require any further clarification on the warranty terms, please contact our customer care desk.",
    options: ["Should", "Had", "Were", "Would"],
    answer: 0,
    zh: "若您對保固條款需要任何進一步的說明，請聯繫我們的客服櫃台。",
    explanation: "此為省略 if 的條件句倒裝「Should + 主詞 + 原形動詞」，表示「萬一…；如果…」，故選 (A) Should。"
  },
  {
    id: 63,
    category: "時態與語態",
    level: "800分",
    sentence: "Before the press release was distributed, the CEO ------- every paragraph personally.",
    options: ["reviews", "had reviewed", "will review", "is reviewing"],
    answer: 1,
    zh: "在新聞稿發佈之前，執行長已親自審閱過每一段內容。",
    explanation: "新聞稿發佈（was distributed）是過去動作，而在那「之前」先完成的審閱動作應使用過去完成式 (B) had reviewed。"
  },
  {
    id: 64,
    category: "時態與語態",
    level: "990分",
    sentence: "The board of directors insisted that the internal audit ------- before the annual shareholders' meeting.",
    options: ["completes", "completed", "be completed", "is completed"],
    answer: 2,
    zh: "董事會堅持內部稽核必須在年度股東大會前完成。",
    explanation: "表建議、要求、堅持的動詞 insist 所接的 that 子句需用假設語氣「(should) + 原形動詞」；因稽核是被完成，故選被動原形 (C) be completed。"
  },
  {
    id: 65,
    category: "時態與語態",
    level: "800分",
    sentence: "All expense reimbursement claims ------- after the Friday deadline will be processed in the next pay cycle.",
    options: ["submit", "submitting", "submitted", "to submit"],
    answer: 2,
    zh: "所有在週五截止期限後提交的費用報銷申請，將於下一個發薪週期處理。",
    explanation: "本句已有主要動詞 will be processed，空格為修飾 claims 的分詞片語；申請單是「被提交」，故選過去分詞 (C) submitted。"
  },
  {
    id: 66,
    category: "時態與語態",
    level: "800分",
    sentence: "Please sign the ------- non-disclosure agreement and return it to Human Resources by Wednesday.",
    options: ["enclose", "enclosing", "enclosed", "enclosure"],
    answer: 2,
    zh: "請簽署隨函附上的保密協議，並於週三前交回人力資源部。",
    explanation: "修飾名詞 non-disclosure agreement，表示「被隨附在內的」，需用過去分詞作形容詞 (C) enclosed。"
  },
  {
    id: 67,
    category: "時態與語態",
    level: "990分",
    sentence: "The regional warehouse has significantly expanded its storage capacity since it ------- automated sorting robots.",
    options: ["installs", "installed", "has installed", "will install"],
    answer: 1,
    zh: "自從安裝了自動化分揀機器人以來，該區域倉庫已大幅擴充了儲藏容量。",
    explanation: "主要子句使用現在完成式（has expanded），since 引導的時間子句表示過去發生的起點事件，應使用過去簡單式 (B) installed。"
  },
  {
    id: 68,
    category: "時態與語態",
    level: "800分",
    sentence: "Once the safety inspection -------, the renovated laboratory will officially reopen to researchers.",
    options: ["is completed", "will be completed", "completed", "has been completing"],
    answer: 0,
    zh: "一旦安全檢查完成，翻新後的實驗室將正式重新向研究人員開放。",
    explanation: "Once 引導時間副詞子句，需以「現在式代替未來式」，且檢查是被完成，故選現在簡單被動式 (A) is completed。"
  },
  {
    id: 69,
    category: "時態與語態",
    level: "990分",
    sentence: "If the vendor ------- the revised quote earlier, we would have finalized the procurement contract last week.",
    options: ["provides", "provided", "had provided", "would provide"],
    answer: 2,
    zh: "如果供應商當初能早點提供修正後的報價單，我們上週就已經敲定採購合約了。",
    explanation: "主要子句為 would have finalized（與過去事實相反的假設語氣），因此 if 條件子句需用過去完成式 (C) had provided。"
  },
  {
    id: 70,
    category: "時態與語態",
    level: "800分",
    sentence: "Any inquiries ------- to billing discrepancies should be directed to our finance department.",
    options: ["pertain", "pertained", "pertaining", "pertains"],
    answer: 2,
    zh: "任何與帳單出入相關的詢問都應轉交給我們的財務部門。",
    explanation: "「pertain to（與…相關）」為不及物動詞片語，主動修飾 inquiries 時需使用現在分詞 (C) pertaining。"
  },
  {
    id: 71,
    category: "時態與語態",
    level: "990分",
    sentence: "The construction of the new logistics hub ------- by heavy rainfall throughout April.",
    options: ["delayed", "was delayed", "has delayed", "delaying"],
    answer: 1,
    zh: "新物流中心的建設在整個四月期間因強降雨而延誤。",
    explanation: "主詞 The construction 為無生命事物，且後方有 by heavy rainfall，需使用被動語態 (B) was delayed。"
  },
  {
    id: 72,
    category: "時態與語態",
    level: "800分",
    sentence: "Currently, several senior analysts ------- the feasibility of entering the Southeast Asian market.",
    options: ["evaluate", "are evaluating", "evaluated", "had evaluated"],
    answer: 1,
    zh: "目前，幾位資深分析師正在評估進入東南亞市場的可行性。",
    explanation: "句首有時間副詞 Currently（目前正在…），搭配複數主詞 analysts，最適合使用現在進行式 (B) are evaluating。"
  },
  {
    id: 73,
    category: "時態與語態",
    level: "990分",
    sentence: "Dr. Patel ------- at the university for twelve years before founding his own biotechnology startup.",
    options: ["teaches", "has taught", "had taught", "is teaching"],
    answer: 2,
    zh: "派特爾博士在創立自己的生技新創公司之前，曾在大學任教了十二年。",
    explanation: "創立公司（before founding...）為過去時間背景，在此之前持續十二年的動作需使用過去完成式 (C) had taught。"
  },
  {
    id: 74,
    category: "時態與語態",
    level: "800分",
    sentence: "All confidential client files must ------- in locked cabinets at the end of each workday.",
    options: ["store", "stored", "be stored", "be storing"],
    answer: 2,
    zh: "所有機密客戶檔案在每個工作日結束時都必須存放在上鎖的檔案櫃中。",
    explanation: "檔案是「被存放」，情態助動詞 must 後方需接被動原形 (C) be stored。"
  },
  {
    id: 75,
    category: "時態與語態",
    level: "990分",
    sentence: "------- in the heart of the financial district, the hotel offers convenient access to major corporate headquarters.",
    options: ["Locate", "Locating", "Located", "To locate"],
    answer: 2,
    zh: "這家飯店位於金融區中心，前往各大企業總部都相當便利。",
    explanation: "分詞構句省略主詞 the hotel 與 be 動詞，固定用法為「be located in...」，故句首選過去分詞 (C) Located。"
  },
  {
    id: 76,
    category: "時態與語態",
    level: "800分",
    sentence: "By the time the keynote speaker arrived at the venue, more than 300 attendees ------- in the auditorium.",
    options: ["gather", "were gathering", "had gathered", "will gather"],
    answer: 2,
    zh: "當主講人抵達會場時，已有超過三百名與會者聚集在禮堂內。",
    explanation: "「By the time + 過去式」表示在過去某個時間點之前動作已完成，主要子句應選過去完成式 (C) had gathered。"
  },
  {
    id: 77,
    category: "時態與語態",
    level: "990分",
    sentence: "The committee recommends that every department ------- its annual budget proposal by October 15.",
    options: ["submits", "submit", "submitted", "will submit"],
    answer: 1,
    zh: "委員會建議每個部門在 10 月 15 日前提交年度預算提案。",
    explanation: "動詞 recommends 後接 that 名詞子句時，子句動詞需用假設語氣「(should) + 原形動詞」，即使主詞為單數 department，仍選 (B) submit。"
  },
  {
    id: 78,
    category: "時態與語態",
    level: "800分",
    sentence: "Over the past five years, online subscription revenue ------- steadily as more readers prefer digital editions.",
    options: ["grows", "has grown", "grew", "will grow"],
    answer: 1,
    zh: "在過去五年裡，隨著越來越多讀者偏好數位版，線上訂閱營收穩定成長。",
    explanation: "出現「Over the past five years（在過去五年持續至今）」時間副詞片語，標準搭配現在完成式 (B) has grown。"
  },
  {
    id: 79,
    category: "時態與語態",
    level: "990分",
    sentence: "Applicants ------- for the second round of interviews will be notified by email no later than Friday.",
    options: ["select", "selecting", "selected", "to select"],
    answer: 2,
    zh: "獲選進入第二輪面試的應徵者最遲將於週五前收到電子郵件通知。",
    explanation: "句子主要動詞為 will be notified，空格修飾 Applicants，意為「被選中的應徵者」，故選過去分詞 (C) selected。"
  },
  {
    id: 80,
    category: "時態與語態",
    level: "800分",
    sentence: "The marketing team ------- the promotional campaign next Monday as soon as the final artwork is approved.",
    options: ["launches", "will launch", "launched", "has launched"],
    answer: 1,
    zh: "只要最終設計稿獲得核准，行銷團隊將於下週一啟動促銷活動。",
    explanation: "時間副詞 next Monday 明確指出未來時間，故主要子句使用未來式 (B) will launch。"
  },

  // ===== 進階擴充題庫：介係詞與連接詞 (ID 81-100) =====
  {
    id: 81,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "------- the temporary decline in domestic sales, the company's overseas revenue reached a record high.",
    options: ["Although", "Even though", "Despite", "However"],
    answer: 2,
    zh: "儘管國內銷售暫時下滑，該公司的海外營收仍創下歷史新高。",
    explanation: "空格後方為名詞片語 the temporary decline...（沒有動詞），需填入介係詞而非連接詞或副詞，故選 (C) Despite（儘管）。"
  },
  {
    id: 82,
    category: "介係詞與連接詞",
    level: "990分",
    sentence: "We can offer you an immediate refund, ------- you return the damaged merchandise with the original receipt.",
    options: ["unless", "provided that", "whereas", "in case of"],
    answer: 1,
    zh: "只要您將損壞的商品連同原始收據一併退回，我們就可以為您立即退款。",
    explanation: "空格後接完整子句表示條件「只要…；倘若…」，應選條件連接詞 (B) provided that。"
  },
  {
    id: 83,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "All passengers are reminded to keep their seatbelts fastened ------- the flight encounters turbulence.",
    options: ["during", "in case", "because of", "instead of"],
    answer: 1,
    zh: "提醒所有旅客繫好安全帶，以防班機遭遇亂流。",
    explanation: "空格後方為完整子句 the flight encounters turbulence，只有 (B) in case（萬一；以防）為連接詞可接子句，其餘三項皆為介係詞。"
  },
  {
    id: 84,
    category: "介係詞與連接詞",
    level: "990分",
    sentence: "------- the revised travel policy, all international flights over six hours qualify for business class.",
    options: ["Pursuant to", "As a result", "In order that", "Provided"],
    answer: 0,
    zh: "依據修訂後的差旅政策，所有超過六小時的國際航班皆符合商務艙資格。",
    explanation: "空格後接名詞片語 the revised travel policy，需要介係詞片語；(A) Pursuant to 意為「依據；依照（規定、政策）」，為多益 900+ 常見正式介係詞。"
  },
  {
    id: 85,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "The downtown branch remains open until 9:00 P.M. on weekdays, ------- the suburban branch closes at 6:00 P.M.",
    options: ["despite", "whereas", "therefore", "moreover"],
    answer: 1,
    zh: "市中心分行平日營業至晚上九點，而郊區分行則在晚上六點打烊。",
    explanation: "前後兩句形成對比關係，且空格連接兩個完整子句，應選對比連接詞 (B) whereas（然而；相較之下）。"
  },
  {
    id: 86,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "Please submit your vacation requests to your supervisor at least two weeks ------- your intended departure date.",
    options: ["prior to", "in front of", "during", "until"],
    answer: 0,
    zh: "請至少在預計出發日期的兩週前向您的主管提交休假申請。",
    explanation: "表示「在…之前」，正式商務英文最常考 (A) prior to（= before）。"
  },
  {
    id: 87,
    category: "介係詞與連接詞",
    level: "990分",
    sentence: "------- his busy schedule as vice president, Mr. Tanaka personally mentored every new intern.",
    options: ["Notwithstanding", "Although", "Because", "Even if"],
    answer: 0,
    zh: "儘管身為副總裁行程滿檔，田中先生仍親自指導每一位新進實習生。",
    explanation: "空格後為名詞片語 his busy schedule...（無動詞），需選介係詞；(A) Notwithstanding（儘管；雖然，等同 despite）為高分考題常客。"
  },
  {
    id: 88,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "No unauthorized personnel may enter the server room ------- accompanied by an IT administrator.",
    options: ["except", "unless", "without", "despite"],
    answer: 1,
    zh: "除非有資訊管理員陪同，否則未經授權人員不得進入伺服器機房。",
    explanation: "「unless + 過去分詞 (accompanied...)」為「unless they are accompanied」的省略結構，意為「除非…」，故選 (B) unless。"
  },
  {
    id: 89,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "------- reviewing the quarterly financial statements, the auditors interviewed several department heads.",
    options: ["In addition to", "Moreover", "Further", "Additionally"],
    answer: 0,
    zh: "除了審閱季度財務報表之外，稽核人員還訪談了幾位部門主管。",
    explanation: "空格後方為動名詞片語 reviewing...，需填入介係詞片語 (A) In addition to（除了…之外）；其餘三項皆為副詞。"
  },
  {
    id: 90,
    category: "介係詞與連接詞",
    level: "990分",
    sentence: "The warranty covers all manufacturing defects, ------- of whether the product was purchased online or in store.",
    options: ["instead", "regardless", "irrespective", "aside"],
    answer: 1,
    zh: "無論該產品是在線上或門市購買，保固皆涵蓋所有製造瑕疵。",
    explanation: "固定搭配「regardless of + 名詞子句 / 名詞」，意為「不管；無論」，故選 (B) regardless。"
  },
  {
    id: 91,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "The newly hired technicians will shadow senior engineers ------- the first three weeks of orientation.",
    options: ["while", "during", "since", "among"],
    answer: 1,
    zh: "新聘的技術人員將在新人訓練的前三週跟隨資深工程師見習。",
    explanation: "空格後接名詞片語 the first three weeks（一段期間），應使用介係詞 (B) during；while 為連接詞須接子句。"
  },
  {
    id: 92,
    category: "介係詞與連接詞",
    level: "990分",
    sentence: "Mr. Gomez accepted the sustainability award ------- the entire operations division.",
    options: ["in charge of", "on behalf of", "in spite of", "in favor of"],
    answer: 1,
    zh: "戈麥斯先生代表整個營運部門領取了永續發展獎。",
    explanation: "「on behalf of...」意為「代表…」，符合領獎語境，故選 (B) on behalf of。"
  },
  {
    id: 93,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "Production at the northern plant was temporarily suspended ------- a sudden power outage.",
    options: ["because", "since", "due to", "as"],
    answer: 2,
    zh: "由於突發停電，北方工廠的生產暫時中止。",
    explanation: "空格後為名詞片語 a sudden power outage，需使用介係詞片語 (C) due to（由於）；because / since / as 皆為連接詞。"
  },
  {
    id: 94,
    category: "介係詞與連接詞",
    level: "990分",
    sentence: "All laboratory samples must be labeled accurately ------- they can be traced throughout the testing process.",
    options: ["so that", "in order to", "due to", "as well as"],
    answer: 0,
    zh: "所有實驗室樣本都必須準確標記，以便在整個測試過程中追蹤。",
    explanation: "空格後方為完整子句 they can be traced...，表示目的「以便；為了」，應選連接詞片語 (A) so that；in order to 後面須接原形動詞。"
  },
  {
    id: 95,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "The new software update is compatible ------- both desktop computers and mobile devices.",
    options: ["to", "for", "with", "at"],
    answer: 2,
    zh: "新的軟體更新同時相容於桌上型電腦與行動裝置。",
    explanation: "固定搭配「be compatible with...（與…相容）」，故選介係詞 (C) with。"
  },
  {
    id: 96,
    category: "介係詞與連接詞",
    level: "990分",
    sentence: "------- the high initial setup costs, solar panels significantly lower electricity bills over time.",
    options: ["Even though", "While", "For all", "Nevertheless"],
    answer: 2,
    zh: "儘管初期安裝成本高昂，太陽能板長期下來能大幅降低電費。",
    explanation: "空格後接名詞片語，(C) For all（= despite，儘管有…）為多益高階介係詞片語；Even though / While 為連接詞，Nevertheless 為副詞。"
  },
  {
    id: 97,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "Candidates must wait in the reception area ------- their names are called by the interviewer.",
    options: ["by", "until", "during", "from"],
    answer: 1,
    zh: "應徵者必須在接待區等候，直到面試官叫到他們的名字為止。",
    explanation: "空格後方為子句，且動詞 wait 為持續性動作，「wait until + 子句」表示「一直等到…為止」，故選 (B) until。"
  },
  {
    id: 98,
    category: "介係詞與連接詞",
    level: "990分",
    sentence: "All employee benefits are administered ------- the guidelines established by the Ministry of Labor.",
    options: ["in accordance with", "in addition to", "as opposed to", "with a view to"],
    answer: 0,
    zh: "所有員工福利皆依照勞動部訂定的準則辦理。",
    explanation: "「in accordance with...」意為「依照；符合（規定、準則）」，是多益法規與人資題型的必考片語，故選 (A)。"
  },
  {
    id: 99,
    category: "介係詞與連接詞",
    level: "800分",
    sentence: "Sales of winter apparel surged in November; -------, demand for summer merchandise fell sharply.",
    options: ["although", "consequently", "meanwhile", "despite"],
    answer: 2,
    zh: "十一月冬季服飾銷量激增；與此同時，夏季商品的需求則大幅下降。",
    explanation: "分號後方為獨立子句，需填入連接副詞表示同時發生的對比情況，故選 (C) meanwhile（與此同時；另一方面）。"
  },
  {
    id: 100,
    category: "介係詞與連接詞",
    level: "990分",
    sentence: "The museum will remain closed for renovations ------- further notice.",
    options: ["until", "by", "since", "within"],
    answer: 0,
    zh: "該博物館因翻修將持續關閉，直到另行通知為止。",
    explanation: "固定商務公告用語「until further notice（直到另行通知）」，故選 (A) until。"
  },

  // ===== 進階擴充題庫：字彙與搭配 (ID 101-120) =====
  {
    id: 101,
    category: "字彙與搭配",
    level: "800分",
    sentence: "Employees who travel for business will be ------- for reasonable meal and lodging expenses.",
    options: ["reimbursed", "resigned", "restricted", "retrieved"],
    answer: 0,
    zh: "出差的員工將獲得合理的餐飲與住宿費用報銷。",
    explanation: "「be reimbursed for + 費用」為多益超高頻搭配，意為「報銷；償還費用」，故選 (A) reimbursed。"
  },
  {
    id: 102,
    category: "字彙與搭配",
    level: "800分",
    sentence: "Attendance at tomorrow's cybersecurity briefing is ------- for all staff members with network access.",
    options: ["optional", "mandatory", "lenient", "superficial"],
    answer: 1,
    zh: "所有擁有網路權限的員工都必須強制參加明天的資安簡報。",
    explanation: "依語意「資安簡報」應為強制性，(B) mandatory（強制的；必須的）符合多益職場情境。"
  },
  {
    id: 103,
    category: "字彙與搭配",
    level: "990分",
    sentence: "After hours of deliberation, the committee ------- approved the proposal to construct a second research facility.",
    options: ["ambiguously", "reluctantly", "unanimously", "indifferently"],
    answer: 2,
    zh: "經過數小時的審議後，委員會一致通過了興建第二座研究設施的提案。",
    explanation: "「unanimously approved」意為「一致通過」，為多益會議紀錄常見高階搭配，故選 (C) unanimously。"
  },
  {
    id: 104,
    category: "字彙與搭配",
    level: "800分",
    sentence: "To ------- the customs clearance process, please ensure all commercial invoices list exact item quantities.",
    options: ["exaggerate", "expedite", "exhaust", "evacuate"],
    answer: 1,
    zh: "為加快通關程序，請確保所有商業發票均列出確切的商品數量。",
    explanation: "「expedite the process」意為「加速流程」，是國際貿易與物流題型的核心動詞，故選 (B) expedite。"
  },
  {
    id: 105,
    category: "字彙與搭配",
    level: "990分",
    sentence: "All newly manufactured medical devices must pass ------- quality control inspections before leaving the plant.",
    options: ["fragile", "negligent", "complacent", "stringent"],
    answer: 3,
    zh: "所有新製造的醫療器材在出廠前都必須通過嚴格的品質管制檢驗。",
    explanation: "修飾「quality control inspections（品管檢驗）」最道地的搭配為 (D) stringent（嚴格的；嚴厲的）。"
  },
  {
    id: 106,
    category: "字彙與搭配",
    level: "800分",
    sentence: "Hotel guests are entitled to ------- breakfast and high-speed Wi-Fi throughout their stay.",
    options: ["compulsory", "complimentary", "confidential", "consecutive"],
    answer: 1,
    zh: "飯店住客在入住期間可免費享用早餐及高速無線網路。",
    explanation: "「complimentary（免費贈送的）」是飯店與旅遊服務業多益考題的必考字彙，故選 (B)。"
  },
  {
    id: 107,
    category: "字彙與搭配",
    level: "990分",
    sentence: "The lease agreement explicitly ------- that tenants may not sublet the office space without written consent.",
    options: ["speculates", "simulates", "stipulates", "substitutes"],
    answer: 2,
    zh: "租賃合約明確規定，未經書面同意，房客不得轉租辦公空間。",
    explanation: "合約「明文規定」應使用動詞 (C) stipulates（規定；載明），為多益合約題高分字彙。"
  },
  {
    id: 108,
    category: "字彙與搭配",
    level: "800分",
    sentence: "Fuel prices tend to ------- significantly depending on global geopolitical developments.",
    options: ["formulate", "facilitate", "fabricate", "fluctuate"],
    answer: 3,
    zh: "燃油價格往往會依全球地緣政治發展而大幅波動。",
    explanation: "價格「波動；起伏」固定使用動詞 (D) fluctuate。"
  },
  {
    id: 109,
    category: "字彙與搭配",
    level: "990分",
    sentence: "Securing the government infrastructure contract proved to be a highly ------- venture for the engineering firm.",
    options: ["lenient", "lucrative", "liable", "lackluster"],
    answer: 1,
    zh: "取得政府基礎建設合約對這家工程公司而言證明是一項獲利豐厚的投資。",
    explanation: "「a lucrative venture / contract」意為「獲利豐厚的事業／合約」，故選 (B) lucrative。"
  },
  {
    id: 110,
    category: "字彙與搭配",
    level: "800分",
    sentence: "Rapid advances in cloud computing have rendered many legacy data-storage systems -------.",
    options: ["obvious", "obligatory", "obsolete", "optimistic"],
    answer: 2,
    zh: "雲端運算的快速進步已使許多舊式資料儲存系統遭到淘汰。",
    explanation: "「render ... obsolete」意為「使…過時／被淘汰」，為科技與商業轉型題型常見搭配，故選 (C) obsolete。"
  },
  {
    id: 111,
    category: "字彙與搭配",
    level: "990分",
    sentence: "A quiet, well-lit workspace is generally more ------- to focused analytical work.",
    options: ["conclusive", "conditional", "contagious", "conducive"],
    answer: 3,
    zh: "安靜且光線充足的工作環境通常更有助於專注的分析工作。",
    explanation: "固定搭配「be conducive to + 名詞（有助於…；有益於…）」，故選 (D) conducive。"
  },
  {
    id: 112,
    category: "字彙與搭配",
    level: "800分",
    sentence: "Please retain all email ------- with the supplier in case any warranty dispute arises later.",
    options: ["convenience", "correspondence", "competence", "conference"],
    answer: 1,
    zh: "請保留所有與供應商的電子郵件往來紀錄，以防日後發生保固爭議。",
    explanation: "「email correspondence」意為「電子郵件往來／信件溝通」，為辦公室溝通必考名詞，故選 (B) correspondence。"
  },
  {
    id: 113,
    category: "字彙與搭配",
    level: "990分",
    sentence: "As a safety -------, all laboratory technicians must wear protective goggles when handling chemical reagents.",
    options: ["predecessor", "prediction", "precaution", "preference"],
    answer: 2,
    zh: "作為安全預防措施，所有實驗室技術人員在處理化學試劑時都必須配戴護目鏡。",
    explanation: "「as a safety precaution」意為「作為安全預防措施」，故選 (C) precaution。"
  },
  {
    id: 114,
    category: "字彙與搭配",
    level: "800分",
    sentence: "The startup raised $20 million in Series B funding and ------- opened three regional offices in Europe.",
    options: ["simultaneously", "sparsely", "superficially", "subsequently"],
    answer: 3,
    zh: "該新創公司在 B 輪融資中籌得兩千萬美元，隨後在歐洲開設了三間區域辦公室。",
    explanation: "依先後順序「融資後、隨後開設辦公室」，應選 (D) subsequently（隨後；接著）。"
  },
  {
    id: 115,
    category: "字彙與搭配",
    level: "990分",
    sentence: "Failure to meet the regulatory filing deadline could ------- the company's eligibility for federal tax credits.",
    options: ["justify", "jeopardize", "juvenate", "juxtapose"],
    answer: 1,
    zh: "未能如期完成監管申報可能會危及公司申請聯邦稅收抵免的資格。",
    explanation: "「jeopardize eligibility / reputation」意為「危及／損害資格或聲譽」，故選 (B) jeopardize。"
  },
  {
    id: 116,
    category: "字彙與搭配",
    level: "800分",
    sentence: "Fourth-quarter exports ------- analysts' initial forecasts by nearly 12 percent.",
    options: ["surrendered", "suspended", "surpassed", "sustained"],
    answer: 2,
    zh: "第四季出口量超越了分析師原先預估的將近 12%。",
    explanation: "「surpass forecasts / expectations」意為「超越預測／預期」，為財報新聞題型必考動詞，故選 (C) surpassed。"
  },
  {
    id: 117,
    category: "字彙與搭配",
    level: "990分",
    sentence: "The executive compensation package includes a base salary plus performance-based -------.",
    options: ["renovation", "repudiation", "restoration", "remuneration"],
    answer: 3,
    zh: "高階主管薪酬方案包含底薪加上績效導向的酬勞。",
    explanation: "(D) remuneration 意為「報酬；薪酬」，是人資與高階合約題型的 990 分級字彙。"
  },
  {
    id: 118,
    category: "字彙與搭配",
    level: "800分",
    sentence: "A ------- of senior trade officials will visit Taipei next week to discuss bilateral tariff reductions.",
    options: ["dedication", "delegation", "deficiency", "deliberation"],
    answer: 1,
    zh: "一個由資深貿易官員組成的代表團將於下週訪問台北，討論雙邊關稅減免事宜。",
    explanation: "「a delegation of officials」意為「由官員組成的代表團」，故選 (B) delegation。"
  },
  {
    id: 119,
    category: "字彙與搭配",
    level: "990分",
    sentence: "Before finalizing the acquisition, the legal team conducted ------- due diligence on the target company's patents.",
    options: ["exhausted", "exclusive", "exhaustive", "excessive"],
    answer: 2,
    zh: "在敲定收購案前，法務團隊對目標公司的專利進行了徹底的盡職調查。",
    explanation: "「exhaustive due diligence / research」意為「詳盡徹底的盡職調查」，注意區分 exhausted（精疲力竭的），故選 (C) exhaustive。"
  },
  {
    id: 120,
    category: "字彙與搭配",
    level: "800分",
    sentence: "The customer service director emphasized that polite and ------- communication is essential for resolving complaints.",
    options: ["cautious", "contentious", "continuous", "courteous"],
    answer: 3,
    zh: "客服總監強調，禮貌且謙恭有禮的溝通對於解決客訴至關重要。",
    explanation: "「polite and courteous」為同義並列，意為「禮貌且謙恭的」，故選 (D) courteous。"
  }
];
