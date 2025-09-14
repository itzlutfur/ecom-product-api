const {saveUserAgent} = require("../utils/logger");

const checkUserAgent = (req, res, next) => {
  const userAgent = req.headers["user-agent"];
  const blockedPatterns = [
    /curl/i,
    /wget/i,
    /python-requests/i,
    /Go-http-request/i,
    /Java/i,
    /sqlmap/i,
    /nmap/i,
    /Nikto/i,
    /HeadlessChrome/i,
    /PhantomJS/i,
    /PostmanRuntime/i,
  ];
  const isBlocked = blockedPatterns.some((pattern) => pattern.test(userAgent));
  saveUserAgent(userAgent);

  if (!userAgent || isBlocked) {
    return res.status(403).json({ message: "Forbidden: Invalid User-Agent" });
  }
  next();
};

module.exports = {checkUserAgent };