function notify() {
  let message = createMessage();

  if (message['n'] < 5) {
    // 休薬期間
    message['attachments'] = [{
      'text': '今日はおくすりのまないよ'
    }];
  } else {
    // 服薬期間
    message['attachments'] = [{
      'text': 'おくすりの時間ですよ〜',
      'callback_id': 'callback_button',
      'actions': [
        { 'name': 'ok', 'text': 'のんだよ', 'type': 'button' },
        { 'name': 'later', 'text': 'あとで', 'type': 'button' },
        { 'name': 'suspend', 'text': 'おやすみするよ', 'type': 'button' }
      ]
    }];

    setAlert(); // ボタン押しわすれアラートをセット
  }
  
  send(message);
  setNewTrigger(); // 翌日分のトリガーをセット
}

function alert() {
  send({ 'text': ':warning: ボタン押しわすれてるみたいだよ' });
}

function remind() {
  let message = createMessage()

  message['attachments'] = [{
    'text': 'おくすりの時間ですよ〜',
    'callback_id': 'callback_button',
    'actions': [
      { 'name': 'ok', 'text': 'のんだよ', 'type': 'button' }
    ]
  }];
  
  send(message);
}
