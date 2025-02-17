
# Python Logging Configuration

This Python script demonstrates how to set up logging with both console and file handlers. It uses the `logging` module to configure logging levels, formats, and log rotation for better monitoring of your application. Below is a breakdown of the code along with a description of each part.

## Code Explanation

### 1. **Imports**
```python
import os
import logging
import logging.config
from datetime import datetime
```
- `os`: Provides a way to interact with the operating system (used for file and folder handling).
- `logging`: The standard library for logging messages in Python.
- `logging.config`: Used for configuring logging based on a dictionary-based configuration.
- `datetime`: Used to get the current date for log file naming.

### 2. **Log Filename Function**
```python
def get_log_filename():
    logs_folder = "logs"
    # Check if the logs folder exists, create it if it does not
    if not os.path.exists(logs_folder):
        os.makedirs(logs_folder)

    # Return the path to the log file inside the logs folder
    return os.path.join(logs_folder, datetime.now().strftime("%Y-%m-%d.log"))
```
This function ensures that a folder called `logs` exists in the project directory. If not, it creates the folder. Then, it returns the file path for the log file, naming it based on the current date (`YYYY-MM-DD.log`).

### 3. **Logging Configuration**
```python
LOGGING_CONFIG = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "standard": {
            "format": "%(asctime)s - %(module)s - %(levelname)s - %(message)s",
            "datefmt": "%Y-%m-%d %I:%M:%S %p",
        },
    },
    "handlers": {
        "console": {
            "level": "DEBUG",
            "class": "logging.StreamHandler",
            "formatter": "standard",
        },
        "file": {
            "level": "INFO",
            "class": "logging.handlers.TimedRotatingFileHandler",
            "formatter": "standard",
            "filename": get_log_filename(),
            "when": "midnight",
            "interval": 1,
            "backupCount": 7,
            "encoding": "utf8",
            "utc": False,  # Use local time
        },
    },
    "loggers": {
        "": {
            "handlers": ["console", "file"],
            "level": "DEBUG",
            "propagate": True,
        }
    },
}
```
- **Version**: Specifies the version of the logging configuration schema.
- **Handlers**: These define how and where log messages are sent:
  - `console`: Displays logs in the console with a level of `DEBUG`.
  - `file`: Logs to a file, with a level of `INFO`, and rotates logs at midnight. Older logs are kept for 7 days.
- **Formatters**: Define the log message format. In this case, the log includes the timestamp, module name, log level, and the log message itself.
- **Loggers**: The root logger is configured to use both handlers (`console` and `file`), with a `DEBUG` logging level.

### 4. **Applying Logging Configuration**
```python
logging.config.dictConfig(LOGGING_CONFIG)
```
This line applies the configuration defined in `LOGGING_CONFIG` to the logging system.

### 5. **Logger Instance**
```python
logger = logging.getLogger(__name__)
```
A logger instance is created for the current module (`__name__`). This logger can be used to log messages throughout the code.

## Example Usage

Once this configuration is in place, you can log messages as follows:

```python
logger.debug("This is a debug message.")
logger.info("This is an info message.")
logger.warning("This is a warning message.")
logger.error("This is an error message.")
logger.critical("This is a critical message.")
```

The log messages will appear in both the console and in the log files located in the `logs` folder, with file names like `2025-02-17.log`.

## Questions

1. **Why is log rotation necessary?**
   - Log rotation helps manage log file size and prevents logs from consuming too much disk space over time. By rotating logs at midnight and keeping the last 7 days of logs, older logs are archived, reducing the risk of filling up disk space.

2. **What are the differences between `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL` log levels?**
   - `DEBUG`: Detailed information, typically for diagnosing problems.
   - `INFO`: General operational messages, such as startup or shutdown notices.
   - `WARNING`: Indications of potential problems.
   - `ERROR`: Logs error messages when something goes wrong.
   - `CRITICAL`: Severe errors that may cause the program to terminate.

3. **How does the `TimedRotatingFileHandler` work?**
   - It rotates the log file at a specific time interval (in this case, daily at midnight). It keeps a set number of backup log files (`backupCount`).

4. **Why is it important to have a separate console and file handler?**
   - Having both console and file handlers allows you to view logs in real-time on the console while also archiving them to files for later reference.

## Conclusion

This configuration is a basic yet effective way to manage logging in Python applications. It allows for detailed logging in the console during development, while keeping archived logs for later analysis. By implementing log rotation, you also ensure that your log files remain manageable in size.
