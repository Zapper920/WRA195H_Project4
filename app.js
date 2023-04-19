document.querySelector('button').addEventListener('click', function() {
    document.querySelector('#cFTB1').style.height= 'auto';
    this.style.display= 'none';
  });

const filled = document.querySelector('.progress-bar');

function update () {
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(update);
}

function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 

function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 

function myFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 

function cFTB1() {
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

    if (moreText.style.height != "auto") {
        moreText.style.height = "auto";
        btnText.innerHTML = "Read less";
    } else{
        moreText.style.height = "4.8em";
        btnText.innerHTML = "Read more";
    }
}

function cFTB2() {
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (moreText.style.height != "auto") {
        moreText.style.height = "auto";
        btnText.innerHTML = "Read less";
    } else{
        moreText.style.height = "4.8em";
        btnText.innerHTML = "Read more";
    }
}

function cFTB3() {
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");

    if (moreText.style.height != "auto") {
        moreText.style.height = "auto";
        btnText.innerHTML = "Read less";
    } else{
        moreText.style.height = "4.8em";
        btnText.innerHTML = "Read more";
    }
}

update();
