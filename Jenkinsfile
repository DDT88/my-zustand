pipeline {
 agent { label 'docker' }
    stages {
        stage('Build docker') { 
            steps {
				sh 'docker build . -t nodejs-zumpazumpaue'
            }
		
        stage('Run Docker') { 
            steps {
		sh 'docker run -h zumpazumpaue --rm --name zumpazumpaue -p 4000:4000 nodejs-zumpazumpaue serve -s build -l 4000'
            }
        }
}
}
