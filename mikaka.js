// mikakaApp
//
// みかか変換
// Author: TODA Shuta
// Date: 2014-09-18


;(function() {
    'use strict';

    var APP_NAME = 'mikakaApp';
    var app = angular.module(APP_NAME, []);

    var encodeTable = {
        'あ': '#',
        'い': 'E',
        'う': '$',
        'え': '%',
        'お': '&',
        'か': 'T',
        'き': 'G',
        'く': 'H',
        'け': '*',
        'こ': 'B',
        'さ': 'X',
        'し': 'D',
        'す': 'R',
        'せ': 'P',
        'そ': 'C',
        'た': 'Q',
        'ち': 'A',
        'つ': 'Z',
        'て': 'W',
        'と': 'S',
        'な': 'U',
        'に': 'I',
        'ぬ': '!',
        'ね': '<',
        'の': 'K',
        'は': 'F',
        'ひ': 'V',
        'ふ': '"',
        'へ': '~',
        'ほ': '=',
        'ま': 'J',
        'み': 'N',
        'む': '}',
        'め': '?',
        'も': 'M',
        'や': "'",
        'ゆ': '(',
        'よ': ')',
        'ら': 'O',
        'り': 'L',
        'る': '>',
        'れ': '+',
        'ろ': '_',
        'ん': 'Y'
    };

    var decodeTable = {};
    for (var k in encodeTable) {
        decodeTable[encodeTable[k]] = k;
    };
    //console.log(encodeTable);
    //console.log(decodeTable);

    app.controller('mikakaAppController', ['$scope', function($scope) {
        // Initial value
        // Another way: <div ng-controller="..." ng-init="input=''">
        $scope.input = '';
        $scope.fallbackCharacter = '';
        $scope.isEncodeMode = true;

        $scope.getFallbackCharacter = function() {
            if (this.fallbackCharacter === '') {
                return '□';
            }
            return this.fallbackCharacter;
        }

        $scope.encode = function(str) {
            return str.split('').map(function(c) {
                if (c in encodeTable) {
                    return encodeTable[c];
                }
                return $scope.getFallbackCharacter();
            }).join('');
        }

        $scope.decode = function(str) {
            return str.split('').map(function(c) {
                c = c.toUpperCase();
                if (c in decodeTable) {
                    return decodeTable[c];
                }
                return $scope.getFallbackCharacter();
            }).join('');
        }

        $scope.mikaka = function(input) {
            if (this.isEncodeMode) {
                return this.encode(input);
            }
            return this.decode(input);
        }
    }]);

    app.filter('reverse', function() {
        return function(str) {
            return str.split('').reverse().join('');
        }
    });

})();


// vim: set et ts=4 sts=4 sw=4 :
// __END__
