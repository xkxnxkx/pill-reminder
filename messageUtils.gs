const slackWebhookUrl = PropertiesService.getScriptProperties().getProperty('SLACK_WEBHOOK_URL');

function createMessage() {
  let n = getElapsedDays();

  if (n < 5) {
    // 休薬期間
    return {
      'text': ':hospital: 今日は休薬' + n + '日目 :teddy_bear:\n',
      'n': n
    };
  } else {
    // 服薬期間
    return {
      'text': ':hospital: 今日は服用' + (n - 4) + '日目 :teddy_bear:\n',
      'n': n
    };
  }
}


function send(message) {
  let options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(message)
  };

  UrlFetchApp.fetch(slackWebhookUrl, options);
}
