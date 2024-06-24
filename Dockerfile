FROM oven/bun:1-alpine as build

WORKDIR /app
COPY . /app

RUN bun install && bun run build

FROM oven/bun:1-slim

WORKDIR /app
COPY --from=build /app/.output ./

EXPOSE 3000

ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production

CMD ["bun","/app/server/index.mjs"]