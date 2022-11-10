# Inspirers

Go on an amazing journey with Inspirers and get inspired by the people who are doing what YOU aspire to do. Advice, motivation, and encouragement are at your fingertips.

  <p align="center">
    Do you want to realize your dreams and, at the same time, inspire other people?
    ·
    <a href="https://inspirers.co">Website</a>
    ·
    <a href="https://github.com/Emmanuel-Melon/inspirers/issues">Issues</a>
    ·
    <a href="https://cal.com/roadmap">Roadmap</a>
  </p>
  
Become an Inspirer and share your progress with friends. Show them how you're growing, your highs and lows, and get inspired by others.

## Getting Started

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


