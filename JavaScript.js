function getDOB() {
    // Get the values from the input fields
    const dobInput = document.getElementById('inputDob').value;
    const currentDateInput = document.getElementById('cdate').value;

    // Validate if both dates are provided
    if (!dobInput || !currentDateInput) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }

    // Convert input values to Date objects
    const dob = new Date(dobInput);
    const currentDate = new Date(currentDateInput);

    // Calculate age in years
    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();
    const dayDifference = currentDate.getDate() - dob.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    // Calculate the remaining months
    let months = monthDifference < 0 ? (12 + monthDifference) : monthDifference;

    // Calculate the remaining days
    let days = dayDifference < 0 ? (new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() + dayDifference) : dayDifference;

    // Display the result
    document.getElementById('currentAge').textContent = `Your age is ${age} years, ${months} months, and ${days} days.`;
}
