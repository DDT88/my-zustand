pipeline {
 agent { label 'docker' }
    stages {
        stage('Deploy to docker and run') { 
            steps {
				sh 'docker build . -t nodejs-zumpazumpaue'
				sh 'docker run -d nodejs-zumpazumpaue --name zumpazumpaue -p 4000:4000' 
            }
        }
}
}
