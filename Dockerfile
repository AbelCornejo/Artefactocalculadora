FROM jenkins/jenkins:latest

COPY index.html /var/www/html/
COPY styles.css /var/www/html/

EXPOSE 8091
