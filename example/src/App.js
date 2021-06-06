import React from 'react'

import notifyToSlackChannel from 'react-slack-notification'

const App = () => {

  const notifyToSlack = () => {
    return notifyToSlackChannel('https://hooks.slack.com/services/xxxxxxxxxxxxxx/sample-url', 'Handled error\n' +
      'Error: Invalid refresh token\n' +
      'Location\n' +
      'redux/helper.js:117 - handleException',
      '#production-logs', 'React Production Log', 'https://i.picsum.photos/id/76/200/200.jpg?hmac=psXm-BMm4NaZlO_dAn3FH6ahWyqXeDxPEkz5hU8XVqM');
  }
  return notifyToSlack();
}

export default App
