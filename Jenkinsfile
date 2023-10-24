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
                script {
                    try {
                        // Agrega comandos para construir tu proyecto
                        // En lugar de 'npm install', simplemente ejecuta el archivo Node.js
                        bat 'taskkill /F /IM node.exe'
                        bat 'node index.js' 
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error('Error en la etapa de construcción :(')
                    }
                }
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
