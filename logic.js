// Get references to the fixed divs
const productFixedDiv = document.getElementById("fixed-product-div");
const orderFixedDiv = document.getElementById("fixed-order-delivery-div");
const subscriptionFixedDiv = document.getElementById("fixed-subscription-div");
const productSection = document.getElementById("product");
const orderSection = document.getElementById("orders-delivery");
const subscriptionSection = document.getElementById("subscription");

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
    productFixedDiv.style.backgroundColor = "lightgreen";
  } else if (minDistance === orderDistance) {
    orderFixedDiv.style.backgroundColor = "lightgreen";
  } else {
    subscriptionFixedDiv.style.backgroundColor = "lightgreen";
  }
}

// Add scroll event listener
document.addEventListener("scroll", handleScroll);

document.querySelectorAll(".abs-circle").forEach((button) => {
  button.addEventListener("click", function () {
    const answer = this.nextElementSibling;

    // Check if the clicked button is already showing its associated answer
    const isAnswerVisible = answer.classList.contains("show");

    // Hide all answers
    document.querySelectorAll(".answer").forEach((answer) => {
      answer.classList.remove("show");
    });

    // Remove the 'active' class from all buttons
    document.querySelectorAll(".abs-circle").forEach((button) => {
      button.classList.remove("active");
    });

    // If the clicked button is not already showing its associated answer, show it
    if (!isAnswerVisible) {
      answer.classList.add("show");
      this.classList.add("active"); // Add 'active' class to the clicked button
    }
  });
});
