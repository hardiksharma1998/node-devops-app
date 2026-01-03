pipeline {
    agent any

    options {
        skipDefaultCheckout()
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/hardiksharma1998/node-devops-app.git',
                    credentialsId: 'd2545067-fea9-4300-b56c-f01049d15fe3'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || true'
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
