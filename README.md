# 💻 AI Coding Assistant

An interactive web-based workspace assistant that helps developers write, refactor, and audit source code in real-time. Powered by **Next.js**, **React 19**, and the **Google Generative AI SDK (Gemini)**.

---

## ⚡ Key Features
* **Code Auditing & Review**: Paste code snippets to detect bugs, logic vulnerabilities, and performance bottlenecks.
* **Refactoring Suggestions**: Automatically rewrites code in modern formats (e.g. converting callbacks to async/await, optimizing loops).
* **Vibrant Glassmorphic UI**: Premium visual aesthetics styled using TailwindCSS v4 with sleek dark theme layouts.

---

## 🛠️ Tech Stack
* **Frontend**: Next.js 16 (App Router), React 19, TailwindCSS v4
* **AI Model Integration**: `@google/generative-ai` (Gemini SDK)
* **Language**: TypeScript, ES6+

---

## 🚀 Setup & Launch
1. Clone this repository:
   ```bash
   git clone https://github.com/WEB-TechWhiz/ai-coding-assistant.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env.local` file:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.
