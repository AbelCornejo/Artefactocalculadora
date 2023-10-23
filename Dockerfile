FROM jenkins/jenkins:latest

# Instala un servidor web, en este caso nginx
RUN apt-get update && apt-get install -y nginx

# Copia tus archivos HTML y CSS al directorio de nginx
COPY index.html /var/www/html/
COPY styles.css /var/www/html/

# Exponer el puerto 8091 en lugar del puerto 80
EXPOSE 8091

# Inicia el servidor nginx
CMD ["nginx", "-g", "daemon off;"]
