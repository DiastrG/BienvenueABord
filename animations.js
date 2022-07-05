// Effet carrousel avec défilement 15secondes

var numero = 1;
var timer = setInterval(function(){
    numero += 1; 
    $('header img').attr('src', './annexes/background'+numero+'.jpg');
    $('header img').css('height', '90vh') .css('width', '100%');
        if(numero==4){
            numero=0;
        }    
},15000);


// Faire défiler l'image avant et après
//PEUGEOT


var num = 1;
$('#prevPeugeot').click(function(){
    console.log(prevPeugeot);
     num -= 1;
    
    if (num < 1 ){
        num = 4 ;
        }
    $('.peugeot img').attr('src', './annexes/peugeot'+num+'.jpg');
    });


  var num = 1;
$('#nextPeugeot').click(function(){
    console.log(nextPeugeot);
      num += 1;
    
       if (num > 4){
            num = 1 ;
            }
        $('.peugeot img').attr('src', './annexes/peugeot'+num+'.jpg');
    });



// Faire défiler l'image avant et après
//FORD

var numf = 1;
$('#prevFord').click(function(){
    console.log(prevFord)
      numf -= 1;
    
    if (numf < 1 ){
        numf = 4 ;
        }
    $('.ford img').attr('src', './annexes/fordfocus'+numf+'.jpg');
    });


$('#nextFord').click(function(){
    numf += 1;
    
       if (numf > 4){
            numf = 1 ;
            }
        $('.ford img').attr('src', './annexes/fordfocus'+numf+'.jpg');
    });



// Faire défiler l'image avant et après
//AUDI

var numA = 1;
$('#prevAudi').click(function(){
      numA -= 1;
    
    if (numA < 1 ){
        numA = 4 ;
        }
    $('.audi img').attr('src', './annexes/audi'+numA+'.jpg');
    });


$('#nextAudi').click(function(){
    numA += 1;
    
       if (numA > 4){
            numA = 1 ;
            }
        $('.audi img').attr('src', './annexes/audi'+numA+'.jpg');
    });



// Faire défiler l'image avant et après
//OPEL

var numO = 1;
$('#prevOpel').click(function(){
      numO -= 1;
    
    if (numO < 1 ){
        numO = 4 ;
        }
    $('.opel img').attr('src', './annexes/opel'+numO+'.jpg');
    });


$('#nextOpel').click(function(){
    numO += 1;
    
       if (numO > 4){
            numO = 1 ;
            }
        $('.opel img').attr('src', './annexes/opel'+numO+'.jpg');
    });