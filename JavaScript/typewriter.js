var app = document.querySelector('.typing');
 
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(800)
  .typeString('software developer.')
  .pauseFor(2000)
  .deleteChars(19)
  .pauseFor(1300)

  //

  .typeString('problem-solver.')
  .pauseFor(2000)
  .deleteChars(15)
  .pauseFor(1300)

  //

  .typeString('leader.')
  .pauseFor(2000)
  .deleteChars(7)
  .pauseFor(1500)

  //

  .typeString('life-long learner.')
  .pauseFor(2000)
  .deleteChars(18)
  .pauseFor(1300)

  //

  .typeString('designer.')
  .pauseFor(2000)
  .deleteChars(9)
  .pauseFor(1300)


  
  .start();

