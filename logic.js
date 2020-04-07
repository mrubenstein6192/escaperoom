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
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object2").on("click", function() {
      $("#user-message").html("You clicked on Object 2");
      $("#user-images").html("A Pic will Show Here")
    })
    $("#object3").on("click", function() {
      $("#user-message").html("You clicked on Object 3");
      $("#user-images").html("A Pic will Show Here")
    })



    $("#submitNote").on("click", function() {
      var userEntry = $("#notes-body").val();
      console.log(userEntry);

      $("#notesGoHere").append("<br> " + userEntry)
    })
  }
  
})