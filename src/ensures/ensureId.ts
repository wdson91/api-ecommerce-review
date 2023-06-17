/* eslint-disable no-useless-escape */
export const ensureId = (id: string) => {
  const idRegex = /^[0-9a-f]{24}$/i;

  return idRegex.test(id);
};
