/*global window, document, setInterval, Reveal, deck*/
(function(Reveal, deck){
    'use strict';
    Reveal.addEventListener('card-trick', function(){
        var container = document.getElementById('deck');
        var view = new deck.View(container);
        var index = 0;
        setInterval(function(){
            view.show(deck.names[index]);
            index = (index + 1) % deck.names.length;
        }, 500);
        window.view = view;
    });
})(Reveal, deck);
