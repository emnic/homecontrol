def url = "https://github.com/emnic/homecontrol.git"
def jobName = 'GUI_Test'

job(jobName) {
    scm {
        git(url)
    }
    steps {
        shell("cd app && docker-compose up")
    }
    triggers {
        upstream('emnic-homecontrol-master', 'SUCCESS')
    }
}
