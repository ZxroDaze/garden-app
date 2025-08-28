/**
 * Provides gardening advice based on the provided month.
 * @param {string} month - The month for which to get advice (e.g., "June").
 * @returns {string} The gardening advice for that month.
 */
function getGardeningAdvice(month) {
  let advice;

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
    case "July":
      advice = "Harvest herbs and vegetables. Watch for peak ripeness.";
      break;
    case "August":
      advice = "Start planting fall crops like spinach and kale.";
      break;
    case "September":
      advice = "Harvest the last of your summer crops and clean up beds.";
      break;
    case "October":
      advice = "Plant garlic and spring-flowering bulbs.";
      break;
    case "November":
      advice = "Protect your plants from frost and prepare for winter.";
      break;
    case "December":
      advice = "Clean your garden tools and plan for the next year.";
      break;
    // --- ADDED DEFAULT CASE ---
    // This handles any input that isn't a valid month.
    default:
      advice = "Invalid month provided. Please enter a valid month.";
      break;
  }

  return advice;
}

// --- Example Usage ---
const currentMonth = "August"; // Test with a new month
const monthAdvice = getGardeningAdvice(currentMonth);

console.log(`Gardening advice for ${currentMonth}:`);
console.log(monthAdvice);

// --- Test the default case ---
const invalidMonth = "Potato";
const invalidAdvice = getGardeningAdvice(invalidMonth);

console.log(`\nTesting with an invalid month: ${invalidMonth}`);
console.log(invalidAdvice);