/*global window:true, document*/
;(function($){
    'use strict';

    var extend = $.extend = function extend(){
        var result = {};
        Array.prototype.slice.call(arguments, 0).forEach(function(argument){
            for (var key in argument) {
                if (!result[key]) {
                    result[key] = argument[key];
                }
                if (typeof result[key] === 'object') {
                    result[key] = extend(result[key], argument[key]);
                }
            }
        });
        return result;
    };

    function between(u, v, t){
        return {
            'x': (1 - t) * u.x + t * v.x,
            'y': (1 - t) * u.y + t * v.y
        };
    }

    function contains(collection, target) {
        return collection.reduce(function(found, element){ return found || element === target; }, false);
    }

    var Vertex = function(x, y, id, radius){
        this.x = x;
        this.y = y;
        this.id = id;
        this.radius = radius || 20;
    };
    Vertex.prototype.setRadius = function(radius){
        this.radius = radius || 20;
    };

    var Edge = function(u, v, id){
        this.tail = u;
        this.head = v;
        this.id = id;
    };
    Edge.prototype.incidentTo = function(v){
        return this.tail === v || this.head === v;
    };
    Edge.prototype.neighbour = function(v){
        if (!this.incidentTo(v)) { throw new Error('vertex not incident to edge'); }
        return this.head === v ? this.tail: this.head;
    };

    var Graph = $.Graph = function(){
        this.vertexId = 0;
        this.vertices = [];
        this.edgeId = 0;
        this.edges = [];
    };
    Graph.prototype.addVertex = function(x, y) {
        var v = new Vertex(x, y, this.vertexId++);
        this.vertices.push(v);
        return v;
    };
    Graph.prototype.addEdge = function(u, v) {
        var e = new Edge(u, v, this.edgeId++);
        this.edges.push(e);
        return e;
    };
    Graph.prototype.neighbourhood = function(v) {
        return this.edges
            .filter(function(e){ return e.incidentTo(v); })
            .map(function(e){ return e.neighbour(v); });
    };
    Graph.prototype.findVertex = function(id){
        return this.vertices.reduce(function(vertex, candidate){
            return candidate.id === id ? candidate: vertex;
        }, undefined);
    };
    Graph.prototype.findEdge = function(id){
        return this.edges.reduce(function(edge, candidate){
            return candidate.id === id ? candidate: edge;
        }, undefined);
    };
    Graph.prototype.findEdgeBetween = function(u, v){
        var candidates = this.edges.filter(function(edge){
            return edge.incidentTo(u) && edge.incidentTo(v);
        });
        if (candidates.length > 0){
            return candidates[0];
        }
        return undefined;
    };

    var GraphView = $.GraphView = function(graph, container, options){
        this.options = extend(options || {},
                              { 'placement': function(position){ return position; } },
                              { 'between': 0 },
                              { 'vertex': {
                                  'events': {},
                                  'radius': 20,
                                  'color': {
                                      'stroke': 'red',
                                      'fill': 'orange'
                                  }
                              }},
                              { 'edge': {
                                  'events': {},
                                  'color' : {
                                      'default': 'black',
                                      'forWeight': {}
                                  }
                              }});
        this.graph = graph;
        this.container = container;
        this.placement = this.options.placement;
        this.vertices = {};
        this.edges = {};
        this.distances = {};
        this.showDistances = this.options.showDistances;
        this.update();
    };
    GraphView.prototype.update = function(){
        this.graph.vertices.forEach(function(v){
            var vertex = this.findVertex(v.id);
            var position = this.placement(v);
            vertex.setAttribute('cx', position.x);
            vertex.setAttribute('cy', position.y);
            vertex.setAttribute('fill', this.options.vertex.color.fill);
            vertex.setAttribute('stroke', this.options.vertex.color.stroke);
        }.bind(this));
        this.graph.edges.forEach(function(e){
            var edge = this.findEdge(e.id);
            var head = this.placement(between(e.head, e.tail, this.options.between));
            var tail = this.placement(between(e.tail, e.head, this.options.between));
            edge.setAttribute('x1', head.x);
            edge.setAttribute('y1', head.y);
            edge.setAttribute('x2', tail.x);
            edge.setAttribute('y2', tail.y);
            edge.setAttribute('stroke', this.options.edge.color.forWeight[e.weight] || this.options.edge.color.default);
        }.bind(this));
    };
    GraphView.prototype.findVertex = function(id){
        if (!this.vertices[id]) {
            var v = this.vertices[id] = document.createElementNS('http://www.w3.org/2000/svg','circle');
            v.setAttribute('r', this.options.vertex.radius);
            v.setAttribute('data-vertex', id);
            for (var event in this.options.vertex.events) {
                v.addEventListener(event, this.options.vertex.events[event]);
            }
            this.findVerticesContainer().appendChild(v);
        }
        return this.vertices[id];
    };
    GraphView.prototype.findVerticesContainer = function(){
        if (!this.verticesContainer) {
            this.verticesContainer = this.container.querySelector('#vertices');
        }
        return this.verticesContainer;
    };
    GraphView.prototype.findEdge = function(id){
        if (!this.edges[id]) {
            var e = this.edges[id] = document.createElementNS('http://www.w3.org/2000/svg','line');
            e.setAttribute('data-edge', id);
            for (var event in this.options.edge.events) {
                e.addEventListener(event, this.options.edge.events[event]);
            }
            this.findEdgesContainer().appendChild(e);
        }
        return this.edges[id];
    };
    GraphView.prototype.findEdgesContainer = function(){
        if (!this.edgesContainer) {
            this.edgesContainer = this.container.querySelector('#edges');
        }
        return this.edgesContainer;
    };
})(window.relationship = window.relationship || {});
