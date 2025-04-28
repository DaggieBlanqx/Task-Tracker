# 🗂️ Task Tracker

At the surface, this looks like any other To-Do app.  
Trust me, it is not.  
In fact, it has nothing to do with task tracking or to-dos.  
It is a demo.  
It is a quest to break Vite, React, Express and try to bind them neatly.

<details open>
<summary>📚 Table of Contents</summary>

- [The Real Story: Why I Built This](#-the-real-story-why-i-built-this)
- [A Call to Arms](#-a-call-to-arms)
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

## 📖 The Real Story: Why I Built This

It started with freedom, the cornerstone of JavaScript.  
Meta and React put real weapons in the hands of developers.  
No limits. No suits. Just pure opportunity.

Then the decline began.  
Create-React-App? Abandoned ship. Dead weight. Leaderless. Forgotten.  
Vercel and Next.js swooped in, cleaned up the mess, but at a price:  
They gave you order. They took your freedom.

We played along.  
Next.js made sense when all you needed was pages and SSR for marketing and SEO.  
And listen, no disrespect. In fact, reverence, I’ve used it in production. A lot.  
It works if you enjoy moving within someone else's walls.

But when you're building systems where APIs are the core?  
It turns into quicksand. Clunky. Frustrating.  
And me?  
I don't do bottlenecks.  
I don't do handcuffs. Ahem, well, not this kind of handcuffs.

I build for speed. I build for power. I build for control.

Pure React stayed pure.  
Client-side rendering with Vite? Smooth like a well-oiled machine.  
Those of us who lived through the fall of CRA look at Vite and we nod ; ) that's how it’s done.

And ExpressJS?  
Express stayed cold-blooded.  
Lean. Brutal. Merciless in its simplicity.  
It doesn’t hold your hand. It hands you the keys and says, drive or crash. Your call.

Both ExpressJS and Vite do right, to a fault.

For too long, we bought into a broken game:  
React up front. Express way out back.  
Or worse, we drank the Next.js Kool-Aid and called it fullstack.  
What did it get us?  
Twice the setup. Twice the bloat. Half the speed.

Why?

I built Task Tracker to help me answer a better question:  
What if we cut the crap?  
What if React and Express ran together: same project, same heartbeat, no wasted motion?

No more middlemen.  
No more excuses.

Vite runs the frontend.  
Express runs the backend.  
One machine. One pipeline. One beat.

And why stop there?  
Tailwind for speed.  
ShadCN for elegance.  
Docker for fortification.  
Nginx as the iron gate.

This isn't a to-do app.  
This is a war plan for builders who refuse to lose.  
Proof that freedom, speed, and power can sit at the same table if you're hungry enough to fight for it.

This isn’t another framework.  
It’s not another flavor of handcuffs.  
This is a declaration:

You want real control again? Build it.

You want speed without permission? Take it.

You want power? Earn it.

It’s time to stop pretending Next.js is still the future.  
Time to stop splitting React and Express like they’re strangers on opposite sides of a battlefield.

## 📢 A Call to Arms

This is a call for builders.  
Not talkers. Builders.

Take this idea. Tear it apart.  
Rebuild it better. Stronger. Meaner.  
Make this project look like a toy when you’re done.

Let this be the firestarter.  
Let it be the lamp we smash when daylight breaks.  
Outbuild it. Outscale it. Outlast it.

The mission is clear:  
Keep React light and lethal.  
Make SSR a switch, not a straitjacket.  
Stay Express-native, minimalist, raw.  
Keep APIs tight. Fast. Sharp.

Kill the noise. Keep the power.

Back to the roots.  
Back to building like we’re here to own the game, not just play in it.

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

- **Express.js** : Backend server and API routing
- **Vite** : Fast frontend build tool
- **React** : Frontend UI library
- **Shadcn UI** : Accessible, flexible UI components
- **TailwindCSS** : Utility-first CSS framework
- **Dotenv** : Environment variable management
- **Joi** : Request validation schemas
- **Docker** : Application containerization
- **Nginx** : Production-grade reverse proxy
- **Custom Middlewares** : Async error handling, request logging, validation

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
