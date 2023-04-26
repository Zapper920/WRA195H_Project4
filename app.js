document.querySelector('button').addEventListener('click', function() {
    document.querySelector('#cFTB1').style.height= 'auto';
    this.style.display= 'none';
  });

const filled = document.querySelector('.progress-bar');

function update () {
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(update);
}

function cFTB1() {
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
    var gradient = document.getElementById("grad1");

    if (moreText.style.height != "auto") {
        moreText.style.height = "auto";
        btnText.innerHTML = "Read less";
        gradient.style.visibility = "hidden"
    } else{
        moreText.style.height = "4.8em";
        btnText.innerHTML = "Read more";
        gradient.style.visibility = "visible"
    }
}

function cFTB2() {
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
    var gradient = document.getElementById("grad2");

    if (moreText.style.height != "auto") {
      moreText.style.height = "auto";
      btnText.innerHTML = "Read less";
      gradient.style.visibility = "hidden"
  } else{
      moreText.style.height = "4.8em";
      btnText.innerHTML = "Read more";
      gradient.style.visibility = "visible"
  }
}

function cFTB3() {
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
    var gradient = document.getElementById("grad3");

    if (moreText.style.height != "auto") {
      moreText.style.height = "auto";
      btnText.innerHTML = "Read less";
      gradient.style.visibility = "hidden"
  } else{
      moreText.style.height = "4.8em";
      btnText.innerHTML = "Read more";
      gradient.style.visibility = "visible"
  }
}

update();
