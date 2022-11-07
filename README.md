# Inspirers


## Frontend Technologies

We use the following tech stack in the frontend part of the project:

- [TypeScript](https://www.typescriptlang.org/): We use TypeScript in all our web dev projects in Neno. this helps us to avoid type errors, write readable code, and maintain consistency throughout our codebase.
- [React](https://reactjs.org/): The most popular JavaScript framework in the world. We majorly use React.js to build projects because it is powerful, fast, and backed by Facebook with a large community. Also, importantly, it is still very in active support and maintained by Facebook.
- [Next.js](https://nextjs.org/): We use Next.js for server-side rendering. Next.js makes it easy to build an SSR-enabled React.js app with almost zero configuration, yet maintaining the powerful features of React.js and highly performant.

## Backend Technologies

- [REST APIs with Express.js](https://www.expressjs.com/): We use Express.js framework which is a back-end framework that runs on node.js to build fast scalable APi's.
- [Node.js](https://www.nodejs.org/): We use Node.js as our runtime.
- [Prisma](https://www.prisma.io/): We use prisma as our ORM.

## Requirements

Before we install the project, Here is what you need to be able to run Inspirers:

- [Node.js (Version: >=16.x)](https://nodejs.org/en/download/)
- [Git Bash](https://git-scm.com/downloads)
- Browser (Chrome, Safari, Firefox, etc)
- NPM (comes bundled with Node.js)📦
- [Yarn (recommended)](https://yarnpkg.com/getting-started/install) - a Node packaging manager 📦
- Code Editor ([VS Code](https://code.visualstudio.com/download), [Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/), [Vim](https://www.vim.org/download.php), [Bracket](http://brackets.io/), etc)

## Setup

1. Clone the project

```bash
    git clone git@github.com:Emmanuel-Melon/inspirers.git
```

2. Navigate to the project

```bash
    cd inspirers
```

3. Choose Node.js version and install dependencies

```bash
    nvm
```

### Database

#### MacOS
- Download and install the PostgreSQL app from [here](https://postgresapp.com/downloads.html).
- Run the server.


#### Via Docker

##### Pull Docker Image

```bash
  docker pull postgres:alpine
```

##### Run Container

```bash
  docker run --name <name> -e POSTGRES_PASSWORD=<password> -d p
ostgres-alpine
```

##### Expose Container

```bash
  docker exec -it <container_name> bash
```

## Directory Structure

On the root of the project there are two main folders namely;

- Apps
- Packages

### Apps

Inside the app folder there are mainly three folders namely;

-api
-web
-docs

##### API

This contains the APIs of our project. Next.js uses the folders and files in the api folder to derive the endpoints of our project.

##### DOCS

This contains the documentation of the project.

##### Web

This contains the main project.

### Packages

Contains common packages used throughout the project and much more. Some of the folders inside packages include;

##### prisma

Prisma configuration

##### tsconfig

Typescript configuration

##### Types

Common types used throughout the project

##### UI

Common UI components

### Contribution.md

Checkout this document to see the various ways how you can contribute to the project.

### Package.json

Inside the package.json file we have;

![Image not loading](https://res.cloudinary.com/dwacr3zpp/image/upload/v1659968414/inspirers/images/Ins-package.png)

## App capabilities

A user will be able to create journeys made up of specific achievable tasks and set up a routine they can follow, this will enable the user to reach their goals, change their habits and master the art of success. And thus ultimately create a better version of themselves.

Are you ready to find out what you're truly capable of? The journey begins here , at Inspirers.



version: '3'
services:
  api:
    container_name: api
    build:
      context: .
      dockerfile: Dockerfile-api
    ports:
      - 5000:5000
    env_file:
      - ./.env
    depends_on:
      - db
  db:
    container_name: db
    image: mysql
    ports:
      - 3306:3306
    expose:
      # Opens port 3306 on the container
      - '3306'
    cap_add:
      - SYS_NICE
    restart: always
    environment:
      MYSQL_DATABASE: 'db'
      # So you don't have to use root, but you can if you like
      MYSQL_USER: 'user'
      # You can use whatever password you like
      MYSQL_PASSWORD: 'password'
      # Password for root access
      MYSQL_ROOT_PASSWORD: 'password'
    volumes:
      - db:/var/lib/mysql
      - ./db/init.sql:/docker-entrypoint-initdb.d/init.sql
  redis:
    image: redis:6
  dev:
    container_name: dev
    build:
      dockerfile: Dockerfile-dev
      context: .
    env_file:
      - .env
  docs:
    container_name: docs
    build:
      dockerfile: Dockerfile-docs
      context: ./
    ports:
      - 3001:3001
    env_file:
      - ./.env
  web:
    build:
      context: .
      dockerfile: Dockerfile-app
    ports:
      - 3001:3001
    env_file: .env
volumes:
  db:
    driver: local
