# GitHub Actions: Push-to-EC2 Deployment Workflow

This GitHub Actions workflow automates the deployment of your application to an AWS EC2 instance whenever changes are pushed to the `master` branch.

### Creating a Workflow YAML File

Create a new file, e.g., deploy.yml inside the .github/workflows/ directory.

The filename can be anything descriptive of the workflow.

```yaml title="deploy.yml"
name: Push to EC2 on Master Branch Push

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout the files
        uses: actions/checkout@v4

      - name: Move the master branch code to the target directory on the SSH server
        uses: easingthemes/ssh-deploy@main
        env:
          REMOTE_HOST: ${{ secrets.SSH_HOST }}
          REMOTE_USER: ${{ secrets.SSH_USER }}
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          TARGET: ${{ secrets.SSH_TARGET_DIR }}

      - name: Execute commands on the SSH server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd ${{ secrets.SSH_TARGET_DIR }}
            docker compose down
            docker compose build
            docker compose up -d
```

## Workflow Breakdown

### 1. Trigger the Workflow
```yaml
name: Push to EC2 on Master Branch Push

on:
  push:
    branches:
      - master
```
- **name: Push-to-EC2** - This defines the name of the GitHub Actions workflow.
- This workflow **runs automatically** when changes are pushed to the `master` branch.
- Ensures that deployments only happen on production-ready code.

### 2. Define a Job: `deploy`
- The deployment job runs on an **Ubuntu machine** provided by GitHub.

### 3. Steps in the Deployment

#### **Step 1: Checkout the Repository**
```yaml
- name: Checkout the files
  uses: actions/checkout@v4
```
- This step pulls the latest code from the repository into the GitHub Actions runner.

#### **Step 2: Deploy the Code to EC2**
```yaml
- name: Move the master branch code to the target directory on the SSH server
  uses: easingthemes/ssh-deploy@main
  env:
    REMOTE_HOST: ${{ secrets.SSH_HOST }}
    REMOTE_USER: ${{ secrets.SSH_USER }}
    SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
    TARGET: ${{ secrets.SSH_TARGET_DIR }}
```
- Uses `ssh-deploy` action to **copy the repository files** to the EC2 instance.
- Uses **GitHub Secrets** to securely store SSH credentials and deployment target details.

#### **Step 3: Restart the Docker Containers on EC2**
```yaml
- name: Execute commands on the SSH server
  uses: appleboy/ssh-action@master
  with:
    host: ${{ secrets.SSH_HOST }}
    username: ${{ secrets.SSH_USER }}
    key: ${{ secrets.SSH_PRIVATE_KEY }}
    script: |
      cd ${{ secrets.SSH_TARGET_DIR }}
      docker compose down
      docker compose build
      docker compose up -d
```
- Logs into the EC2 instance via SSH.
- Navigates to the deployment directory.
- Stops running containers (`docker compose down`).
- Rebuilds the application (`docker compose build`).
- Starts the new containers in detached mode (`docker compose up -d`).

## Summary

This workflow ensures that each time you push code to the `master` branch:

1. The latest code is copied to your EC2 instance.
2. Docker containers are restarted with the updated code.
3. The application is automatically redeployed with minimal downtime.

This automation streamlines the deployment process and ensures consistency in your deployments.

