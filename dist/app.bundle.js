"use strict";!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.JJWordSearch=o():e.JJWordSearch=o()}(self,(function(){return(self.webpackChunkJJWordSearch=self.webpackChunkJJWordSearch||[]).push([[143],{752:function(e,o,r){r.r(o);var t=r(273);function n(e,o){return void 0===e&&(e=15),void 0===o&&(o=0),Math.floor(Math.random()*(e-o))+o}function d(e){void 0===e&&(e="wordsearch-container"),console.log("Creating Word Search...");var o=["CRYSTAL","EXTINCT","SPECIES","BIVALVE","PACIFIC","CHISEL","FOSSIL","PERIOD","HAMMER","ISLAND","MAMMAL","EOCENE","INSECT","LIZARD","PEBBLE","PLANT","CORAL","STONE","AMBER","TOOTH","CLIFF","SHELL","OCEAN","SQUID","COAST","SHARK","SKULL","SPINE","CLAW","CAVE","TIDE","BIRD","LEAF","FISH","BONE","ROCK","PREY","COAL","FERN","LEAF","TAIL"],r=n(10,5),d=n(o.length-r,0);t.default.debugging=!0;var c=new t.default({height:10,width:10,words:o.slice(d,d+r),parentId:e,cellOptions:{width:40,height:40}}),a=c.create();return console.log("All Words Added: ",c.areWordsAdded()),console.log("Word Count: ",c.getWordCount()),console.log("Width: ",c.width),console.log("Height: ",c.height),console.log(t.default.wordMap),console.log("Created Word Search."),{wordsearchCreator:c,wordsearch:a}}var c=d();console.log(c),setTimeout((function(){document.getElementById("wordsearch-container").innerHTML="";var e=document.createElement("div");e.id="wordsearch-container-1",document.body.append(e),setTimeout((function(){var e=d("wordsearch-container"),o=d("wordsearch-container-1");console.log(e),console.log(o)}),500)}),1e3)}},function(e){return 752,e(e.s=752)}])}));
//# sourceMappingURL=app.bundle.js.map