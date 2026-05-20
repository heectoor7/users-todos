FROM node:20-alpine

# Instalamos pnpm globalmente
RUN npm install -g pnpm

WORKDIR /app

# Copiamos los archivos de dependencias
COPY package.json pnpm-lock.yaml* ./

# Instalamos las dependencias
RUN pnpm install

# Copiamos el resto del código
COPY . .

# Construimos el proyecto
RUN pnpm run build

# Exponemos el puerto
EXPOSE 3000

# Arrancamos la app
CMD ["pnpm", "start"]