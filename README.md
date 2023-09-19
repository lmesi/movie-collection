# Movie collection

I created this media collection pet project to learn and practice Angular/TypeScript and SpringBoot/Java.

The user can browse throuh the movies and series in the database, also can search based on their title or release year. The user can add/delete a selected movie or TV show to/from a collection previously created.

## Used technologies

For frontend:

- Angular / TypeScript

For backend:

- SpringBoot / Java

## Prerequisites

- Node.js (v19.2.0)
- npm (v8.19.3)
- Java (v17)
- Maven (v3.9.4)
- Docker (v24.0.5)

## Run the application

To run a MySQL server in docker for database:

```bash
$ docker run --detach \
--env MYSQL_ROOT_PASSWORD=123 \
--env MYSQL_USER=media-user \
--env MYSQL_PASSWORD=123 \
--env MYSQL_DATABASE=media-database \
--name mysql-media \
--publish 3306:3306 \
mysql:8-oracle
```

To build the project server, navigate to the `server` folder and run:

```bash
$ mvn clean install
```

To start the backend, in the server folder run:

```bash
$ java -jar target/movie-collection-0.0.1.jar
```

To start the frontend, navigate to the ui folder and run:

```bash
$ npm i

$ npm run start
```
