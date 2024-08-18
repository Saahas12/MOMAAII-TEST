let dropIcon = document.getElementById('hamburger')

dropIcon.addEventListener('click',function(){
    let x = document.getElementById("my-Links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
})


// Get reference to the dropdown icon
const dropdownIcon = document.getElementById('men-drop');

// Get reference to the submenu
const submenu = document.getElementById('sub-ul-1');

// Add click event listener to the dropdown icon
dropdownIcon.addEventListener('click', function() {
    // Toggle visibility of the submenu
    submenu.classList.toggle('visible');
});


const dropdownIcon1 = document.getElementById('women-drop');

// Get reference to the submenu
const submenu1 = document.getElementById('sub-ul-2');

// Add click event listener to the dropdown icon
dropdownIcon1.addEventListener('click', function() {
    // Toggle visibility of the submenu
    submenu1.classList.toggle('visible');
});



