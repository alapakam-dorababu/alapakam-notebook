## 🌐 Nginx Configuration

This Nginx setup is used for the domain `test-domain.com`.


### Nginx HTTPS Server Configuration

```nginx
server {
    listen 80;
    server_name test-domain.com www.test-domain.com;
	
	# Redirect all HTTP requests to HTTPS
    return 301 https://$host$request_uri;
	
}

server {
    listen 443 ssl;
    server_name test-domain.com www.test-domain.com;

    ssl_certificate /home/atp/ssl/star_domain_com.pem;
    ssl_certificate_key /home/atp/ssl/test_domain_com.key;

    location / {
            # your ip address
            proxy_pass http://1.2.3.4:3000; 
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
```

### Nginx HTTP Server Configuration

```nginx

server {
    listen 80;
    server_name test-domain.com www.test-domain.com;

    location / {
            # your ip address
            proxy_pass http://1.2.3.4:3000; 
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
```

### Features

- **Redirect HTTP to HTTPS**  
  Automatically redirects all HTTP traffic (port 80) to HTTPS for secure communication.

- **SSL Support**  
  Uses SSL certificates to serve the domain over HTTPS (port 443).

- **Reverse Proxy**  
  Proxies all incoming requests to the backend service running at `http://1.2.3.4:3000`.

### SSL Files

- Certificate: `/home/atp/ssl/star_domain_com.pem`
- Key: `/home/atp/ssl/test_domain_com.key`

### Headers Passed to Backend

- `Host`
- `X-Real-IP`
- `X-Forwarded-For`
- `X-Forwarded-Proto`


