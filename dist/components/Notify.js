"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.promise.js");

var _react = require("react");

var PropTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @return {null}
 */
function Notify(_ref) {
  let {
    webHookURL,
    message,
    channel,
    userName,
    botIconURL
  } = _ref;
  (0, _react.useEffect)(() => {
    if (webHookURL && webHookURL.trim() && message && message.trim()) {
      let payload = {
        "text": message
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
      }).then(response => response.json()).then(response => console.log(response)).catch(error => console.log(error));
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
var _default = Notify;
exports.default = _default;