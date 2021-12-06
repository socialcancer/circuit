<<<<<<< HEAD




$('#exercise').keyup(function () {
    //get value from search field
    // var searchField = $('#exercise').val();

    // var myExp = RegExp(searchField, "i");

    // console.log(searchField);
    // // console.log(stopWatch);


    $.getJSON('https://wger.de/api/v2/exercise.json/?limit=10&language=2', function (data) {

        var x = data.results;

        var output = '<ul class = "search-results">';

        x.forEach(function (index, item) {
            output += '<li>';
            output += '<p>' + index.name + '</p>';
            output += '</li>';
        });
        output += '</ul>';
        console.log(output);

        //Append list to the bottom of the input id
        $('#list-group').append(output);
        $('#exercise-list').append(output);

        localStorage.setItem('output', JSON.stringify(output));
    });
});


//Modal
$('.modal').modal();

//Timer function
function makeTimer() {

    //var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");

};

setInterval(function () { makeTimer(); }, 1000);

$('#addButton').on('click', function () {
    $('#timer').removeClass('hide').addClass('show');
});

//Remove all exercises from the screen
$("#delete-exercises").on('click', function () {
    $('.search-results').remove();
    $('#timer').remove();
});
=======
$(document).ready(function(){
    $('.modal').modal();
  });

$(document).ready(function(){
  $('.parallax').parallax();
 });

var addExercise = function(exerciseName) {

    //create list item
    var exerciseLi = $("<li>").addClass("exercise-item");

    var durationSpan = $("<span>")
      .text(exerciseDuration);

    //create p element for exercise name
    var exerciseP = $("<p>")
        .text(exerciseName);

    //append p element to li    
    exerciseLi.append(exerciseName);

    //append li to ul
    $("#exercise-list").append(exerciseLi);



};

var exerciseName = $("#exercise").val();

var exerciseDuration = $("#duration").val();
>>>>>>> 390b25bd3b0c21dda6e3d99700dddf864d10bff1
