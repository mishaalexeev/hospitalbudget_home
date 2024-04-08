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
        directionText.innerHTML = "Economic models for assessing the financial capabilities of medical organizations<br>seeking to implement advanced treatment methods in clinical practice.<br>Choose your preferred intervention:";
        bottomText.textContent = "The information on this resource is not intended to be a recommendation. It is purely informational and analytical in nature, and should not be used as a guide for choosing a specific treatment approach or making decisions about the purchase of medical devices."
        // Здесь можно добавить логику для изменения текста на кнопках
    } else {
        languageBtn.textContent = "RU";
        directionText.innerHTML = "Экономические модели для определения финансовых возможностей медицинских организаций,<br>желающих внедрить современные методы лечения в клиническую практику.<br>Выберите интересующее вас вмешательство:";
        bottomText.innerHTML = "Информация на данном ресурсе не является рекомендацией, носит исключительно информационно-аналитический характер<br>и не должна рассматриваться как руководство к выбору того или иного подхода к лечению или принятию решения о закупке определённых медицинских изделий."// Здесь можно добавить логику для изменения текста на кнопках
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