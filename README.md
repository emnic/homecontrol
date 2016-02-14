# Homecontrol + Continuous Delivery 

A complete continuous delivery environment using Jenkins and Job DSL. Jenkins is setup and runs in a Docker Container

## Getting started
### Prerequisites
The only thing that needs to be installed on the host computer is Docker and Docker-Compose.
- **Windows** Navigate to https://www.docker.com/products/docker-toolbox and download the software for your OS and follow the guide to install it.
- **Linux** TODO

### Setup and start Jenkins
1. Open the Docker Quickstart Terminal
2. Dowload this project
3. Navigate into the project and type "./setup.sh"

This will automatically start Jenkins in a Docker container, download and install all plugins specifed in "jenkins/plugins.txt".
Jenkins GUI should now be accessible in a browser at the following URL: "0.0.0.0:8080". (It might take a minute before everything is up and running)

### Configure Jenkins 
In Jenkins: Navigate to "Manage Jenkins" and then "Configure System". Scroll down to the Github plugin and input username and email. 

### Run seed job
Now it's time to run the "seed" job. This will produce all Jenkins jobs that are specified in the DSL folder. When the seed job is done there should now be a couple of other jobs available in the GUI
