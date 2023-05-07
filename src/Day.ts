const dayjs = require("dayjs");
/**
 * Function that does nothing
 */
const doSomething = (): void => {
  console.log(
    dayjs()
      .startOf("month")
      .add(1, "day")
      .set("year", 2018)
      .format("YYYY-MM-DD HH:mm:ss")
  );
};

export default dayjs;
