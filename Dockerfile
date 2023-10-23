FROM nginx:alpine

# Copia los archivos HTML y CSS a la ubicación adecuada en la imagen
COPY index.html /usr/share/nginx/html
COPY styles.css /usr/share/nginx/html

# Exponer el puerto 8091 en lugar del puerto 80
EXPOSE 8091

# Comando para iniciar el servidor web (en este caso, nginx)
CMD ["nginx", "-g", "daemon off;"]
