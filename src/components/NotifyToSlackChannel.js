import { useEffect } from 'react'

function notifyToSlackChannel(
  webHookURL,
  message,
  channel,
  userName,
  botIconURL
) {
  useEffect(() => {
    if (webHookURL && webHookURL.trim() && message && message.trim()) {
      const payload = {
        text: message
      }
      if (channel && channel.trim()) {
        payload.channel = channel
      }
      if (userName && userName.trim()) {
        payload.username = userName
      }
      if (botIconURL && botIconURL.trim()) {
        payload.icon_url = botIconURL
      }

      // eslint-disable-next-line no-undef
      fetch(webHookURL, {
        method: 'post',
        body: JSON.stringify(payload)
      })
        .then((response) => response)
        .then((response) => response)
        .catch((error) => error)
    }
  }, [webHookURL, userName, message, channel, botIconURL])

  return null
}

export default notifyToSlackChannel
