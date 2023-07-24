function changeLanguage(lang) {
    // Определение текстов для разных языков
    var texts = {
        'en': {
            'Home': 'HOME',
            'Services': 'SERVICES',
            'Contact': 'CONTACT',
            'welcome': 'We are an American based company professionally provide <span class="text-color">auto auction participating</span>',
            'about': 'We ship cars, motorcycles, boats, special machinery in containers from the USA to all over the world.',
            'button-contact': 'Contact us',
            'wedo': 'Services we do',
            'buy': 'Buying <br> assistance',
            'auto': 'Auto transport',
            'ware': 'Warehousing',
            'load': 'Automobile loading', 
            'motor': 'Motorcycle <br> loading',
            'boat': 'Boat <br> loading',
            'Heavy': 'Heavy <br> machinery <br> loading',
            'Dis': 'Dismantling',
            'Parts': 'Parts <br> purchase <br> assistance',
            'more': 'MORE ABOUT SERVICES',
            'txt-contact': 'Contact us',
            'txt-contact-p': 'Contact us if you need more information <br> about our services',
            'send': 'Send a Message',
            'copy': 'Copyright © 2022 Cargo. All Rights reserved.'
        },
        'ru': {
            'Home': 'ГЛАВНАЯ',
            'Services': 'УСЛУГИ',
            'Contact': 'КОНТАКТЫ',
            'welcome': 'Мы американская компания предоставляющая услуги <span class="text-color">участия в автомобильных аукционах</span>',
            // 'about': 'Мы доставляем автомобили, мотоциклы, лодки и специальную технику в контейнерах из США во все уголки мира.',
            'button-contact': 'Связаться с нами',
            'wedo': 'Услуги, которые мы делаем',
            'buy': 'Помощь <br> в покупке',
            'auto': 'Автомобильный <br>транспорт',
            'ware': 'Складирование',
            'load': 'Загрузка автомобиля',
            'motor': 'Загрузка <br>мотоцикла',
            'boat': 'Загрузка <br> лодки',
            'Heavy': 'Погрузка <br> тяжелой <br> техники',
            'Dis': 'Демонтаж',
            'Parts': 'Помощь <br> в покупке <br> запчастей',
            'more': 'ПОДРОБНЕЕ ОБ УСЛУГАХ',
            'txt-contact': 'Связаться с нами',
            'txt-contact-p': 'Свяжитесь с нами, если вам нужна дополнительная информация о наших услугах',
            'send': 'Отправить сообщение',
            'copy': 'Copyright © 2022 Cargo. Все права защищены.'
        }
    };

    // Получаем элементы, в которых будет меняться текст
    var homeText = document.querySelector('#home');
    var servicesText = document.querySelector('#services');
    var contactText = document.querySelector('#contact');
    var homeeText = document.querySelector('#homee');
    var servicessText = document.querySelector('#servicess');
    var contacteText = document.querySelector('#contactt');
    var welcomeText = document.querySelector('.text-main');
    var aboutText = document.querySelector('.text-small');
    var buttonContact = document.querySelector('.contact-us');
    var wedo = document.querySelector('.wedo');
    var buy = document.querySelector('.buy');
    var auto = document.querySelector('.auto');
    var ware = document.querySelector('.ware');
    var load = document.querySelector('.load');
    var motor = document.querySelector('.motor');
    var boat = document.querySelector('.boat');
    var heavy = document.querySelector('.Heavy');
    var dis = document.querySelector('.Dis');
    var parts = document.querySelector('.Parts');
    var more = document.querySelector('.more');
    var txtContact = document.querySelector('.txt-contact');
    var txtContactp = document.querySelector('.txt-contact-p');
    var send = document.querySelector('.send');
    var copy = document.querySelector('.copy');

    // Устанавливаем текст на странице в соответствии с выбранным языком
   
    homeText.innerHTML = texts[lang]['Home'];
    servicesText.innerHTML = texts[lang]['Services'];
    contactText.innerHTML = texts[lang]['Contact'];
    homeeText.innerHTML = texts[lang]['Home'];
    servicessText.innerHTML = texts[lang]['Services'];
    contacteText.innerHTML = texts[lang]['Contact'];
    welcomeText.innerHTML = texts[lang]['welcome'];
    aboutText.textContent = texts[lang]['about'];
    buttonContact.textContent = texts[lang]['button-contact'];
    wedo.textContent = texts[lang]['wedo'];
    buy.innerHTML = texts[lang]['buy'];
    auto.innerHTML = texts[lang]['auto'];
    ware.innerHTML = texts[lang]['ware'];
    load.innerHTML = texts[lang]['load'];
    motor.innerHTML = texts[lang]['motor'];
    boat.innerHTML = texts[lang]['boat'];
    heavy.innerHTML = texts[lang]['Heavy'];
    dis.innerHTML = texts[lang]['Dis'];
    parts.innerHTML = texts[lang]['Parts'];
    more.innerHTML = texts[lang]['more'];
    txtContact.innerHTML = texts[lang]['txt-contact'];
    txtContactp.innerHTML = texts[lang]['txt-contact-p'];
    send.innerHTML = texts[lang]['send'];
    copy.innerHTML = texts[lang]['copy'];


    if (lang == 'ru') {
        document.querySelector('.ru').classList.add('active-color');
        document.querySelector('.english').classList.remove('active-color');
        welcomeText.classList.add('up');
    } else if (lang == 'en') {
        document.querySelector('.english').classList.add('active-color');
        document.querySelector('.ru').classList.remove('active-color');
        welcomeText.classList.remove('up');
    } else {
        document.querySelector('.english').classList.remove('active-color');
        document.querySelector('.ru').classList.remove('active-color');
    }
}
