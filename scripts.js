// JavaScript for form submission confirmation
document.getElementById('enrollmentForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  // Show a confirmation message
  alert('Thank you for enrolling in the Forex Mentorship Program!');

  // Submit the form
  this.submit();
});
