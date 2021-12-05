

/***  Modal  ***/
$(document).ready(function () {
    $('.modal').modal();

});
var exerciseName = $("#exercise").val();

var exerciseDuration = $("#duration").val();

var addExercise = $("#addButton").on('click', function (exerciseName) {

    $("#exercise-list").html('<li>' + exerciseName + '</li>');
    console.log(exerciseName);

    // console.log(exerciseName.val());
});


//**  Json call into wger api **/
$(function () {
    $.getJSON('https://wger.de/api/v2/exercise/?format=json', function (data) {
        // var exercises = [];
        var output = '<ul>';
        $.each(data.results, function (index, item) {

            output += '<li>' + item.name + '</li>';
            // output += '<li>' + item.description + '</li>'
            console.log(data)
        });
        output += '</ul>'
        $('#exercise-list').append(output);
    });

});

