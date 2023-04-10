---
layout: php
title: "Upgrade phpMyAdmin Version"
---

# How to Manually Upgrade phpMyAdmin on Ubuntu

phpMyAdmin installation via Apt package manager create multiple directories:

- /etc/phpmyadmin – Configuration files
- /var/lib/phpmyadmin – Library and tmp directries
- /usr/share/phpmyadmin – Main phpMyAdmin installation

## Step 1 – Backup phpMyAdmin

You should take a back up of your current phpMyAdmin directory. However, I have just renamed it to phpmyadmin.bak at the same location.

## Step 2 – Download Latest phpMyAdmin

Now, download the latest phpMyAdmin archive file from its [official download page](https://www.phpmyadmin.net/downloads/). During last update of this article phpMyAdmin 4.8.5 is latest version available for download.

```
    wget www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip
    unzip phpMyAdmin-latest-all-languages.zip
```

You will see a directory phpMyAdmin-[VERSION]-all-languages in the current location. Move this latest directory to the appropriate location.

```
    sudo mkdir /usr/share/phpmyadmin
    sudo mv phpMyAdmin-*/* /usr/share/phpmyadmin/
```

## Step 3 – Update Configuration

As I told the existing phpMyAdmin was installed with Apt package manager. Therefore you need to specify the **TEMP_DIR** and **CONFIG_DIR** location under the vendor_config.php file.

Edit **vendor_config.php** file in your favorite text editor

```
    sudo vim /usr/share/phpmyadmin/libraries/vendor_config.php
```

and update the following values.

```
    define('TEMP_DIR', '/var/lib/phpmyadmin/tmp/');
    define('CONFIG_DIR', '/etc/phpmyadmin/');
```

Save the file and access the phpMyAdmin in a web browser.
All done. Now you have the latest phpMyAdmin running on your Ubuntu system.
