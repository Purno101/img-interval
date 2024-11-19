// Image preload function
function preloadImages() {
  const images = [];
  for (let i = 1; i <= 36; i++) {  // Adjust the total number of images here
      const img = new Image();
      img.src = "p" + i + ".jpg";
      images.push(img);  // Preload image
  }
}

const btn = document.querySelector("button");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
let imgCount1 = 2;
let imgCount2 = 2;
let interval1 = null;
let interval2 = null;

// Preload images when the page loads
window.onload = preloadImages;

btn.addEventListener("click", function() {
  // Clear existing intervals if any
  if (interval1 || interval2) {
      clearInterval(interval1);
      clearInterval(interval2);
  }

  // Start intervals to change images
  interval1 = setInterval(changeImg1, 3000);
  interval2 = setInterval(changeImg2, 5000);

  function changeImg1() {
      fadeOut(img1, function() {
          img1.src = "p" + imgCount1 + ".jpg";
          imgCount1++;
          if (imgCount1 === 37) {  // Adjust the total number of images here
              imgCount1 = 1;
          }

          // Wait for the image to load before fading it in
          img1.onload = function() {
              fadeIn(img1);
          };
      });
  }

  function changeImg2() {
      fadeOut(img2, function() {
          img2.src = "p" + imgCount2 + ".jpg";
          imgCount2++;
          if (imgCount2 === 37) {  // Adjust the total number of images here
              imgCount2 = 1;
          }

          // Wait for the image to load before fading it in
          img2.onload = function() {
              fadeIn(img2);
          };
      });
  }
});

// Fade-out function
function fadeOut(img, callback) {
  img.style.opacity = 0;
  setTimeout(callback, 300);  // Callback after 300ms for smoother transition
}

// Fade-in function
function fadeIn(img) {
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