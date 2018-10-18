var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Chatbot',
  i=0 //name of the chatbot

var params = {
  // This is where any modeled request parameters should be added.
  // The key is the parameter name, as it is defined in the API in API Gateway.
};

var body = {
  // This is where you define the body of the request,
};

var additionalParams = {
  // If there are any unmodeled query parameters or headers that must be
  //   sent with the request, add them here.
  headers: {
    "Access-Control-Allow-Origin" : '*',
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": '*',
    "Access-Control-Allow-Headers": '*'
  }
};

var apigClient = apigClientFactory.newClient({
  apiKey:'Ryp3ae5Yn65rG7s5VduE95tPUBGX1fss8CYF5X7x'
});
function newEntry() {
  //if the message from the user isn't empty then run
  if (document.getElementById("userMsg").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("userMsg").value;
    //sets the chat box to be clear
    document.getElementById("userMsg").value = "";
    console.log("botmhere",lastUserMessage);

    //adds the value of the chatbox to the array messages
    //messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    console.log("botmhere",botMessage);
    //add the chatbot's name and message to the array messages
    //messages.push("<b>" + botName + ":</b> " + botMessage);

    }

}



//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}

$('document').ready(function() {
	$('#sendmsg').click(function(e) {
		e.preventDefault();
			var user_Msg = $("<p> User : " + $('#userMsg').val() + "</p>");
      console.log($('#userMsg').val());
			body = {
          		"question": $('#userMsg').val()
			};
      console.log(body);
      $("#sentmsg").append(user_Msg);

			$.post("https://lgl8o8jdnf.execute-api.us-west-2.amazonaws.com/prod/chatbot", JSON.stringify(body), function( data )
      {
			$("#userMsg").val("");
      var jsonobj=JSON.parse(data["body"]);
			var a = $("<p> Bot : " + jsonobj['Bot'] + "</p>");
			$("#sentmsg").append(a);
  			console.log(data["body"]);
		});
	});
});
