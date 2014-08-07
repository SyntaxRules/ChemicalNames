'use strict';

angular.module('chemicalNamesApp')
    .factory('cationFactory', function () {

        var cations = [
            { name: 'lithium', formula: 'Li', charge: 1 },
            { name: 'sodium', formula: 'Na', charge: 1 },
            { name: 'potassium', formula: 'K', charge: 1 },
            { name: 'rubidium', formula: 'Rb', charge: 1 },
            { name: 'cesium', formula: 'Cs', charge: 1 },
            { name: 'beryllium', formula: 'Be', charge: 2 },
            { name: 'magnesium', formula: 'Mg', charge: 2 },
            { name: 'calcium', formula: 'Ca', charge: 2 },
            { name: 'strontium', formula: 'Sr', charge: 2 },
            { name: 'barium', formula: 'Ba', charge: 2 },
            { name: 'aluminum', formula: 'Al', charge: 3 },
            { name: 'gallium', formula: 'Ga', charge: 3 },
            { name: 'zinc', formula: 'Zn', charge: 2 },
            { name: 'cadmium', formula: 'Cd', charge: 2 },
            { name: 'silver', formula: 'Ag', charge: 1 },
            { name: 'mercury(II)', formula: 'Hg', charge: 2 },
            { name: 'tin(II)', formula: 'Sn', charge: 2 },
            { name: 'tin(IV)', formula: 'Sn', charge: 4 },
            { name: 'lead(II)', formula: 'Pb', charge: 2 },
            { name: 'lead(IV)', formula: 'Pb', charge: 4 },
            { name: 'chromium(II)', formula: 'Cr', charge: 2 },
            { name: 'chromium(III)', formula: 'Cr', charge: 3 },
            { name: 'manganese(II)', formula: 'Mn', charge: 2 },
            { name: 'manganese(III)', formula: 'Mn', charge: 3 },
            { name: 'iron(II)', formula: 'Fe', charge: 2 },
            { name: 'iron(III)', formula: 'Fe', charge: 3 },
            { name: 'cobalt(II)', formula: 'Co', charge: 2 },
            { name: 'cobalt(III)', formula: 'Co', charge: 3 },
            { name: 'copper(I)', formula: 'Cu', charge: 1 },
            { name: 'copper(II)', formula: 'Cu', charge: 2 },
            { name: 'mercury(II)', formula: 'Hg', charge: 2 },
            { name: 'mercury(I)', formula: 'Hg\u2082', charge: 2 },
            { name: 'ammonium', formula: 'NH\u2084', charge: 1 }
        ];

        var randomCation = function () {
            return cations[Math.floor(Math.random() * cations.length)];
        };

        var getCation = function (index) {
            return cations[index];
        };

        // Public API here
        return {
            randomCation: randomCation,
            getCation: getCation
        };
    });
