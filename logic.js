$(document).ready(function() {
  var counter = 1800;
  var intervalId;
  var clockRunning = false;
  var isPerfectNumberSolved = false;
  $("#main-container").hide();
  $("#picture").hide();
  $(document).on("click", ".start", function() {
    start();
    run();
  })
  function run() {
    if (!clockRunning) {
      intervalId = setInterval(decrement, 1000);
      clockRunning = true;
    }
  }
  function decrement() {
    counter-- ;
     //  Show the number in the #timer tag.
     $("#timer").html("<h1>" + counter + "</h1>");
     var converted = timeConverter(counter);
    $("#timer").text(converted);
     if (counter === 0) {
      stop();
    }
  }
  function stop() {
    clearInterval(intervalId);
  }
  function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }


  function start() {
    $("#welcome").hide();
    $("#main-container").show();
    $("#poster1").on("click", function() {
      $("#user-message").html("You are looking at a 'Red' Poster.");
      var poster1Image = new Image(250,250);
      poster1Image.classList.add("thisPic");
      poster1Image.src = ("./images/poster1.png");
      $("#user-images").html(poster1Image);
     
    })
    $("#table1").on("click", function() {
      $("#user-message").html("You are looking at the table.<br/>Here's what's on it.");
      var tableImage = new Image(250,250);
      tableImage.classList.add("thisPic");
      tableImage.src = ("./images/table.png");
      $("#user-images").html(tableImage);
    })
    $("#circleTable").on("click", function() {
      $("#user-message").html("You are looking at the circle table.<br/> Here's what you see.");
      var circleTableImage = new Image(250,250);
      circleTableImage.classList.add("thisPic");
      circleTableImage.src = ("./images/circleTable.png");
      $("#user-images").html(circleTableImage);
    })
    $("#box1").on("click", function() {
      $("#user-message").html("You tried to open this Box.<br/>But it's locked :/");
      $form = $("<form autocomplete = 'off'></form>");
      $form.addClass("guessForm");
      $form.append("<div id = codeCheck>Enter 6-digit code: <input class = 'checkCode' type = 'numeric' maxlength = '6' size = '6'></input></div>");
      $("#user-images").html($form);
      $button = $("<button type = 'submit'>Enter</button>");
      $button.addClass("enterCode mt-2");
      $("#user-images").append($button);
      var bigAssBox = new Image(250,250);
        bigAssBox.classList.add("thisPic");
        bigAssBox.src = ("./images/bigassbox.png");
        $("#user-images").append(bigAssBox);
      $(".enterCode").on("click", function() {
        var theAnswer = "012447";
        var userGuess = $(".checkCode").val();
        console.log(theAnswer);
        console.log(userGuess);
        if (theAnswer === userGuess) {
          $("#user-images").empty();
          $("#user-images").append("<br/>Correct! The box opens and you find this picture inside:");
          var foodChainImage = new Image(250,250);
          foodChainImage.classList.add("thisPic");
          foodChainImage.src = ("./images/foodChain.png");
          $("#user-images").html(foodChainImage);
          $("#box1").css("background-color", "black");
          $("#box1").css("color", "black");
        } 
        else {
          $("#user-images").append("<br/>Nah, you suck! Try again...")
        }
      })
    })
    $("#bluePoster").on("click", function() {
      $("#user-message").html("You are looking at the 'Blue' Poster<br/>Hmmm...Da fuq?");
      $("#user-images").html("Think you know what goes in each empty box?");
      $blank1 = $("<form autocomplete = 'off'></form>");
      $blank1.addClass("blankGuess1");
      $blank1.append("<div id = firstGuess><input class = 'checkGuess' type = 'text' ></input></div>");
      $("#user-images").append($blank1);
      $blank2 = $("<form autocomplete = 'off'></form>");
      $blank2.addClass("blankGuess2");
      $blank2.append("<div id = secondGuess><input class = 'checkGuess2' type = 'text' ></input></div>");
      $("#user-images").append($blank2);
      $blank3 = $("<form autocomplete = 'off'></form>");
      $blank3.addClass("blankGuess3");
      $blank3.append("<div id = thirdGuess><input class = 'checkGuess3' type = 'text' ></input></div>");
      $("#user-images").append($blank3);
      $blank4 = $("<form autocomplete = 'off'></form>");
      $blank4.addClass("blankGuess4");
      $blank4.append("<div id = fourthGuess><input class = 'checkGuess4' type = 'text' ></input></div>");
      $("#user-images").append($blank4);
      $blank5 = $("<form autocomplete = 'off'></form>");
      $blank5.addClass("blankGuess5");
      $blank5.append("<div id = fifthGuess><input class = 'checkGuess5' type = 'text' ></input></div>");
      $("#user-images").append($blank5);


      $button3 = $("<button type = 'submit'>Enter</button>");
      $button3.addClass("submitGuess10 mt-2");
      $("#user-images").append($button3);

      $(".submitGuess10").on("click", function() {
        var firstAnswer = "eagle";
        var secondAnswer = "snake";
        var thirdAnswer = "frog";
        var fourthAnswer = "grasshopper";
        var fifthAnswer = "grass";

      var firstUserGuess = $('.checkGuess').val().trim().toLowerCase();
      var secUserGuess = $('.checkGuess2').val().trim().toLowerCase();
      var thirdUserGuess = $('.checkGuess3').val().trim().toLowerCase();
      var fourthUserGuess = $('.checkGuess4').val().trim().toLowerCase();
      var fifthUserGuess = $('.checkGuess5').val().trim().toLowerCase();

      if (firstUserGuess === firstAnswer && secUserGuess === secondAnswer && thirdUserGuess === thirdAnswer && fourthAnswer === fourthUserGuess && fifthUserGuess === fifthAnswer) {
        $("#user-images").html("Wow! You got it! Something new appeared in the room!")
        $("#picture").show();
      }
        else {
          $("#user-images").append("<br/>Not quite right. Try again!");
        }
      })
      

        var bluePosterImage = new Image(250,250);
        bluePosterImage.classList.add("thisPic");
        bluePosterImage.src = ("./images/bluePoster.png");
        $("#user-message").append(bluePosterImage);
     
    })
    $("#rug").on("click", function() {
      $("#user-message").html("You looked under the rug!<br>You found a key!");
      var keyImage = new Image(250,250);
        keyImage.classList.add("thisPic");
        keyImage.src = ("./images/key.png");
        $("#user-images").html(keyImage);
    })
    // $("#object7").on("click", function() {
    //   $("#user-message").html("You clicked on Object 7");
    //   $("#user-images").html("A Pic will Show Here")
    // })
    $("#desk").on("click", function() {
      $("#user-message").html("You are checking out this desk.<br/>You see this map on top of it.<br/>There are three drawers.<br/>The top one is locked!<br/>Do you have a key?<br/>");
      $yesButton = $("<button type = 'submit'>Yes</button>");
      $yesButton.addClass("yes mt-2 mr-2");
      $("#user-message").append($yesButton);
      $noButton = $("<button type = 'submit'>No</button>");
      $noButton.addClass("no mt-2");
      $("#user-message").append($noButton);
      $(".yes").on("click", function() {
        $("#user-message").text("Awesome! It opened! You found this bunch of word plates inside:")
        ;
        var wordsImage = new Image(250,250);
        wordsImage.classList.add("thisPic");
        wordsImage.src = ("./images/wordplates.png");
        $("#user-message").append(wordsImage);
      })
      $(".no").on("click", function() {
        $("#user-message").text("Sucks to suck...go find one.")
      })

      var mapImage = new Image(250,250);
        mapImage.classList.add("thisPic");
        mapImage.src = ("./images/map.png");
        $("#user-images").html(mapImage);
        var deskImage = new Image(250,250);
        deskImage.classList.add("thisPic");
        deskImage.src = ("./images/desk.png");
        $("#user-images").append(deskImage);
      
    })
    $("#shelf").on("click", function() {
      $("#user-message").html("The shelf has a message:");
      var invertImage = new Image(250,150);
      invertImage.classList.add("thisPic");
      invertImage.src = ("./images/inversion.png");
      $("#user-images").html(invertImage);
    })
    $("#picture").on("click", function() {
      $("#user-message").html("Well, it's just a picture of some numbers.<br/>Think you can fill in the missing one?");
      $missingNumber = $("<form autocomplete = 'off'></form>");
      $missingNumber.addClass("numberGuess");
      $missingNumber.append("<div id = numGuess><input class = 'checkNumberGuess' type = 'numeric' maxlength='3' size = '3'></input></div>");
      $("#user-message").append($missingNumber);


      $button11 = $("<button type = 'submit'>Enter</button>");
      $button11.addClass("submitNumGuess mt-2");
      $("#user-message").append($button11);
      var numberImage = new Image(250,150);
        numberImage.classList.add("thisPic");
        numberImage.src = ("./images/numberPuzzle.png");
        $("#user-images").html(numberImage);

        $(".submitNumGuess").on("click", function() {
          var numberAnswer = "28";
          var userNumberAnswer = $(".checkNumberGuess").val();
          console.log(userNumberAnswer);
          if (userNumberAnswer === numberAnswer) {
            isPerfectNumberSolved = true;
            $("#user-message").html("BANG! A new message just appeared in place of the numbers:");
            var numberImage2 = new Image(250,150);
            numberImage2.classList.add("thisPic");
            numberImage2.src = ("./images/message.png");
            $("#user-images").html(numberImage2);
            $("#user-images").append("Did they do it?<br/>");
            $yesButton2 = $("<button type = 'submit'>Yes</button>");
      $yesButton2.addClass("yes2 mt-2 mr-2");
      $("#user-images").append($yesButton2);
      $noButton2 = $("<button type = 'submit'>No</button>");
      $noButton2.addClass("no2 mt-2");
      $("#user-images").append($noButton2);
      $(".yes2").on("click", function() {
        $("#user-images").append("<br/>HA! That didn't do anything...Onwards!");
    
      })
      $(".no2").on("click", function() {
        $("#user-images").html("Damn, you called my bluff. Onwards!")
      })
          }
          else {
            $("#user-message").append("<br/>Nope.  Maybe just Google It.");
          }
        })
    })
    $("#littleBox").on("click", function() {
      var metalBox = new Image(250,250);
      metalBox.classList.add("thisPic");
      metalBox.src = ("./images/metalBox.png");
      $("#user-images").html(metalBox);

      if (isPerfectNumberSolved === false) {
        console.log("Not ready to open");
      $("#user-message").html("This Box Won't Seem to Open. There's no key-hole or number pad...WTF");
      }
      else {
        $("#user-message").html("The box is opened now!")
      }
    })
  
    $("#object12").on("click", function() {
      $("#user-message").html("You clicked on Object 12");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object13").on("click", function() {
      $("#user-message").html("You clicked on Object 13");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#door").on("click", function() {
      $("#user-message").html("You clicked on the Door! <br/>Do you know the code to escape?!");
      var doorImage = new Image(250,250);
      doorImage.classList.add("thisPic");
      doorImage.src = ("./images/doorCode.jpg");
      $("#user-images").html(doorImage);

      $form2 = $("<form autocomplete = 'off'></form>");
      $form2.addClass("guessForm2");
      $form2.append("<div id = codeCheck2>Enter 6-digit code: <input class = 'checkCode2' type = 'numeric' maxlength = '6' size = '6'></input></div>");
      $("#user-message").append($form2);
      $button2 = $("<button type = 'submit'>Enter</button>");
      $button2.addClass("enterCode2 mt-2");
      $("#user-message").append($button2);
      $(".enterCode2").on("click", function() {
        var theAnswer2 = "111111";
        var userGuess2 = $(".checkCode2").val();
        console.log(theAnswer2);
        console.log(userGuess2);
        if (theAnswer2 === userGuess2) {
          $("#user-message").empty();
          $("#user-message").append("<br/>YOU HAVE ESCAPED!");
          var winner = new Image(250,250);
          winner.classList.add("thisPic");
          winner.src = ("./images/congrats.png");
          $("#user-images").html(winner);
          
        } 
        else {
          $("#user-message").append("<br/>Nah, you suck! Try again...")
        }
      })
    })
    $("#object15").on("click", function() {
      $("#user-message").html("You clicked on Object 15");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object16").on("click", function() {
      $("#user-message").html("You clicked on Object 16");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object17").on("click", function() {
      $("#user-message").html("You clicked on Object 17");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object18").on("click", function() {
      $("#user-message").html("You clicked on Object 18");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object19").on("click", function() {
      $("#user-message").html("You clicked on Object 19");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object20").on("click", function() {
      $("#user-message").html("You clicked on Object 20");
      $("#user-images").html("A Pic will Show Here")
    })
   


    $("#submitNote").on("click", function() {
      var userEntry = $("#notes-body").val();
      console.log(userEntry);

      $("#notesGoHere").append("<br> " + userEntry)
    })
  }
  
})