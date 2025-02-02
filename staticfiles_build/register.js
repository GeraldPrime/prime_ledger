function updatePhoneCode() {
    const countrySelect = document.getElementById("country");
    const phoneInput = document.getElementById("phone");

    // Ensure the elements exist
    if (!countrySelect || !phoneInput) {
        console.error("Country or Phone input elements are not found in the DOM.");
        return;
    }

    // Get the selected country's value (country code)
    const selectedCountryCode = countrySelect.value;

    // Validate that the country code is not empty
    if (!selectedCountryCode) {
        console.error("Selected country code is invalid.");
        return;
    }

    // Update the phone input placeholder
    phoneInput.placeholder = `${selectedCountryCode} Phone Number`; // Use template literals
}
