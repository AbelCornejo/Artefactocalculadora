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
                    def testResult = bat(script: 'jasmine', returnStatus: true)
                    if (testResult != 0) {
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }

        stage('Deploycito') {
            steps {
                bat 'rmdir /s /q "C:\\JenkinsDeployments"'
                bat 'mkdir "C:\\JenkinsDeployments"'
                bat 'xcopy /s /y * "C:\\JenkinsasdasdadDeployments\\"'
            }
        }
    }

    post {
        failure {
            script {
                currentBuild.result = 'FAILURE'
                // Notificar sobre el fallo
                emailext(
                    subject: "Error en el flujo de trabajo de Jenkins",
                    body: "El flujo de trabajo de Jenkins ha fallado debido a errores en las pruebas Jasmine.",
                    to: "tu_correo@ejemplo.com",
                )
            }
        }

        success {
            script {
                // Establece el estado de la calculadora según el resultado del flujo de trabajo
                if (currentBuild.resultIsBetterOrEqualTo('FAILURE')) {
                    bat 'curl -X POST http://localhost:8091/setStatus -d "status=FAILURE"'
                }
            }
        }
    }
}
