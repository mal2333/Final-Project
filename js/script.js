var arrayTops = [
  {type: '.tops', colors:[], characteristics:[], source:''},
  {type: '.tops', colors:['white'], characteristics: ['short','shirt'], source:'<img id="top" src="assets/tshirt1.svg">'},
  {type: '.tops', colors:['white', 'red'], characteristics: ['stripes','long'], source: '<img id="top" src="assets/shirt1.svg">'},
  {type: '.tops', colors:['green'], characteristics: ['short','shirt'], source:'<img id="top" src="assets/sleevlessjacket.svg">'},
  {type: '.tops', colors:['yellow', 'red'], characteristics: ['jacket','long'], source:'<img id="top" src="assets/winterJacket.svg">'},
  {type: '.tops', colors:['grey', 'black'], characteristics: ['sweater','long'], source:'<img id="top" src="assets/sweater2.svg">'},
  {type: '.tops', colors:['white', 'black', 'purple'], characteristics: ['swimsuit'], source:'<img id="top" src="assets/swimsuit.svg">'},
  {type: '.tops', colors:['white', 'red'], characteristics: ['short','shirt'], source:'<img id="top" src="assets/shirt2.svg">'},
  {type: '.tops', colors:['green', 'pink', 'purple', 'red'], characteristics: ['sweater','long'], source:'<img id="top" src="assets/sweater1.svg">'},
  {type: '.tops', colors:['yellow'], characteristics: ['dress','short'], source:'<img id="top" src="assets/dress5.svg">'}
];

var arrayBottoms= [
  {type: '.bottoms', colors:[], characteristics:[], source:''},
  {type: '.bottoms', colors:['pink', 'purple'], characteristics: ['skirt'], source:'<img id="bottom" src="assets/skirt.svg">'},
  {type: '.bottoms', colors:['blue'], characteristics: ['pants'], source:'<img id="bottom" src="assets/pants.svg">'},
  {type: '.bottoms', colors:['black'], characteristics: ['dress','short'], source:'<img id="bottom" src="assets/dress1.svg">'},
  {type: '.bottoms', colors:['black'], characteristics: ['pants'], source:'<img id="bottom" src="assets/blackPants.svg">'},
  {type: '.bottoms', colors:['purple', 'white'], characteristics: ['dress','long'], source:'<img id="bottom" src="assets/dress4.svg">'},
  {type: '.bottoms', colors:['brown'], characteristics: ['shorts'], source:'<img id="bottom" src="assets/shorts.svg">'},
  {type: '.bottoms', colors:['green'], characteristics: ['dress','long'], source:'<img id="bottom" src="assets/dress3.svg">'},
  {type: '.bottoms', colors:['blue', 'yellow'],characteristics: ['skirt','overall'], source:'<img id="bottom" src="assets/overallSkirt.svg">'},
  {type: '.bottoms', colors:['red'],characteristics: ['overall','pants'], source:'<img id="bottom" src="assets/overalls.svg">'},
  {type: '.bottoms', colors:['pink'], characteristics: ['dress','short'], source:'<img id="bottom" src="assets/pinkDress.svg">'},
  {type: '.bottoms', colors:['red','white'], characteristics: ['polkadots','pyjama'], source:'<img id="bottom" src="assets/pj.svg">'},
  {type: '.bottoms', colors:['red','green'], characteristics: ['polkadots','short','dress'], source:'<img id="bottom" src="assets/dress2.svg">'}
];

var arrayShoes= [
  {type: '.shoes', colors:[], characteristics:[], source:''},
  {type: '.shoes', colors:['purle','red'], characteristics: ['shoes'], source:'<img id="shoes" src="assets/shoes2.svg">'},
  {type: '.shoes', colors:['yellow', 'green'], characteristics: ['rollers'], source:'<img id="shoes" src="assets/rollerskates.svg">'},
  {type: '.shoes', colors:['black'], characteristics: ['shoes'], source:'<img id="shoes" src="assets/shoes1.svg">'},
  {type: '.shoes', colors:['black','white','blue'], characteristics: ['iceskates'], source:'<img id="shoes" src="assets/iceskates.svg">'}
];

