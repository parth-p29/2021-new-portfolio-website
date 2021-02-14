var app = document.querySelector('.typing');
 
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .typeString('Parth!')
  .pauseFor(2000)
  .deleteChars(6)
  .pauseFor(1200)

  //

  .typeString('a software developer.')
  .pauseFor(2000)
  .deleteChars(19)
  .pauseFor(1200)

  //

  .typeString('designer.')
  .pauseFor(2000)
  .deleteChars(11)
  .pauseFor(1200)

  //

  .typeString('an explorer.')
  .pauseFor(2000)
  .deleteChars(11)
  .pauseFor(1200)

  //

  .typeString(' problem-solver.')
  .pauseFor(2000)
  .deleteChars(19)
  .pauseFor(1200)

  //
  
  .start();

