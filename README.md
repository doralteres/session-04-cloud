# session-04-cloud

## Examples - Spends Dor Alteresku

### Option 1 - use CloudRun (recomended)

[Full guide here](https://cloud.google.com/run/docs/deploying)

### Option 2 - use VM Instance

- connect to the vm via SSH
- install the required packages
  - Nodejs - [source](https://github.com/nodesource/distributions)
    ```shell
    sudo apt-get update
    sudo apt-get install -y ca-certificates curl gnupg
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo  gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
    ```
    ```
    NODE_MAJOR=20
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
    ```
    ```
    sudo apt-get update
    sudo apt-get install nodejs -y
    ```
  - yarn - [source](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
    ```shell
    sudo npm install --global yarn
    ```
  - git [source](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-20-04)
    ```shell
    sudo apt install git
    ```
- clone the repo
  ```shell
  git clone https://github.com/doralteres/session-04-cloud.git
  ```
- Install project dependncies
  ```shell
  cd session-04-cloud/example-01-simple-api
  yarn
  yarn ui:build
  ```
- Start server on port 80
  ```shell
  sudo PORT=80 yarn start
  ```
