export const formatPrice = (num) => {
  const amount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format((num / 100).toFixed(2));
  return amount;
};
