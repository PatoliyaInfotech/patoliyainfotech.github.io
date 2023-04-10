---
layout: php
title: "Swith PHP Version"
---

# How To Switch PHP Version on Ubuntu 20.04 LTS

On your system, if you have installed multiple versions of PHP like PHP 8.2, PHP 7.4 and PHP 5.6. Currently, PHP 7.4 is the default version set for Apache and the command line interface (CLI). Maybe you have any other PHP versions installed on your system. Only one PHP version can be set as default at any time.

## Switch to PHP 8.2

Before switching to PHP 8.2, you have to deactivate the previously activated Apache module. The following commands will deactivate the already activated Apache module and then activate PHP 8.2 Apache module. Then the next commands will set PHP 8.2 as the default version for the command line interface (CLI).

- **Apache:**

```
    sudo a2dismod php*
    sudo a2enmod php8.2
    sudo systemctl restart apache2
```

- **Command line interface:**

```
    sudo update-alternatives --set php /usr/bin/php8.2
    sudo update-alternatives --set phar /usr/bin/phar8.2
    sudo update-alternatives --set phar.phar /usr/bin/phar.phar8.2
    sudo update-alternatives --set phpize /usr/bin/phpize8.2
    sudo update-alternatives --set php-config /usr/bin/php-config8.2
```

**Note:** The **phpize8.2** and **php-config8.2** command is available in **php8.2-dev** package. This is more useful for compiling PHP modules using pecl.

If you want a different version (eg: PHP 8.1 or PHP 8.0) to be configured as default, just replace 8.2 with the required version.



## Switch to PHP 7.4

Similarly, if you need to configure PHP 7.4 as the default version in your system. The following set of commands will change the default PHP to 7.4 for the Apache web server and command line interface.

- **Apache:**

```
    sudo a2dismod php*
    sudo a2enmod php7.4
    sudo systemctl restart apache2
```

- **Command line interface:**

```
    sudo update-alternatives --set php /usr/bin/php7.4
    sudo update-alternatives --set phar /usr/bin/phar7.4
    sudo update-alternatives --set phar.phar /usr/bin/phar.phar7.4
    sudo update-alternatives --set phpize /usr/bin/phpize7.4
    sudo update-alternatives --set php-config /usr/bin/php-config7.4
```

**Note:** The **phpize7.4** and **php-config7.4** command is available in **php7.4-dev** package. This is more useful for compiling PHP modules using pecl.



## Switch to PHP 5.6

PHP 5.6 is an outdated version. So if you have an application that required PHP 5.6, consider them to upgrade to last PHP version. The following set of commands will change the default PHP to 5.6 for the Apache web server and command line interface.

- **Apache:**

```
    sudo a2dismod php*
    sudo a2enmod php5.6
    sudo systemctl restart apache2
```

- **Command line interface:**

```
    sudo update-alternatives --set php /usr/bin/php5.6
    sudo update-alternatives --set phar /usr/bin/phar5.6
    sudo update-alternatives --set phar.phar /usr/bin/phar.phar5.6
    sudo update-alternatives --set phpize /usr/bin/phpize5.6
    sudo update-alternatives --set php-config /usr/bin/php-config5.6
```

**Note:** The **phpize5.6** and **php-config5.6** command is available in **php5.6-dev** package. This is more useful for compiling PHP modules using pecl.