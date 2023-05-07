/**
 * Dummy Function for testing purposes
 * @param str Teststring for setting up testing
 * @return Formatted String
 */
export const toCamelCase = (str: string): string => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) {
      return ""; // Remove spaces and other separators
    }
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};
