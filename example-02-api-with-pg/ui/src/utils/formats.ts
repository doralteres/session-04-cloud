export const currency = (num: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ILS",
  }).format(num);
