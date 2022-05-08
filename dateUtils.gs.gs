// きょうは周期のn日目かを求める
function getElapsedDays() {
  let startDate = PropertiesService.getScriptProperties().getProperty('START_DATE');
  let start = new Date(startDate);
  let _today = new Date();
  let today = new Date(_today.getFullYear(), _today.getMonth(), _today.getDate());
  return n = Math.floor((((today - start) / 86400000) % 124)) + 1;
}


// 周期の1日目を更新する
function updateStartDate(date) {
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  PropertiesService.getScriptProperties().setProperty('START_DATE', (y + '/' + m + '/' + d + ' 00:00:00'));
}
