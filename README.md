# Omnilytics Programming Challenge


## How to run it

### 1. Mannual:
    
Python3 and Nodejs are required
#### 1.1 Backend

Step 1: 
```sh
cd backend
```
Step 2:
```sh
python3 -m venv .venv
```
Step 3:
```sh
source .venv/bin/activate
```
Step 4:
```sh
cd src
```
Step 5:
```sh
gunicorn --bind 0.0.0.0:5000 manage:app
```
#### 1.2 Frontend

Step 1: 
```sh
cd frontend
```
Step 2:
```sh
npm install
```
Step 3:
```sh
npm start
```



### 2. Docker compose 

Step 1: Create network
```docker
docker network create proxy-network
```
Step 2:
```sh
docker-compose up -d
```
