# aws-lambda-container-support

## NodeJS  : Prerequisites
 - NodeJS/NPM
 - Docker

#### NodeJS :  How to pack the application code

1) Prepare the app code (ex : app.js)
2) Add Dockerfile
3) docker build -t aws-container-nodejs-hello .
4) docker run -p 9000:8080 aws-container-nodejs-hello


#### Pushing to Container Registry ( ECR )
 Prerequisites: 
  - aws CLI
  - docker
  - aws credentials configured
  - aws account id ( aws sts get-caller-identity  )
  - proper region set in ecr url / permissions

aws ecr create-repository --repository-name aws-container-nodejs-hello --image-scanning-configuration scanOnPush=true
docker tag aws-container--nodejs-hello:latest <aws_account_id>.dkr.ecr.<region>.amazonaws.com/aws-container-nodejs-hello:latest 
aws ecr get-login-password | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/aws-container-nodejs-hello:latest


##### Test the docker container locally  : 

curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'


##### Possible errors : 

"no basic auth credentials" during ECR push means wrong region in login or push command or wrong combination of both



Creating Lambda function with container support : 

Read article on Medium
Links : 

https://docs.aws.amazon.com/AmazonECR/latest/userguide/common-errors-docker.html