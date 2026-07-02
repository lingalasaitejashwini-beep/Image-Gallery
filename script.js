const images=[
"images/image1.jpg",
"images/image2.jpg",
"images/image3.jpg",
"images/image4.jpg",
"images/image5.jpg",
"images/image6.jpg"
];

let current=0;

function openLightbox(index){

current=index;

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-image").src=images[current];
}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";
}

function changeImage(step){

current+=step;

if(current<0)
current=images.length-1;

if(current>=images.length)
current=0;

document.getElementById("lightbox-image").src=images[current];
}

function filterSelection(category){

let items=document.getElementsByClassName("gallery-item");

for(let i=0;i<items.length;i++){

if(category==="all"){

items[i].style.display="block";
}

else{

if(items[i].classList.contains(category))
items[i].style.display="block";
else
items[i].style.display="none";

}
}
}