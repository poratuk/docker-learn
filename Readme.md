# Docker lecture

Here is code based on learn cuorses from [Udemy](https://www.udemy.com/course/docker-and-docker-compose/).


## Production
To simple run production on some server use: 
`docker-compose up`

## Development
To build and run local developmen version with hot reload for server and frontend use
```
docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build
```

