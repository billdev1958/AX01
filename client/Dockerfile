FROM node:20-alpine3.17 AS app

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia package.json y package-lock.json al directorio de trabajo
COPY . . 

# Instala las dependencias
RUN npm install


# Construye la aplicación React para producción
RUN npm run build

# Usa la imagen oficial de Nginx
FROM nginx:alpine

# Copia los archivos construidos de la aplicación React
COPY --from=app  ./app/build /usr/share/nginx/html

# Copia la configuración de Nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx cuando el contenedor se ejecute
CMD ["nginx", "-g", "daemon off;"]
