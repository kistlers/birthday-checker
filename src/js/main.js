document.addEventListener("DOMContentLoaded", function () {
    // Your birthdate in ISO format
    const birthdate = "1997-03-06";

    // Get the day and month of your birthdate
    const birthMonth = parseInt(birthdate.substring(5, 7));
    const birthDay = parseInt(birthdate.substring(8, 10));

    // Get the current date
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-based, so we add 1 to get the actual month
    const currentDay = currentDate.getDate();

    // Compare the month and day of the month
    const isBirthday = currentMonth === birthMonth && currentDay === birthDay;

    // Calculate your age
    const birthYear = parseInt(birthdate.substring(0, 4));
    const currentYear = currentDate.getFullYear();
    const age = currentYear - birthYear;

    // Display the results on the webpage
    const birthdayStatusElement = document.getElementById("birthday-status");
    birthdayStatusElement.textContent = isBirthday ? `It is my ${age}th birthday!` : "It is not my birthday.";

    // Load particles.js
    particlesJS.load("particles-js", "data/particles-config.json");
});
