function talk(){
  console.log(this)
  console.log(this.sound)
}

//now this = the animal object
//still undefined because there is not a sound property
let animal ={
  talk
}

let cat = {
  sound:'meaw'
}
//Prototype Chain

let prarieDog ={
  howl: function(){
    console.log(this.sound.toUpperCase())
  }
}
//for this object use this other object as a backup
Object.setPrototypeOf(cat, animal)

animal.talk= function(){
  console.log("I'm a little teapot")
}

cat.talk()
//setting prarieDog to cat Prototype
Object.setPrototypeOf(prarieDog, cat)
prarieDog.howl()
animal.talk()
