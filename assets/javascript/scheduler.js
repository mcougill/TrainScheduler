//create variable to reference database

var database = firebase.database();

//append form entry to train table 
$(".btn").on("click",function(event){
    event.preventDefault();

    train = $("#trainNameInput").val().trim();
      destination = $("#destinationInput").val().trim();
      firstTrain = $("#firstTrainInput").val().trim();
      freq = $("#frequencyInput").val().trim();

      //store entry into firebase
      database.ref().set({
        train: train,
        destination: destination,
        firstTrain: firstTrain,
        freq: freq

});
});



//firebase to host arrival and departure data
//app to retrieve and manipulate this information with Moment.js
//app will provide up-to-date information about various trains (arrival time, how many minutes remain until they arrive at their station)

//firebase watcher + initial loader (.on("value"))
//change HTML to reflect
//Handle the errors 

