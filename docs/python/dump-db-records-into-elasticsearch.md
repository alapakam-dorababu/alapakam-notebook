# 📦 Dump DB Records into Elasticsearch Index

Integrating a relational database (like PostgreSQL, MySQL) with Elasticsearch allows you to power fast, full-text search capabilities over your application’s data. This process typically involves extracting records from your database and indexing them into Elasticsearch.

Make sure all the required packages are installed

### The script below dumps the PostgreSQL records into an Elasticsearch index.

```python
import math
import argparse
import traceback

import psycopg2
import psycopg2.extras

import elasticsearch


def ResultIter(cursor, arraysize=50000):
    # An iterator that uses fetchmany to keep memory usage down
    while True:
        results = cursor.fetchmany(arraysize)
        if not results:
            break
        for result in results:
            yield result


def PGDatabaseConn():

    try:
        conn = psycopg2.connect(database="snomed",
                                user="postgres",
                                password="admin",
                                host="127.0.0.1",
                                port=5432)
    except Exception:
        print("Unable to connect to postgres - host: {}".format(args.db_host))
        traceback.print_exc()
        exit(1)
    return conn.cursor(name='mycursor',
                       cursor_factory=psycopg2.extras.RealDictCursor)


def ESConn():
    print("Conecting to elasticsearch")
    try:
        es = elasticsearch.Elasticsearch(hosts=[args.es_host],
                                         auth=(args.es_user, args.es_password),
                                         port=args.es_port)
    except Exception:
        print("Unable to connect to elasticsearch - host:{}".format(args.es_host))
        traceback.print_exc()
        exit(1)
    return es


def ESInsert(es, row):
    try:
        es.index(index=args.es_index, doc_type=args.es_indextype, body=row,
                 id=row.get('author_id'))
    except Exception as exc:
        raise exc


parser = argparse.ArgumentParser(description='Convert postgres to es')
parser.add_argument('-q', '--query',
                    required=True, help='Query to retrieve data')
parser.add_argument('--db_name',
                    required=True, help='Postgres database name')
parser.add_argument('--db_username',
                    required=True, help='Postgres database username')
parser.add_argument('--db_password',
                    required=True, help='Postgres database password')
parser.add_argument('--db_host',
                    required=True, help='Postgres host')
parser.add_argument('--es_host',
                    required=True, help='Elastisearch host:port')
parser.add_argument('--es_port',
                    required=False, help='Elasticsearch Port')
parser.add_argument('--es_index',
                    required=True, help='Elastisearch index')
parser.add_argument('--es_indextype',
                    required=True, help='Elastisearch index type')
parser.add_argument('--es_user',
                    required=False, help='Elasticsearch User')
parser.add_argument('--es_password',
                    required=False, help='Elasticsearch User and Password')


# -q=select * from loinc--db_name=loinc, --db_username=postgres --db_password=postgres --db_host=127.0.0.1 --es_host=52.15.140.166 --es_port=9200 --es_index=loinc-index --es_indextype=loinc

# python pg_to_es.py -q="select * from loinc" --db_name=loinc, --db_username=postgres --db_password=postgres --db_host=127.0.0.1 --es_host=52.15.140.166 --es_port=9200 --es_index=loinc-index --es_indextype=loinc


args = parser.parse_args()

# Conn to PG and open a cursor
cur = PGDatabaseConn()

# Execute the query
print("Executing query -> {}".format(args.query))
cur.execute(args.query)

# Connect to elasticsearch
es = ESConn()

# Insert results
print("Inserting data into elasticsearch")
error = 0
row_replace = dict()
for row in ResultIter(cursor=cur, arraysize=10000):
    try:
        ESInsert(es=es, row=row)
    except Exception:
        try:
            # Try replace float nan values to None
            row_replace.clear()
            row_replace.update(row)
            for key, value in row.items():
                if isinstance(value, float) and math.isnan(value):
                    row_replace[key] = None
            # print(row_replace)
            ESInsert(es, row_replace)
        except Exception:
            print("Error inserting row")
            print(row)
            error = 1
            traceback.print_exc()
            continue

if error == 0:
    print("Done!!! :D ")
    exit(0)
else:
    print("Done with errors  :( ")
    exit(1)
```

### The script below dumps the MySQL records into an Elasticsearch index.


