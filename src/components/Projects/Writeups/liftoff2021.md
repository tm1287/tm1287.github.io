# **Liftoff 2021: A Programming and AI Competition**


## Competition Overview

Liftoff 2021 is the inaugural programming and AI competition hosted by the Scholastic Artificial Intelligence League Inc. (SAILea). The competition consists of two rounds in which competitors compete against each other.

In the AI round, competitors are given a N-player game and must program AIs to play the game against other competitors' AIs. Depending on the AI's performance, the team is awarded an ELO rating which is updated as each AI plays against each other.

In the Optimization round, competitors are tasked with finding the most optimal solution for a given situation. Players submit their solution which is validated and graded against other players' submissions contributing to their teams' scores.

## Competition Website
My first task involved the design and creation of the Liftoff 2021 website. I achieved this using React and the Ant Design UI Toolkit. This website features a landing page, a competition dashboard, various information pages, and fully featured authentication backed by Amazon Cognito.

## AWS

### Hosting
I decided to host this frontend application through deployment onto a fleet of EC2 instances within an autoscaling group. Requests are balanced to this ASG through an Application Load Balancer which also provides SSL termination and metrics for autoscaling. Each EC2 instance is running an Nginx webserver responsible for serving the React webapp to users.

### API
For this project I decided to use a GraphQL API as opposed to a traditional REST API. This was done in order to avoid having to write lambda functions to back API Gateway methods while simultaneously allowing for specialized queries and mutations. This GraphQL API was built using AWS AppSync, allowing us to natively query data sources ranging from RDS to DynamoDB to S3.

Authentication for this API was provided through Cognito User Pool integration. Users would authenticate with Cognito using the frontend application granting access to the API and related datasources.

### DB
DynamoDB was chosen for this application solely due to its stature as a fully managed service. The data for this application was very simple and did not warrant the need (or complexity) of a RDBMS. An added benefit was DynamoDB's integration with AWS AppSync through DynamoDB VTL resolvers.

### Handling the AI Round
In order to grant functionality for the AI round, users must be able to submit a code file (written in python) and have it run against other player submissions. To enable this functionality I decided to orchestrate AI submissions in a containerized environment. Due to my familiarity with Amazon ECS and AWS Fargate, I decided to implement a solution using these services.

When users submit their AI code files, submissions are stored in S3. Periodically, an ECS service accumulates and groups submissions by appropriate skill level. The ECS service then generates Fargate Task Definitions for each of these groupings and runs these tasks on a Fargate cluster. This is equivilant to simulating a game with submitted AIs. Once each task finished, the results are aggregated and each team's ranking is adjusted accordingly.

By containerizing this solution, a barebones python based image can be stored in ECR and Fargate task definitions can be easily created upon this image with modular AI submissions.

### Handling the Optimization Round
The Optimization round differs from the AI round because players submit their solution to the problem rather than code that generates a solution. Not only does this simplify our grading mechanism but it also allows greater flexibility for how players choose to solve the problem. Since players solely submit solutions to a problem, the solutions only need to be validated and scored.

To validate and score these submissions, AWS Lambda is used. Submissions are stored in S3 and are fed, using a decoupling mechanism (SNS/SQS), to AWS Lambda. Each problem has a unique Lambda Function grader and upon validation and grading, updates the player's standing in DynamoDB.

### DevOps
In order to keep this infrastructure documented and maintanable, the entire infrastructure is modeled through multiple Cloud Development Kit (CDK) stacks.
Additionally CDK and frontend code is deployed and tested through CI/CD pipeline. AWS Codepipeline was used to build, test, and deploy CDK cloudformation templates to AWS and React code to the aformentioned autoscaling group.