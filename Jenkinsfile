pipeline {
    agent any

    options {
        skipDefaultCheckout()      // avoid double checkout
        timestamps()               // useful logs
    }

    environment {
        IMAGE_NAME = "node-devops-app"
        CONTAINER_NAME = "node-app"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/hardiksharma1998/node-devops-app.git'
            }
        }

        stage('Docker Health Check') {
            steps {
                sh '''
                docker --version
                docker info > /dev/null
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker rm -f $CONTAINER_NAME || true
                docker run -d \
                  --name $CONTAINER_NAME \
                  -p 3000:3000 \
                  $IMAGE_NAME
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful. App running on port 3000"
        }
        failure {
            echo "❌ Build failed. Check logs."
        }
    }
}
