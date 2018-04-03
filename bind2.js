//this refers to the global object in Node
//in Browser it is the Window Object

function talk(){
  console.log(this.sound)
}

//functions are just values that you can pass around
//talk is being assigned as a property
let boromir =
  speak: talk,
  sound:'One does not simply walk into Mordor'
}

boromir.speak()//sound

let talkBoundToBoromir = talk.bind(boromir)

talkBoundToBoromir()//sound

talk()//undefined

boromir.speaking =talk.bind(boromir)//sound

let blabber = boromir.speak
blabber()//undefined
