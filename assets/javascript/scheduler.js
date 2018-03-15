
$(document).ready(function () {

    var train = "";
    var destination = "";
    var firstTrain = "";
    var freq = "";

    //create variable to reference firebase database
    var database = firebase.database();



    //grab value from form input
    $(".btn").on("click", function (event) {
        event.preventDefault();
        train = $("#trainNameInput").val().trim();
        destination = $("#destinationInput").val().trim();
        firstTrain = $("#firstTrainInput").val().trim();
        freq = $("#frequencyInput").val().trim();

        //store child entry into firebase
        //firebase to host arrival and departure data
        database.ref().push({
            train: train,
            destination: destination,
            firstTrain: firstTrain,
            freq: freq
        });


        return false;
    });




    //run function every time child (new train) added 
    database.ref().on("child_added", function (childSnap) {

        //momentJS conversions
        var firstTimeConverted = moment(childSnap.val().firstTrain, "hh:mm").subtract(1, "years");
        var currentTime = moment();
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        var remainder = diffTime % childSnap.val().freq;
        var minUntilTrain = childSnap.val().freq - remainder;
        var nextTrain = moment().add(minUntilTrain, "minutes");
        var nextTrainFormatted = moment(nextTrain).format("hh:mm A");

        //append input every time child added from form
        $("#myTable tr:last").after("<tr><td>" + childSnap.val().train +
            "</td><td>" + childSnap.val().destination +
            "</td><td>" + childSnap.val().freq +
            "</td><td>" + moment(nextTrain).format("hh:mm A") +
            "</td><td>" + minUntilTrain + "</td></tr>");


    });


});
