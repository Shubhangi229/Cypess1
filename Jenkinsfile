pipeline{
    agent any
    parameters{
        string(name:"SPEC", defaultValue:"cypress/integration/**/**",description:"Enter the script")
        choice(name:'BROWSER',choices:['chrome','edge','firefox'],description:"choice the browser")
    }
    // options{
    //     ansiColor("xtrem")
    // }
    stages{
        stage('Building'){
             steps{
                  echo "Building the application"
             }
          
        }
        stage('Testing'){
            steps{
                bat "npm i init"
                bat "npm install cypress --save-dev"
                bat "node_modules\\.bin\\cypress run"
                bat "npx cypress run --browser $BROWSER --spec $SPEC"
            }
        }
        stage('Deploying'){
            steps{
            echo "Deploying the application"
            }
        }
    }
}