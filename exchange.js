document.addEventListener('DOMContentLoaded', () => {
    const amount = document.getElementById('amount');
    const currencyFrom = document.getElementById('currency-from');
    const currencyTo = document.getElementById('currency-to');
    const convertButton = document.getElementById('convert');
    const result = document.getElementById('result');

    // Your API key and endpoint
    const API_KEY = "d9b105f5c217c413c6f818753c0beb38"; // Replace with your actual API key
    const apiUrl = "https://api.exchangerate.host/convert"; // API endpoint

    // Event listener for the convert button
    convertButton.addEventListener('click', () => {
        const amountValue = amount.value;
        const fromCurrency = currencyFrom.value;
        const toCurrency = currencyTo.value;

        // Construct the full API URL with the access_key
        const url = `${apiUrl}?from=${fromCurrency}&to=${toCurrency}&amount=${amountValue}&access_key=${API_KEY}`;

        // Making the API request using Fetch API
        fetch(url)
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                if (data.success) {
                    const convertedAmount = data.result;
                    result.innerHTML = `${amountValue} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
                } else {
                    result.innerHTML = "Error: " + data.error.info;
                }
            })
            .catch(error => {
                console.error("Request failed:", error);
                result.innerHTML = 'An error occurred. Please try again later.';
            });
    });
});
