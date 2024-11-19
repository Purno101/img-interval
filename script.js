const btn = document.querySelector("button");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
let imgCount1 = 2;
let imgCount2 = 2;
let interval1 = null;
let interval2 = null;

btn.addEventListener("click", function() {
    
    if (interval1 || interval2) {
        clearInterval(interval1);
        clearInterval(interval2);
    }

    interval1 = setInterval(changeImg1, 3000);
    interval2 = setInterval(changeImg2, 5000);

    function changeImg1() {
        fadeOut(img1, function() {
            img1.src = "p" + imgCount1 + ".jpg";
            imgCount1++;
            if (imgCount1 === 37) {
                imgCount1 = 1;
            }
            fadeIn(img1);
        });
    }

    function changeImg2() {
        fadeOut(img2, function() {
            img2.src = "p" + imgCount2 + ".jpg";
            imgCount2++;
            if (imgCount2 === 37) {
                imgCount2 = 1;
            }
            fadeIn(img2);
        });
    }

});

// Fade-out function
function fadeOut(img, callback) {
    img.style.transition = "opacity 0.3s ease";
    img.style.opacity = 0;


    setTimeout(callback, 500);
}

// Fade-in function
function fadeIn(img) {
    img.style.transition = "opacity 0.3s ease";
    img.style.opacity = 1;
}


//StopWatch

    var seconds = 0; 
    var tens = 0; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    btn.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
         clearInterval(interval1);
         clearInterval(interval2);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
       clearInterval(interval1);
       clearInterval(interval2);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        img1.src = "p1.jpg";
        img2.src = "p1.jpg";
        imgCount1 = 2;
        imgCount2 = 2;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }