# Quartermaster Command

**Quartermaster Command** is a comprehensive, client-side web application designed to calculate and manage crafting, refining, extraction, and logistics pipelines for Mortal Online 2 (MO2). 

Built to optimize resource management, this tool ensures you always know exactly what materials you need, what you already have, and what secondary resources you will generate along the way.

*"Steel wins battles, silver wins wars."*

---

## 🌟 Features

* **Advanced Production Pipeline:** Select a target material and quantity to generate a step-by-step breakdown of the most efficient extraction and refining routes.
* **Dynamic Inventory & Market Cart:** Track your current stash. The app automatically calculates the difference between your inventory and your production goals, building a "Market Cart" of missing components.
* **Byproduct Tracking:** Accurately calculates total recovered byproducts across complex, multi-step refining chains.
* **Discord Logistics Integration:** Automatically format and dispatch logistics orders (missing components and market purchases) directly to your guild's Discord server via Webhooks.
* **Extensive Localization:** Fully translated into 16 languages, including English, French, German, Spanish, Italian, Arabic, Romanian, Polish, Portuguese, Russian, Finnish, Ukrainian, Hungarian, Turkish, Swedish, and Czech.
* **Deep Personalization:** * Toggle between Light and Dark modes, or set completely custom UI colors.
    * Configure Yield Modifiers (Mastery, Refining, Extraction bonuses).
    * Customize Module Visibility to show only the tools you need.
* **Mobile-Friendly:** Fully responsive design built to work seamlessly on desktops, tablets, and smartphones.

---

## 🚀 How to Run (Local Development)

Quartermaster Command is a client-side application running on HTML, CSS, and Vanilla JavaScript. However, because it uses **ES6 Modules** (`import`/`export`) to keep the codebase clean and organized, modern web browsers will block the app from loading if you simply double-click the `index.html` file on your hard drive. 

To run the app locally, you need to serve it through a lightweight local web server. Here are the easiest ways to do this:

### Option 1: Using Node.js (Recommended)
If you have [Node.js](https://nodejs.org/) installed, a simple server script is included in the project.
1. Open your terminal or command prompt.
2. Navigate to the project folder.
3. Run the included server script:
   ```bash
   node serve-dev.js
