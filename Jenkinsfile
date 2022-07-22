pipeline{
    agent any
    parameters{
        string(name:"SPEC", defaultValue:"cypress/integration/**/**",description:"Enter the script")
        choice(name:'BROWSER',["chrome","edge","firefox"],description:"choice the browser")
    }
    options{
        ansiColor("xtrem")
    }
    stages{
        stage('Building'){
             steps{
                  echo "Building the application"
             }
          
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser $(BROWSER) --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            echo "Deploying the application"
        }
    }
}