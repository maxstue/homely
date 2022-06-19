---
description: ''
sidebar: 'docs'
prev: '/docs/troubleshooting/'
next: '/docs/faq/'
---

# Devtools

Any information about tools for developers will be listed here. 🚀
You don't need to use all of these tools, and these information are just a little heads up for you. 
> For more information go to there website.

## Docker
`docker ps` => to show all running container  
`docker images` => to show all downloaded images  
`docker pull postgres:alpine` => get latest stable version (12 atm)  
`docker run --name postgres-smartHub -e POSTGRES_PASSWORD=1234 -d -p 5432:5432 postgres:alpine` => to run the postgres image 
under given name and pass in the wanted password. Use this command to run the container not from `docker-compose`.  
[Simple cheat sheet](https://www.google.com/search?q=docker+cheatsheet&rlz=1C1CHBD_deDE899DE899&oq=docker+cheatsheet&aqs=chrome..69i57j0l7.2651j0j7&sourceid=chrome&ie=UTF-8)

### Docker Compose
Got to the root/solution folder and type in the terminal
`docker-compose up`
or if you want to only start postgres you can call the mentioned __run__ command from earlier.

To stop all container from that compose file press ctrl+c or if you used `docker-compose up -d` type `docker-compose down`.  
[Simple cheat sheet](https://devhints.io/docker-compose)
## Dotnet user secrets cli
`dotnet user-secrets` => to show all secrets  
`dotnet user-secrets init` => initialize  
`dotnet user-secrets set "Movies:ServiceApiKey" "12345" --project C:\apps\WebApp1\src\WebApp1" ` => set key(Movies:ServiceApiKey) and value(12345) pair for project (C:\apps\WebApp1\src\WebApp1).
Not to the solution.  
`dotnet user-secrets` => shows help in terminal (one way to show the help page in terminal)

For more information got to the official [microsoft page](https://docs.microsoft.com/de-de/aspnet/core/security/app-secrets?view=aspnetcore-3.1&tabs=windows).

> More Coming soon...
