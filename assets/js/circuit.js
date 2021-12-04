$(document).ready(function(){
    $('.modal').modal();
  });

var exerciseName = $("#exercise").val();

var exerciseDuration = $("#duration").val();

var addExercise = $("#addButton").click(function(){

  $("#exercise-list").append('<li>' +exerciseName+ '</li>');
  
});