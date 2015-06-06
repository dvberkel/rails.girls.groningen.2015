/*global window, document, setInterval, clearInterval, Reveal, deck*/
(function(Reveal, deck){
    'use strict';
    var visited = false;
    Reveal.addEventListener('card-trick', function(){
        if (!visited) {
            var container = document.getElementById('deck');
            var view = new deck.View(container);
            var index = 0;
            var interval = setInterval(function(){
                view.show(deck.names[index]);
                index = (index + 1) % deck.names.length;
            }, 500);
            document.body.addEventListener('keydown', function(event){
                if (event.keyCode === 65) { /* 'a' */
                    clearInterval(interval);
                    interval = setInterval(function(){
                        index = Math.floor(deck.names.length * Math.random());
                        view.show(deck.names[index]);
                    }, 200);
                }
            });
            document.body.addEventListener('keydown', function(event){
                if (event.keyCode === 81) { /* 'q' */
                    clearInterval(interval);
                    view.show('3H');
                }
            });
            window.view = view;
            visited = true;
        }
    });
})(Reveal, deck);
