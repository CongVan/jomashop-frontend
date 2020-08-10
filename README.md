# Jomashop front end

## Require
- docker

## Build Setup
```bash
# Install local cypress (optional)
npm install cypress -g

# Start development
./dockerctl start # Start docker
./dockerctl install-ci # install dependency
./dockerctl run dev # Begin run dev

# If already install node-modules
# NOTE : JUST RUN IT WHEN ALREADY install all dependency
./dockerctl start-dev # include start docker & run dev
```


## Other command
```bash
# Stop 
./dockerctl stop

# Run script in package.json
./dockerctl run ... # same with npm run ...

# Install 
./dockerctl install ... # same with npm run ...

# Destroy 
./dockerctl destroy
```

### UI
+ Buefy


### Style process 
+ sass

### Nuxt module
+ nuxt auth
+ nuxt i18n
+ nuxt axios
+ nuxt proxy
