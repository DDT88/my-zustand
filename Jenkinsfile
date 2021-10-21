pipeline {
 agent { label 'docker' }
    stages {
        stage('Docker nodejs') { 
				agent { 
					docker {
						image 'node:lts-buster-slim' 
					            args '-p 3000:3000 -p 4000:4000 -u root:root --detach' 
					}	
				}
            steps {
		sh 'npm ci'
		sh 'npm run build'
		sh 'npm install -g serve'
		sh 'serve -s build -l 4000' 
            }
        }
}
}
