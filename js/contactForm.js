$(document).ready(function () {
  
  var subBtn = $("#submitBtn");
  var subMsg = $("#submitMsg");
  
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val(),
      _subject: "New message from NeriBa portfolio page",
      _template: "table"
    };
    console.log(formData);

    subBtn.css("display", "none");
        
    $.ajax({
      type: "POST",
      url: "https://formsubmit.co/ajax/4f8ebefebd67484868ef51f5e6a97847",
      dataType: "json",
      accepts: 'application/json',
      data: formData,
    })
      .done(function (data) {
        //console.log(data);
        subMsg.css("display", "block");
        subMsg.text("Your message was successfully sent");
    })
      .fail(function (data) {
        //console.log(data);
        subMsg.css("color", "red");
        subMsg.text("Server error. Please refresh page and try again or just contact me via email or phone");
    });
    
  });
});