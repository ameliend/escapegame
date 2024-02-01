function rand(min, max) {
    return Math.random() * (max - min) + min;
}

var $cursor = $('.thecursor'); // Sélectionnez l'image avec la classe "thecursor"

$('body').mousemove(function(e) {  
    $cursor.css({
        left: e.pageX,
        top: e.pageY
    });
}).hover(function(e) {
    $cursor.toggle();
});

(function tremor() {
    $cursor.css({
        marginLeft: rand(-50, 50), // Tremblement de bras
        marginTop: rand(-50, 50)   // Tremblement de main
    });
    setTimeout(tremor, rand(50, 100));
}());


$(document).ready(function () {
    // Cachez le paragraphe "Bravo !" au chargement de la page
    $("#messageBravo").hide();

    // Ciblez le lien "Cliquez ici"
    $("#cliquezIci").click(function (event) {
        event.preventDefault(); // Empêchez le lien de déclencher la navigation

        // Cachez le lien "Cliquez ici"
        $(this).hide();

        // Affichez le paragraphe "Bravo !" avec le contenu HTML
        $("#messageBravo").html(`
            <span role="img" aria-hidden="true">🎉</span> Bravo ! <br>
            La population française vieillit de plus en plus. D'ici à 2050, plus de 650 millions de personnes auront plus de 60 ans. <br> Il est essentiel d'avoir des composants cliquables suffisamment larges pour être facilement atteints. <br>
            <a href="missiondaltonisme.html"> Prochaine mission</a>
        `).fadeIn();

        // Vous pouvez également ajouter d'autres actions si nécessaire
    });

});