var arrayAccessories= [
  {type: '.accessories', colors:[], characteristics:[], source:''},
  {type: '.accessories', colors:['black','yellow'], characteristics: ['headphones'], source:'<img id="accessories" src="assets/headphones.svg">'},
  {type: '.accessories', colors:['green','yellow'], characteristics: ['hat'], source:'<img id="accessories" src="assets/hat1.svg">'},
  {type: '.accessories', colors:['black', 'white', 'orange'], characteristics: ['penguin'], source:'<img id="accessories" src="assets/penguin.svg">'},
  {type: '.accessories', colors:['red', 'purple','yellow'], characteristics: ['scarf'], source:'<img id="accessories" src="assets/scarf1.svg">'},
  {type: '.accessories', colors:['yellow', 'orange','pink'], characteristics: ['crown'], source:'<img id="accessories" src="assets/crown.svg">'},
  {type: '.accessories', colors:['red','white'], characteristics: ['scarf'], source:'<img id="accessories" src="assets/scarf2.svg">'},
  {type: '.accessories', colors:['purple', 'pink'], characteristics: ['scuba'], source:'<img id="accessories" src="assets/scuba.svg">'},
  {type: '.accessories', colors:['green','yellow'], characteristics: ['hat'], source:'<img id="accessories" src="assets/hat2.svg">'},
  {type: '.accessories', colors:['red','white'], characteristics: ['hat'], source:'<img id="accessories" src="assets/santahat.svg">'},
  {type: '.accessories', colors:['grey','purple'], characteristics: ['computer'], source:'<img id="accessories" src="assets/computer.svg">'}
];

var prompts = [
  {prompt: 'On Monday,<br><br>Ruby wears <br><span style="color:red">red</span> <b>AND</b> <span style="color:green">green</span>.<br>', answers: ['red', 'green'], condition: "and"},
  {prompt: 'On Tuesday,<br><br>Ruby wears <br>stripes <b>OR</b> polka dots.<br>', answers: ['stripes', 'polkadots'], condition: "or"},
  {prompt: 'On Wednesday,<br><br>Ruby does <br><b>NOT</b> wear <span style="color:blue">blue</span>.<br>', answers: ['blue'], condition: "not"},
  {prompt: 'On Thursday,<br><br>Ruby does <br><b>NOT</b> wear long sleeve <br><b>NOR</b> pants.<br>', answers: ['long', 'pants'], condition: "nor"},
  {prompt: 'On Friday,<br><br>Ruby wears <br>black <b>AND</b> <span style="color:gold">yellow</span>.<br>', answers: ['black', 'yellow'], condition: "and"},
  {prompt: 'On Saturday,<br><br>Ruby wears <br>overalls <b>OR</b> a skirt.<br>', answers: ['overall', 'skirt'], condition: "or"},
  {prompt: 'On Sunday,<br><br>Ruby wears <br>her <span style="color:red">pyjamas</span> ALL day!<br>',answers: ['pyjama'], condition:"or"},
  {prompt: ''}
];

function populate(array, type){
  var i;
  for(i=0;i<array.length;i++){
    $.each(array[i], function(index, value) {
      if (`${index}`== 'source'){
        $(type).append('<div>'+`${value}`+'</div>');
      }
    });
  }
}

$(document).on('ready', function() {

  populate(arrayTops, '.tops');
  populate(arrayBottoms, '.bottoms');
  populate(arrayShoes, '.shoes');
  populate(arrayAccessories, '.accessories');

  $(".tops").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    draggable: true,
    focusOnSelect: true
  });
  $(".bottoms").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    draggable: true,
    focusOnSelect: true
  });
  $(".shoes").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    draggable: true,
    focusOnSelect: true
  });
  $(".accessories").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    draggable: true,
    focusOnSelect: true
  });
//  $.each(arrayTops[0], function(index, value) {
//    if (`${index}`== 'source'){
//      $('#ruby-clothes-top').append(`${value}`);
//      $('#top').css("width","170px");
//    }
//  });
//  $.each(arrayBottoms[0], function(index, value) {
//    if (`${index}`== 'source'){
//      $('#ruby-clothes-bottom').append(`${value}`);
//      $('#bottom').css("width","170px");
//    }
//  });
//  $.each(arrayShoes[0], function(index, value) {
//    if (`${index}`== 'source'){
//      $('#ruby-clothes-shoes').append(`${value}`);
//      $('#shoes').css("width","170px");
//    }
//  });
//  $.each(arrayAccessories[0], function(index, value) {
//    if (`${index}`== 'source'){
//      $('#ruby-clothes-accessories').append(`${value}`);
//      $('#accessories').css("width","170px");
//    }
//  });
  $('.questions').append(prompts[0].prompt);
});

var currentSlideTops = 0;
var currentSlideBottoms = 0;
var currentSlideShoes = 0;
var currentSlideAccessories = 0;
var counter=0;
var wrongCounter=0;

