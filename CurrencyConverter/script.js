document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const convertButton = document.getElementById('convert');
    const resultDiv = document.getElementById('result');

    const apiURL = 'https://api.exchangerate-api.com/v4/latest/USD';

    const currencies = {
        USD: 'United States Dollar ($)',
        EUR: 'Euro (€)',
        GBP: 'British Pound Sterling (£)',
        JPY: 'Japanese Yen (¥)',
        AUD: 'Australian Dollar (A$)',
        CAD: 'Canadian Dollar (C$)',
        CHF: 'Swiss Franc (CHF)',
        CNY: 'Chinese Yuan (¥)',
        SEK: 'Swedish Krona (kr)',
        NZD: 'New Zealand Dollar (NZ$)',
        MXN: 'Mexican Peso ($)',
        SGD: 'Singapore Dollar (S$)',
        HKD: 'Hong Kong Dollar (HK$)',
        NOK: 'Norwegian Krone (kr)',
        KRW: 'South Korean Won (₩)',
        TRY: 'Turkish Lira (₺)',
        INR: 'Indian Rupee (₹)',
        RUB: 'Russian Ruble (₽)',
        BRL: 'Brazilian Real (R$)',
        ZAR: 'South African Rand (R)',
        DKK: 'Danish Krone (kr)',
        PLN: 'Polish Zloty (zł)',
        THB: 'Thai Baht (฿)',
        MYR: 'Malaysian Ringgit (RM)',
        IDR: 'Indonesian Rupiah (Rp)',
        CZK: 'Czech Koruna (Kč)',
        HUF: 'Hungarian Forint (Ft)',
        ILS: 'Israeli New Shekel (₪)',
        PHP: 'Philippine Peso (₱)',
        AED: 'United Arab Emirates Dirham (د.إ)',
        ARS: 'Argentine Peso ($)',
        BGN: 'Bulgarian Lev (лв)',
        CLP: 'Chilean Peso ($)',
        COP: 'Colombian Peso ($)',
        HRK: 'Croatian Kuna (kn)',
        EGP: 'Egyptian Pound (ج.م)',
        ISK: 'Icelandic Krona (kr)',
        KZT: 'Kazakhstani Tenge (₸)',
        NGN: 'Nigerian Naira (₦)',
        PKR: 'Pakistani Rupee (₨)',
        QAR: 'Qatari Rial (ر.ق)',
        RON: 'Romanian Leu (lei)',
        SAR: 'Saudi Riyal (ر.س)',
        TWD: 'New Taiwan Dollar (NT$)',
        UAH: 'Ukrainian Hryvnia (₴)',
        VND: 'Vietnamese Dong (₫)',
        LKR: 'Sri Lankan Rupee (Rs)',
        BDT: 'Bangladeshi Taka (৳)',
        DOP: 'Dominican Peso ($)',
        MAD: 'Moroccan Dirham (MAD)',
        PEN: 'Peruvian Nuevo Sol (S/.)',
        BHD: 'Bahraini Dinar (BD)',
        JOD: 'Jordanian Dinar (JD)',
        KWD: 'Kuwaiti Dinar (KD)',
        OMR: 'Omani Rial (ر.ع.)',
        JMD: 'Jamaican Dollar (J$)',
        KES: 'Kenyan Shilling (KSh)',
        LBP: 'Lebanese Pound (ل.ل)',
        MKD: 'Macedonian Denar (ден)',
        MUR: 'Mauritian Rupee (₨)',
        MVR: 'Maldivian Rufiyaa (Rf)',
        PYG: 'Paraguayan Guarani (₲)',
        RSD: 'Serbian Dinar (дин)',
        SYP: 'Syrian Pound (£S)',
        TND: 'Tunisian Dinar (DT)',
        UGX: 'Ugandan Shilling (USh)',
        XAF: 'Central African CFA Franc (FCFA)',
        XOF: 'West African CFA Franc (CFA)',
        ZMW: 'Zambian Kwacha (ZK)',
    };

    // Populate currency dropdowns
    for (const [code, name] of Object.entries(currencies)) {
        const optionFrom = document.createElement('option');
        optionFrom.value = code;
        optionFrom.textContent = `${code} - ${name}`;
        fromCurrency.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = code;
        optionTo.textContent = `${code} - ${name}`;
        toCurrency.appendChild(optionTo);
    }

    // Fetch and convert currency
    convertButton.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (isNaN(amount)) {
            resultDiv.textContent = 'Please enter a valid amount';
            return;
        }

        fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[to];
                const convertedAmount = (amount * rate).toFixed(2);
                resultDiv.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
            })
            .catch(error => console.error('Error fetching exchange rates:', error));
    });
});
