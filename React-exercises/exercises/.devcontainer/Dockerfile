# .devcontainer/Dockerfile
FROM node:18

# Uygulama dizinini ayarla
WORKDIR /usr/src/app

# Uygulama bağımlılıklarını yükle
COPY package*.json ./
RUN npm install

# TailwindCSS bağımlılıklarını yükle
RUN npm install -g tailwindcss

# Uygulama dosyalarını kopyala
COPY . .

# Uygulamayı başlat
CMD ["npm", "start"]
