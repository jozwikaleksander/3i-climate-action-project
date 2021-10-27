const sliders = document.querySelectorAll('.slider');
console.log(sliders);

sliders.forEach((slider) => {
    const slides = slider.querySelectorAll('.slide');
    const nextBtn = slider.querySelector('.next-btn');
    const prevBtn = slider.querySelector('.prev-btn');

    slides.forEach((slide,index) => {
        slide.style.left = `${index*100}%`;
    });

    let counter = 0;
    nextBtn.addEventListener('click',() => {
        if(!nextBtn.classList.contains('inactive'))
        {
            counter++;
            carousel();
        }    
    })
    prevBtn.addEventListener('click',() => {
        if(!prevBtn.classList.contains('inactive'))
        {
            counter--;
            carousel();
        } 
    });

    const carousel = () => {

        if(counter < slides.length - 1){
            nextBtn.classList.remove('inactive');
        }
        else{
            nextBtn.classList.add('inactive');
        }
        if(counter > 0){
            prevBtn.classList.remove('inactive');
        }
        else{
            prevBtn.classList.add('inactive');
        }

        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        })
    }
    prevBtn.classList.remove('inactive');
});

