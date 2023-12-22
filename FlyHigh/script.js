function myFunction(x) {
    x.classList.toggle("change");
  }


$(document).ready(function () {
    $(".PageMenu_listItem").click(function () {
        $(".PageMenu_listItem").removeClass("active");
        $(this).addClass("active");
    });
});

// Add your custom JavaScript code here
document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Add your form submission logic here
    event.preventDefault();
    // Example: alert("Form submitted!");
});

