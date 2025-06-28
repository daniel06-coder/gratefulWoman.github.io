"use strict";

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function sendMail() {
  const selectedOption = document.querySelector(
    'input[name="select-option"]:checked'
  )?.value;
  const answerQuestion = document.querySelector(
    'input[name="answer"]:checked'
  )?.value;

  if (!selectedOption || !answerQuestion) {
    alert("Please select a service and shipping option.");
    return;
  }

  let params = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phoneNo: document.getElementById("phone").value,
    deliveryDate: document.getElementById("delivery").value,
    selectOption: selectedOption,
    answerQuestion: answerQuestion,
    deliveryAddress: document.getElementById("delivery-address").value,
    additionalInfo: document.getElementById("message").value,
  };

  emailjs.send("service_srztsqx", "template_jbu179l", params).then(
    function (response) {
      alert("Your email has been sent successfully!");
    },
    function (error) {
      alert(
        "Failed to send email. Please try again.\n" + JSON.stringify(error)
      );
      console.error("EmailJS Error:", error);
    }
  );
}