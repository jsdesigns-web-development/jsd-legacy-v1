// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');


// Get the image and insert it inside the modal - use its "alt" text as a caption
//var captionText = document.getElementById("caption");
var img1 = document.getElementById('myImg1');
var modalImg1 = document.getElementById("img01");
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");

img1.onclick = function(){
    modal1.style.display = "block";
    modal2.style.display = "none";
    modalImg1.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function(){
    modal1.style.display = "none";
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText.innerHTML = this.alt;
}

modal1.onclick = () => {
  modal1.style.display = "none";
}

modal2.onclick = () => {
  modal2.style.display = "none";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    span();
}
