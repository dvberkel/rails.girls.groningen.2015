/*global document, setInterval, Reveal*/
;(function(Reveal){
    'use strict';

    var events = {
        'experience': function(event){
            var words = ['relationship', 'frustration', 'joy', 'empowerment', 'food',
                         'bugs', 'computers', 'kindness', 'guidance', 'energy', 'discussions',
                         'delight', 'kinship', 'terminal'
                        ];
            var index = 0;
            var container = document.getElementById(event.type);
            function advance() {
                container.innerHTML = words[index];
                index = (index + 1) % words.length;
            }
            advance();
            setInterval(advance, 300);
        }
    };

    var revealListener = (function(){
        var visited = {};
        return function revealListener(event){
            if (!(event.type in visited) && (event.type in events)) {
                events[event.type].call(undefined, event);
                visited[event.type] = true;
            }
        };
    })();

    for (var type in events) {
        Reveal.addEventListener(type, revealListener);
    }
})(Reveal);
