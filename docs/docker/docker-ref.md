# Docker Permissions and Management

## Granting Docker Permissions to a User

To allow a user to run Docker commands without `sudo`, follow these steps:

1. Add the user to the `docker` group:
   ```bash
   sudo usermod -aG docker $USER
   ```
2. Restart the Docker service to apply changes:
   ```bash
   sudo service docker restart
   ```
3. Change the permission of the Docker socket (optional, but allows running Docker without `sudo`):
   ```bash
   sudo chmod 666 /var/run/docker.sock
   ```

---

## Removing Unused (Dangling) Docker Images

Dangling images are untagged images that are no longer used by any containers. To remove them, use:

```bash
docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
```

This helps free up disk space and keeps your system clean.

---

## Running Docker Commands Without `sudo`

If you don’t want to use `sudo` every time you run a Docker command, you can change the socket permissions:

```bash
sudo chmod 666 /var/run/docker.sock
```

> ⚠️ **Warning:** This is not recommended for production environments, as it can pose a security risk.

---

# PostgreSQL Database Backup and Restore

## Backup a PostgreSQL Database

To create a backup of the `streamlit` database and save it to a file (`backup.sql`):

```bash
pg_dump -h localhost -p 5432 -U postgres -d streamlit -f backup.sql
```

- `-h localhost`: Connects to the PostgreSQL server running locally.
- `-p 5432`: Specifies the default PostgreSQL port.
- `-U postgres`: Uses the `postgres` user.
- `-d streamlit`: Specifies the database name (`streamlit`).
- `-f backup.sql`: Saves the backup to a file named `backup.sql`.

---

## Restore a PostgreSQL Database

To restore the backup (`backup.sql`) into the `test` database:

```bash
psql -h localhost -p 5432 -U postgres -d test -f backup.sql
```

- `test`: The database where the backup will be restored.

> ⚠️ **Important:** Ensure the `test` database exists before running the restore command. If not, create it using:


