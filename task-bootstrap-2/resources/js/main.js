// code for slide-show-image thet may used in this bootstrap site
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

// code for slide bar  basically i used it on the place of static image banner 
var slides = document.querySelector(".slider-item").children;
var nextSlide = document.querySelector('.right-slide');
var prevSlide = document.querySelector('.left-slide');
var totalSlides = slides.length;
console.log(totalSlides);
var index = 0;

nextSlide.onclick = function() {
	next("next");
}
prevSlide.onclick = function() {
	next("prev");
}

function next(direction) {
	if(direction=="next") {
		index++;
		if(index==totalSlides) {
			index = 0;
		}
	} else {
		if(index==0) {
			index=totalSlides-1;
		} else {
			index--;
		}
	}
	for (i=0; i<slides.length;i++) {
		slides[i].classList.remove("active");
	}
	slides[index].classList.add("active");
}