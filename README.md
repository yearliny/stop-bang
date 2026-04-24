# STOP-BANG · OSA 风险筛查

一份基于国际通用 **STOP-BANG** 问卷的阻塞性睡眠呼吸暂停（OSA）风险自测工具。8 道题，约 2 分钟完成，帮助你初步评估风险等级。

**在线体验**：https://stop-bang.yearliny8.workers.dev

> [English](#english) | [中文](#中文)

---

## 中文

### 特性

- 🧭 **8 题量表** — 覆盖打鼾、疲倦、目击呼吸暂停、血压、BMI、年龄、颈围、性别 8 个维度
- 🌐 **中英双语** — 一键切换，使用标准医学术语（OSA、BMI、PSG、CPAP 等）
- 🔒 **隐私优先** — 所有数据仅存于本机浏览器，不上传、不追踪
- 📱 **响应式设计** — 适配手机、平板、桌面
- ⚡ **零依赖** — 纯静态 HTML / CSS / JS，无需构建
- 🎨 **现代 UI** — 使用 OKLCH 色彩空间与流畅过渡动画

### 技术栈

- 原生 HTML5 / CSS3 / JavaScript（ES6+）
- 无框架、无构建步骤
- 通过 `i18n.js` 实现多语言

### 本地运行

直接用浏览器打开 `index.html` 即可；也可以起一个本地静态服务器：

```bash
# 任选其一
python -m http.server 8000
npx serve .
```

### 部署

项目为纯静态站点，可部署到任意静态托管：Cloudflare Pages、GitHub Pages、Vercel、Netlify 等。

**Cloudflare Pages 配置**：
- Build command: *(留空)*
- Build output directory: `/`
- Framework preset: `None`

### 免责声明

本工具仅供筛查参考，**不能替代专业医疗诊断**。如有疑虑，请咨询专业医师或睡眠医学科。

---

## English

A web-based self-assessment tool for **Obstructive Sleep Apnea (OSA)** risk, based on the internationally validated **STOP-BANG** questionnaire. 8 questions, ~2 minutes.

### Features

- 🧭 **8-item scale** — Snoring, Tired, Observed apnea, blood Pressure, BMI, Age, Neck circumference, Gender
- 🌐 **Bilingual (EN / 中文)** — standard medical terminology
- 🔒 **Privacy-first** — all data stays in your browser
- 📱 **Responsive** — mobile, tablet, desktop
- ⚡ **Zero dependencies** — pure static HTML/CSS/JS, no build step
- 🎨 **Modern UI** — OKLCH color space, smooth animations

### Run locally

Just open `index.html` in a browser, or serve statically:

```bash
python -m http.server 8000
# or
npx serve .
```

### Disclaimer

For screening purposes only. **Not a substitute for professional medical diagnosis.** Please consult a sleep medicine specialist if concerned.

---

## License

MIT
