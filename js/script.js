function openModalLogin() {
    var modal = document.getElementById('modal1');
    modal.style.display = 'block';
    centerModal(modal);
    setTimeout(function () {
        modal.classList.add('show');
        scrollToTop();
    }, 50);
    document.body.style.overflow = 'auto';
}

function openModalReg() {
    var modal = document.getElementById('modal2');
    modal.style.display = 'block';
    centerModal(modal);
    setTimeout(function () {
        modal.classList.add('show');
        scrollToTop();
    }, 50);
    document.body.style.overflow = 'auto';
}

function centerModal(modal) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var topOffset = Math.max(0, (window.innerHeight - modal.offsetHeight) / 2 + scrollTop);
    modal.style.top = topOffset + 'px';
}

function closeModal() {
    var modal1 = document.getElementById('modal1');
    var modal2 = document.getElementById('modal2');

    if (modal1.classList.contains('show')) {
        modal1.classList.remove('show');
        setTimeout(function () {
            modal1.style.display = 'none';
        }, 300);
    }

    if (modal2.classList.contains('show')) {
        modal2.classList.remove('show');
        setTimeout(function () {
            modal2.style.display = 'none';
        }, 300);
    }

    document.body.style.overflow = 'auto';
}

function scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 20); 
    }
}

function scrollToBottom() {
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    var targetScroll = documentHeight - windowHeight;
    var distance = targetScroll - currentScroll;
    var startTime;
    var duration = 1000; // Adjust the duration as needed

    function animate(time) {
        if (!startTime) {
            startTime = time;
        }

        var elapsed = time - startTime;
        var progress = elapsed / duration;
        progress = progress > 1 ? 1 : progress;
        var easedProgress = easeOutCubic(progress);
        window.scrollTo(0, currentScroll + distance * easedProgress);

        if (elapsed < duration) {
            window.requestAnimationFrame(animate);
        }
    }

    window.requestAnimationFrame(animate);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}
