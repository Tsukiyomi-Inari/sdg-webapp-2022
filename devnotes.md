
# SDG Development APP NOTES

    ## To DO - or Remember
    - [ ] Project Plan (https://thedigitalprojectmanager.com/project-plan-guide/#define-your-workflow)
    - [ ] Reference notes (https://github.com/uclaacm/centralized-intern-training)
    - [ ] React reference (https://vasanthk.gitbooks.io/react-bits/content/)
    - [ ] More react reference (https://www.freecodecamp.org/news/react-beginner-handbook/)
    - [ ] more more (https://create-react-app.dev/docs/setting-up-your-editor)
    - [ ] Oauth search on github for login/logout (https://github.com/search?p=3&q=oauth&type=Repositories)
    - [ ] Tutorial "guide" for this project structure (https://blog.logrocket.com/mern-stack-tutorial/)
    - [ ] Other tutorial for reference for project (https://www.mongodb.com/languages/mern-stack-tutorial)

## Development Journal

    2022-06-06 : worked on learning React within Codecademy
    

## Intro
<hr>

##### Problem

SDG not well known by kids and the next generation need a quick way to get introduced to all the goals.

##### How it will be solved
An easy to navigate interactive web app where the main points can be absorbed quickly and if a student wishes there are resousces for learning more.

#### What will be used
Assets can be obtained from [United Nations SDG Website Media Page](https://www.un.org/sustainabledevelopment/news/communications-material/)
    -> MERN Stack
        |- MongoDB
        |- ExpressJS
        |- React
        |- NodeJS

## COMPONENTS
<hr>

### AWS
    -> AWS Amplify hosting 15 GB(free for 12 months) ** storage?
    -> DB MongoDB Atlas deployed with serverless instance to AWS https://www.mongodb.com/docs/atlas/reference/amazon-aws/?_ga=2.197020270.358884822.1654287291-2136693309.1653605426 
    -> Availability ZONE: us-east-1 
    -> might be this? (https://us-east-1.console.aws.amazon.com/docdb/home?region=us-east-1#landing)
        -> guide (https://docs.aws.amazon.com/quickstart/latest/mongodb/step2.html)
        -> Driver use for connection (https://www.mongodb.com/docs/drivers/node/current/quick-start/)


### DATABASE

```
    -> AWS MongoDB Atlas? 
        |-> https://www.mongodb.com/free-cloud-database
        |-> https://bitnami.com/stack/mongodb/cloud mongoDB packaged by bitnami for AWS
            |->https://bitnami.com/stack/mongodb/cloud/aws
```

### API 
<details>
<summary>Connecting to the Database...</summary>

** referenced webpage https://www.mongodb.com/docs/atlas/api/data-api-resources/

Base URL 

            https://data.mongodb-api.com/app/<Data API App ID>/endpoint/data/beta
                **region specific
            https://<region>.aws.data.mongodb-api.com/app/<Data API App ID>/endpoint/data/beta
    
Single Doc - endpoint

```
            POST /action/findOne
```

```js
           curl --request POST \
                'https://data.mongodb-api.com/app/<Data API App ID>/endpoint/data/beta/action/findOne' \
                --header 'Content-Type: application/json' \
                --header 'Access-Control-Request-Headers: *' \
                --header 'api-key: <Data API Key>' \
                --data-raw '{
                    "dataSource": "Cluster0",
                    "database": "todo",
                    "collection": "tasks",
                    "filter": {
                        "text": "Do the dishes"
                    }
                }'
```
Find multiple Documents - endpoint
            POST /action/find

```js
            curl --request POST \
                'https://data.mongodb-api.com/app/<Data API App ID>/endpoint/data/beta/action/find' \
                --header 'Content-Type: application/json' \
                --header 'Access-Control-Request-Headers: *' \
                --header 'api-key: <Data API Key>' \
                --data-raw '{
                    "dataSource": "Cluster0",
                    "database": "todo",
                    "collection": "tasks",
                    "filter": {
                        "status": "complete"
                    },
                    "sort": { "completedAt": 1 },
                    "limit": 10
                }'
```

</details>

##### **REASERCH**
* https://unstats.un.org/sdgapi/swagger/
* https://www.sdg6data.org/api
* https://unstats-undesa.opendata.arcgis.com/
* https://github.com/Esri/sdg-api
* https://data.worldbank.org/ World Bank Open Data (Global Development Data)
* 

##### Data Visualization

* https://nivo.rocks/components/

