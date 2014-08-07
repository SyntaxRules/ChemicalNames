'use strict';

angular.module('chemicalNamesApp')
    .factory('compoundFactory', function ($sce) {
        //suscript in unicode are \u2082 thru \u2089 (2-9)
        //HELPER METHODS
        /**
         * A method is polyatomic if:
         *      - It has a subscript
         *      - It has more than one element (denoted by a second capital)
         * @param chemical
         * @returns {*}
         */
        var isPolyatomic = function (chemical) {
            //has a subscript
            if (chemical.formula.search(/[\u2082-\u2089]/) != -1) {
                return true;
            }

            //has more than one capital letter
            if (chemical.formula.match(/[A-Z]/g).length > 1) {
                return true;
            }

            return false;
        };

        var addSubscriptToFormula = function (formula, subscript) {
            if (isPolyatomic({ formula: formula}) == true) {
                return '('  + formula + ')' + getSubscriptFor(subscript);
            } else {
                return formula + getSubscriptFor(subscript);
            }
        };

        var getSubscriptFor = function(subscript) {
          switch(subscript) {
              case 2:
                  return '\u2082';
                  break;
              case 3:
                  return '\u2083';
                  break;
              case 4:
                  return '\u2084';
                  break;
              case 5:
                  return '\u2085';
                  break;
              case 6:
                  return '\u2086';
                  break;
              case 7:
                  return '\u2087';
                  break;
              case 8:
                  return '\u2088';
                  break;
              case 9:
                  return '\u2089';
                  break;
              default:
                  return '';
          }
        };

        //PUBLIC FUNCTIONS
        //Maybe getMoleculeCompound?
        var getChemicalCompound = function (cation, anion) {
            var chemicalFormula = '';
            if (cation.charge == anion.charge) {
                chemicalFormula = cation.formula + anion.formula;
            } else {
                chemicalFormula = addSubscriptToFormula(cation.formula, parseInt(anion.charge)) +
                    addSubscriptToFormula(anion.formula, parseInt(cation.charge));
            }

            return {
                cation: cation,
                anion: anion,
                name: cation.name + ' ' + anion.name,
                formula: chemicalFormula
            }
        };

        var getAcidCompound = function () {

        };

        var getCovalentCompound = function () {

        };

        // Public API here
        return {
            getChemicalCompound: getChemicalCompound,
            getAcidCompound: getAcidCompound,
            getCovalentCompound: getCovalentCompound
        };
    });
