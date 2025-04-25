# Use next.js Auth token and provide perssion to DRF View   

To handle JWT-based authentication in Django using a permission class, you can use Django REST Framework (DRF). Here's how you can implement it:

1. Install Django REST Framework and PyJWT if you haven't already:   
   
```bash
pip install djangorestframework pyjwt
```

2. Create a custom permission class for JWT authentication:   
   
`permissions.py`

```python
import jwt
from rest_framework import permissions
from rest_framework.exceptions import AuthenticationFailed

class IsAuthenticatedWithJWT(permissions.BasePermission):
    def has_permission(self, request, view):
        # Check if the authorization header is present
        auth_header = request.headers.get('Authorization')

        if not auth_header:
            raise AuthenticationFailed('Please provide an authentication token')

        try:
            # Extract the token from the authorization header
            token = auth_header.split(' ')[1]
        except IndexError:
            raise AuthenticationFailed('No token provided')

        try:
            # Decode the token
            decoded = jwt.decode(token, 'secret', algorithms=['HS256'])
            request.user_id = decoded.get('id')  # Get the user ID from the token
            # request.user_role = decoded.get('role')  # If role is included in the token
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Token has expired')
        except jwt.InvalidTokenError:
            raise AuthenticationFailed('Failed to authenticate token')

        return True
```

3. Apply the permission class to your views:

   
`views.py`

```python
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .permissions import IsAuthenticatedWithJWT

class MyProtectedView(APIView):
    permission_classes = [IsAuthenticatedWithJWT]  # Use your custom permission class

    def get(self, request):
        user_id = request.user_id  # Access the user ID from the token
        return Response({'message': f'Hello User {user_id}'})
```

In this setup, the custom `IsAuthenticatedWithJWT` permission class verifies the JWT token, extracts the user ID, and attaches it to the request. You can use this permission class on any view that needs JWT authentication.   
   
