# Deploying Flask with Celery, Redis, and Nginx using Docker

This tutorial will guide you through setting up a Flask application with Celery for asynchronous task execution, Redis as the message broker, and Nginx as a reverse proxy. The setup will be containerized using Docker and managed with Docker Compose.

### Prerequisites
- Docker installed on your system
- Docker Compose installed

### Project Structure

```
flask-celery-docker/
│── nginx/
│   └── nginx.conf
│── app.py
│── worker.py
│── requirements.txt
│── Dockerfile
│── docker-compose.yml
│── .env
```

### Step 1: Create the Flask Application

Create a file named `app.py` with the following content:

```python linenums="1" title="app.py"
from flask import Flask
from worker import add
from random import randint

app = Flask(__name__)

@app.route("/")
def hello_world():
    a, b = randint(1, 100), randint(1, 100)
    result = add.delay(a, b)
    return {"message": "Hello World"}

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
```

### Step 2: Create the Celery Worker

Create a file named `worker.py` with the following content:

```python linenums="1" title="worker.py"
import time
from decouple import config
from celery import Task, Celery

broker_url = config("BROKER_URL")
result_backend = config("RESULT_BACKEND")

celery_app = Celery("worker", broker=broker_url, backend=result_backend)
celery_app.conf.update(
    broker_connection_retry=True, broker_connection_retry_on_startup=True
)

class BaseTask(Task):
    def on_success(self, retval, task_id, args, kwargs):
        print(f"Task {task_id} succeeded with result: {retval}")
        print(args)
        print(kwargs)
    
    def on_failure(self, exc, task_id, args, kwargs, einfo):
        print(f"Task {task_id} failed with error: {exc}")

@celery_app.task(base=BaseTask)
def add(x, y):
    time.sleep(10)
    return x + y
```

### Step 3: Define Dependencies

Create a `requirements.txt` file:

```linenums="1" title="requirements.txt"
flask
celery[redis]
python-decouple
```

### Step 4: Create a Dockerfile

Create a `Dockerfile` for containerizing the application:

```dockerfile linenums="1" title="Dockerfile"
FROM python:3.10-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]
```

### Step 5: Set Up Docker Compose

Create a `docker-compose.yml` file:

```yaml linenums="1" title="docker-compose.yml"
version: '3.7'

services:
  app:
    build: .
    image: flask-app:latest
    container_name: flask-app
    env_file:
      - .env
    ports:
      - "5000:5000"
  
  redis:
    image: redis:latest
    container_name: redis
    ports:
      - "6379:6379"

  worker:
    image: flask-app
    container_name: celery
    command: celery -A worker.celery_app worker -l info
    depends_on:
      - app
      - redis

  flower:
    image: mher/flower
    container_name: flower
    command: celery --broker=redis://redis:6379 flower --url_prefix=/flower
    ports:
      - "5555:5555"
    depends_on:
      - redis

  nginx:
    image: nginx:alpine
    container_name: nginx
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf
    ports:
      - "80:80"
    depends_on:
      - app
      - flower
```

### Step 6: Configure Nginx

Create an `nginx/nginx.conf` file:

```nginx linenums="1" title="nginx.conf"
server {
    listen 80;

    location / {
        proxy_pass http://app:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    location /flower/ {
        proxy_pass http://flower:5555/flower/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Step 7: Create an Environment File

Create a `.env` file:

```linenums="1" title=".env"
BROKER_URL=redis://redis:6379
RESULT_BACKEND=redis://redis:6379
```

### Step 8: Build and Run Containers

Run the following command to build and start all containers:

```sh
docker-compose up --build -d
```

### Step 9: Verify the Setup

- Access the Flask app at `http://localhost`
- Access Flower (Celery monitoring tool) at `http://localhost/flower/`
- Check running containers with:
  ```sh
  docker ps
  ```

### Step 10: Testing

You can trigger a background task by visiting `http://localhost/`, and Celery will process it asynchronously.

### Conclusion
You have successfully set up a Flask application with Celery and Redis using Docker. Nginx is used to proxy requests to the Flask app and Flower for monitoring Celery tasks.

