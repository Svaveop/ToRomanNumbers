function toRoman(num) {
    if (num <= 0) return "Zero is not in Roman numerals";
    if (num > 100000) return "Too big! Max 100000";

    const romanMap = [
        { value: 100000, symbol: "(C)" },
        { value: 90000, symbol: "(XC)" },
        { value: 50000, symbol: "(L)" },
        { value: 40000, symbol: "(XL)" },
        { value: 10000, symbol: "(X)" },
        { value: 9000, symbol: "(IX)" },
        { value: 5000, symbol: "(V)" },
        { value: 4000, symbol: "(IV)" },
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";
    for (const { value, symbol } of romanMap) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

document.getElementById("convertBtn").addEventListener("click", function() {
    const num = parseInt(document.getElementById("numberInput").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(num)) {
        resultDiv.textContent = "Please enter a valid number.";
    } else {
        resultDiv.textContent = toRoman(num);
    }
});
