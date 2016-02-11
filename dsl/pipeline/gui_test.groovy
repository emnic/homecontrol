def url = "https://github.com/emnic/homecontrol.git"
def jobName = 'GUI_Test'

job(jobName) {
    scm {
        git(url)
    }
    triggers {
        upstream('emnic-homecontrol-master', 'SUCCESS')
    }
    steps {
        shell("cd app && docker-compose up -d && APP_IP=$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' app_web_1)")
        shell("cd test && docker build -t testrunner && docker run -e APP_IP=$APP_IP -rm testrunner")
    }
}
