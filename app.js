const images = [
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
    'images/img-5.jpg',
    'images/img-6.jpg',
    'images/img-7.jpg'
]
let imgIndex = 0;
const img = document.getElementById('slider')
const slider = () => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    if (imgIndex < 0) {
        imgIndex = images.length - 1;
    }
    const imgUrl = images[imgIndex];
    img.setAttribute('src', imgUrl);
}
const slideChange = (changeIndex) => {
    if (changeIndex) {
        imgIndex++;
        slider();
    } else {
        imgIndex--;
        slider();
    }
}
setInterval(() => {
    imgIndex++;
    slider();
}, 3000);

