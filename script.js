function calculateAge() {
    // Get user input
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
  
    // Validate input
    if (day === "" || month === "" || year === "") {
      alert("Please enter valid values for day, month, and year.");
      return;
    }
  
    // Create a Date object with user input
    var dob = new Date(year, month - 1, day);
  
    // Calculate age
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
  
    // Check if birthday has occurred this year
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
      age--;
    }
  
    // // Display the result
    // document.getElementById("result").innerHTML = "Your age is: " + age + " years.";
    
    // Display the age in the separate input field
    document.getElementById("age").value = age;
  }
  