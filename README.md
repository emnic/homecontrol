#homecontrol

This is a project about controling your electical devices at home either with your mobile device or a website. 

The setup is a node js based backend ,node express, with a Mongodb database. On the front end Angular JS is used. In other words the enitre MEAN stack is used.

To control the devices a tellstick duo is used with a java script lib to control the devices.

##Setup environment (linux)

###Install Virtualbox
This is not necessary but nice to have a clean development environment.

1. Download and install virtual box "https://www.virtualbox.org/wiki/Downloads"
2. Install gues additon to make it possible to have larger screen resolution.

###Install Ubuntu on the virtual machine
1. Download and install ubuntu on the virtual machine: "http://www.ubuntu.com/download/desktop/". I used the "Ubuntu 14.04.2 LTS" release
2. Start Ubuntu and open a terminal by pressing Ctrl + Alt + T.

###Install mongodb
1. sudo apt-get install mongodb
2. sudo service mongodb start (to check if it's working)

###Install node js and its package manager npm
1. sudo apt-get update
2. sudo apt-get install nodejs
3. sudo apt-get install npm

###Install git on Ubuntu
1. sudo apt-get update
2. sudo apt-get install git

###Get source code of homecontrol project
1. Navigate to the directory where you want to save the homecontrol code.
2. Type "git clone https://github.com/emnic/homecontrol.git"

###Install all dependencies in for the homecontrol project
1. Navigate to the "homecontrol" directory
2. Type npm install (this will install all libraries in the package.josn file)

###Start the webserver
1. Navigate to the homecontrol folder
2. Type: "DEBUG=homecontrol ./bin/www"

###Run tests
1. Navigate to the test folder and type: "../node_modules/cucumber/bin/cucumber.js"
