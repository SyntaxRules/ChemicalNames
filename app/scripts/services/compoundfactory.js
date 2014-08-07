'use strict';

angular.module('chemicalNamesApp')
    .factory('compoundFactory', function () {
        //suscript in unicode are \u2082 thru \u2089 (2-9)
        //HELPER METHODS
        /**
         * A method is polyatomic if:
         *      - It has a subscript
         *      - It has more than one element (denoted by a second capital)
         * @param chemical
         * @returns {*}
         */
        this.isPolyatomic = function (chemical) {
            //has a subscript
            if (chemical.formula.search(/[\u2082-\u2089]/) != -1) {
                return true;
            }

            //has more than one capital letter
            if (checmical.formula.match(/[A-Z]/g).length > 1) {
                return true;
            }

            return false;
        };

        this.addSubscriptToFormula = function (formula, subscript) {
            if (subscript < 2) {
                return formula;
            }
            if (this.isPolyatomic({ formula: formula})) {
                return '('  + formula + ')\u208' + subscript;
            } else {
                return formula + '\u208' + subscript;
            }
        };

        //PUBLIC FUNCTIONS
        //Maybe getMoleculeCompound?
        this.getChemicalCompound = function (cation, anion) {
            var chemicalFormula = '';
            if (cation.charge == anion.charge) {
                chemicalFormula = cation.formula + anion.formula;
            } else {
                chemicalFormula = this.addSubscriptToFormula(cation.formula, parseInt(anion.charge)) +
                    this.addSubscriptToFormula(anion.formula, parseInt(cation.charge));
            }

            return {
                cation: cation,
                anion: anion,
                name: cation.name + ' ' + anion.name,
                formula: chemicalFormula
            }
        };

        this.getAcidCompound = function () {

        };

        this.getCovalentCompound = function () {

        };

        // Public API here
        return {
            getChemicalCompound: this.getChemicalCompound,
            getAcidCompound: this.getAcidCompound,
            getCovalentCompound: this.getCovalentCompound
        };
    });