```python
try:
    import mysql
    from mysql.connector import connect
    import json
    import os
    import sys
    import  pandas as pd
    import threading

    import elasticsearch
    from elasticsearch import Elasticsearch


    import json
    # from ast import literal_eval
    import datetime
    import os
    import sys
    from elasticsearch import helpers

    print("Loaded  .. . . . . . . .")
except Exception as e:
    print("Error : {} ".format(e))


class Settings():

    def __init__(self,
                 mysqlhost='localhost',
                 mysqlport=3306,
                 mysqluser='root',
                 mysqlpassword='root',
                 mysqldataBase='rxnorm',
                 mysqltableName='RXNCONSO',
                 mysqlquery='select * from RXNCONSO',
                 elkhost="3.138.151.157",
                 elkport='9200'):

        self.mysqlhost=mysqlhost
        self.mysqlport = mysqlport
        self.mysqluser = mysqluser
        self.mysqlpassword = mysqlpassword
        self.mysqldataBase = mysqldataBase
        self.mysqltableName = mysqltableName
        self.mysqlquery =mysqlquery
        self.elkhost =elkhost
        self.elkport =elkport
        self.elkhost = "http://{}:{}".format(self.elkhost, self.elkport)

class MySql(object):

    def __init__(self, settings=None):
        self.settings=settings

    def execute(self):
        try:

            self.db = connect(
                host     =      self.settings.mysqlhost,
                port     =      self.settings.mysqlport,
                password =      self.settings.mysqlpassword,
                user     =      self.settings.mysqluser,
                database =      self.settings.mysqldataBase,
                auth_plugin='mysql_native_password'
            )

            self.cursor = self.db.cursor()
            print(self.settings.mysqlquery, "=============")
            self.cursor.execute("{}".format(self.settings.mysqlquery))
            myresult = self.cursor.fetchall()
            yield myresult
        except Exception as e:
            print("Error : {} ".format(e))
            return "Invalid Query : {} ".format(e)


class ELK(object):
    def __init__(self, settings=None):
        self.settings =settings
        self.es = Elasticsearch(hosts=self.settings.elkhost)
        # self.es = Elasticsearch(timeout=600, hosts=self.settings.elkhost)

    def upload(self, records):

        try:
            res = helpers.bulk(self.es,records )
        except Exception as e:
            print("{}".format(e))


def main():
    # Step 1: Create a Settings

    BATCH_SIZE      = 500000
    TABLE_NAME      = "RXNCONSO"
    DATABASE_NAME   = 'rxnorm'
    TOTAL_RECORDS   = 0

    # Count Total number of Records
    _settings = Settings(mysqltableName=TABLE_NAME,
                         mysqldataBase=DATABASE_NAME,
                         mysqlquery='SELECT COUNT(*) from {}.{} '.format(DATABASE_NAME, TABLE_NAME))


    # Create a MySQL Class
    _helper = MySql(settings=_settings)
    res = _helper.execute()
    TOTAL_RECORDS = next(res)[0][0]
    print("Total Records:", TOTAL_RECORDS)
    # ===========================================================================================
    # Pagination system to pull records in a efficient way
    queries = ['SELECT * FROM {}.{} limit {},{}'.format(DATABASE_NAME, TABLE_NAME, page, BATCH_SIZE)
               for page in range(0,TOTAL_RECORDS, BATCH_SIZE)]
    print("Total Batches:",len(queries))
    # ==============================================================================================
    columnQuery = "SELECT COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA='{}'   AND  TABLE_NAME = '{}' ".format(DATABASE_NAME, TABLE_NAME)
    _settings.mysqlquery = columnQuery
    res = _helper.execute()

    # List of All column Names
    columnNames = [name[0].lower() for name in next(res)]
    batch = 1
    for query in queries:
        import time
        _settings.mysqlquery = query
        res = _helper.execute()
        res = next(res)
        df = pd.DataFrame(data=res, columns=columnNames)
        df1 = df.to_dict("records")
        records = [
            {
                '_index': '{}'.format(TABLE_NAME).lower(),
                '_type': '_doc',
                '_id': c,
                '_source':x
            }
            for c, x in enumerate(df1)
        ]

        eshelper = ELK(settings=_settings)
        eshelper.upload(records=records)
        print(f"================== Batch {batch} is running ==========================")
        print(f"================== Batch {batch} records uploaded ====================")
        batch +=1
        if batch > len(queries):
            print(f"================== All Batch records uploded ====================")
        else:
            print(f"================== Waiting for start {batch} Batch ====================")
            time.sleep(5)
        #     break
        # print("Data uploaded successfully...")
main()
```