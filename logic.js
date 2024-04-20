// Get references to the fixed divs
const productFixedDiv = document.getElementById("fixed-product-div");
const orderFixedDiv = document.getElementById("fixed-order-delivery-div");
const subscriptionFixedDiv = document.getElementById("fixed-subscription-div");
const productSection = document.getElementById("product");
const orderSection = document.getElementById("orders-delivery");
const subscriptionSection = document.getElementById("subscription");

const blueColor = "#C8E4F4";

// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  const productDistance = Math.abs(productSection.getBoundingClientRect().top);
  const orderDistance = Math.abs(orderSection.getBoundingClientRect().top);
  const subscriptionDistance = Math.abs(
    subscriptionSection.getBoundingClientRect().top
  );

  const minDistance = Math.min(
    productDistance,
    orderDistance,
    subscriptionDistance
  );

  productFixedDiv.style.backgroundColor = "white";
  orderFixedDiv.style.backgroundColor = "white";
  subscriptionFixedDiv.style.backgroundColor = "white";

  if (minDistance === productDistance) {
    productFixedDiv.style.backgroundColor = blueColor;
  } else if (minDistance === orderDistance) {
    orderFixedDiv.style.backgroundColor = blueColor;
  } else {
    subscriptionFixedDiv.style.backgroundColor = blueColor;
  }
}

// Add scroll event listener
document.addEventListener("scroll", handleScroll);

document.querySelectorAll(".info").forEach((item) => {
  const question = item.querySelector(".question");
  const button = item.querySelector(".abs-circle");
  const answer = item.querySelector(".answer");

  // Function to toggle answer visibility
  function toggleAnswer() {
    // Hide all other answers
    document.querySelectorAll(".answer.show").forEach((otherAnswer) => {
      if (otherAnswer !== answer) {
        otherAnswer.classList.remove("show");
        otherAnswer.previousElementSibling.classList.remove("active");
      }
    });

    // Toggle visibility of the current answer
    answer.classList.toggle("show");

    // Toggle active class for button
    button.classList.toggle("active", answer.classList.contains("show"));
  }

  // Click event listener for question
  question.addEventListener("click", toggleAnswer);

  // Click event listener for toggle button
  button.addEventListener("click", toggleAnswer);
});

// document.querySelectorAll(".abs-circle").forEach((button) => {
//   button.addEventListener("click", function () {
//     const answer = this.nextElementSibling;

//     // Check if the clicked button is already showing its associated answer
//     const isAnswerVisible = answer.classList.contains("show");

//     // Hide all answers
//     document.querySelectorAll(".answer").forEach((answer) => {
//       answer.classList.remove("show");
//     });

//     // Remove the 'active' class from all buttons
//     document.querySelectorAll(".abs-circle").forEach((button) => {
//       button.classList.remove("active");
//     });

//     // If the clicked button is not already showing its associated answer, show it
//     if (!isAnswerVisible) {
//       answer.classList.add("show");
//       this.classList.add("active"); // Add 'active' class to the clicked button
//     }
//   });
// });
