/**
 * Provides gardening advice based on the provided month.
 * @param {string} month - The month for which to get advice (e.g., "June").
 * @returns {string} The gardening advice for that month.
 */
function getGardeningAdvice(month) {
  let advice;

  // TODO: Add a default case for the switch statement.
  // TODO: Add more months and seasons.
  // Provides gardening advice based on the month
  switch (month) {
    case "January":
      advice = "It's cold! Time to plan your garden for the spring.";
      break;
    case "February":
      advice = "Start seeds indoors for spring planting.";
      break;
    case "March":
      advice = "Prepare your garden beds for planting.";
      break;
    case "April":
      advice = "Time to plant your cool-season crops.";
      break;
    case "May":
      advice = "Plant warm-season crops and watch out for pests.";
      break;
    case "June":
      advice = "Water your garden regularly and enjoy the first harvests.";
      break;
    // ... other months can be added here
  }

  return advice;
}

// --- Example Usage ---
// This demonstrates how the new function is used.
const currentMonth = "June";
const monthAdvice = getGardeningAdvice(currentMonth);

// Displays the generated advice
console.log(`Gardening advice for ${currentMonth}:`);
console.log(monthAdvice);