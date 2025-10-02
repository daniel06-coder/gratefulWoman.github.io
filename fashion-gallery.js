"use strict";

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}








const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalImage = modal.querySelector("img"); // the modal's image

const allImages = document.querySelectorAll(".advertised-images img");

allImages.forEach((image) => {
  image.addEventListener("click", function () {
    modalImage.src = this.src;
    modal.classList.remove("hide");
    overlay.classList.remove("hide");
  });
});

overlay.addEventListener("click", function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
});





// function sendMail() {
//   const selectedOption = document.querySelector(
//     'input[name="select-option"]:checked'
//   )?.value;
//   const answerQuestion = document.querySelector(
//     'input[name="answer"]:checked'
//   )?.value;

//   if (!selectedOption || !answerQuestion) {
//     alert("Please select a service and shipping option.");
//     return;
//   }

//   let params = {
//     firstName: document.getElementById("firstName").value,
//     lastName: document.getElementById("lastName").value,
//     email: document.getElementById("email").value,
//     phoneNo: document.getElementById("phone").value,
//     deliveryDate: document.getElementById("delivery").value,
//     selectOption: selectedOption,
//     answerQuestion: answerQuestion,
//     deliveryAddress: document.getElementById("delivery-address").value,
//     additionalInfo: document.getElementById("message").value,
//   };

//   emailjs.send("service_srztsqx", "template_4oett0h", params).then(
//     function (response) {
//       alert("Your email has been sent successfully!");
//     },
//     function (error) {
//       alert(
//         "Failed to send email. Please try again.\n" + JSON.stringify(error)
//       );
//       console.error("EmailJS Error:", error);
//     }
//   );
// }

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

  // Gather and trim form values
  let params = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    phoneNo: document.getElementById("phone").value.trim(),
    deliveryDate: document.getElementById("delivery").value,
    selectOption: selectedOption,
    answerQuestion: answerQuestion,
    deliveryAddress: document.getElementById("delivery-address").value.trim(),
    additionalInfo: document.getElementById("message").value.trim(),
  };

  // 🧪 Log the data before sending
  console.log("Form data to be sent:", params);

  // 🔗 EmailJS send
  emailjs.send("service_srztsqx", "template_4oett0h", params).then(
    function (response) {
      alert("Your email has been sent successfully!");
      console.log("EmailJS Success:", response);

      // Optional: Clear form
      document.querySelector("form.enquiry-order-questionaire").reset();
    },
    function (error) {
      alert(
        "Failed to send email. Please try again.\n" + JSON.stringify(error)
      );
      console.error("EmailJS Error:", error);
    }
  );
}













// const modal = document.querySelector('.modal')
// const overlay = document.querySelector('.overlay')
// const popUp = document.querySelector('.pop-up')


// const openModal = function(){
//   modal.classList.remove('hide')
//   overlay.classList.remove('hide')
// }


// const closeModal = function () {
//   modal.classList.add("hide");
//   overlay.classList.add("hide");
// };

// popUp.addEventListener("click", openModal);

// overlay.addEventListener('click', closeModal);