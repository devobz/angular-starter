pipeline {
  agent any
  stages {
    stage('test') {
      parallel {
        stage('test') {
          steps {
            sh 'echo \'test\''
          }
        }

        stage('') {
          steps {
            echo 'test2'
          }
        }

      }
    }

    stage('') {
      steps {
        echo 'test3'
      }
    }

  }
}