# Django-RQ Simple Example

This is a minimal and easy-to-follow example demonstrating how to integrate Django with RQ (Redis Queue) using the django-rq package.

Django-RQ is a Django integration for RQ, a simple Python library for queueing jobs and processing them in the background with workers. It’s built on top of Redis and is ideal for executing time-consuming tasks asynchronously, such as sending emails, processing files, or making API calls.

### Example 1:

Create a file named `views.py` file and paste the code below

```python
import django_rq
from rest_framework.views import APIView


# Function to call the external handwritten text extraction API
def call_handwritten_text_api(url, files):
    print("Handwritten text extraction job started successfully.")

    # URL to send the request to
    url = config("HANDWRITTEN_TEXT_EXTRACTIONS")

    try:
        # Send the POST request to the external API
        response = requests.post(url, files=files)

        # Check the response status code
        if response.status_code == 200:
            print("Handwritten text extraction job finished successfully.")
            return {"success": response.json()}
        else:
            return {
                "error": "Failed to process the file.",
                "details": response.text,
            }

    except requests.exceptions.RequestException as e:
        # Handle request exceptions
        return {"error": str(e)}


# API class for handling handwritten text extraction requests
class HandWrittenTextExtractionAPI(APIView):
    def post(self, request):
        # Validate if a file is provided
        if "file" not in request.FILES:
            return Response(
                {"error": "No file provided."}, status=status.HTTP_400_BAD_REQUEST
            )

        # Retrieve the file from the request
        uploaded_file = request.FILES["file"]

        # Prepare the file for multipart upload
        files = {
            "file": (
                uploaded_file.name,
                uploaded_file.read(),
                uploaded_file.content_type,
            )
        }

        # Enqueue the task to Django RQ
        job = django_rq.enqueue(
            call_handwritten_text_api, config("HANDWRITTEN_TEXT_EXTRACTIONS"), files
        )

        # Return the job ID as the response
        return Response({"job_id": job.id}, status=status.HTTP_202_ACCEPTED)
```

### Example 2:

```python
import django_rq
from rest_framework.views import APIView


class HandWrittenTextJobStatusAPI(APIView):
    def get(self, request, job_id):
        # Access the default Django RQ queue
        queue = django_rq.get_queue()

        # Fetch the job from the queue using the job ID
        job = queue.fetch_job(job_id)

        if not job:
            return Response(
                {"error": "Job not found."}, status=status.HTTP_404_NOT_FOUND
            )

        # Get the job's status
        job_status = job.get_status()

        # Prepare the response
        response_data = {
            "job_id": job.id,
            "status": job_status,
            "result": job.result if job.is_finished else None,
            "created_at": job.created_at,
            "started_at": job.started_at,
            "ended_at": job.ended_at,
        }

        return Response(response_data, status=status.HTTP_200_OK)
```
