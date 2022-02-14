function doPost(e) {
  unsetAlert(); // ボタン押しわすれアラートを解除

  // ペイロード部分の取り出し
  var payload = JSON.parse(e['parameter']['payload']);
  var reply = createMessage();

  if (payload['actions'][0]['name'] == 'ok') {
    reply['attachments'] = [{ 'text': 'おくすりのんでえらい！' }];

    if (reply['n'] == 24) {
      reply['attachments'][0]['text'] += '\nあしたから、おやすみ期間だよ';
    }

  } else {
      reply['attachments'] = [{ 'text': 'またあとで通知するね' }];
      setReminder();
  }

  return ContentService.createTextOutput(JSON.stringify(reply)).setMimeType(ContentService.MimeType.JSON);
}
