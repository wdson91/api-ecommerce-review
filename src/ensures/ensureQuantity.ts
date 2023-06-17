/* eslint-disable no-useless-escape */
export const ensureQuantity = (quantity: number) => {
  if (typeof quantity === 'number' && quantity < 0) {
    return false;
  }

  return true;
};
