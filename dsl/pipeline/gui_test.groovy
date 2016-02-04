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
        shell("cd app && docker-compose up -d")
        shell("cd ../test && docker run --rm -v `pwd`:/project caltha/protractor")
    }
}
