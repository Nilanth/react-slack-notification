import {useEffect} from "react";
import * as PropTypes from "prop-types";


/**
 * @return {null}
 */
function Notify({webHookURL, message, channel, userName, botIconURL}) {

    useEffect(() => {
        if (webHookURL && webHookURL.trim() && message && message.trim()) {
            let payload = {
                "text": message,
            };
            if (channel && channel.trim()) {
                payload['channel'] = channel;
            }
            if (userName && userName.trim()) {
                payload['username'] = userName;
            }
            if (botIconURL && botIconURL.trim()) {
                payload['icon_url'] = botIconURL;
            }

            fetch(webHookURL, {
                method: 'post',
                body: JSON.stringify(payload)
            }).then(response => response.json())
                .then(response => console.log(response))
                .catch(error => console.log(error));
        }
    }, [webHookURL, userName, message, channel, botIconURL]);

    return null;
}

Notify.propTypes = {
    webHookURL: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    channel: PropTypes.string,
    userName: PropTypes.string,
    botIconURL: PropTypes.string
};

Notify.defaultProps = {
    channel: null,
    userName: null,
    botIconURL: null
};

export default Notify;
