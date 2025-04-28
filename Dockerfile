# Stage 1: Build
FROM node:23-slim AS builder

WORKDIR /app

# Force NODE_ENV=development during build
ENV NODE_ENV=development

# Copy package files and install dependencies
COPY package.json ./
RUN npm i

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Runtime
FROM node:23-slim

WORKDIR /app

# Set NODE_ENV=production at runtime
# ENV NODE_ENV=production
ENV NODE_ENV=development

# Copy package files and install dependencies
COPY package.json ./
RUN npm i

# Copy only the built dist folder from builder
COPY --from=builder /app/dist ./dist

# (Optional) If you need env files, uncomment:
# COPY --from=builder /app/.env.production .env

# Expose port 9000
# EXPOSE 9000

# Start the app
CMD ["node", "dist/index.js"]
