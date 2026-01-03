pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/hardiksharma1998/node-devops-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-devops-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker rm -f node-app || true
                docker run -d -p 3000:3000 --name node-app node-devops-app
                '''
            }
        }
    }
}
