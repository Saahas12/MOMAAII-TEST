let dropIcon = document.getElementById('hamburger')

dropIcon.addEventListener('click',function(){
    let x = document.getElementById("my-Links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
})
