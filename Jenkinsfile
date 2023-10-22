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
                bat 'mkdir "C:\\JenkinsDeployments"'
                bat 'xcopy /s /y * "C:\\JenkinsDeployments\\"'
            }

            post {
                success {
                    echo 'El despliegue se ha realizado con éxito.'
                }
            }
        }
    }
}