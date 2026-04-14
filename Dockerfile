# Install deps
FROM node:20-slim AS deps
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev

# Final minimal runtime
FROM gcr.io/distroless/nodejs20
WORKDIR /app
COPY --from=deps /app .
COPY index.js .

CMD ["index.js"]
