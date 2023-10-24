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
                // Agrega comandos para construir tu proyecto
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                script {
                    try {
                        // Ejecuta tus pruebas
                        sh 'jasmine'
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error('Las pruebas han fallado :(')
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Agrega comandos para implementar tu proyecto
                sh 'rmdir /s /q "C:\\JenkinsDeployments"'
                sh 'mkdir "C:\\JenkinsDeployments"'
                sh 'xcopy /s /y * "C:\\JenkinsDeployments\\"'
            }
        }
    }

    post {
        failure {
            script {
                currentBuild.result = 'FAILURE'
            }
        }
    }
}
