/*global window*/
(function(deck){
    'use strict';

    var Card = function(column, row){
        this.width = 225;
        this.height = 315;
        this.row = row;
        this.column = column;
    };

    // suits: Hearts, Diamonds, Clubs, Spades
    // suits: A, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, J,Q,K
    deck.cards = {
        'AH': new Card(0, 0),
        '1H': new Card(1, 0),
        '2H': new Card(2, 0),
        '3H': new Card(3, 0),
        '4H': new Card(4, 0),
        '5H': new Card(5, 0),
        '6H': new Card(6, 0),
        '7H': new Card(7, 0),
        '8H': new Card(8, 0),
        '9H': new Card(9, 0),
        '0H': new Card(10, 0),
        'JH': new Card(11, 0),
        'QH': new Card(12, 0),
        'KH': new Card(13, 0),
        'AC': new Card(0, 1),
        '1C': new Card(1, 1),
        '2C': new Card(2, 1),
        '3C': new Card(3, 1),
        '4C': new Card(4, 1),
        '5C': new Card(5, 1),
        '6C': new Card(6, 1),
        '7C': new Card(7, 1),
        '8C': new Card(8, 1),
        '9C': new Card(9, 1),
        '0C': new Card(10, 1),
        'JC': new Card(11, 1),
        'QC': new Card(12, 1),
        'KC': new Card(13, 1),
        'AD': new Card(0, 2),
        '1D': new Card(1, 2),
        '2D': new Card(2, 2),
        '3D': new Card(3, 2),
        '4D': new Card(4, 2),
        '5D': new Card(5, 2),
        '6D': new Card(6, 2),
        '7D': new Card(7, 2),
        '8D': new Card(8, 2),
        '9D': new Card(9, 2),
        '0D': new Card(10, 2),
        'JD': new Card(11, 2),
        'QD': new Card(12, 2),
        'KD': new Card(13, 2),
        'AS': new Card(0, 3),
        '1S': new Card(1, 3),
        '2S': new Card(2, 3),
        '3S': new Card(3, 3),
        '4S': new Card(4, 3),
        '5S': new Card(5, 3),
        '6S': new Card(6, 3),
        '7S': new Card(7, 3),
        '8S': new Card(8, 3),
        '9S': new Card(9, 3),
        '0S': new Card(10, 3),
        'JS': new Card(11, 3),
        'QS': new Card(12, 3),
        'KS': new Card(13, 3)
    };
    deck.names = [
        'AH', '1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '0H', 'JH', 'QH', 'KH',
        'AC', '1C', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '0C', 'JC', 'QC', 'KC',
        'AD', '1D', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '0D', 'JD', 'QD', 'KD',
        'AS', '1S', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '0S', 'JS', 'QS', 'KS'
    ];
})(window.deck = window.deck || {});
