/*global window, document, Reveal, deck*/
(function(Reveal, deck){
    'use strict';
    Reveal.addEventListener('card-trick', function(){
        var container = document.getElementById('deck');
        var view = new deck.View(container);
        window.view = view;
        view.show('3H');
    });
})(Reveal, deck);
