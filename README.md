# 💸 ExpensifyAI

An **AI-powered Expense Tracker** built with **Next.js**, **Tailwind CSS**, **Clerk Authentication**, and **OpenRoute API**.  
Track, analyze, and manage your expenses smarter with the power of AI.

---

## 🚀 Features

- 🔐 **Secure Authentication** with [Clerk](https://clerk.dev/)  
- 🤖 **AI Assistance** for categorizing and analyzing expenses  
- 📊 **Interactive Dashboards** to visualize spending patterns  
- 🌍 **OpenRoute Integration** for location-based expense tracking  
- 🎨 **Modern UI/UX** with Tailwind CSS  
- ⚡ **Deployed on Vercel** for blazing fast performance  

---

## 🖥️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/)  
- **Authentication**: [Clerk](https://clerk.dev/)  
- **AI/ML**: OpenAI / Custom models  
- **Routing/Maps**: [OpenRoute API](https://openrouteservice.org/)  
- **Deployment**: [Vercel](https://vercel.com/)  

---

## 📸 Screenshots

### 🔑 Authentication (Clerk)
<img src="assets/login.png" width="600"/>

### 📊 Dashboard
<img src="assets/dashboard.png" width="600"/>

### 💡 AI Insights
<img src="assets/ai.png" width="600"/>

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Aniketgautam959/ExpensifyAI.git
cd ExpensifyAI
npm install

🔧 Set up Environment Variables

Create a .env.local file in the root directory and add:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
OPENROUTE_API_KEY=your_openroute_api_key
OPENAI_API_KEY=your_openai_key

▶️ Run Locally
npm run dev


App will be live at: http://localhost:3000

🌍 Deployment

Deployed on Vercel → Live Demo

📌 Roadmap

 Add OCR for receipt scanning

 Export reports (CSV / PDF)

 Multi-currency support

 Budget alerts & notifications

🤝 Contributing

Contributions are welcome!

Fork the repo

Create your feature branch (git checkout -b feature/awesome-feature)

Commit changes (git commit -m 'Add awesome feature')

Push to branch (git push origin feature/awesome-feature)

Open a Pull Request
