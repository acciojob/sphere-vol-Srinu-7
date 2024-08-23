function volume_sphere() {
    // Retrieve the radius value from the input field
    const radiusInput = document.getElementById('radius').value;

    // Convert the input to a floating-point number
    const radius = parseFloat(radiusInput);

    // Validate the input: Check if the radius is a non-negative number
    if (isNaN(radius) || radius < 0) {
        // If the input is invalid, set the volume output to NaN
        document.getElementById('volume').value = 'NaN';
    } else {
        // Calculate the volume using the formula: V = (4/3) * π * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Round the result to four decimal places
        const roundedVolume = volume.toFixed(4);

        // Display the result in the volume output field
        document.getElementById('volume').value = roundedVolume;
    }

    // Prevent the form from submitting
    return false;
}

// Attach the volume_sphere function to the form's onsubmit event when the window loads
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
