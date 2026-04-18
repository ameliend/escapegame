function rand(min, max) {
    return Math.random() * (max - min) + min;
}

var $cursor = $('.thecursor');

$(document).mousemove(function(e) {
    $cursor.show().css({
        left: e.pageX,
        top: e.pageY
    });
});

(function tremor() {
    $cursor.css({
        marginLeft: rand(-50, 50),
        marginTop: rand(-50, 50)
    });
    setTimeout(tremor, rand(50, 100));
}());

$(document).ready(function () {
    $("#messageBravo").hide();

    $("#cliquezIci").click(function (event) {
        event.preventDefault();
        $(this).hide();
        $("#messageBravo").html(`
            <span role="img" aria-hidden="true">🎉</span> Bravo ! <br>
            La population française vieillit de plus en plus. D'ici à 2050, plus de 650 millions de personnes auront plus de 60 ans. <br> Il est essentiel d'avoir des composants cliquables suffisamment larges pour être facilement atteints. <br>
            <a href="missiondaltonisme.html"> Prochaine mission</a>
        `).fadeIn();
    });
});
