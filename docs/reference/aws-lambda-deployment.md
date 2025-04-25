# AWS Lambda Deployment

## Deployment package with dependencies  

Create the .zip file for your deployment package.

#### 1. To create the deployment package open a command prompt and create a my-sourcecode-function project directory. 

For example

```bash
mkdir my-sourcecode-function
```

#### 2. Navigate to the my-sourcecode-function project directory. 

```bash
cd my-sourcecode-function
```

#### 3. Copy the contents of the following sample Python code and save it in a new file named lambda\_function.py:

```python
import requests
def lambda_handler(event, context):
    response = requests.get("https://www.example.com/")
    print(response.text)
    return response.text
```

#### 4. Install the requests library to a new package directory.

```bash
pip install --target ./package requests
```

#### 5. Create a deployment package with the installed library at the root.

```bash
zip -r ../my-deployment-package.zip . | (Windows zip package directory)
```

#### 6. This generates a my-deployment-package.zip file in your project directory. The command produces the following output: 

```bash
adding: chardet/ (stored 0%)
adding: chardet/enums.py (deflated 58%)
...
```

#### 7. Add the lambda\_function.py file to the root of the zip file.

```bash
cd ..
zip my-deployment-package.zip lambda_function.py
| (add lambda_function.py into zip folder)
```

finally uplod zip file into lamda uploader.   
   
