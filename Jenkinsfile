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
                script {
                    // Ejecuta tus pruebas y verifica si fallan
                    def testResult = bat script: 'jasmine', returnStatus: true
                    if (testResult != 0) {
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                bat 'rmdir /s /q "C:\\JenkinsDeployments"'
                bat 'mkdir "C:\\JenkinsDeployments"'
                bat 'xcopy /s /y * "C:\\JenkinsDeployments\\"'
            }
        }
    }

    post {
        failure {
            script {
                currentBuild.result = 'FAILURE'
            }
        }

        success {
            script {
                // Establece el estado de la calculadora según el resultado del flujo de trabajo
                if (currentBuild.resultIsBetterOrEqualTo('FAILURE')) {
                    sh 'curl -X POST http://localhost:8091/setStatus -d "status=FAILURE"'
                }
            }
        }
    }
}
