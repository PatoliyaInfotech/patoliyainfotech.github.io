---
layout: ubuntu
title: "Basic terminal commands"
---

### ls :

The ls command is used to view the contents of a directory. By default, this command will display the contents of your current working directory.

- ls -R will list all the files in the sub-directories as well
- ls -a will show the hidden files
- ls -l will list all files with permission


### cd :

To navigate through the Linux files and directories, use the cd command. It requires either the full path or the name of the directory, depending on the current working directory that you’re in.

Let’s say you’re in /home/username/Documents and you want to go to Photos, a subdirectory of Documents. To do so, simply type the following command: cd Photos.

- cd .. (with two dots) to move one directory up
- cd to go straight to the home folder


### clear :

Just write `clear` command to clean out the terminal

### mkdir & rmdir :

Use the mkdir command when you need to create a folder or a directory. For example, if you want to make a directory called “DIY”, then you can type “mkdir DIY”. Remember, as told before, if you want to create a directory named “DIY example”, then you can type “mkdir DIY\ example”.

- To generate a new directory inside another directory, use this Linux basic command mkdir Music/Newfile

Use rmdir to delete a directory. But rmdir can only be used to delete an empty directory. To delete a directory containing files, use rm.

```
# To make directory
mkdir DIY

# To remove directory
rmdir DIY

```
### touch :

The touch command is used to create a file. It can be anything, from an empty txt file to an empty zip file. 

```
touch new.txt
```

### cat :

Use the cat command to display the contents of a file. It is usually used to easily view programs.

```
cat new.txt
```

### history :

When you’ve been using Linux for a certain period of time, you’ll quickly notice that you can run hundreds of commands every day. As such, running history command is particularly useful if you want to review the commands you’ve entered before.

```
history
```

### code

Use the code command to open the vscode

```
code
```