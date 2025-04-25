# Python Celery Integration

Celery is a powerful, production-ready asynchronous job queue that allows you to run time-consuming Python functions in the background. It’s commonly used with web frameworks like Django and Flask to handle tasks like sending emails, processing files, or scheduling periodic jobs

#### 1. create `main.py` copy paste the below code

```python
import time
from celery import Celery, shared_task

app = Celery("main", backend="redis://localhost:6379", 
                    broker="redis://localhost:6379")


# Set additional configuration options directly on the app
app.conf.update(
    broker_connection_retry=True,
    broker_connection_retry_on_startup=True,
)


@app.task
def Queue(user: str, wait_time: int) -> str:
    print(f"{user} Entered into queue")
    print(f"{user} Work is processing")
    time.sleep(wait_time)
    print(f"{user} Work is completed")
    return f"{user} Work is completed" 
```
#### 2. create `invoke.py` copy paste the below code

```python
import random
from threading import Thread

from main import Queue


# Define a function for user session
def user_session(id, wait_time):
    result = Queue.delay(f"user_{id}", wait_time)
    # Retrieve the result of the task
    print(f"Task result: {result.get()}")


# Loop to create threads for multiple user sessions
for id in range(1, 6):
    wait_time = random.randint(1, 10)
    thread = Thread(target=user_session, args=(id, wait_time))
    thread.start()
```
#### 3. run celery worker

```bash
celery -A main worker --concurrency=1 --loglevel INFO  
```
   
