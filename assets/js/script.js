function sendEmail() {
    let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_qy4r9dw", "template_sevyd7k", params)
      .then(function(response) {
        alert("Your message was sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        alert("Failed to send message. Error: " + JSON.stringify(error));
        console.error("FAILED...", error);
      });
  }