$('.tops').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    currentSlideTops = nextSlide;
    $('#ruby-clothes-top').empty();
    $.each(arrayTops[currentSlideTops], function(index, value) {
      if (`${index}`== 'source'){
        $('#ruby-clothes-top').append(`${value}`);
        $('#top').css("height","170px");
      }
    });
});

$('.bottoms').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    currentSlideBottoms = nextSlide;
    $('#ruby-clothes-bottom').empty();
    $.each(arrayBottoms[currentSlideBottoms], function(index, value) {
      if (`${index}`== 'source'){
        $('#ruby-clothes-bottom').append(`${value}`);
        $('#bottom').css("width","150px");
      }
    });
});

$('.shoes').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    currentSlideShoes = nextSlide;
    $('#ruby-clothes-shoes').empty();
    $.each(arrayShoes[currentSlideShoes], function(index, value) {
      if (`${index}`== 'source'){
        $('#ruby-clothes-shoes').append(`${value}`);
        $('#shoes').css("width","150px");
      }
    });
});

$('.accessories').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    currentSlideAccessories = nextSlide;
    $('#ruby-clothes-accessories').empty();
    $.each(arrayAccessories[currentSlideAccessories], function(index, value) {
      if (`${index}`== 'source'){
        $('#ruby-clothes-accessories').append(`${value}`);
        $('#accessories').css("width","170px");
      }
    });
});

$("button").on("click",function(){
  var arrayColors = [];
  var arrayCharacteristics = [];
  var arrayClothes = [];
  arrayColors.push(...arrayTops[currentSlideTops].colors, ...arrayShoes[currentSlideShoes].colors, ...arrayBottoms[currentSlideBottoms].colors, ...arrayAccessories[currentSlideAccessories].colors);
  arrayCharacteristics.push(...arrayTops[currentSlideTops].characteristics, ...arrayShoes[currentSlideShoes].characteristics, ...arrayBottoms[currentSlideBottoms].characteristics, ...arrayAccessories[currentSlideAccessories].characteristics);
  arrayClothes.push(...arrayColors, ...arrayCharacteristics);

  if (prompts[counter].condition==="and")
  {
    if (($.inArray(prompts[counter].answers[0], arrayClothes) >= 0)&&($.inArray(prompts[counter].answers[1], arrayClothes) >= 0)){
      wrongCounter=0;
      $('.instructions').append('<img src="assets/gem.png" height="50px"/>');
      $('.questions').empty();
      $('.questions').append(prompts[counter+1].prompt);
      counter++;
    }else{
      $('.questions').append('<img src="assets/wrong.png" height="50px"/>');
      wrongCounter++;
    }

  }else if(prompts[counter].condition==="or"){
    if (($.inArray(prompts[counter].answers[0], arrayClothes) >= 0)||($.inArray(prompts[counter].answers[1], arrayClothes) >= 0)){
      wrongCounter=0;
      $('.instructions').append('<img src="assets/gem.png" height="50px"/>');
      $('.questions').empty();
      $('.questions').append(prompts[counter+1].prompt);
      counter++;
    }else{
      $('.questions').append('<img src="assets/wrong.png" height="50px"/>');
      wrongCounter++;
    }

  }else if(prompts[counter].condition==="not"){
    if (jQuery.inArray(prompts[counter].answers[0], arrayClothes) < 0){
      wrongCounter=0;
      $('.instructions').append('<img src="assets/gem.png" height="50px"/>');
      $('.questions').empty();
      $('.questions').append(prompts[counter+1].prompt);
      counter++;
    }else{
      $('.questions').append('<img src="assets/wrong.png" height="50px"/>');
      wrongCounter++;
    }

  }else if(prompts[counter].condition==="nor"){
    if ((jQuery.inArray(prompts[counter].answers[0], arrayClothes) < 0)&&(jQuery.inArray(prompts[counter].answers[1], arrayClothes) < 0)){
      wrongCounter=0;
      $('.instructions').append('<img src="assets/gem.png" height="50px"/>');
      $('.questions').empty();
      $('.questions').append(prompts[counter+1].prompt);
      counter++;
    }else{
      $('.questions').append('<img src="assets/wrong.png" height="50px"/>');
      wrongCounter++;
    }
  }

  if(wrongCounter==4){
    wrongCounter=0;
    $('.questions').empty();
    $('.questions').append(prompts[counter+1].prompt);
    counter++;
  }

  if(counter==7){
    $('.instructions').append('<br><img src="assets/reward.png" height="200px"/>');
    counter=0;
  }
});
