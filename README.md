# 🗂️ Task Tracker

At the surface, this looks like any other To-Do app.  
Trust me, it is not.  
It is a quest to break Vite, React, Express and try to bind them neatly.

<details open>
<summary>📚 Table of Contents</summary>

- [Introduction (story time): Why did I build this?](#-introduction-story-time-why-did-i-build-this)
- [A Call, Not a Framework](#-a-call-not-a-framework)
- [The Mission](#-the-mission)
- [Description](#-description)
- [🚀 Stack](#-stack)
- [📂 Project Structure](#-project-structure)
- [🛠️ Setup Instructions](#-setup-instructions)
- [🌐 Environment Behavior](#-environment-behavior)
- [📋 Available Scripts](#-available-scripts)
- [📜 License](#-license)
- [✨ Author](#-author)
- [🚀 Future Improvements](#-future-improvements)
- [🔥 Quick Preview](#-quick-preview)

</details>

## 📖 Introduction (story time): Why did I build this?

First, there was freedom.  
React gave developers the tools to build anything.  
No rules. No limits. Just opportunity.

Then came the chaos.  
Create-React-App fell apart, went unfunded, unmaintained.  
Next.js stepped up and offered order.  
But FUNDED order comes at a price: control. Flexibility. Freedom. All these gone.

At first, we played along.  
Next.js worked fine when the focus was pages. SSR. Marketing sites.  
I have no issue with Next.js.  
It plays its role. I have used it in prod a lot.  
If all you care about is server-rendered pages, it delivers.  
But if you are building systems where APIs are the core, it slows you down.  
It became a bottleneck.

Do you want to slow down? Personally, I don't want to.  
I do not build for bottlenecks.  
I build for control.

Pure React, remains pure.  
CSR with Vite works good.  
Those of us who remember CRA look at Vite with reverance and appreciation.

ExpressJS remained untouched. Lean. Versatile. Brutal in its efficiency.  
Minimal. Fast. Ruthless in its simplicity.  
It gave you real power over your APIs, your middlewares, your flow.  
It lets you build your stack, your way.

For years, we accepted a broken pattern:  
React for the frontend.  
Express for the backend.  
Or NextJS for fullstack.  
Just two wild extremes(NextJS vs Express<->React), where is the sweet spot?

For too long, we treated React and Express like distant cousins.  
Separate builds. Separate lifecycles.  
Twice the work. Half the efficiency.  
A process designed for compromise, not developer speed.

Why do we do this?

I built Task Tracker to answer a simple question:  
What if we stopped pretending and built React and Express together — no middleman, no wasted steps?

What if we could fuse them?  
Build React and Express together. One project. One move. No wasted energy.

Vite handles the frontend.  
Express handles the backend.  
One project. One pipeline. One machine.  
Unified. Efficient. Fast.

Then what if we even push it further.  
TailwindCSS for the UI.  
ShadCN for the components.  
Docker for the walls.  
Nginx for the front gate.

This is not another to-do app.  
It is a blueprint for builders who refuse to lose.  
It is proof that freedom, speed, and power can coexist — if you have the will to build it.

It is a working model of how modern full-stack development should be: clean, fast, efficient, untouchable.

This is not a framework.  
This is not another set of rules.  
This is an open call.

It is time to stop pretending we like what Next.js has become.  
Time to stop pretending we enjoy splitting React and Express like they belong on opposite sides of a war.

## 📢 A Call, Not a Framework

This is a call to builders.  
Come let us figure it out together.  
Take this concept and make it better.  
Make it so good that this current project feels dirt.  
Let this be the lamp, that we discard once daylight comes.  
Beat it. Outbuild it. Outscale it.

The mission is simple.  
Keep React light.  
Make SSR optional, one parameter to toggle it, not a cockpit of thousand switches.  
Stay Express-centric, minimalistic, middlewares as they should be.  
Keep APIs fast, small, and sharp.  
Cut the rules. Keep the power.

Back to the roots.  
Back to building like we actually want to win.

## 📝 Description

A lightweight fullstack To-Do application built with modern web technologies:

- **Backend**: Express.js
- **Frontend**: React + Vite
- **Styling**: TailwindCSS + Shadcn UI
- **Server**: Nginx (for production reverse proxy)
- **Validation**: Joi
- **Containerization**: Docker

---

## 🚀 Stack

- **Express.js** — Backend server and API routing
- **Vite** — Fast frontend build tool
- **React** — Frontend UI library
- **Shadcn UI** — Accessible, flexible UI components
- **TailwindCSS** — Utility-first CSS framework
- **Dotenv** — Environment variable management
- **Joi** — Request validation schemas
- **Docker** — Application containerization
- **Nginx** — Production-grade reverse proxy
- **Custom Middlewares** — Async error handling, request logging, validation

---

## 📂 Project Structure (the most)

```bash
.
├── Dockerfile                  # Docker build configuration
├── README.md                    # Project documentation
├── client/                      # Frontend application (React + Vite)
│   ├── index.html               # Main HTML entry point for Vite
│   └── src/                     # Source files
│       ├── App.jsx              # Root React component
│       ├── components/          # Reusable React components
│       │   ├── Footer.jsx
│       │   ├── Header.jsx
│       │   ├── TaskFilter.jsx
│       │   ├── TaskInput.jsx
│       │   ├── TaskList.jsx
│       │   ├── TaskStats.jsx
│       │   └── ui/              # Shadcn UI components
│       ├── hooks/               # Custom React hooks (future expansion)
│       ├── index.css            # TailwindCSS base styling
│       ├── lib/                 # Utility and API helper functions
│       │   ├── api.js           # API endpoints
│       │   └── utils.js         # Actual utility functions
│       ├── main.jsx             # React entry point (connected to Vite)
│       └── pages/               # React page components
│           ├── Home.jsx         # Home page
│           └── not-found.jsx    # 404 not found page
├── components.json              # Shadcn UI configuration
├── dist/                        # Production build output (Vite generates)
├── docker-compose.yml           # Docker Compose setup (optional)
├── jsconfig.json                # JavaScript configuration for path aliases
├── nginx.conf                   # Nginx configuration file for production deployment
├── notes.txt                    # Project notes and todos (optional)
├── package-lock.json            # Exact versions of installed npm packages
├── package.json                 # Project manifest (scripts, dependencies)
├── postcss.config.js            # PostCSS configuration (used by Tailwind)
├── server/                      # Backend server (Express)
│   ├── db/                      # Simple data storage (could be replaced by a DB)
│   │   └── storage.js
│   ├── index.js                 # Express server entry point
│   ├── middlewares.js           # Express custom middlewares (error handling, logging)
│   ├── routes/                  # API route handlers
│   │   ├── index.js             # Entry router
│   │   └── tasks.js             # Task-related API endpoints
│   └── vite.js                  # Vite integration for SSR or static handling
├── shared/                      # Shared code between client and server
│   ├── errors.js                # Centralized AppError class for throwing HTTP errors
│   └── validation-schemas.js    # Joi schemas for request validation
├── tailwind.config.js           # TailwindCSS custom configuration
└── vite.config.js               # Vite project configuration
```

---

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/daggieblanqx/task-tracker.git
   cd task-tracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create your `.env` file**

   ```bash
   PORT=9000
   NODE_ENV=development
   ```

4. **Run the application in development mode**

   ```bash
   npm run dev
   ```

5. **Build frontend for production**

   ```bash
   npm run build
   ```

6. **Run in production mode**

   ```bash
   npm start
   ```

7. **(Optional) Run with Docker**
   - Build the Docker image:
     ```bash
     docker build -t task-tracker .
     ```
   - Run the container:
     ```bash
     npm run docker:up
     ```

---

## 🌐 Environment Behavior

- **Development mode**:

  - Express serves API routes.
  - Vite serves the React frontend with full HMR (Hot Module Reload) support.

- **Production mode**:
  - Express serves the built frontend assets statically.
  - Nginx is optionally used to reverse-proxy and optimize serving.

---

## 📋 Available Scripts

| Script              | Description                                 |
| :------------------ | :------------------------------------------ |
| `npm run dev`       | Start Express + Vite for development        |
| `npm run build`     | Build the frontend (Vite build)             |
| `npm run start`     | Start Express serving static frontend + API |
| `npm run docker:up` | Run Docker container                        |

---

## ⚙️ Notes

- Validation is handled via **centralized Joi schemas**.
- Async errors are managed through a **global error middleware**.
- API requests are logged for easier debugging.
- Docker setup allows for easy deployment.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## ✨ Author

- **Daggie Blanqx**
- **Twitter/X**: https://x.com/daggieblanqx
- **LinkedIn**: https://linkedIn.com/in/daggieblanqx
- **Github**: https://github.com/daggieblanqx

---

## 🚀 Future Improvements

- Add persistent storage using a database (e.g., MySQL over Prisma)
- Add authentication and authorization layers (e.g via middlewares)
- Enhance Docker Compose support for multi-service deployment.

## 🔥 Quick Preview

```bash
# Local server:
http://localhost:9000

# Development frontend (Vite):
http://localhost:5173
```

---
