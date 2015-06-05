/*global window, document, navigator, Promise, setInterval, requestAnimationFrame, Reveal, relationship*/
;(function(Reveal, relationship){
    'use strict';

    var videoPromise = new Promise(function(accept, reject){
        navigator.webkitGetUserMedia({ 'video': {
            mandatory: {
                minWidth: 1280,
                minHeight: 720
            }
        }}, accept, reject);
    });

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
        },
        'relationship': function(){
            var G = new relationship.Graph();
            var v = G.addVertex(0, 0);
            v.motion = function(){ /* do nothing */ };
            var view = new relationship.GraphView(G, document.getElementById('graph'));
            function loop(){
                var t = (new Date()).getTime()/1000; // time in seconds
                v.setRadius(20 + 3 * Math.sin(t * 2 * Math.PI));
                G.update();
                view.update();
                requestAnimationFrame(loop);
            }
            loop();
            document.body.addEventListener('keydown', function(event){
                if (event.keyCode === 65) { /* 'a' */
                    G.addVertex(250, 500 * (Math.random() - 0.5));
                }
            });
        },
        'coaches': function(){
            videoPromise.then(function(localMediaStream){
                var url = window.URL.createObjectURL(localMediaStream);
                var video = document.getElementById('coaches');
                video.src = url;
            });

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
})(Reveal, relationship);
