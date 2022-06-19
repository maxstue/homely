---
description: ''
sidebar: 'docs'
prev: '/docs/endpoints/'
next: '/docs/how-to-create-a-plugin/'
---

# How to contribute

We appreciate contributions of any kind. By participation in these projects, you agree to abide by our [code of conduct](https://github.com/SmartHub-Io/SmartHub/blob/master/.github/CODE_OF_CONDUCT.md).

### Any enhancements/bugs/etc you see?

Add an [issue](https://github.com/SmartHub-Io/SmartHub/issues/new/choose). We'll review it, add labels and reply as soon as possible.

### Documentation/etc need updating?

Go right ahead! Just submit a pull request when you're done.

## Pull Requests

We love pull requests from everyone.

> **The PR process applies to all repositories !!**  
> **All changes to [SmartHub](https://github.com/SmartHub-Io/SmartHub) or [SmartHub-Plugins](https://github.com/SmartHub-Io/SmartHub-Plugins) should be based from the `dev` branch.**

1. Clone (or fork) the repo.
2. Create a new branch, please use the [gitflow naming](https://danielkummer.github.io/git-flow-cheatsheet/).
    - e.g. "feature/addFeatureNameHere", "hotfix/addNameHere"
3. Push your changes to your branch and [submit a pull request](https://github.com/SmartHub-Io/SmartHub/compare) against the dev branch.  
    Some tips:
    1. Ensure the code is up to date __and__ all required pipelines are passed.(if forked you won't see the pipeline results)
    2. Update the README and/ or documentation(SmartHub-Docs) - if needed
    3. Write tests.
    4. Write a good [commit message](https://chris.beams.io/posts/git-commit)
4. Your pull request will be reviewed and if everything is fine it will get merged. We may suggest some changes, improvements or alternatives.

## Get your Environment ready

To develop on your local machine and contribute to any repository _([SmartHub](https://github.com/SmartHub-Io/SmartHub),
[SmartHub-Docs](https://github.com/SmartHub-Io/SmartHub-Docs), [SmartHub-Plugins](https://github.com/SmartHub-Io/SmartHub-Plugins))_,
just follow the steps below for the respective one.

### SmartHub

Follow these steps if you want to contribute to the __SmartHub__ project

#### Installation

1. Docker
    - Download and install docker for your OS [Link](https://docs.docker.com/)
2. .Net 5
    - Download and install .net 5 sdk for your OS [Link](https://dotnet.microsoft.com/download)
3. Node.js
    - Download and install Node.js for you OS [Link](https://nodejs.org/en/)
4. Ef core tool
    - Install Entity Framework core tool globally. Insert following command into your terminal:
    `dotnet tool install --global dotnet-ef`  
    - To update it type into a terminal `dotnet tool update --global dotnet-ef`
5. Clone Repository
    - `git clone https://github.com/SmartHub-Io/SmartHub.git`
6. Build and create database
    - Go to "SmartHub.Api/"
        - Type into a terminal `dotnet restore` then `dotnet build`
    - Go to "SmartHub.Ui/"
        - Type into a terminal `npm install`
    - Go to "SmartHub.Api/"
        - Type into a terminal `docker-compose up` or `docker-compose up -d` (so you don't need to open a new terminal)
        - Open the "appsetting.json" file and pass in your __Pgsql_User__ and __Pgsql_pwd__.(see below for default values)
            - **OR** `dotnet ef database update -- Pgsql_User=<your name> Pgsql_pwd=<your pwd>` (if yo do this you can skip the next step)
        - Type into terminal `dotnet ef database update` **This is not absolutely necessary, because it is executed automatically at startup.**

#### Run

1. Run `docker-compose up` from the "SmartHub.Api/" folder. _(starting database)_
2. Run `dotnet run Use_Staticfiles_DEV=false Pgsql_User=<your name> Pgsql_pwd=<your pwd>` from "SmartHub.Api" folder.
    - Or in your IDE run the "SmartHub.Api--Args" project Task from "launchSetting.json". _(starting backend)_
3. If _Use_Staticfiles_DEV=true_ you don't need to run `npm run serve` from the "SmartHub.Ui/" folder, because the Ui is being served from the backend. _(starting frontend)_
4. Open your browser and go to "localhost:8080" (UI) or "localhost:5000/swagger"(swagger).

__Pgsql_User__ => the username which is set in the docker-compose.override.yml file (__default__ == postgres)  
__Pgsql_pwd__ => the pwd which is set in the docker-compose.override.yml file (__default__ == 1234)  
    -> Edit these in the docker.compose.override.yml file  
__Use_Staticfiles_DEV__ => indicates whether the program uses a proxy to the separated started Ui or servers the Ui as static files (default is "false")
> Be aware running the program without these args will cause errors at the moment !!!

### SmartHub-Docs

Follow these steps if you want to contribute to the __Smarthub-Docs__ project.

#### Installation

1. Clone repository
    - `git clone https://github.com/SmartHub-Io/SmartHub-Docs.git`
2. Build and install packages
    - Go to the root directory
        - Type into a terminal `npm install`

#### Run

Just go to the root directory and type into a terminal  `npm run dev`.

### SmartHub-Plugins

Follow these steps if you want to contribute to the __Smarthub-Plugins__ project.  
You can only make sure all plugins can be build, you can't run them directly from this dotnet solution. 
More information on plugins are on the next page.

#### Installation

1. Clone repository
    - `git clone https://github.com/SmartHub-Io/SmartHub-Plugins.git`
2. Build 
    - Go to "SmartHub-Plugins/SmartHub-Plugins/" folder
        - Type into terminal `dotnet resore` and `dotnet build`
        - If no errors appear everything is perfect 😉
