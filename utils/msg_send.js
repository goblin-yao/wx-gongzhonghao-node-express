const request = require("request");

function customSendMessage(appid, mess) {
  let url = `http://api.weixin.qq.com/cgi-bin/message/custom/send`;
  if (appid) {
    url = `http://api.weixin.qq.com/cgi-bin/message/custom/send?from_appid=${appid}`;
  }
  console.log("url--->", url);
  return new Promise((resolve, reject) => {
    request(
      {
        method: "POST",
        url,
        body: JSON.stringify(mess),
      },
      function (error, response) {
        if (error) {
          console.log("接口返回错误", error);
          reject(error.toString());
        } else {
          console.log("接口返回内容", response.body);
          resolve(response.body);
        }
      }
    );
  });
}

module.exports = customSendMessage;
