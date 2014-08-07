'use strict';

angular.module('chemicalNamesApp')
  .factory('anionFactory', function () {

    var anions = [
        {name:'nitrite',formula:'NO\u2082',charge:1 },
        {name:'nitrate',formula:'NO\u2083',charge:1 },
        {name:'sulfite',formula:'SO\u2083',charge:2 },
        {name:'sulfate',formula:'SO\u2084',charge:2 },
        {name:'hydroxide',formula:'OH',charge:1 },
        {name:'bisulfate',formula:'HSO\u2084',charge:1 },
        {name:'cyanide',formula:'CN',charge:1 },
        {name:'phosphate',formula:'PO\u2084',charge:3 },
        {name:'hydrogenphosphate',formula:'HPO\u2084',charge:2 },
        {name:'dihydrogenphosphate',formula:'H\u2082PO\u2084',charge:1 },
        {name:'thiocyanate',formula:'SCN',charge:1 },
        {name:'carbonate',formula:'CO\u2083',charge:2 },
        {name:'bicarbonate',formula:'HCO\u2083',charge:1 },
        {name:'hypochlorite',formula:'ClO',charge:1 },
        {name:'chlorite',formula:'ClO\u2082',charge:1 },
        {name:'chlorate',formula:'ClO\u2083',charge:1 },
        {name:'perchlorate',formula:'ClO\u2084',charge:1 },
        {name:'acetate',formula:'C\u2082H\u2083O\u2082',charge:1 },
        {name:'permanganate',formula:'MnO\u2084',charge:1 },
        {name:'dichromate',formula:'Cr\u2082O\u2087',charge:2 },
        {name:'chromate',formula:'CrO\u2084',charge:2 },
        {name:'oxalate',formula:'C\u2082O\u2084',charge:2 },
        {name:'thiosulfate',formula:'S\u2082O\u2083',charge:2 },
        {name:'fluoride',formula:'F',charge:1 },
        {name:'chloride',formula:'Cl',charge:1 },
        {name:'bromide',formula:'Br',charge:1 },
        {name:'iodide',formula:'I',charge:1 },
        {name:'oxide',formula:'O',charge:2 },
        {name:'sulfide',formula:'S',charge:2 },
        {name:'nitride',formula:'N',charge:3 },
        {name:'phosphide',formula:'P',charge:3 }
    ];

    var randomAnion = function() {
        return anions[Math.floor(Math.random() * anions.length)];
    };

    var getAnion = function(index) {
        return anions[index];
    };

    // Public API here
    return {
        randomAnion: randomAnion,
        getAnion: getAnion
    };
  });
