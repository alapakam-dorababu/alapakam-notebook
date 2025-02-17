# Running Flask and Celery in a Single File

This tutorial will guide you through setting up Celery with Flask and Redis to run background tasks asynchronously.

---

### Prerequisites

Make sure you have the following installed:

- Python 3
- Redis
- Flask
- Celery

You can install the required dependencies using pip:

```bash
pip install flask celery redis
```

---

### Project Structure

Your project directory should be structured as follows:

```
flask_celery_project/
│── app.py  # Flask application with Celery integration
│── requirements.txt  # List of dependencies
└── README.md  # Documentation
```

---

### Step 1: Setting Up Flask Application

Create a new file named `app.py` and add the following code:

```python linenums="1" title="app.py"
import time
from celery import Celery
from flask import Flask, jsonify

app = Flask(__name__)

# Configure Celery
app.config["CELERY_BROKER_URL"] = "redis://localhost:6379/0"
app.config["CELERY_RESULT_BACKEND"] = "redis://localhost:6379/0"

celery = Celery(app.name, broker=app.config["CELERY_BROKER_URL"])
celery.conf.update(app.config)

# Define Background Task
@celery.task
def background_task(n):
    time.sleep(n)
    return f"Task completed after {n} seconds"

@app.route("/start-task/<int:seconds>")
def start_task(seconds):
    job = background_task.apply_async(args=[seconds])
    return jsonify({"task_id": job.id, "status": "queued"})

@app.route("/task-status/<task_id>")
def task_status(task_id):
    job = background_task.AsyncResult(task_id)
    return jsonify({"task_id": job.id, "status": job.status, "result": job.result})

if __name__ == "__main__":
    app.run(debug=True)
```

---

### Step 2: Running Redis

Ensure Redis is running before starting the Flask and Celery applications. You can start Redis with:

```bash
redis-server
```

To check if Redis is running, use:

```bash
redis-cli ping
```

If Redis is running, it should return:

```bash
PONG
```

---

### Step 3: Running the Flask Application

Start the Flask server by running:

```bash
python app.py
```

This will start your Flask application on `http://127.0.0.1:5000/`.

---

### Step 4: Running the Celery Worker

In a new terminal window, navigate to your project directory and start the Celery worker:

```bash
celery -A app.celery worker --loglevel=info
```

You should see output indicating that Celery has started successfully and is ready to process tasks.

---

### Step 5: Testing the Background Task

To start a background task, make a request to the Flask API:

```bash
curl http://127.0.0.1:5000/start-task/5
```

This should return a JSON response with a task ID:

```json
{"task_id": "some-task-id", "status": "queued"}
```

To check the status of the task, use:

```bash
curl http://127.0.0.1:5000/task-status/some-task-id
```

The response will show the current status and result (if completed).

---

### Conclusion

You have successfully set up Celery with Flask and Redis to run background tasks asynchronously. You can now integrate this into your projects to offload time-consuming tasks from the main application thread.

Happy coding! 🚀

