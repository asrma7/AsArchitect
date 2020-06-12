var imgindex = 2;

function slideshow() {
    var carousel = document.getElementById('carousel-image');
    var image1 = "images/carousel-1.jpg";
    var image2 = "images/carousel-2.jpg";
    var image3 = "images/carousel-3.jpg";
    var image4 = "images/carousel-4.jpg";
    carousel.src = eval('image' + imgindex);
    imgindex = imgindex < 4 ? imgindex + 1 : 1;
}
setInterval(slideshow, 3000);