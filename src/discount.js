function calculateDiscountedPrice(price) {
  const discountRate = 0.01; // BUG: should be 0.10
  return price - price * discountRate;
}
console.log(`Discounted price: $${calculateDiscountedPrice(100)}`);
