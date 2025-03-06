<div align="center">

# 🚀 Node.js TypeScript Starter

**A Template for Modern Backend With NodeJS and Typescript With ESlint Setup**

[![Node.js CI](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)](https://github.com/amir18160/node-typescript-starter/actions)

</div>

## 🌟 Features

- **Beginner Friendly** 🙂
  - Everything is Clear For You if You are in Learning Stage
- **Developer Experience** 🛠️
  - ESLint + Prettier setup
  - Typescript setup 
  - Babel Setup
  - gitattributes and gitignore fully setup
- **Skip Redundancy** ☹
  - No Mood for Creating a New Project? No Worries

## 🛠️ Tech Stack

| Category    | Technologies                                             |
| ----------- | -------------------------------------------------------- |
| **Core**    | Node.js 18+, TypeScript 5.x, ESLint 8.x                  |
| **ESLint**  | airbnb-base, airbnb-typescript, typescript-eslint & more |
| **Tooling** | ESLint, PM2, Prettier, Editorconfig, Babel               |

## ⚡ Quick Start

```bash
# Clone repository
git clone https://github.com/amir18160/node-typescript-starter.git
cd node-typescript-starter

# Install dependencies
npm install

```

### Running Modes

| Command         | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Development mode (watch reload) |
| `npm start`     | Production mode (PM2 cluster)   |
| `npm run build` | Build Production Grade Files    |

## 🚀 Deployment

### Docker Setup

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
EXPOSE 3000 | Your Port

CMD ["npm", "start"]
```

```bash
# Build image
docker build -t app-server .

# Run container
docker run -p 3000:3000 --env-file .env app-server
```

## 🤝 Contributing

Im New To This, So I Don't Know About This Really.

## 📜 License

No License, Do Whatever You Want.

## 📬 Contact

**Amir Hoori** - [@Raptor1888](https://t.me/raptor1888) - <amirhosseinhoori@gmail.com>

Project Link: [https://github.com/amir18160/node-typescript-starter](https://github.com/amir18160/node-typescript-starter)

---

<div align="center">

</div>
