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
                bat 'rmdir /s /q "C:\\JenkinsDeployments........a"'
                bat 'mkdir "C:\\JenkinsDeployments"'
                bat 'xcopy /s /y * "C:\\JenkinsDeployments\\"'
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