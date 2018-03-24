//For the typing function
$(function(){
  $(".write").typed({
    strings: ["Hi, ^300 my name is Varun! ", ],
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    backSpeed: 1,
    // time before backspacing
    backDelay: 900,
    // character for cursor
    cursorChar: "|",
    //looping
    loop: false,
    //contentType
    contentType: 'html'
  });
});

//For the Welcome animation
setTimeout(function() {
  $('.fly-in-text').removeClass('hidden');
}, 2500);

function delay(ms) {
   ms += new Date().getTime();
   while (new Date() < ms){}
}



//Scroll Down

setTimeout(function() {
  // console.log(document.getElementsByClassName('arrow').style.visibility);
  var onj = document.getElementById("scroll").style.visibility='visible';
  // console.log(onj);

}, 4000);
