describe("'add' utility", () => {
  const testData = [1, 2, 3, 4, 5];
  const expectedResult = 2;
  test(`given ${testData[0]} and ${testData[2]} the result should be ${testData[3]}`, (testData) => {
    const result = main();
    expect(result).toEqual(expectedResult);
  });
});
