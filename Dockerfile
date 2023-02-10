FROM node:18.3.0-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production 
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:18.3.0-alpine AS runner
WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# COPY package.json ./
# COPY yarn.lock ./
# RUN yarn install --frozen-lockfile --production=true
# CMD ["yarn", "start"]

COPY --from=builder /app/.next/standalone ./
CMD ["node", "server.js"]