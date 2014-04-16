vmmaster-frontend
=================

# Configure nginx

```
  cp vmmaster-frontend.conf.template vmmaster-frontend.conf
```
+ edit vmmaster-frontend.conf
```
  # the upstream component nginx needs to connect to
  upstream django {
      server unix:///path/to/vmmaster-frontend/vmmaster-frontend.sock; # for a file socket
  }
```
```
  sudo ln -s /etc/nginx/sites-enabled /path/to/vmmaster-frontend.conf
```
```
  sudo service nginx restart
```


# Configure uwsgi

```
  cp vmmaster-frontend.ini.template vmmaster-frontend.ini
```
+ edit vmmaster-frontend.ini
```
  # the base directory (full path)
  chdir           = /path/to/vmmaster-frontend
```
```
  # create a directory for the vassals
  sudo mkdir /etc/uwsgi
  sudo mkdir /etc/uwsgi/vassals
  # symlink from the default config directory to your config file
  sudo ln -s /path/to/vmmaster-frontend.ini /etc/uwsgi/vassals/
```
```
  # run the emperor
  uwsgi --emperor /etc/uwsgi/vassals --uid vmmaster --gid vmmaster
```

# Configure settings.py
```
cd /path/to/vmmaster-frontend/vmmaster_frontend
cp template.settings.py settings.py
```
+ edit settings.py
```python
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = ''
```
