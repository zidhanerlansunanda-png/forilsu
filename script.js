document.getElementById("openBtn").onclick = function() {
  document.getElementById("opening").style.display = "none";
  document.getElementById("content").style.display = "block";
};

document.addEventListener("click", function(e){

  if(e.target.id === "nextBtn"){
    document.getElementById("content").style.display = "none";
    document.getElementById("galleryPage").style.display = "block";
  }

  if(e.target.id === "backBtn1"){
    document.getElementById("galleryPage").style.display = "none";
    document.getElementById("content").style.display = "block";
  }

  if(e.target.id === "nextBtn2"){
    document.getElementById("galleryPage").style.display = "none";
    document.getElementById("finalPage").style.display = "block";
  }

  if(e.target.id === "backBtn2"){
    document.getElementById("finalPage").style.display = "none";
    document.getElementById("galleryPage").style.display = "block";
  }

});