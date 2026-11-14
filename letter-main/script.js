const message = `dear ma'am roan, thank you for being considerate and showing us compassion whenever we need it, for giving us a safe space to breathe and take rest, and for being the kind of teacher you are to your students. alam mo po ma'am i never felt intimidated by you po, you make the learning environment so inviting and comfortable na hindi po ako kinakabahan every time na nagkaklase po tayo kasi alam ko po na hindi n'yo po huhusgahan kapag may hindi po kami alam kasi you will guide us patiently to ensure na may matutunan kami. i consider myself so lucky po na naranasan ko po ikaw at si sir alex na maging teacher po, please don't ever change po. every student needs a teacher like you and sir alex :) 'di n'yo man po ako maalala sa dami po ng students n'yo pero for sure po maalala ko kayo sa buong college journey ko!

  - jhasmine`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.getElementById("notif").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";
  document.querySelector(".container").style.display = "none";
  
  setTimeout(() => {
    document.body.classList.add("letter-opened")
    
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;
    
    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }
    
    typeWriter();
  }, 600);
}
