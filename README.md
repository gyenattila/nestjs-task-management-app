# NestJS Task Management Application

## Install NodeJs & NestJS CLI

## NestJS CLI useful commands

### Initialize new NestJS application

```shell
$ nest new <application-name>
```

### Create a module

```shell
$ nest generate module <module-name>
```

or

```shell
$ nest g mo <module-name>
```

### Create a controller

```shell
$ nest generate controller <controller-name>
```

or

```shell
$ nest g co <controller-name>
```

To generate a controller without a `.spec` file add the following switch at the end of the command

```shell
--no-spec
```

By default a spec file will be generated.

### Create a provider (service)

```shell
$ nest generate service <service-name>
```

or

```shell
$ nest g s <service-name>
```

To generate a service without a `.spec` file add the following switch at the end of the command

```shell
--no-spec
```

By default a spec file will be generated.

## API Endpoints

## Validation pipes

```shell
$ npm install class-validator class-transformer
```

[class-validator](https://www.npmjs.com/package/class-validator)

[class-transformer](https://www.npmjs.com/package/class-transformer)

...

## PostgreSQL via Docker

Running PostgreSQL via Docker

```shell
$ docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```

Make sure the container is running, type:

```shell
$ docker container ls
```

Stop the container, type:

```shell
$ docker container stop postgres-nest
```

Start the container again: type:

```shell
$ docker container start postgres-nest
```

Delete the container, type:

```shell
$ docker container rm postgres-nest
```

## TypeORM - Object Relational Mapping

Install necessary packages:

```shell
$ npm i typeorm @nestjs/typeorm pg
```
