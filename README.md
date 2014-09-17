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
sudo ln -s /path/to/vmmaster-frontend.conf /etc/nginx/sites-enabled
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
sudo mkdir /var/log/uwsgi
# symlink from the default config directory to your config file
sudo ln -s /path/to/vmmaster-frontend.ini /etc/uwsgi/vassals/
```
```
# run the emperor
uwsgi --emperor /etc/uwsgi/vassals --uid vmmaster --gid vmmaster
```
```
# create upstart service
sudo cp /path/to/vmmaster-frontend/vmmaster-frontend.conf.init.template /etc/init/vmmaster-frontend.conf
# run service
sudo service vmmaster-frontend start
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
