$(document).ready(function(){

    var  wins = 0;
    var losses = 0;
    var total = 0;
    
    
    
    function randomNumberGenerator(max, min) {
         return Math.floor(Math.random() * (max - min) + min);
        }
    
    var TargetNumber = randomNumberGenerator(120,19);
     $("#target").html(TargetNumber)
    
    
    
    var crystal1 = randomNumberGenerator(12,1);
        $("#button1").html(crystal1);
        $( "#button1" ).click(function() {
        console.log(total);
        total += crystal1;
        $("#total").html(total);   
        winloose();
    });
    
        var crystal2 = randomNumberGenerator(12,1);
        $("#button2").html(crystal2);
        $( "#button2" ).click(function() {
        console.log(total);
        total += crystal2;
        $("#total").html(total); 
        winloose(); 
        });
    
        var crystal3 = randomNumberGenerator(12,1);
        $("#button3").html(crystal3);
        $( "#button3" ).click(function() {
         console.log(total);
        total += crystal3;
        $("#total").html(total);  
        winloose();
        });
    
        var crystal4 = randomNumberGenerator(12,1);
        $("#button4").html(crystal4);
        $( "#button4" ).click(function() {
        console.log(total);
        total += crystal4;
        $("#total").html(total);  
        winloose();
        });
    
    function winloose () {
        if (total === TargetNumber) {
            alert("You win!");
            wins++
            $("#wins").html(wins);
            reset();
        } else if (total > TargetNumber) {
            alert("Try again");
            losses++
            $("#losses").html(losses);
            reset();
                }
    }
       
    function reset () {
        total = 0;
        $("#total").html(total)
        TargetNumber = randomNumberGenerator(120,19);
        $("#target").html(TargetNumber)
    
        crystal1 = randomNumberGenerator(12,1);
        $("#button1").html(crystal1);
        crystal2 = randomNumberGenerator(12,1);
        $("#button2").html(crystal2);
        crystal3 = randomNumberGenerator(12,1);
        $("#button3").html(crystal3);
        crystal4 = randomNumberGenerator(12,1);
        $("#button4").html(crystal4);
        
    }
        
    });