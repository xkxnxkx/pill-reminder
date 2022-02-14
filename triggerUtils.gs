function setNewTrigger() {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(13, 00);
  ScriptApp.newTrigger('notify').timeBased().at(tomorrow).create();
}

function setAlert() {
  let time = new Date();
  time.setHours(16, 00);
  ScriptApp.newTrigger('alert').timeBased().at(time).create();
}

function setReminder() {
  let time = new Date();
  time.setHours(22, 00);
  ScriptApp.newTrigger('remind').timeBased().at(time).create();
}

function unsetAlert() {
  let triggers = ScriptApp.getProjectTriggers();
  for (let i = 0; i < triggers.length; i++) {
    let trigger = triggers[i];
    if (trigger.getHandlerFunction() == 'alert') {
      ScriptApp.deleteTrigger(trigger);
    }
  }
}
