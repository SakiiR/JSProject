# JSProject Front

Javascript Full Stack EPITECH Project

## Dependency

The back project have to be running to make the front work.

The front is using a proxy pass to communicate with the back.

`/ws` -> `http://back:4242/ws`
`/api` -> `http://back:1337/api`

https://github.com/SakiiR/JSProject-Back

The proxy pass works thanks to nginx configuration + package.json `proxy` configuration.

## Installation

```sh
$ npm install
```

## Development

```sh
$ npm start
```

## Production 

```sh
$ npm run build
$ # Then, copy files from the ./build directory to your favorite webserver's webroot directory (/usr/share/html, /var/www/html etc)
```

## Docker

Or you can simply use the provided Dockerfile

```sh
$ docker build -t jsproject-front .
$ docker run -p 80:80 jsproject-front
$ # Now access https://localhost/ !
```
