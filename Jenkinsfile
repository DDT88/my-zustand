pipeline {
 agent { label 'docker' }
    stages {
        stage('Deploy to docker and run') { 
            steps {
				sh 'docker build . -t nodejs-zumpazumpaue'
				sh 'docker run nodejs-zumpazumpaue'
            }
        }
}
}
