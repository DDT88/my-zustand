pipeline {
 agent { label 'docker' }
    stages {
        stage('Deploy to docker and run') { 
            steps {
				sh 'docker build . -t nodejs-zumpazumpaue'
				sh 'docker run -d --name zumpazumpaue -p 4000:4000 -d nodejs-zumpazumpaue'
            }
        }
}
}
