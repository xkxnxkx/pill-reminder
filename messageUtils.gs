let slackWebhookUrl = PropertiesService.getScriptProperties().getProperty('SLACK_WEBHOOK_URL');

function createMessage() {
  // きょうはシートのn日目かを求める
  let start = new Date(2021, 3, 12) // 2021/4/12 00:00:00
  let _today = new Date();
  let today = new Date(_today.getFullYear(), _today.getMonth(), _today.getDate());
  let n = Math.floor((((today - start) / 86400000) % 28)) + 1;

  let message = {
    'text': ':hospital: 今日は' + n + '日目 :teddy_bear:\n',
    'n': n
  };

  return message;
}

function send(message) {
  let options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(message)
  };

  UrlFetchApp.fetch(slackWebhookUrl, options);
}
