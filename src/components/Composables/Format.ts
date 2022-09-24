function useFormat(value:number) {
  const formatPrice = (value / 1).toFixed(2).replace(".", ",");
  return formatPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export {useFormat}