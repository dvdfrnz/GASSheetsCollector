/**
 * Creates a trigger at given hour of the day for a specific script
 * @param everyNthDay
 * @param hourOfDay
 * @param handlerFunction
 * @todo Create conditional Trigger Creation
 * @returns
 */
export const createTimeTriggerSpecifcDate = (
  everyNthDay: number = 1,
  hourOfDay: number = 3,
  handlerFunction: string = "main"
): object => {
  if (!checkIfTriggerExists("CLOCK", handlerFunction)) {
    ScriptApp.newTrigger(handlerFunction)
      .timeBased()
      .atHour(hourOfDay)
      .everyDays(everyNthDay)
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

export const checkIfTriggerExists = (
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
/**
 *
 * @param removeAll
 * @todo have to add condotional removal of triggers based on handlerfunction
 */
export const removeAllTriggers = (removeAll: boolean = true) => {
  var triggers = ScriptApp.getProjectTriggers();
  if (removeAll) {
    triggers.forEach((element) => {
      ScriptApp.deleteTrigger(element);
    });
  }
};
