// toggling nav

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',() => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight+20}px`;
    }
    else{
        linksContainer.style.height = 0;
    }
});

// up btn
const upBtn = document.querySelector('.up-btn');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;

    if(scrollHeight > 500){
        upBtn.classList.add('show-up-btn');
    }
    else{
        upBtn.classList.remove('show-up-btn');
    }
});

// scroll links

const navbar = document.querySelector('.nav');

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    position = position + containerHeight-20;

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});