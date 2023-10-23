FROM nginx:alpine

# Copia los archivos HTML y CSS a la ubicación adecuada en la imagen
COPY index.html /usr/share/nginx/html
COPY style.css /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar el servidor web (en este caso, nginx)
CMD ["nginx", "-g", "daemon off;"]
