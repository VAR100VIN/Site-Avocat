let menu = document.querySelector('aside');
let burger = document.querySelector('div.burger');
let bar1 = document.querySelector('div.bar1');
let bar2 = document.querySelector('div.bar2');
let bar3 = document.querySelector('div.bar3');
burger.addEventListener('click', () => {
    menu.classList.toggle('show');
    bar1.classList.toggle('triggered');
    bar2.classList.toggle('triggered');
    bar3.classList.toggle('triggered');
    bar1.classList.toggle('untriggered');
    bar2.classList.toggle('untriggered');
    bar3.classList.toggle('untriggered');
});




