//object literal dog with property sound that we have set to string woof
//method talk brings out the sound property to the console
let dog = {
  sound: 'woof',
  talk: function(){
    console.log(this.sound)
  }
}

dog.talk()

// In JavaScript I can assign a function to a variable
//JavaScript is a functional programming language
//now no longer a method it is a function
let talkFunction = dog.talk

let boundFunction= talkFunction.bind(dog)

boundFunction()

//when you call it, it will no longer be dog
//lost its connection, this does not carry over so we bind it
talkFunction()
