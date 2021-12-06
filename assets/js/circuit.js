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