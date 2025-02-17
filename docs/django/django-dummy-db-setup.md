# Django dummy database setup

Here’s the full example of a Django DATABASES configuration using the dummy database engine:

```python linenums="1" title="settings.py"
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.dummy',  # Dummy database backend
    }
}
```
#### Explanation:

1. ENGINE: Specifies the database backend. In this case, django.db.backends.dummy is used, which does not perform any real database operations.
2. No other settings (like NAME, USER, PASSWORD, HOST, PORT) are required because the dummy backend doesn’t connect to any database.

#### Where to Use This Configuration:

- Testing environments where you want to ensure no database queries are made.
- Scenarios where you want Django to function without a database, e.g., for middleware testing or using Django for static website generation.

#### Warnings:

- Any code that attempts to interact with the database (such as querying models or running migrations) will raise an exception.
- Use this configuration only in environments where a database connection is not necessary.
