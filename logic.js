$(document).ready(function() {
  var counter = 1800;
  var intervalId;
  var clockRunning = false;
  $("#main-container").hide();
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
          $("#user-images").append(foodChainImage);
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
        var bluePosterImage = new Image(250,250);
        bluePosterImage.classList.add("thisPic");
        bluePosterImage.src = ("./images/bluePoster.png");
        $("#user-images").append(bluePosterImage);
     
    })
    $("#rug").on("click", function() {
      $("#user-message").html("You looked under the rug!<br>You found a key!");
      var keyImage = new Image(250,250);
        keyImage.classList.add("thisPic");
        keyImage.src = ("./images/key.png");
        $("#user-images").append(keyImage);
    })
    $("#object7").on("click", function() {
      $("#user-message").html("You clicked on Object 7");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object8").on("click", function() {
      $("#user-message").html("You clicked on Object 8");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object9").on("click", function() {
      $("#user-message").html("You clicked on Object 9");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object10").on("click", function() {
      $("#user-message").html("You clicked on Object 10");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object11").on("click", function() {
      $("#user-message").html("You clicked on Object 11");
      $("#user-images").html("A Pic will Show Here")
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