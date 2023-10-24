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
                bat 'cd'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                script {
                    try {
                        // Ejecuta tus pruebas
                        bat 'jasmine'
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
                bat 'rmdir /s /q "C:\\JenkinsDeployments"'
                bat 'mkdir "C:\\JenkinsDeployments"'
                bat 'xcopy /s /y * "C:\\JenkinsDeployments\\"'
            }
        }
    }


}
