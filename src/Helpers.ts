/**
 * Dummy Function for testing purposes
 * @param str Teststring for setting up testing
 * @return Formatted String
 */
export const toCamelCase = (str: string): string => {
  const words = str.split(/[_\s-]+/);
  const result = words.reduce((acc, word, index) => {
    if (index === 0) {
      acc.push(word.toLowerCase());
    } else {
      acc.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
    return acc;
  }, [] as string[]);
  return result.join("");
};
