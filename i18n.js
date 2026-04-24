/* STOP-BANG i18n pack
   Structure: { zh: {...}, en: {...} }
   Medical English uses standard terminology (OSA, BMI, neck circumference, PSG, CPAP). */

window.I18N = {
  zh: {
    htmlLang: "zh-CN",
    dir: "ltr",

    // Brand / chrome
    brand: "STOP-BANG · OSA 风险筛查",
    resultBrand: "筛查结果",
    langSwitchAria: "切换语言",

    // Intro
    introTitle1: "了解您的",
    introTitle2: "阻塞性睡眠呼吸",
    introTitleAccent: "暂停风险",
    introLede: "一份国际通用的 8 题自测量表，帮助您初步评估风险等级。大约需要 2 分钟。",
    dimensionsTitle: "量表涵盖 8 个维度",
    chipCount: "8 道题",
    chipTime: "约 2 分钟",
    chipLocal: "数据仅存于本机",
    startBtn: "开始筛查",

    // Progress
    progressLabel: (n) => `第 ${n} / 8 题`,
    answeredLabel: (n) => `${n} / 8 已作答`,
    backBtn: "上一题",

    // Question UI
    ansYes: "是",
    ansYesSub: "符合描述",
    ansNo: "否",
    ansNoSub: "不符合",

    // Questions — letter / category / keyword / text / hint
    questions: [
      {
        letter: "S", cat: "Snoring", kw: "打鼾",
        text: "您是否打鼾声音很响？",
        hint: "比说话声还响，或隔着关闭的房门也能听到。"
      },
      {
        letter: "T", cat: "Tired", kw: "疲倦",
        text: "您是否经常感到白天疲劳、乏力或困倦？",
        hint: "例如开会、看电视或开车时难以保持清醒。"
      },
      {
        letter: "O", cat: "Observed", kw: "目击",
        text: "是否有人目睹过您在睡觉时停止呼吸或窒息?",
        hint: "通常由家人或伴侣观察到。"
      },
      {
        letter: "P", cat: "Pressure", kw: "血压",
        text: "您是否患有高血压,或正在接受高血压治疗?",
        hint: "包括正在服用降压药物的情况。"
      },
      {
        letter: "B", cat: "BMI", kw: "体重指数",
        text: "您的 BMI 是否大于 35 kg/m²?",
        hint: "BMI = 体重(kg) ÷ 身高(m)²。例如 170cm / 102kg ≈ 35.3。"
      },
      {
        letter: "A", cat: "Age", kw: "年龄",
        text: "您是否超过 50 岁?",
        hint: ""
      },
      {
        letter: "N", cat: "Neck", kw: "颈围",
        text: "您的颈围是否大于 40 cm?",
        hint: "在喉结下方水平绕颈一周的周长。"
      },
      {
        letter: "G", cat: "Gender", kw: "性别",
        text: "您的生理性别是否为男性?",
        hint: ""
      }
    ],

    // Dimensions list on intro (label after letter)
    dimensionsList: [
      "打鼾 Snoring",
      "疲倦 Tired",
      "目击 Observed",
      "血压 Pressure",
      "BMI",
      "年龄 Age",
      "颈围 Neck",
      "性别 Gender"
    ],

    // Results
    riskLow: {
      title: "低风险",
      tag: "Low Risk",
      explain: "目前的筛查结果显示,您出现阻塞性睡眠呼吸暂停的可能性较低。",
      advice: "保持规律作息与健康体重;若今后出现打鼾加重、白天嗜睡等变化,可再次筛查。"
    },
    riskMid: {
      title: "中风险",
      tag: "Intermediate Risk",
      explain: "您有一定概率患有阻塞性睡眠呼吸暂停,建议关注睡眠质量并考虑进一步评估。",
      advice: "建议记录夜间睡眠状况(打鼾、憋醒等)并咨询睡眠专科或呼吸科医生。"
    },
    riskHigh: {
      title: "高风险",
      tag: "High Risk",
      explain: "您出现阻塞性睡眠呼吸暂停的概率较高,尽早评估有助于预防并发症。",
      advice: "建议尽快咨询睡眠专科或呼吸科医生,必要时进行多导睡眠监测(PSG)。"
    },

    adviceLabel: "下一步建议:",
    modifierPrefix: "补充判定:",
    modifierBody: (total, reasons) =>
      `即使总分为 ${total},因满足「${reasons.join(" / ")}」,风险等级上调为高风险。`,
    modReasonMale: "STOP ≥ 2 且为男性",
    modReasonBMI: "STOP ≥ 2 且 BMI > 35",
    modReasonNeck: "STOP ≥ 2 且颈围 > 40 cm",

    eduTitle: "关于阻塞性睡眠呼吸暂停 (OSA)",
    eduP1: "OSA 是一种夜间反复出现气道阻塞、呼吸暂停或变浅的常见睡眠障碍,可引起打鼾、晨起头痛、白天嗜睡与注意力下降。",
    eduP2: "长期未治疗可能增加高血压、糖尿病、心律失常及心血管疾病风险。规范诊疗(包括生活方式调整、持续气道正压通气 CPAP 等)可显著改善症状与预后。",

    breakdownTitle: "您的回答",
    restartBtn: "重新测试",
    reviewBtn: "查看/修改答题",

    disclaimerShort: "本工具仅供筛查参考,不能替代专业医疗诊断",
    disclaimerLong: "本工具仅供筛查参考,不能替代专业医疗诊断 · 结果仅保存在您的浏览器中"
  },

  en: {
    htmlLang: "en",
    dir: "ltr",

    brand: "STOP-BANG · OSA Risk Screening",
    resultBrand: "Your Result",
    langSwitchAria: "Switch language",

    introTitle1: "Understand your risk",
    introTitle2: "of obstructive",
    introTitleAccent: "sleep apnea",
    introLede: "An internationally validated 8-item screening questionnaire for obstructive sleep apnea (OSA). Takes about 2 minutes.",
    dimensionsTitle: "The 8 dimensions",
    chipCount: "8 questions",
    chipTime: "~ 2 minutes",
    chipLocal: "Stored only on this device",
    startBtn: "Start screening",

    progressLabel: (n) => `Question ${n} of 8`,
    answeredLabel: (n) => `${n} of 8 answered`,
    backBtn: "Back",

    ansYes: "Yes",
    ansYesSub: "Applies to me",
    ansNo: "No",
    ansNoSub: "Does not apply",

    questions: [
      {
        letter: "S", cat: "Snoring", kw: "Snoring",
        text: "Do you snore loudly?",
        hint: "Loud enough to be heard through closed doors, or louder than talking."
      },
      {
        letter: "T", cat: "Tired", kw: "Tiredness",
        text: "Do you often feel tired, fatigued, or sleepy during the daytime?",
        hint: "For example, falling asleep in meetings, while watching TV, or while driving."
      },
      {
        letter: "O", cat: "Observed", kw: "Observed apnea",
        text: "Has anyone observed you stop breathing, choke, or gasp during sleep?",
        hint: "Usually reported by a partner or family member."
      },
      {
        letter: "P", cat: "Pressure", kw: "Blood pressure",
        text: "Do you have, or are you being treated for, high blood pressure?",
        hint: "Includes current use of antihypertensive medication."
      },
      {
        letter: "B", cat: "BMI", kw: "BMI",
        text: "Is your BMI greater than 35 kg/m²?",
        hint: "BMI = weight (kg) ÷ height (m)². E.g. 102 kg at 1.70 m ≈ 35.3."
      },
      {
        letter: "A", cat: "Age", kw: "Age",
        text: "Are you older than 50 years?",
        hint: ""
      },
      {
        letter: "N", cat: "Neck", kw: "Neck circumference",
        text: "Is your neck circumference greater than 40 cm (about 16 in)?",
        hint: "Measured horizontally just below the Adam's apple."
      },
      {
        letter: "G", cat: "Gender", kw: "Gender",
        text: "Are you male?",
        hint: ""
      }
    ],

    dimensionsList: [
      "Snoring",
      "Tiredness",
      "Observed apnea",
      "Blood pressure",
      "BMI",
      "Age",
      "Neck circumference",
      "Gender (male)"
    ],

    riskLow: {
      title: "Low Risk",
      tag: "Low Risk",
      explain: "Based on your answers, your likelihood of obstructive sleep apnea is low.",
      advice: "Maintain regular sleep habits and a healthy weight. If snoring worsens or daytime sleepiness develops, consider re-screening."
    },
    riskMid: {
      title: "Intermediate Risk",
      tag: "Intermediate Risk",
      explain: "You have a moderate likelihood of obstructive sleep apnea. Further evaluation is worth considering.",
      advice: "Track your sleep (snoring, witnessed apneas, daytime sleepiness) and consider consulting a sleep medicine or pulmonology specialist."
    },
    riskHigh: {
      title: "High Risk",
      tag: "High Risk",
      explain: "Your likelihood of obstructive sleep apnea is high. Early evaluation helps prevent complications.",
      advice: "We recommend consulting a sleep medicine or pulmonology specialist. Polysomnography (PSG) may be indicated."
    },

    adviceLabel: "Next steps:",
    modifierPrefix: "Adjusted rating:",
    modifierBody: (total, reasons) =>
      `Although your total score is ${total}, the criterion "${reasons.join(" / ")}" places you in the high-risk category.`,
    modReasonMale: "STOP ≥ 2 and male",
    modReasonBMI: "STOP ≥ 2 and BMI > 35",
    modReasonNeck: "STOP ≥ 2 and neck circumference > 40 cm",

    eduTitle: "About Obstructive Sleep Apnea (OSA)",
    eduP1: "OSA is a common sleep disorder in which the upper airway repeatedly narrows or collapses during sleep, causing snoring, morning headaches, daytime sleepiness, and reduced concentration.",
    eduP2: "Untreated OSA is associated with higher risk of hypertension, type 2 diabetes, arrhythmias, and cardiovascular disease. Appropriate management — including lifestyle changes and continuous positive airway pressure (CPAP) therapy — can substantially improve symptoms and outcomes.",

    breakdownTitle: "Your answers",
    restartBtn: "Start over",
    reviewBtn: "Review / edit answers",

    disclaimerShort: "For screening purposes only. Not a substitute for professional medical diagnosis.",
    disclaimerLong: "For screening purposes only. Not a substitute for professional medical diagnosis · Results stay in your browser."
  }
};

// ---------- Locale resolution ----------
window.resolveLocale = function () {
  try {
    const params = new URLSearchParams(location.search);
    const fromUrl = params.get("lang");
    if (fromUrl && window.I18N[fromUrl]) return fromUrl;
  } catch (_) {}
  try {
    const stored = localStorage.getItem("stopbang.lang");
    if (stored && window.I18N[stored]) return stored;
  } catch (_) {}
  const nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  return nav.startsWith("zh") ? "zh" : "en";
};

window.persistLocale = function (lang) {
  try { localStorage.setItem("stopbang.lang", lang); } catch (_) {}
  try {
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState({}, "", url);
  } catch (_) {}
  document.documentElement.setAttribute("lang", window.I18N[lang].htmlLang);
};
