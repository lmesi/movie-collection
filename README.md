# Movie collection

I created this media collection pet project to learn and practice Angular/TypeScript and SpringBoot/Java. Also I recreated the backend using ASP.NET/C#.

The user can browse throuh the movies and series in the database, also can search based on their title or release year. The user can add/delete a selected movie or TV show to/from a collection previously created.

## Used technologies

For frontend:

- Angular / TypeScript

For backend:

- SpringBoot / Java
- ASP.NET / C#

## Prerequisites

- Node.js (v19.2.0)
- npm (v8.19.3)
- Java (v17)
- Maven (v3.9.4)
- Docker (v24.0.5)
- .NET SDK (v6.0.122)

## Run the application

### Run SpringBoot / Java backend with MySQL server

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

### Run ASP.NET / C# backend with MSSQL server

To run a MSSQL server in docker for database:
```bash
$ docker run \
--name mssql-media  \
-e 'ACCEPT_EULA=Y' \
-e 'SA_PASSWORD=DummyPassword1' \
-p 1433:1433 \
-d mcr.microsoft.com/mssql/server
```

To build the project server, navigate to the `server_C#/Server_Movie_Collection` folder and run:

```bash
$ dotnet build

$ dotnet run
```

### Run Angular / TypeScript frontend

To start the frontend, navigate to the ui folder and run:

```bash
$ npm i

$ npm run start
```
