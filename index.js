//import json-server libraray
const jsonServer = require('json-server')

//create server using create function
const mediaplayerserver = jsonServer.create()

//create path for db.json file
const router =jsonServer.router('db.json')

//create middleware to convert json into js
const middleware = jsonServer.defaults()


//connect
mediaplayerserver.use(middleware)
mediaplayerserver.use(router)

//setup port for the server
const port = 4000 || process.env.port

// run the server
mediaplayerserver.listen(port,()=>{
  console.log('MediaPlayer Server Running Succesfully');
})