var app = document.querySelector('.typing');
 
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(800)
  .typeString('software developer.')
  .pauseFor(1500)
  .deleteChars(19)
  .pauseFor(1000)

  //

  .typeString('problem-solver.')
  .pauseFor(1500)
  .deleteChars(15)
  .pauseFor(1000)

  //

  .typeString('leader.')
  .pauseFor(1500)
  .deleteChars(7)
  .pauseFor(1000)

  //

  .typeString('life-long learner.')
  .pauseFor(1500)
  .deleteChars(18)
  .pauseFor(1000)

  //

  .typeString('designer.')
  .pauseFor(1500)
  .deleteChars(9)
  .pauseFor(1000)


  
  .start();

