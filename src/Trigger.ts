/**
 *
 * @returns
 */
const createTimeTriggerSpecifcDate = (): object => {
  let handlerFunction = "main";
  if (!checkIfTriggerExists("CLOCK", handlerFunction)) {
    ScriptApp.newTrigger(handlerFunction)
      .timeBased()
      .atHour(4)
      .everyDays(2)
      .create();
  }
  return {
    triggerCreate: true,
    handlerFunction: handlerFunction,
    timestamp: Date.now(),
  };
};

/**
 *
 * @param eventType
 * @param handlerFunction
 * @returns
 */

const checkIfTriggerExists = (
  eventType: any,
  handlerFunction: string
): boolean => {
  var triggers = ScriptApp.getProjectTriggers();
  var triggerExists = false;
  triggers.forEach(function (trigger) {
    if (
      trigger.getEventType() === eventType &&
      trigger.getHandlerFunction() === handlerFunction
    )
      triggerExists = true;
  });
  return triggerExists;
};
