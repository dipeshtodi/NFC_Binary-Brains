// Get input elements
const salaryInput = document.getElementById("salary");
const exemptionInput = document.getElementById("exemption");
const deductionInput = document.getElementById("deduction");
const businessInput = document.getElementById("business");
const otherBusinessInput = document.getElementById("otherBusiness");
const rentInput = document.getElementById("rent");
const unrealizedRentInput = document.getElementById("unrealizedRent");
const municipalTaxesInput = document.getElementById("municipalTaxes");
const interestInput = document.getElementById("interest");
const lotteryInput = document.getElementById("lottery");
const commissionInput = document.getElementById("commission");
const otherIncomeInput = document.getElementById("otherIncome");
const D80CInput = document.getElementById("D80C");
const D80CCD1Input = document.getElementById("D80CCD1");
const D80CCD2Input = document.getElementById("D80CCD2");
const D80DInput = document.getElementById("D80D");
const D80GInput = document.getElementById("D80G");
const totalIncomeDisplay = document.getElementById("totalIncome");
const interestOnCapitalDisplay = document.getElementById("interestOnCapital");
const totalDisplay = document.getElementById("total");

// Function to calculate and display total income
function calculateTotalIncome() {
    const salary = parseFloat(salaryInput.value) || 0;
    const exemption = parseFloat(exemptionInput.value) || 0;
    const deduction = parseFloat(deductionInput.value) || 0;
    const business = parseFloat(businessInput.value) || 0;
    const otherBusiness = parseFloat(otherBusinessInput.value) || 0;
    const rent = parseFloat(rentInput.value) || 0;
    const unrealizedRent = parseFloat(unrealizedRentInput.value) || 0;
    const municipalTaxes = parseFloat(municipalTaxesInput.value) || 0;
    const interest = parseFloat(interestInput.value) || 0;
    const lottery = parseFloat(lotteryInput.value) || 0;
    const commission = parseFloat(commissionInput.value) || 0;
    const otherIncome = parseFloat(otherIncomeInput.value) || 0;
    const D80C = parseFloat(D80CInput.value) || 0;
    const D80CCD1 = parseFloat(D80CCD1Input.value) || 0;
    const D80CCD2 = parseFloat(D80CCD2Input.value) || 0;
    const D80D = parseFloat(D80DInput.value) || 0;
    const D80G = parseFloat(D80GInput.value) || 0;

        // Calculate the total income
        const totalIncome = salary + business + otherBusiness + rent + interest + lottery + commission + otherIncome;

        // Display the total income
        totalIncomeDisplay.textContent = totalIncome.toFixed(2);  // Format to two decimal places
    
        // Calculate interest on capital (you can adjust this formula as needed)
        const interestOnCapital = (totalIncome-unrealizedRent-municipalTaxes-D80C-D80CCD1-D80CCD2-D80D-D80G);
    
        // Display the interest on capital
        interestOnCapitalDisplay.textContent = interestOnCapital.toFixed(2);  // Format to two decimal places
    
        // Calculate the total (you can add tax calculation logic here)
        const total = (0.3)*interestOnCapital;
    
        // Display the total
        totalDisplay.textContent = total.toFixed(2);  // Format to two decimal places
    
        // You can add further tax calculation logic based on the 'total' value.
        // Implement the logic for calculating taxes based on the total income and interest on capital.
        // You may want to consider tax slabs, deductions, and exemptions in your calculation.
    }
    
    // Attach the 'calculateTotalIncome' function to input change events for real-time updates
    salaryInput.addEventListener("input", calculateTotalIncome);
    exemptionInput.addEventListener("input", calculateTotalIncome);
    deductionInput.addEventListener("input", calculateTotalIncome);
    businessInput.addEventListener("input", calculateTotalIncome);
    otherBusinessInput.addEventListener("input", calculateTotalIncome);
    rentInput.addEventListener("input", calculateTotalIncome);
    unrealizedRentInput.addEventListener("input", calculateTotalIncome);
    municipalTaxesInput.addEventListener("input", calculateTotalIncome);
    interestInput.addEventListener("input", calculateTotalIncome);
    lotteryInput.addEventListener("input", calculateTotalIncome);
    commissionInput.addEventListener("input", calculateTotalIncome);
    otherIncomeInput.addEventListener("input", calculateTotalIncome);
    D80CInput.addEventListener("input", calculateTotalIncome);
    D80CCD1Input.addEventListener("input", calculateTotalIncome);
    D80CCD2Input.addEventListener("input", calculateTotalIncome);
    D80DInput.addEventListener("input", calculateTotalIncome);
    D80GInput.addEventListener("input", calculateTotalIncome);
    
    // Call 'calculateTotalIncome' initially to display initial values
    calculateTotalIncome();





    