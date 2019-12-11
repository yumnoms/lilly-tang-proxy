# YumNoms Reviews

> The Reviews component for the YumNoms website.

## Related Projects

  - https://github.com/yumnoms/photo-carousel-service
  - https://github.com/yumnoms/popular-dishes-service
  - https://github.com/yumnoms/reservations-service
  - https://github.com/yumnoms/reviews-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Requires a MySQL database named 'yumnoms' and, for testing purposes, a database named 'yumnoms_test'

This app attaches to a div with id `reviews`
- Install dependencies with `npm install`
- Seed the database with `db-seed`
- Start webpack with `npm run build`
- Start the server with `npm start`
- Run tests with `npm test`

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
