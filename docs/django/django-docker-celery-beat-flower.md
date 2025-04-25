# Django + Docker + Celery + Celery Beat + Flower Setup (for existing Django project)

This setup demonstrates how to integrate Django, Docker, Celery, Celery Beat, and Flower into a single cohesive project. It provides a step-by-step guide to:

- Run asynchronous background tasks using Celery.

- Schedule periodic tasks with Celery Beat.

- Monitor task queues and execution in real-time using Flower.

- Containerize the entire application using Docker for easy deployment and scalability.

By following these steps, you will have a production-ready foundation for handling background tasks in your Django application, all managed and monitored in an isolated Docker environment.

#### 1. Create a file named `Dockerfile` file root directory and paste the code below

`Dockerfile`

```Dockerfile
FROM python:3.11

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]
```

#### 2. Create a file named `docker-compose.yml` file root directory and paste the code below

`docker-compose.yml`

```Docker
name: my-docker-project

services:
  app:
    build: .
    image: my-app-image
    container_name: my-app-container
    ports:
      - "8000:8000"
    volumes:
      - .:/app
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres
    container_name: my-postgres-container
    ports:
      - "5432:5432"
    environment:
      POSTGRES_DB: postgres
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    restart: unless-stopped
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: "redis:alpine"
    container_name: my-redis-container
    restart: unless-stopped
    ports: 
      - "6379:6379"
    volumes:
      - redis_data:/data

  celery:
    image: my-app-image
    container_name: my-celery-container
    command: celery -A a_core worker -E -l info
    volumes:
      - .:/app
    depends_on:
      - postgres
      - redis
      - app

  flower:
    image: my-app-image
    container_name: my-flower-container
    command: celery -A a_core flower --basic_auth=admin:password123
    ports:
      - "5555:5555"
    depends_on:
      - redis

  beat:
    image: my-app-image
    container_name: my-beat-container
    command: celery -A a_core beat -l INFO --scheduler django_celery_beat.schedulers:DatabaseScheduler
    volumes:
      - .:/app
    depends_on:
      - redis
      - app

volumes:
  postgres_data:
  redis_data:
```

#### 3. Update the Django `settings.py` file similar to the below.

`settings.py`

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'localhost',
        'PORT': 5432
    }
}
```
   
