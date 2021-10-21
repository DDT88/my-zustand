pipeline {
 agent { label 'docker' }
    stages {
        stage('Docker nodejs') { 
				agent { 
					docker {
						image 'node:lts-buster-slim' 
					            args '-p 3000:3000 -u root:root' 
					}	
				}
            steps {
		sh 'npm ci'
		sh 'npm run build'
                sh 'npm install' 
            }
        }
}
}
