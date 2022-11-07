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

