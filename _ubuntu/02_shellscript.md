---
layout: ubuntu
title: "Shell script"
---

#### How to create and run a shell script in ubuntu

1. Open default “Text Editor” through the menu bar
2. Copy the script from the **[Here](https://github.com/PatoliyaInfotech/quick-setup/blob/master/ubuntu/20-ubuntu/20-desktop-software-install-ubuntu.sh)** and paste into text editor
3. Save it with the extension “.sh”
4. Execute the shell script “name.sh” through CLI
   1. First, you have to make the shell script executable by running the following command: 
   ```
   chmod +x name.sh
   ```
    - Write your shell script name in place of “name.sh” in the above command. 
   2. Run the script using the following command:
    ```
    ./scriptname
    ```


#### How to generate ssh key in ubuntu

- Generate ssh key using the command 
   ```
      ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

- Copy the content of public key using the command 
   ```
      cat ~/.ssh/id_rsa.pub
   ```
   - id_rsa.pub is your file name which you entered while generating the ssh key 
   - if file not found then it's available inside home directory 
- There is one more way to copy the public key 
   1. Go the the .ssh folder 
   2. Open the id_rsa.pub file in text editor 
   3. Copy the content from it

