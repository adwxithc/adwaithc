// const name=document.getElementById("name");
// const mail=document.getElementById("email");
// const subject=document.getElementById("subject");
// const message=document.getElementById("message");


// const form=document.getElementById("submit-form");
// const erroruname=document.getElementById("erroruname");
// const errorpass=document.getElementById("errorpass");
// const errormail=document.getElementById("errormail");
// const errorsub=document.getElementById("errorsub");
// const errormessage=document.getElementById("errormessage");



// let res=true;

// form.addEventListener("change",()=>{
//     erroruname.innerHTML="";
    
//     errormail.innerHTML="";
//     errorsub.innerHTML="";
//     errormessage.innerHTML="";
//     res=true;
// });


// form.addEventListener("submit",(e)=>{
    


//     if(name.value.trim()===''|| name.value.trim()===null ){
//         e.preventDefault();
        
//     erroruname.innerHTML="*Name is required";
//     return false;
//     }
//     else{
//         const format =/^([a-zA-Z])+$/;
//         let nameres=format.test(name.value);
//         if(nameres==false)
//         {
//             e.preventDefault();
//             erroruname.innerHTML="*Name should be in letters";
//             return false;
//         }
        
//     }
    

//     if(mail.value.trim()===''|| mail.value.trim()===null ){
//         e.preventDefault();
//     errormail.innerHTML="*mail is required";
//     return false;
//     }
//     else
//     {
//         const reg =/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
//         res=reg.test(mail.value);
//         if(res==false){
//             e.preventDefault();
//             errormail.innerHTML="*invalid format";
//             return false;
//         }
//     }
//     if(subject.value===''|| subject.value===null ){
//         e.preventDefault();
//         errorsub.innerHTML="*subject is required";
//     return false;
//     }
//     if(message.value===''|| message.value===null ){
//         e.preventDefault();
//         errormessage.innerHTML="*message is required";
//     return false;
//     }
  

//    $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbyRGvFlgQ43PPWLadZHv-MgpHiB6eldBHfLTcccJGzi4KWJx1tOQWdNjCQxK9n3t1Fm3g/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })

    
// });


// form ajax messag
    

// $("#submit-form").submit((e)=>{
//      e.preventDefault()
//      $.ajax({
//          url:"https://script.google.com/macros/s/AKfycbyRGvFlgQ43PPWLadZHv-MgpHiB6eldBHfLTcccJGzi4KWJx1tOQWdNjCQxK9n3t1Fm3g/exec",
//          data:$("#submit-form").serialize(),
//          method:"post",
//          success:function (response){
//              alert("Form submitted successfully")
//              window.location.reload()
//              //window.location.href="https://google.com"
//          },
//          error:function (err){
//              alert("Something Error")

//          }
//      })
//  })


  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("submit-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var subject = document.getElementById("subject").value;
      var message = document.getElementById("message").value;

      var errorUname = document.getElementById("erroruname");
      var errorEmail = document.getElementById("errormail");
      var errorSub = document.getElementById("errorsub");
      var errorMessage = document.getElementById("errormessage");

      // Reset error messages
      errorUname.innerHTML = "";
      errorEmail.innerHTML = "";
      errorSub.innerHTML = "";
      errorMessage.innerHTML = "";

      // Validate name
      if (name.trim() === "") {
        errorUname.innerHTML = "Please enter your name.";
        return;
      }

      // Validate email
      if (email.trim() === "") {
        errorEmail.innerHTML = "Please enter your email address.";
        return;
      } else if (!isValidEmail(email)) {
        errorEmail.innerHTML = "Please enter a valid email address.";
        return;
      }

      // Validate subject
      if (subject.trim() === "") {
        errorSub.innerHTML = "Please enter the subject.";
        return;
      }

      // Validate message
      if (message.trim() === "") {
        errorMessage.innerHTML = "Please enter your message.";
        return;
      }

      // If all fields are valid, proceed with form submission
      var xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://script.google.com/macros/s/AKfycbyRGvFlgQ43PPWLadZHv-MgpHiB6eldBHfLTcccJGzi4KWJx1tOQWdNjCQxK9n3t1Fm3g/exec",
        true
      );
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      xhr.onload = function () {
        if (xhr.status === 200) {
          alert("Form submitted successfully");
          form.reset(); // Clear the form
        } else {
          alert("Something went wrong");
        }
      };

      xhr.onerror = function () {
        alert("Network error occurred");
      };

      xhr.send(new URLSearchParams(new FormData(form)));
    });
  });

  // Helper function to validate email format
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }




