
$(document).ready(function () {

    var train = "";
    var destination = "";
    var firstTrain = "";
    var freq = "";
    var trainNum = [];

    //create variable to reference database
    var database = firebase.database();

    //grab value from form input
    $(".btn").on("click", function (event) {
        event.preventDefault();

        train = $("#trainNameInput").val().trim();
        destination = $("#destinationInput").val().trim();
        firstTrain = $("#firstTrainInput").val().trim();
        freq = $("#frequencyInput").val().trim();

        //store entry into firebase
        database.ref().push({
            train: train,
            destination: destination,
            firstTrain: firstTrain,
            freq: freq

        });

        return false;
    });
    //append input every time child added from form
    database.ref().on("child_added", function (snapshot) {
    $("#myTable tr:last").after("<tr><td>"+train +"</td><td>"+destination+"</td><td>"+firstTrain+"</td><td>"+freq+"</td><td>placeholder</td></tr>");
    
    
        //$("#destinationDisplay").append(destination);
        //$("#frequencyDisplay").append(freq);

    })






    //firebase to host arrival and departure data
    //app to retrieve and manipulate this information with Moment.js
    //app will provide up-to-date information about various trains (arrival time, how many minutes remain until they arrive at their station)

    //firebase watcher + initial loader (.on("value"))
    //change HTML to reflect
    //Handle the errors 
})
