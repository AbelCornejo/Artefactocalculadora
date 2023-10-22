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
                echo "Etapa BUILD no disponible"
            }
        }
        stage('Test') {
            steps {
                echo "Etapa TEST no disponible"
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
