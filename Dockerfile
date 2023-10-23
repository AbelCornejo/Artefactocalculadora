FROM jenkins/jenkins:latest

USER root

# Instala Nginx
RUN apt-get update && apt-get install -y nginx

# Copia tus archivos HTML y CSS al directorio de Nginx
COPY index.html /var/www/html/
COPY styles.css /var/www/html/

# Exponer el puerto 8091
EXPOSE 8091

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
