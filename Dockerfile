# Etapa 1: Dependencies
FROM node:22.3.0-alpine AS deps
WORKDIR /app

# Instalar dependencias del sistema necesarias
RUN apk add --no-cache libc6-compat

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./

# Instalar solo dependencias de producción
RUN npm ci --only=production && npm cache clean --force

# Etapa 2: Builder
FROM node:22.3.0-alpine AS builder
WORKDIR /app

# Copiar dependencias desde la etapa anterior
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Instalar todas las dependencias para el build
RUN npm ci

# Build de la aplicación
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Etapa 3: Runner (Producción)
FROM node:22.3.0-alpine AS runner
WORKDIR /app

# Instalar curl para health checks
RUN apk add --no-cache curl

# Crear usuario no-root para seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos necesarios para producción
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Cambiar a usuario no-root
USER nextjs

# Variables de entorno
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3100

EXPOSE 3100

# Usar node directamente para mejor rendimiento
CMD ["node", "server.js"]