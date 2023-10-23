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
                bat 'npm install'
                bat 'npm install -g jasmine'
            }
        }
        
        stage('Test') {
            steps {
                bat 'jasmine'
            }
        }

        stage('Deploy') {
            steps {
                bat 'rmdir /s /q "C:\\JenkinsDeployments"'
                bat 'mkdir "C:\\JenkinsDeployments"'
                bat 'xcopy /s /y * "C:\\JenkinsDeployments\\"'
            }
        }
        stage('Notify Calculator') {
             steps {
                script {
                    def response = httpRequest(
                        httpMode: 'POST',
                        url: 'http://localhost:8091/setStatus',
                        requestBody: '{"status": "FAILURE"}', // JSON válido con el estado que deseas enviar
                        contentType: 'APPLICATION_JSON'
                    )
                    if (response.status != 200) {
                        error('Failed to notify the calculator')
            }
        }
    }
}


    }
    post {
        failure {
            script {
                currentBuild.result = 'FAILURE'
                error('Las pruebas han fallado :(')
            }
        }
        success {
            echo 'El despliegue se ha realizado con éxito :).'
        }
    }
}