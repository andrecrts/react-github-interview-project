pipeline {
    agent { 
     dockerfile{
      args '-p 3000:3000'
     }
    }
    stages {
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm start'
            }
        }
    }
}
