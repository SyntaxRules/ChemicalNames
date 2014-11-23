"use strict";angular.module("chemicalNamesApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/flashcards",{templateUrl:"views/flashcards.html",controller:"FlashcardsCtrl"}).when("/quiz-yourself",{templateUrl:"views/test-yourself.html",controller:"TestYourselfCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("chemicalNamesApp").controller("MainCtrl",["$scope","anionFactory","cationFactory","compoundFactory",function(){var a=function(){};a()}]),angular.module("chemicalNamesApp").factory("anionFactory",function(){var a=[{name:"nitrite",formula:"NO₂",charge:1},{name:"nitrate",formula:"NO₃",charge:1},{name:"sulfite",formula:"SO₃",charge:2},{name:"sulfate",formula:"SO₄",charge:2},{name:"hydroxide",formula:"OH",charge:1},{name:"bisulfate",formula:"HSO₄",charge:1},{name:"cyanide",formula:"CN",charge:1},{name:"phosphate",formula:"PO₄",charge:3},{name:"hydrogenphosphate",formula:"HPO₄",charge:2},{name:"dihydrogenphosphate",formula:"H₂PO₄",charge:1},{name:"thiocyanate",formula:"SCN",charge:1},{name:"carbonate",formula:"CO₃",charge:2},{name:"bicarbonate",formula:"HCO₃",charge:1},{name:"hypochlorite",formula:"ClO",charge:1},{name:"chlorite",formula:"ClO₂",charge:1},{name:"chlorate",formula:"ClO₃",charge:1},{name:"perchlorate",formula:"ClO₄",charge:1},{name:"acetate",formula:"C₂H₃O₂",charge:1},{name:"permanganate",formula:"MnO₄",charge:1},{name:"dichromate",formula:"Cr₂O₇",charge:2},{name:"chromate",formula:"CrO₄",charge:2},{name:"oxalate",formula:"C₂O₄",charge:2},{name:"thiosulfate",formula:"S₂O₃",charge:2},{name:"fluoride",formula:"F",charge:1},{name:"chloride",formula:"Cl",charge:1},{name:"bromide",formula:"Br",charge:1},{name:"iodide",formula:"I",charge:1},{name:"oxide",formula:"O",charge:2},{name:"sulfide",formula:"S",charge:2},{name:"nitride",formula:"N",charge:3},{name:"phosphide",formula:"P",charge:3}],b=function(){return a[Math.floor(Math.random()*a.length)]},c=function(b){return a[b]};return{randomAnion:b,getAnion:c}}),angular.module("chemicalNamesApp").factory("cationFactory",function(){var a=[{name:"lithium",formula:"Li",charge:1},{name:"sodium",formula:"Na",charge:1},{name:"potassium",formula:"K",charge:1},{name:"rubidium",formula:"Rb",charge:1},{name:"cesium",formula:"Cs",charge:1},{name:"beryllium",formula:"Be",charge:2},{name:"magnesium",formula:"Mg",charge:2},{name:"calcium",formula:"Ca",charge:2},{name:"strontium",formula:"Sr",charge:2},{name:"barium",formula:"Ba",charge:2},{name:"aluminum",formula:"Al",charge:3},{name:"gallium",formula:"Ga",charge:3},{name:"zinc",formula:"Zn",charge:2},{name:"cadmium",formula:"Cd",charge:2},{name:"silver",formula:"Ag",charge:1},{name:"mercury(II)",formula:"Hg",charge:2},{name:"tin(II)",formula:"Sn",charge:2},{name:"tin(IV)",formula:"Sn",charge:4},{name:"lead(II)",formula:"Pb",charge:2},{name:"lead(IV)",formula:"Pb",charge:4},{name:"chromium(II)",formula:"Cr",charge:2},{name:"chromium(III)",formula:"Cr",charge:3},{name:"manganese(II)",formula:"Mn",charge:2},{name:"manganese(III)",formula:"Mn",charge:3},{name:"iron(II)",formula:"Fe",charge:2},{name:"iron(III)",formula:"Fe",charge:3},{name:"cobalt(II)",formula:"Co",charge:2},{name:"cobalt(III)",formula:"Co",charge:3},{name:"copper(I)",formula:"Cu",charge:1},{name:"copper(II)",formula:"Cu",charge:2},{name:"mercury(II)",formula:"Hg",charge:2},{name:"mercury(I)",formula:"Hg₂",charge:2},{name:"ammonium",formula:"NH₄",charge:1}],b=function(){return a[Math.floor(Math.random()*a.length)]},c=function(b){return a[b]};return{randomCation:b,getCation:c}}),angular.module("chemicalNamesApp").factory("compoundFactory",["$sce",function(){var a=function(a){return-1!=a.formula.search(/[\u2082-\u2089]/)?!0:a.formula.match(/[A-Z]/g).length>1?!0:!1},b=function(b,d){return 1==a({formula:b})?"("+b+")"+c(d):b+c(d)},c=function(a){switch(a){case 2:return"₂";case 3:return"₃";case 4:return"₄";case 5:return"₅";case 6:return"₆";case 7:return"₇";case 8:return"₈";case 9:return"₉";default:return""}},d=function(a,c){var d="";return d=a.charge==c.charge?a.formula+c.formula:b(a.formula,parseInt(c.charge))+b(c.formula,parseInt(a.charge)),{cation:a,anion:c,name:a.name+" "+c.name,formula:d}},e=function(){},f=function(){};return{getChemicalCompound:d,getAcidCompound:e,getCovalentCompound:f,getSubscriptFor:c}}]),angular.module("chemicalNamesApp").controller("FlashcardsCtrl",["$scope","anionFactory","cationFactory","compoundFactory",function(a,b,c,d){var e=function(){a.getRandomCompound(),console.log(a.compound)};a.getRandomCompound=function(){a.compound=d.getChemicalCompound(c.randomCation(),b.randomAnion())},e()}]),angular.module("chemicalNamesApp").controller("TestYourselfCtrl",["$scope","anionFactory","cationFactory","compoundFactory",function(a,b,c,d){var e=function(){a.getRandomCompound(),console.log(a.compound),a.userInput="",a.answerSubmitted=!1,a.isCorrectAnswer=!1};a.testAnswer=function(){a.answerSubmitted=!0,a.isCorrectAnswer=a.compound.formula==a.userInput},a.getRandomCompound=function(){a.answerSubmitted=!1,a.userInput="",a.compound=d.getChemicalCompound(c.randomCation(),b.randomAnion())},a.addSubscript=function(b){a.userInput+=d.getSubscriptFor(b)},e()}]),angular.module("chemicalNamesApp").controller("HeaderCtrl",["$scope","$location",function(a,b){a.root="/ChemicalNames/#",a.links=[{name:"Home",link:"/"},{name:"Flashcards",link:"/flashcards"},{name:"Quiz",link:"/quiz-yourself"},{name:"About",link:"/about"}],a.$on("$locationChangeSuccess",function(){var c=b.path();angular.forEach(a.links,function(a){a.active=a.link==c}),console.log(c)})}]);