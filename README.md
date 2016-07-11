# Run Mural challenge development environment


```
#!javascript

npm install
npm run debug
```

# Global State
{
    id: // id for the new reader
    scrollPos: // initial scroll position
    leader: // boolean for checking if the current reader is a leader or not
}

# Actions
    1. sendScrollEvent: sends current scroll position via ws
    2. establishWSConnection: establish a websocket connection with challenge-gateway
    3. updateScrollPosition: updates current reader state scroll position
    4. updateLeader: updates current reader leader state
