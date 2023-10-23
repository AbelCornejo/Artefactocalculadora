FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia tu package.json y package-lock.json (si tienes uno)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de tu aplicación
COPY index.js /app

# Expone el puerto (si es necesario)
EXPOSE 8091

# Comando para iniciar tu aplicación
CMD ["npm", "start"]
