

const navSlide = () => {
     let burger = document.querySelector('.hamburger');
     let rightSide = document.querySelector('.right-side')

     let listItems = document.querySelectorAll('.right-side .list-item');

     let navBtns = document.querySelectorAll('.right-side .btn')

     console.log(navBtns, listItems)

     burger.addEventListener('click', () => {
          rightSide.classList.toggle('nav-active');

          listItems.forEach((item, index) => {
               if (item.style.animation) {
                    item.style.animation = ' ';
               }
               else {
                    item.style.animation = `navSlider 0.5s ease forwards ${index / 6 + 1}`
               }

          })
     });
}

navSlide();