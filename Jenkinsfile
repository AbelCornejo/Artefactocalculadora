pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Aquí puedes realizar acciones específicas de construcción si es necesario.
                // En tu caso, como solo tienes archivos HTML y CSS, es posible que no necesites nada aquí.
            }
        }

        stage('Deploy') {
            steps {
                // Copia los archivos HTML y CSS al directorio de despliegue.
                sh 'mkdir -p /var/www/html'  // Asegúrate de especificar la ubicación correcta.
                sh 'cp -r * /var/www/html/'  // Copia todos los archivos al directorio de despliegue.
            }
        }
    }

    post {
        success {
            echo 'El despliegue se ha realizado con éxito.'
        }
    }
}
