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
                sh 'npm install -g jasmine'
                sh 'jasmine'
                sh 'node test.js'
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
            echo 'Las pruebas han fallado :('
        }
        success {
            echo 'El despliegue se ha realizado con éxito :).'
        }
    }
}