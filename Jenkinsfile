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
                sh 'npm install -g jasmine'
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                sh 'jasmine'
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
            script{
                currentBuild.result = 'FAILURE'
                error('Las pruebas han fallado :(')
            }
        }
        success {
            echo 'El despliegue se ha realizado con éxito :).'
        }
    }
}