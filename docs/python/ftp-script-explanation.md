
# 📁 Connecting to FTP Server Using Python

This document explains a Python script for interacting with an FTP server. The script supports listing files, downloading files, and uploading files using the `ftplib` module.

---

## 🧩 Script Functions

### 1. `download_file_from_ftp_server()`

- **Purpose**: Downloads a file from the FTP server and saves it to a local directory.
- **Details**:
  - Parses the URL of the file.
  - Connects to the FTP server.
  - Navigates to the appropriate directory.
  - Downloads the file using the `RETR` command.
  - Saves the file to the `data/` folder (creates it if not present).

### 2. `list_ftp_files()`

- **Purpose**: Lists all files in a given remote directory on the FTP server.
- **Details**:
  - Connects to the FTP server.
  - Changes to the specified remote directory.
  - Lists all filenames using `nlst()`.

### 3. `upload_file_to_ftp()`

- **Purpose**: Uploads a local file to a specified directory on the FTP server.
- **Details**:
  - Connects and logs into the FTP server.
  - Checks if the remote directory exists and creates it if not.
  - Uploads the file using the `STOR` command.

---

## 🔧 Configuration Details

```python
hostname = "wapftp.abc.com"
username = "user_test"
password = "abcdeflek"

remote_directory = "/ProTrak/8401/23284023/T4523_2/"
local_file_path = "data/629944523.zip"
ftp_server_file = "ftp://wapftp.abc.com/ProTrak/15031/6046/T0550_1/15031-6046.zip"
```

---

## ⚙️ How to Use

1. To **list files**, make sure `list_ftp_files()` is called:
   ```python
   list_ftp_files()
   ```

2. To **download a file**, uncomment the following:
   ```python
   # download_file_from_ftp_server()
   ```

3. To **upload a file**, uncomment this line:
   ```python
   # upload_file_to_ftp()
   ```

---

## 🖥️ Example Output

### `list_ftp_files()`

```plaintext
Files in the directory '/ProTrak/8401/23284023/T4523_2/':
T4523_file1.txt
T4523_file2.zip
summary_report.csv
```

> ⚠️ Note: Actual files listed depend on the server's current state.

---

## ❗ Error Handling

- Uses `try-except` blocks for robust error reporting.
- Catches all `ftplib.all_errors` and generic exceptions.
- Gracefully handles directory creation and file writing issues.

---

## 📌 Tips

- Make sure the FTP server allows access from your IP.
- Ensure correct permissions for file upload and directory creation.
- Adjust passive mode or use `FTP_TLS` for secure connections if needed.

---

## 📜 Full Script

```python
import os
import ftplib
from pathlib import Path
from urllib.parse import urlsplit

hostname = "wapftp.abc.com"
username = "user_test"
password = "abcdeflek"

remote_directory = "/ProTrak/8401/23284023/T4523_2/"
local_file_path = "data/629944523.zip"
ftp_server_file = "ftp://wapftp.abc.com/ProTrak/15031/6046/T0550_1/15031-6046.zip"

def download_file_from_ftp_server():
    try:
        parsed_url = urlsplit(ftp_server_file)
        ftp_file = parsed_url.path

        with ftplib.FTP(hostname, username, password) as ftp_server:
            ftp_server.encoding = "utf-8"

            filename = os.path.basename(ftp_file)
            directory = os.path.dirname(ftp_file)
            ftp_server.cwd(directory)

            output_dir = "data"
            Path(output_dir).mkdir(parents=True, exist_ok=True)
            local_path = os.path.join(output_dir, filename)
            with open(local_path, "wb") as local_file:
                ftp_server.retrbinary("RETR " + filename, local_file.write)
            print(f"File '{filename}' downloaded successfully.")
    except ftplib.all_errors as e:
        print(f"FTP Error: {e}")
    except Exception as e:
        print(f"Error: {e}")

def list_ftp_files():
    try:
        with ftplib.FTP(hostname, username, password) as ftp_server:
            ftp_server.cwd(remote_directory)
            file_list = ftp_server.nlst()

            if file_list:
                print(f"Files in the directory '{remote_directory}':")
                for file in file_list:
                    print(file)
            return file_list
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

def upload_file_to_ftp():
    try:
        ftp_server = ftplib.FTP(hostname)
        ftp_server.login(username, password)

        if remote_directory not in ftp_server.nlst():
            ftp_server.mkd(remote_directory)

        with open(local_file_path, "rb") as local_file:
            filename = os.path.basename(local_file_path)
            ftp_server.storbinary(f"STOR {remote_directory}/{filename}", local_file)

        print(f'File "{local_file_path}" uploaded successfully to "{remote_directory}" on the FTP server.')
    except Exception as e:
        print(e)
    finally:
        ftp_server.quit()

# download_file_from_ftp_server()
list_ftp_files()
# upload_file_to_ftp()
```