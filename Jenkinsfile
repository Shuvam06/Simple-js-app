pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Shuvam06/Simple-js-app'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
            }
        }
        stage('Deploy') {
            steps {
                withAWS(credentials: 'aws-credentials') {
                    sh 'aws deploy create-deployment \
                        --application-name Simple-js-app \
                        --deployment-group-name simple-js-app \
                        --s3-location bucket=my-app-deployment-bucket,key=app.zip,bundleType=zip'
                }
            }
        }
    }
}







































