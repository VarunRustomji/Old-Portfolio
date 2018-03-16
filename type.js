$(function(){
  $(".write").typed({
    strings: ["CS student at SFU ", "Tech enthusiast "],
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // character for cursor
    cursorChar: "|",
    //looping
    loop: true,
    //contentType
  contentType: 'html'
  });
});
