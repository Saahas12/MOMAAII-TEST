let png = document.getElementById('diamond-icon');
let para = document.getElementById('about-desc');
png.addEventListener('click', () => {

    if (para.style.maxHeight && para.style.maxHeight !== '0px') {
        para.style.maxHeight = '0px'; // Collapse with transition
        para.style.opacity = '0';  // Fade out
    } else {
        para.style.maxHeight = para.scrollHeight + "px"; // Expand with transition
        para.style.opacity = '1';  // Fade in
    }
})