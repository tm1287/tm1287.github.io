# **Multi Account AWS and DevOps Practices**


## Multi Account AWS Environment
As our number of applications increased, our single AWS account started to become increasingly crowded and convoluted. Additionaly more developers were introduced to the AWS environment and started gaining familiarity with operations on AWS. In order to simply management of resources on AWS I decided to create a multi account organization on AWS.

When designing this organizational strategy I wanted to fulfill three main goals. First I wanted the ability to monitor and securly manage accounts and resources within those accounts. Second I wanted to segment accounts by resource type. And finally I wanted the ability the ability to implement the software development lifecycle through identical Dev/Test/Prod environments. I landed on a 7 OU strategy for handling Core account tasks, Security, Infrastructure (SDLC/Prod), Workloads (SDLC/Prod), and Sandbox tasks.

Implementing this strategy was quite easy thanks to AWS Control Tower. Control Tower allowed me to create the OUs listed above and populate each of them with their respective accounts. Control Tower and AWS Organizations also allowed for developers to access any of newly created accounts through authentication and authorization through AWS SSO. Finally Control Tower allowed me to govern each AWS account through the implementation of guardrails. This allowed me to ensure compliance with company policies througout our AWS environment.

## Other DevOps Practices
Once a multi account environment was created, creation and maintenance of AWS resources became increasingly difficult. Additionally there were a lot of repeatable resource patterns present between the SDLC and Prod accounts. This pushed me to start creating and maintaining Infrastructure as Code. In the past, IaC through tools such as Cloudformation or Terraform was difficult due to complexity and steep learning curves. However with the discovery of the AWS Cloud Development Kit (CDK), modeling and deploying infrastructure was incredibly easy.

Since the CDK was available in most programming languages that I was familiar with, the API was extremely easy to use. It also allowed me to harness the power of Cloudformation without having to write raw Cloudformation templates in JSON/YAML. By utilizing stack parameters and CDK context I was also able to replicate SDLC stacks into nearly identical Prod stacks reducing the number of errors arising from configuration differences between environments.

Finally IaC was combined with CI/CD to create a fully managed process for updating infrastructure on AWS. By creating another set of code pipelines, I was able to build and test Cloudformation templates simply by commiting CDK stacks to a private GitHub repository.