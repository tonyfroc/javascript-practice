//                      BMI Categories:

// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater

// 1. BMI (weight (lb) / [height (in)]^2 x 703)
// 2. Weight/Height? How should the user enter this information? Which units?
// 3. Maintenance calories/day for that weight -
// -
// 4. How many calories should we cut per day to lose/gain weight? Do/can we factor in activity level?
// 5. 500 cal/day or 1000 cal/day x 7 = 1lbs per week

//                      BMR Formula

//  Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
//  Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)
//  Sedentary = BMR x 1.2 (little or no exercise, desk job)
//  Lightly active = BMR x 1.375 (light exercise/ sports 1-3 days/week)
//  Moderately active = BMR x 1.55 (moderate exercise/ sports 6-7 days/week)
//  Very active = BMR x 1.725 (hard exercise every day, or exercising 2 xs/day)
//  Extra active = BMR x 1.9 (hard exercise 2 or more times per day, or training for
//  marathon, or triathlon, etc.

function bmiCalculator(weight, height) {
  const bmi = (weight / height ** 2) * 703; // weight in lbs, height in inches
  let bmiCategory = ``;
  const maintenanceCals = weight * 15;
  if (bmi < 18.5) {
    {
      bmiCategory = `Underweight`;
    }
  } else if (bmi < 25) {
    bmiCategory = `Normal`;
  } else if (bmi < 30) {
    bmiCategory = `Overweight`;
  } else {
    bmiCategory = `Obese`;
  }
  return `You weigh ${weight} lbs.\nYour maintenance calories is ${maintenanceCals}.\nYour BMI is ${bmi}.\nYour BMI category is ${bmiCategory}.`;
}

// console.log(bmiCalculator(180, 71));
// maintenance = bw in lbs x 15,
// aggressiveDeficit = maintenance - 1000/day (x 7 for weekly)
// deficit = maintenance - 500/day (X7 per week)
// gain = maintenance + 286/day (X7 per week)
// comorbidity

function calorieCoach() {
  let weight = prompt(`Please enter your weight in pounds(lbs)`);
  weight = parseFloat(weight);
  const maintenanceCals = weight * 15;
  const userGoal = prompt(
    `Please choose a goal. Enter "Gain", "Lose" or "Maintain":`
  );
  if (userGoal === `Gain`) {
    return `You should consume ${
      maintenanceCals + 286
    } cals per day to gain 1lbs per week`;
  } else if (userGoal === `Lose`) {
    return `You should consume ${
      maintenanceCals - 500
    } cals per day to lose 1lbs per week`;
  } else if (userGoal === `Maintain`) {
    return `You should consume ${maintenanceCals} and stay the same weight!`;
  }
}

console.log(calorieCoach());

// add logic for maintenance level calories if you didnt work/out eat for that day
// Maintenance level calorie formula
// Body weight in lbs X 15

// console.log(bmiCalculator(180, 70));
// const userGoal = prompt(`Please choose a goal. Enter "gain", "lose" or "maintain":`);
// console.log(calorieCoach(userGoal, 170));

// let text;
// let favDrink = prompt("What's your favorite cocktail drink?");
// switch(favDrink) {
//   case "Coca-Cola":
//     text = "Excellent choice! Coca-Cola is good for your soul.";
//     break;
//   case "Pepsi":
//     text = "Pepsi is my favorite too!";
//     break;
//   case "Sprite":
//     text = "Really? Are you sure the Sprite is your favorite?";
//     break;
//   default:
//     text = "I have never heard of that one!";
// }

// function to calculate bmi: calcBMI
//   inputs: weight and height
//   output: bmi (number)
// function to provide recommendation: calorieCoach
//   inputs: bmi (maybe the weight?)
//   output: a recommendation that gives you your bmi category, your recommended calorie intake per day based on that category

// parameter "goal": Basically asks if you want to lose, maintain or gain weight - if yes then calorie coach steps in to give the information
// - If lose weight the same occurs. Else: return maintenanceCalories
