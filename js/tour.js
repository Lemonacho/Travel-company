var currentInfoWindow = null;

function showInfoWindow(containerSelector, className, content) {
    if (currentInfoWindow) {
        currentInfoWindow.remove();
    }

    var infoWindow = document.createElement("div");
    infoWindow.className = className;
    infoWindow.innerHTML = content;

    var tourContainer = document.querySelector(containerSelector);
    tourContainer.appendChild(infoWindow);

    tourContainer.addEventListener("click", function (event) {
        event.stopPropagation();
        infoWindow.remove();
    });

    document.addEventListener("click", function (event) {
        if (!tourContainer.contains(event.target)) {
            infoWindow.remove();
        }
    });

    currentInfoWindow = infoWindow;
}

function MAI() {
    showInfoWindow(".tour11", "infoWindowMAI", "<p>Майами предлагает уникальное сочетание культурного разнообразия и неповторимого отдыха. Откройте латиноамериканские влияния через искусство, музыку и кулинарию, наслаждайтесь бескрайними пляжами и увлекательной ночной жизнью.</p>");
}

function GOA() {
    showInfoWindow(".tour22", "infoWindowGOA", "<p>Погрузитесь в бескрайние золотистые пляжи, увидьте захватывающую смесь культур, наслаждайтесь вечерами под пальмами. ГОА – оазис уюта и праздника, где оживает душа и тело.</p>");
}

function CAN() {
    showInfoWindow(".tour33", "infoWindowCAN", "<p>Исследуйте величественные горы, бескрайние леса и кристально чистые озера. Канада вас околдует своим природным великолепием и теплом гостеприимства, становясь вашим незабываемым приключением.</p>");
}

function GRYZ() {
    showInfoWindow(".tour44", "infoWindowGRYZ", "<p>Откройте для себя Грузию – страну гор, виноградников и гостеприимства. Исследуйте древние культурные богатства, наслаждайтесь вкусом местной кухни и ощутите тепло грузинских объятий.</p>");
}

function ITALY() {
    showInfoWindow(".tour55", "infoWindowITALY", "<p>Путешествие в Италию – это волшебство итальянской культуры, вкуса и истории. Ощутите романтику Рима, вдохните аромат средиземноморской кухни и наслаждайтесь бескрайней красотой итальянских пейзажей.</p>");
}

function TAI() {
    showInfoWindow(".tour66", "infoWindowTAI", "<p>Погрузитесь в волшебство Таиланда – земли улыбок. Исследуйте величественные храмы, пляжи с белым песком и разнообразие восточных вкусов. Вас ждет незабываемое приключение в раю.</p>");
}

function ARM() {
    showInfoWindow(".tour77", "infoWindowARM", "<p>Откройте для себя древнюю Армению – страну каменных храмов, горных пейзажей и гостеприимства. Погрузитесь в богатство истории, наслаждайтесь вкусом армянской кухни и встречайте теплые объятия этого удивительного места.</p>");
}

function FR() {
    showInfoWindow(".tour88", "infoWindowFR", "<p>Франция – это страна романтики, искусства и изысканной кухни. Пройдитесь по узким улочкам Парижа, наслаждайтесь виноградниками Прованса и ощутите вдохновение величественных замков Луары.</p>");
}

document.addEventListener("DOMContentLoaded", function() {
    // Прокрутка вниз
    scrollToSmoothly(document.body.scrollHeight, 0, function() {
        // Прокрутка вверх после завершения прокрутки вниз
        setTimeout(function() {
            scrollToSmoothly(0, 3000);
        }, 500); // Задержка перед прокруткой вверх
    });
});

function scrollToSmoothly(targetPosition, duration, callback) {
    const startPosition = window.scrollY;
    const startTime = performance.now();

    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const newPosition = startPosition + (targetPosition - startPosition) * easeInOutCubic(progress);

        window.scrollTo({
            top: newPosition,
            behavior: 'auto'
        });

        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        } else {
            if (callback) {
                setTimeout(callback, 0);
            }
        }
    }

    requestAnimationFrame(scrollAnimation);
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
