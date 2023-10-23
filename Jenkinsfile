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
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm install jasmine'
                sh 'node test.js'
            }
        }

        stage('Deploy') {
            steps {
                bat 'rmdir /s /q "C:\\JenkinsDeployments"'
                bat 'mkdir "C:\\JenkinsDeployments"'
                bat 'xcopy /s /y * "C:\\JenkinsDeployments\\"'
            }

            post {
                success {
                    echo 'El despliegue se ha realizado con éxito :).'
                }
                failure {
                    echo 'El despliegue ha fallado :('
                }
            }
        }
    }
}