//BRIANS WORK


   $.getJSON(
      'https://itunes.apple.com/search?term=the+cure&limit=25&callback=?', 
      function iTunesCall( data ) {
        myData = data;
         console.log(data)
         console.log(myData.results[0].previewUrl);
       
  var fSound = myData.results[0].previewUrl;
         var sound = new Audio(fSound);
  sound.play();
     });



function launchSearch(){
  //
  $("#launch-search").on("click",function(){

  //url request to the eventful API(this will access our events)
  var eventfulURL ="http://api.eventful.com/json/events/search?app_key=2CH4skmC8kN48Lr4&q=music"
  
  //grab our user input by building an onclick submit to the API
      //must reference the parameters: location by zip?, music, 

  //create our dropdown menu access
    //1. create variables to hold/call our San Diego regions >DEFINE these how??? 
        //construct this selection
    //2. on select we will send our request to the API

//run ajax to send a request to the eventful server
     $.ajax({
      url: eventfulURL,
      method: "GET"
      })  
//.done function will run what we need to run after we get the API data
        .done(function(response) {
        console.log(response);
//in here put all the gif display/reporting that will happen
        var results  = response.data 
        console.log(results);

//create a loop to iterate through out return
        //run through the results page
        for (var i = 0; i < results.length; i++) {



        }

//I want to return each search result as an eventObject
        var eventObject ={
          date: "",
          artist:"",
          venue:"",
          eventLink:"",
          
          artistImg:"",
          songLink:""
        }


        });
  
};
launchSearch();