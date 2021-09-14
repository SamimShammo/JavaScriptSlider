const images = [
    'img/img-1 (1).jpg',
    'img/img-1 (2).jpg',
    'img/img-1 (3).jpg',
    'img/img-1 (4).jpg',
    'img/img-1 (5).jpg',
    'img/img-1 (6).jpg',
    'img/img-1 (7).jpg',
    'img/img-1 (8).jpg',
    'img/img-1 (9).jpg'
];

let imgIndex = 0;
let imgId = document.getElementById('img-slider')

setInterval(() => {
    imgIndex++
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    let imgUrl = images[imgIndex]
    imgId.setAttribute('src', imgUrl)
    
   
    console.log(imgUrl)
}, 2000)