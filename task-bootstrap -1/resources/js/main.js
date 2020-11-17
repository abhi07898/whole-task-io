var images = [
    "resources/images/about1.jpg",
    "resources/images/signup.jpg",
    "resources/images/emp1.jpg",
    "resources/images/emp2.jpg"
];
var i=0;
function changeImg() {
    document.getElementById("img-slide").src = images[i];
    document.getElementById("img-slide1").src = images[i];
    if(i< images.length-1) {
        i++;
    } else {
        i=0;
    }   
}
setInterval(changeImg,1000);


