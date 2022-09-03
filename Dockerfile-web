FROM node:16-alpine as server-builder

WORKDIR /app

COPY . .
RUN --mount=type=cache,target=/app/.yarn/cache \
    npx turbo prune --scope=@me/application-a && \
    cp -R .yarn .yarnrc.yml tsconfig.json out/ && \
    cd out && \
    yarn install && \
    yarn turbo run build --filter=@me/application-a && \
    yarn workspaces focus --all --production && \
    rm -rf node_modules/.cache .yarn/cache applications/application-a/.next/cache


FROM node:16-alpine as app

ENV NODE_ENV=production
WORKDIR /app
COPY --chown=node:node --from=server-builder /app/out .

WORKDIR /app/applications/web-server
USER 1000

CMD ["yarn", "start"]