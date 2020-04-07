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
      $("#user-message").html("You clicked on Poster 1");
      var poster1Image = new Image(250,250);
      poster1Image.classList.add("thisPic");
      poster1Image.src = ("./images/poster1.png");
      $("#user-images").html(poster1Image);
     
    })
    $("#table1").on("click", function() {
      $("#user-message").html("You clicked on Object 2");
      var tableImage = new Image(250,250);
      tableImage.classList.add("thisPic");
      tableImage.src = ("./images/table.png");
      $("#user-images").html(tableImage);
    })
    $("#circleTable").on("click", function() {
      $("#user-message").html("You clicked on Object 3");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object4").on("click", function() {
      $("#user-message").html("You clicked on Object 4");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object5").on("click", function() {
      $("#user-message").html("You clicked on Object 5");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object6").on("click", function() {
      $("#user-message").html("You clicked on Object 6");
      $("#user-images").html("A Pic will Show Here")
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