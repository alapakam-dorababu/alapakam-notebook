
# S3 File Uploader Script

This Python script defines a function to upload files to an Amazon S3 bucket using the `boto3` library and environment variables for AWS credentials and configuration.

## Installation


```bash
pip install boto3 python-decouple
```
    
## Code

### Example 1:

```python
import boto3
from decouple import config

def s3_uploader(name, body):
    """This function is used to upload the files to the S3 server and return the URL."""
    # name is S3 file name
    # body is io.BytesIO() - a file-like object in memory

    access_key = config("AWS_S3_ACCESS_KEY_ID")
    secret_key = config("AWS_S3_SECRET_ACCESS_KEY")
    region = config("AWS_S3_REGION")
    bucket = config("AWS_S3_BUCKET_NAME")

    session = boto3.Session(
        aws_access_key_id=access_key,
        aws_secret_access_key=secret_key,
        region_name=region,
    )
    s3 = session.resource("s3")
    s3.Bucket(bucket).put_object(
        Key=name,
        Body=body.getvalue(),
        ACL="public-read",
        ContentType="application/octet-stream",
    )
    location = session.client("s3").get_bucket_location(Bucket=bucket)[
        "LocationConstraint"
    ]
    uploaded_url = f"https://s3-{location}.amazonaws.com/{bucket}/{name}"
    return uploaded_url
```

### Example 2:

```python
from io import BytesIO
from boto3.session import Session
from decouple import config


def s3_uploader(name, body):
    """
    Uploads files to an S3 server and returns the URL.

    Parameters:
    - name: Name/key to store the file in the S3 bucket.
    - body: BytesIO object representing the content of the file.

    Returns:
    - The URL of the uploaded file on S3.
    """
    access_key = config("AWS_S3_ACCESS_KEY_ID")
    secret_key = config("AWS_S3_SECRET_ACCESS_KEY")
    region = config("AWS_S3_REGION")
    bucket = config("AWS_S3_BUCKET_NAME")

    session = Session(
        aws_access_key_id=access_key,
        aws_secret_access_key=secret_key,
        region_name=region,
    )
    s3 = session.resource("s3")

    # Upload the file
    s3.Bucket(bucket).put_object(
        Key=name,
        Body=body.getvalue(),
        ACL="public-read",
        ContentType="application/octet-stream",
    )

    # Generate and return the URL
    return f"https://{bucket}.s3.amazonaws.com/{name}"


# Example usage:
if __name__ == "__main__":
    byte_data = b"This is a test bytes object."  # Replace with your bytes data
    name = "1713327806708.xlsx"  # Replace with the desired S3 key

    # Create BytesIO object from byte data
    byte_io = BytesIO(byte_data)

    uploaded_url = s3_uploader(name, byte_io)
    print("Uploaded file URL:", uploaded_url)
```

## Explanation

- `boto3`: AWS SDK for Python used to interact with S3.
- `decouple.config`: Fetches environment variables securely.

### Parameters
- `name`: The name under which the file will be stored in S3.
- `body`: An `io.BytesIO()` object that holds the file data.

### Steps
1. Fetch AWS credentials and settings from environment variables.
2. Create a `boto3` session using the credentials.
3. Get a reference to the S3 resource and upload the object using `put_object`.
4. Set `ACL="public-read"` to make the file publicly accessible.
5. Retrieve the bucket location to construct a URL.
6. Return the public URL to the uploaded file.

## Output

Returns a public URL to the uploaded file in S3.

## Example Usage

```python
import io

file_data = io.BytesIO(b"Sample file content")
url = s3_uploader("example.txt", file_data)
print("Uploaded file URL:", url)
```
