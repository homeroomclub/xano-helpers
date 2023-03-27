"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = exports.authenticate = void 0;
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var _pandaConfidential = require("panda-confidential");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Confidential, authenticate, random;
exports.random = random;
exports.authenticate = authenticate;
Confidential = (0, _pandaConfidential.confidential)();
exports.random = random = async function (config = {}) {
  var encoding, length;
  ({
    length = 16,
    encoding = "base36"
  } = config);
  return Confidential.convert({
    from: "bytes",
    to: encoding
  }, await Confidential.randomBytes(length));
};
exports.authenticate = authenticate = async function (configuration) {
  var options, outseta, response, url, xano;
  url = "https://homeroomclub.outseta.com/api/v1/tokens";
  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: configuration.outseta.email,
      password: configuration.outseta.password
    })
  };
  response = await (0, _nodeFetch.default)(url, options);
  console.log("authenticate with outseta", response.status);
  outseta = await response.json();
  url = new URL("https://omega.homeroom.run/api:outseta/outseta/auth");
  url.searchParams.set("token", outseta.access_token);
  options = {
    method: "POST"
  };
  response = await (0, _nodeFetch.default)(url.href, options);
  console.log("exchange with xano", response.status);
  xano = await response.json();
  return xano.authToken;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBREE7QUFBQUE7QUFBQUE7QUFHQUMsZUFBZTtBQUVmRCwwQkFBUyxnQkFBRUUsU0FBUyxFQUFYO0VBQ1Q7RUFBRTtJQUFFQyxTQUFTLEVBQVg7SUFBZUMsV0FBVztFQUExQixJQUF1Q0YsTUFBdkM7U0FFQUQsWUFBWSxDQUFDSSxPQUFiLENBQXFCO0lBQUFDLE1BQU0sT0FBTjtJQUFlQyxJQUFJSDtFQUFuQixDQUFyQixFQUNFLE1BQU1ILFlBQVksQ0FBQ08sV0FBYixDQUF5QkwsTUFBekIsQ0FBTixDQURGO0FBSE87QUFNVEgsc0NBQWUsZ0JBQUVTLGFBQUY7RUFDZjtFQUFFQyxNQUFNO0VBQ05DLFVBQ0U7SUFBQUMsUUFBUSxNQUFSO0lBQ0FDLFNBQ0U7TUFBQSxnQkFBZ0I7SUFBaEIsQ0FGRjtJQUdBQyxNQUFNQyxJQUFJLENBQUNDLFNBQUwsQ0FDSjtNQUFBQyxVQUFVUixhQUFhLENBQUNTLE9BQU8sQ0FBQ0MsS0FBaEM7TUFDQUMsVUFBVVgsYUFBYSxDQUFDUyxPQUFPLENBQUNFO0lBRGhDLENBREk7RUFITjtFQU9GQyxXQUFXLE1BQU0sd0JBQU1YLEdBQU4sRUFBV0MsT0FBWCxDQUFOO0VBQ1hXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDRixRQUFRLENBQUNHLE1BQWxEO0VBQ0FOLFVBQVUsTUFBTUcsUUFBUSxDQUFDSSxJQUFULEVBQU47RUFHVmYsTUFBTSxJQUFJZ0IsR0FBSixDQUFRLHFEQUFSO0VBQ05oQixHQUFHLENBQUNpQixZQUFZLENBQUNDLEdBQWpCLENBQXFCLE9BQXJCLEVBQThCVixPQUFPLENBQUNXLFlBQXRDO0VBQ0FsQixVQUNFO0lBQUFDLFFBQVE7RUFBUjtFQUVGUyxXQUFXLE1BQU0sd0JBQU1YLEdBQUcsQ0FBQ29CLElBQVYsRUFBZ0JuQixPQUFoQixDQUFOO0VBQ1hXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDRixRQUFRLENBQUNHLE1BQTNDO0VBQ0FPLE9BQU8sTUFBTVYsUUFBUSxDQUFDSSxJQUFULEVBQU47U0FDUE0sSUFBSSxDQUFDQztBQXZCUSIsIm5hbWVzIjpbImV4cG9ydHMiLCJDb25maWRlbnRpYWwiLCJjb25maWciLCJsZW5ndGgiLCJlbmNvZGluZyIsImNvbnZlcnQiLCJmcm9tIiwidG8iLCJyYW5kb21CeXRlcyIsImNvbmZpZ3VyYXRpb24iLCJ1cmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcm5hbWUiLCJvdXRzZXRhIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJhY2Nlc3NfdG9rZW4iLCJocmVmIiwieGFubyIsImF1dGhUb2tlbiJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0L2hlbHBlcnMuY29mZmVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiXG5pbXBvcnQgeyBjb25maWRlbnRpYWwgfSBmcm9tIFwicGFuZGEtY29uZmlkZW50aWFsXCJcblxuQ29uZmlkZW50aWFsID0gY29uZmlkZW50aWFsKClcblxucmFuZG9tID0gKCBjb25maWcgPSB7fSApIC0+XG4gIHsgbGVuZ3RoID0gMTYsIGVuY29kaW5nID0gXCJiYXNlMzZcIiB9ID0gY29uZmlnXG5cbiAgQ29uZmlkZW50aWFsLmNvbnZlcnQgZnJvbTogXCJieXRlc1wiLCB0bzogZW5jb2RpbmcsIFxuICAgIGF3YWl0IENvbmZpZGVudGlhbC5yYW5kb21CeXRlcyBsZW5ndGhcblxuYXV0aGVudGljYXRlID0gKCBjb25maWd1cmF0aW9uICkgLT5cbiAgdXJsID0gXCJodHRwczovL2hvbWVyb29tY2x1Yi5vdXRzZXRhLmNvbS9hcGkvdjEvdG9rZW5zXCJcbiAgb3B0aW9ucyA9XG4gICAgbWV0aG9kOiBcIlBPU1RcIlxuICAgIGhlYWRlcnM6XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5XG4gICAgICB1c2VybmFtZTogY29uZmlndXJhdGlvbi5vdXRzZXRhLmVtYWlsXG4gICAgICBwYXNzd29yZDogY29uZmlndXJhdGlvbi5vdXRzZXRhLnBhc3N3b3JkXG5cbiAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCB1cmwsIG9wdGlvbnNcbiAgY29uc29sZS5sb2cgXCJhdXRoZW50aWNhdGUgd2l0aCBvdXRzZXRhXCIsIHJlc3BvbnNlLnN0YXR1c1xuICBvdXRzZXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblxuICB1cmwgPSBuZXcgVVJMIFwiaHR0cHM6Ly9vbWVnYS5ob21lcm9vbS5ydW4vYXBpOm91dHNldGEvb3V0c2V0YS9hdXRoXCJcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQgXCJ0b2tlblwiLCBvdXRzZXRhLmFjY2Vzc190b2tlblxuICBvcHRpb25zID1cbiAgICBtZXRob2Q6IFwiUE9TVFwiXG5cbiAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCB1cmwuaHJlZiwgb3B0aW9uc1xuICBjb25zb2xlLmxvZyBcImV4Y2hhbmdlIHdpdGggeGFub1wiLCByZXNwb25zZS5zdGF0dXNcbiAgeGFubyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICB4YW5vLmF1dGhUb2tlblxuXG5cbmV4cG9ydCB7XG4gIHJhbmRvbVxuICBhdXRoZW50aWNhdGVcbn0iXX0=
//# sourceURL=test/helpers.coffee