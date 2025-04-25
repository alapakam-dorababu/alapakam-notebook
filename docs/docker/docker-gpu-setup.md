# 🚀 Docker GPU Setup – Run GPU-Accelerated Applications in Containers

The Docker GPU setup allows you to run containerized applications that require access to the NVIDIA GPU on your host machine. This is especially useful for machine learning, deep learning, and high-performance computing tasks using libraries like TensorFlow, PyTorch, or CUDA-based tools.

This guide walks you through setting up Docker to access your GPU using NVIDIA Container Toolkit.


Ensure the NVIDIA GPU drivers are installed on your host machine:

```bash
nvidia-smi
```

#### 1. Create a file named `Dockerfile` file root directory and paste the code below

```Dockerfile
FROM nvidia/cuda:11.3.1-devel-ubuntu20.04

ARG DEBIAN_FRONTEND=noninteractive

ENV PYTHONUNBUFFERED=TRUE

RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender1\
    python3-pip \
    python3-dev 

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD ["gunicorn", "--timeout" ,"600",  "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
```

#### 2. Create a file named `docker-compose.yml` file root directory and paste the code below

   
```Dockerfile
version: '3.8'

# Containers we are going to run
services:
  muesuem_piotor:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - ./static:/app/static
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              capabilities:
                - gpu
                - utility # nvidia-smi
                - compute
```

#### 3. run command

```bash
docker-compose up --build -d
```