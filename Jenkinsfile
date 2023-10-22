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
                
                bat 'mkdir "C:\\JenkinsDeployment"'
                bat 'xcopy /s /y * "C:\\JenkinsDeployment\\"'
    }
}

    post {
        success {
            echo 'El despliegue se ha realizado con éxito.'
        }
    }
 }   
}