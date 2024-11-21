# session-04-cloud

## Examples - Spends Dor Alteresku

### Option 1 - use CloudRun (recomended)

[Full guide here](https://cloud.google.com/run/docs/deploying)

### Option 2 - use VM Instance

- connect to the vm via SSH
- install the required packages
  - git [source](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-20-04)
    ```shell
    sudo apt install git
    ```
  - Nodejs - [source](https://nodejs.org/en/download/package-manager)
- clone the repo
  ```shell
  git clone https://github.com/doralteres/session-04-cloud.git
  ```
- Install project dependncies
  ```shell
  cd session-04-cloud/example-01-simple-api
  npm install
  npm run ui:build
  ```
- Start server on port 80
  ```shell
  sudo PORT=80 npm start
  ```
