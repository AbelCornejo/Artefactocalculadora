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
                echo "Etapa BUILD no disponible"
            }
        }
        stage('Test') {
            steps {
                echo "Etapa TEST no disponible"
            }
        }


        stage('Deploy') {
            steps {
                // Crea el directorio de destino en Windows (ajusta la ruta según tus necesidades).
                bat 'mkdir "C:\\JenkinsDeployment"'

                // Copia los archivos al directorio de destino.
                bat 'xcopy /s /y * "C:\\JenkinsDeployment\\"'
    }
}

    post {
        success {
            echo 'El despliegue se ha realizado con éxito.'
        }
    }
}
