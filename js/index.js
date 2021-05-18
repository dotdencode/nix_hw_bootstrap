// реализация прогресс бара

window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    document.querySelector('.progress-bar').style.width = scrolled + '%';
}

// обработчик события для отправления данных

let sender = document.querySelector('.send-data');
let data = document.querySelectorAll('.form-control');
let modal = document.querySelector('.modal-dialog');
let saver = document.querySelector('.save-data');

sender.addEventListener('click', () => {

    if ((data[0].value.length === 0 || data[1].value.length === 0) || (data[0].value === +(data[0].value) || data[1].value === +(data[1].value))) {
        alert('Введите своё имя и фамилию!');
        modal.style.display = 'none';
    }

    if (data[2].value.length > 13 || data[2].value.length === 0) {
        alert('Введите корректный номер телефона!');
        modal.style.display = 'none';
    }

    if (data[3].value.length === 0 || !(data[3].value.indexOf('@'))) {
        alert('Введите корректный email!');
        modal.style.display = 'none';
    }
});

saver.addEventListener('click', () => {
    alert(`Имя: ${data[0].value}\nФамилия: ${data[1].value}\nТел. номер: ${data[2].value}\nE-mail: ${data[3].value}\nПожелания: ${data[4].value}`);
    modal.style.display = 'none';
});

// смена темы на сайте

document.querySelector('.themes').addEventListener('change', event => {
    if (event.target.className === 'dark') {
        let darkLogo = document.querySelector('.general-info');
        let darkFooter = document.querySelector('.footer');
        let progBar = document.querySelector('.progress-bar');

        darkLogo.style.backgroundColor = '#070B19';
        darkFooter.style.backgroundColor = '#070B19';
        progBar.style.backgroundColor = '#070B19';
    }

    if (event.target.className === 'light') {
        let darkLogo = document.querySelector('.general-info');
        let darkFooter = document.querySelector('.footer');
        let progBar = document.querySelector('.progress-bar');

        darkLogo.style.backgroundColor = '#9B1E1E';
        darkFooter.style.backgroundColor = '#9B1E1E';
        progBar.style.backgroundColor = '#9B1E1E';
    }
});

// запрет копирования и просмотра код страницы

document.oncontextmenu = () => false;

// Cкрипт, который через 5 минут бездействия пользователя высвечивает сообщение «Вы еще здесь?»

setInterval(() => {
    confirm('Вы ещё здесь?') ? true : window.close();
}, 50000);

// Cкрипт, который внизу вашей страницы покажет читабельную информацию про версию и название вашего браузера.

let footer = document.querySelector('.footer');
let info = document.createElement('div');

info.style.marginTop = 30 + 'px';
info.style.fontSize = 18 + 'px'
info.style.color = 'white';
info.innerHTML = `Ваш браузер: ${bowser.name}  v${bowser.version}`;

footer.appendChild(info);
