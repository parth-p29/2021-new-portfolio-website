var app = document.querySelector('.typing');
 
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .typeString('Parth!')
  .pauseFor(2000)
  .deleteChars(6)
  .pauseFor(2000)

  //

  .typeString('a software developer.')
  .pauseFor(2000)
  .deleteChars(21)
  .pauseFor(2000)

  //

  .typeString('a life-long learner.')
  .pauseFor(2000)
  .deleteChars(20)
  .pauseFor(2000)

  //

  .typeString('a problem-solver.')
  .pauseFor(2000)
  .deleteChars(17)
  .pauseFor(2000)

  //
  
  .start();

