# 📁 Download Google Drive Folder Files Using gdown

The gdown package is a lightweight Python tool that helps you download files and folders directly from Google Drive — all from the command line or within Python scripts.

While gdown was originally designed to download individual Google Drive files using the file ID or URL, it now supports downloading entire folders with a simple flag.

You can install gdown via pip:

```bash
pip install gdown
```

Create a file named `script.py` file and paste the code below

`script.py`

```python
import gdown

id = "19YH7asEO2P_G_LAdpiKGGT9Sf-uTGMSy"
output = "Models"
gdown.download_folder(id=id, output=output, quiet=False)
```

run the script

```bash
python script.py
```