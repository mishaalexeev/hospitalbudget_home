var languageChanged = false; // Изначально язык не менялся

function changeLanguage() {
    var btnText1 = document.getElementById('site1Btn').querySelector('.btn-text');
    var btnText2 = document.getElementById('site2Btn').querySelector('.btn-text');

    if (btnText1.textContent === "Чрескожные коронарные вмешательства с применением ротационной атерэктомии") {
        btnText1.textContent = "Percutaneous Coronary Interventions with Rotational Atherectomy";
        // btnText2.textContent = "Peripheral Vascular Interventions";
        btnText2.innerHTML = "Peripheral<br />Vascular Interventions";
    } else {
        btnText1.textContent = "Чрескожные коронарные вмешательства с применением ротационной атерэктомии";
        btnText2.textContent = "Вмешательства на периферических сосудах";
    }

    var directionText = document.getElementById('directionText');
    var languageBtn = document.querySelector('.language-btn');
    if (languageBtn.textContent === "RU") {
        languageBtn.textContent = "EN";
        directionText.innerHTML = "Economic models for assessing the financial capabilities of medical organizations<br>seeking to implement advanced treatment methods in clinical practice<br><br>Choose your preferred intervention:";
        bottomText.innerHTML = "The information on this resource is not intended to be a recommendation. It is purely informational and analytical in nature,<br>and should not be used as a guide for choosing a specific treatment approach or making decisions about the purchase of medical devices."
        // Здесь можно добавить логику для изменения текста на кнопках
        agreeBtn.innerHTML ="I confirm that I have read and understood these policies"
        textBanner.innerHTML = 'To improve the performance of the site and make it more convenient for users, we use cookies (small text files). By continuing work with the site, you are agreeing to use of cookies. You can always disable them in your browser settings. Please read our <a href="public/Политика%20по%20использованию%20cookies%20(01.03.24).pdf" download="Политика использования cookie" target="_blank">cookie policy</a> first. We take the protection of your personal data seriously.<br>If you want to learn more about how we process it, please read our <a href="public/Политика%20конфиденциальности%20(01.03.24).pdf" download="Политика конфиденциальности" target="_blank">privacy policy</a>.';      
    } else {
        languageBtn.textContent = "RU";
        directionText.innerHTML = "Экономические модели для определения финансовых возможностей медицинских организаций,<br>желающих внедрить современные методы лечения в клиническую практику<br><br>Выберите интересующее вас вмешательство:";
        bottomText.innerHTML = "Информация на данном ресурсе не является рекомендацией, носит исключительно информационно-аналитический характер<br>и не должна рассматриваться как руководство к выбору того или иного подхода к лечению или принятию решения о закупке определённых медицинских изделий."// Здесь можно добавить логику для изменения текста на кнопках
        agreeBtn.innerHTML ="Подтверждаю ознакомление и согласие"
        textBanner.innerHTML = 'Для улучшения работы сайта и удобства пользователей мы используем cookie (небольшие текстовые файлы).<br>Продолжая работу с сайтом, Вы разрешаете их использование. Вы всегда можете отключить файлы-cookie в настройках своего браузера. Пожалуйста, ознакомьтесь с <a href="public/Политика%20по%20использованию%20cookies%20(01.03.24).pdf" download="Политика использования cookie" target="_blank">политикой использования файлов cookie.</a><br>Мы серьезно относимся к защите персональных данных – читайте подробнее о наших <a href="public/Политика%20конфиденциальности%20(01.03.24).pdf" download="Политика конфиденциальности" target="_blank">подходах к их обработке.</a>';

    }


    // Получаем ссылки на кнопки
    var site1Btn = document.getElementById('site1Btn');
    var site2Btn = document.getElementById('site2Btn');
    
    // Добавляем обработчики событий для клика на кнопки
    site1Btn.addEventListener('click', function() {
        window.open('http://85.234.106.147/home', '_blank'); // Открываем новое окно с сайтом site1.com
    });
    
    site2Btn.addEventListener('click', function() {
        window.open('https://boston.catzwolf.ru/', '_blank'); // Открываем новое окно с сайтом site2.com
    }); 
    
}

document.addEventListener("DOMContentLoaded", function() {
    var cookieBanner = document.getElementById("cookieBanner");
    var agreeBtn = document.getElementById("agreeBtn");
    
    // Проверяем, согласился ли пользователь с политикой
    var agreed = localStorage.getItem("cookieAgreed");
    // Если пользователь не согласился, показываем дисклеймер
    if (!agreed) {
        cookieBanner.style.display = "block";
        console.log("Значение в localStorage для 'cookieAgreed':", agreed);
        cookieBanner.style.display = "flex";
    }
    
    // Обработчик клика по кнопке "Согласен"
    agreeBtn.addEventListener("click", function() {
        // Сохраняем состояние согласия в localStorage
        localStorage.setItem("cookieAgreed", "true");
        // Скрываем уведомление
        cookieBanner.style.display = "none";
    });
});
