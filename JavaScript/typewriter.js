var app = document.querySelector('.typing');
 
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .typeString('Parth!')
  .pauseFor(2000)
  .deleteChars(6)
  .pauseFor(1600)

  //

  .typeString('a software developer.')
  .pauseFor(2000)
  .deleteChars(19)
  .pauseFor(1600)

  //

  .typeString('life-long learner.')
  .pauseFor(2000)
  .deleteChars(18)
  .pauseFor(1600)

  //

  .typeString('problem-solver.')
  .pauseFor(2000)
  .deleteChars(17)
  .pauseFor(1600)

  //
  
  .start();

