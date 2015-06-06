/*global window*/
(function(deck){
    'use strict';

    var Card = function(column, row){
        this.width = 225;
        this.height = 315;
        this.row = row;
        this.column = column;
    };
    Card.prototype.positionX = function(){
        return (-1 * this.column * this.width).toString() + 'px';
    };
    Card.prototype.positionY = function(){
        return (-1 * this.row * this.height).toString() + 'px';
    };

    // suits: Hearts, Diamonds, Clubs, Spades
    // suits: A, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, J,Q,K
    deck.cards = {
        'AH': new Card(0, 0),
        '2H': new Card(1, 0),
        '3H': new Card(2, 0),
        '4H': new Card(3, 0),
        '5H': new Card(4, 0),
        '6H': new Card(5, 0),
        '7H': new Card(6, 0),
        '8H': new Card(7, 0),
        '9H': new Card(8, 0),
        '0H': new Card(9, 0),
        'JH': new Card(10, 0),
        'QH': new Card(11, 0),
        'KH': new Card(12, 0),
        'AC': new Card(0, 1),
        '2C': new Card(1, 1),
        '3C': new Card(2, 1),
        '4C': new Card(3, 1),
        '5C': new Card(4, 1),
        '6C': new Card(5, 1),
        '7C': new Card(6, 1),
        '8C': new Card(7, 1),
        '9C': new Card(8, 1),
        '0C': new Card(9, 1),
        'JC': new Card(10, 1),
        'QC': new Card(11, 1),
        'KC': new Card(12, 1),
        'AD': new Card(0, 2),
        '2D': new Card(1, 2),
        '3D': new Card(2, 2),
        '4D': new Card(3, 2),
        '5D': new Card(4, 2),
        '6D': new Card(5, 2),
        '7D': new Card(6, 2),
        '8D': new Card(7, 2),
        '9D': new Card(8, 2),
        '0D': new Card(9, 2),
        'JD': new Card(10, 2),
        'QD': new Card(11, 2),
        'KD': new Card(12, 2),
        'AS': new Card(0, 3),
        '2S': new Card(1, 3),
        '3S': new Card(2, 3),
        '4S': new Card(3, 3),
        '5S': new Card(4, 3),
        '6S': new Card(5, 3),
        '7S': new Card(6, 3),
        '8S': new Card(7, 3),
        '9S': new Card(8, 3),
        '0S': new Card(9, 3),
        'JS': new Card(10, 3),
        'QS': new Card(11, 3),
        'KS': new Card(12, 3)
    };
    deck.names = [
        'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '0H', 'JH', 'QH', 'KH',
        'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '0C', 'JC', 'QC', 'KC',
        'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '0D', 'JD', 'QD', 'KD',
        'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '0S', 'JS', 'QS', 'KS'
    ];

    var View = deck.View = function(container){
        this.container = container;
        this.show('3H');
    };
    View.prototype.show = function(name){
        var card = deck.cards[name || 'AH'] || deck.cards.AH;
        this.container.style.backgroundPositionX = card.positionX();
        this.container.style.backgroundPositionY = card.positionY();
    };
})(window.deck = window.deck || {});
