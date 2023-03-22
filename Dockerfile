# ＝＝＝for nextjs standalone===
FROM public.ecr.aws/docker/library/node:19.6.0-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production 
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn prisma:generate && yarn build

FROM public.ecr.aws/docker/library/node:19.6.0-alpine AS runner
WORKDIR /app
RUN apk update
RUN apk add --no-cache curl
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/newrelic.js ./


COPY --from=builder /app/.next/standalone ./
RUN yarn add @newrelic/next
# CMD ["node", "server.js"]
CMD ["node", "-r", "@newrelic/next", "server.js"]


# # ＝＝＝for express server＝＝＝
# FROM public.ecr.aws/docker/library/node:19.6.0-alpine AS runner
# WORKDIR /app
# RUN apk update
# RUN apk add --no-cache curl
# ENV NODE_ENV=production 
# COPY . .
# RUN yarn install --frozen-lockfile
# RUN yarn prisma:generate && yarn build

# CMD ["yarn", "express:start"]
