"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Instance = void 0;
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var Meta = _interopRequireWildcard(require("@dashkite/joy/metaclass"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Instance;
exports.Instance = Instance;
exports.Instance = Instance = function () {
  class Instance {
    static async create(_) {
      var response;
      response = await (0, _nodeFetch.default)(_.tokenUrl);
      _ = await response.json();
      return Object.assign(new this(), {
        _
      });
    }
    async getWorkspaces() {
      var options, response, url;
      url = `${this.baseURL}/api:developer/workspace`;
      options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.token}`
        }
      };
      response = await (0, _nodeFetch.default)(url, options);
      if (response.status !== 200) {
        throw new Error("non-200 response when fetching workspaces");
      }
      return this._.workspaces = await response.json();
    }
  }
  ;
  Meta.mixin(Instance.prototype, [Meta.getters({
    token: function () {
      return this._.authToken;
    },
    baseURL: function () {
      return this._.origin;
    }
  })]);
  return Instance;
}.call(void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUFBO0FBR01BO0VBQU47SUFFVyxhQUFSQyxNQUFRQSxDQUFFQyxDQUFGO01BQ1g7TUFBSUMsV0FBVyxNQUFNLHdCQUFNRCxDQUFDLENBQUNFLFFBQVIsQ0FBTjtNQUNYRixJQUFJLE1BQU1DLFFBQVEsQ0FBQ0UsSUFBVCxFQUFOO2FBQ0pDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFnQixJQUFJLElBQUosRUFBaEIsRUFBeUI7UUFBRUw7TUFBRixDQUF6QjtJQUhPO0lBV00sTUFBZk0sYUFBZUE7TUFDakI7TUFBSUMsTUFBTSxHQUFJLElBQUMsUUFBTDtNQUNOQyxVQUNFO1FBQUFDLFFBQVEsS0FBUjtRQUNBQyxTQUNFO1VBQUFDLFFBQVEsa0JBQVI7VUFDQUMsZUFBZSxVQUFXLElBQUMsTUFBWjtRQURmO01BRkY7TUFLRlgsV0FBVyxNQUFNLHdCQUFNTSxHQUFOLEVBQVdDLE9BQVgsQ0FBTjtNQUNYLElBQUdQLFFBQVEsQ0FBQ1ksTUFBVCxLQUFtQixHQUF0QjtRQUNFLE1BQU0sSUFBSUMsS0FBSixDQUFVLDJDQUFWOzthQUVSLElBQUMsRUFBQyxDQUFDQyxVQUFILEdBQWdCLE1BQU1kLFFBQVEsQ0FBQ0UsSUFBVCxFQUFOO0lBWkg7RUFiakI7RUFBQTtFQU9FYSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsUUFBQyxVQUFaLEVBQWdCLENBQ2RGLElBQUksQ0FBQ0csT0FBTCxDQUNFO0lBQUFDLE9BQU87YUFBRyxJQUFDLEVBQUMsQ0FBQ0M7SUFBTixDQUFQO0lBQ0FDLFNBQVM7YUFBRyxJQUFDLEVBQUMsQ0FBQ0M7SUFBTjtFQURULENBREYsQ0FEYyxDQUFoQiIsIm5hbWVzIjpbImV4cG9ydHMiLCJjcmVhdGUiLCJfIiwicmVzcG9uc2UiLCJ0b2tlblVybCIsImpzb24iLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRXb3Jrc3BhY2VzIiwidXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwic3RhdHVzIiwiRXJyb3IiLCJ3b3Jrc3BhY2VzIiwiTWV0YSIsIm1peGluIiwiSW5zdGFuY2UiLCJnZXR0ZXJzIiwidG9rZW4iLCJhdXRoVG9rZW4iLCJiYXNlVVJMIiwib3JpZ2luIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9pbnN0YW5jZS5jb2ZmZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCJcbmltcG9ydCAqIGFzIE1ldGEgZnJvbSBcIkBkYXNoa2l0ZS9qb3kvbWV0YWNsYXNzXCJcblxuY2xhc3MgSW5zdGFuY2VcblxuICBAY3JlYXRlOiAoIF8gKSAtPlxuICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggXy50b2tlblVybFxuICAgIF8gPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBPYmplY3QuYXNzaWduICggbmV3IEAgKSwgeyBfIH1cblxuICBNZXRhLm1peGluIEA6OiwgW1xuICAgIE1ldGEuZ2V0dGVyc1xuICAgICAgdG9rZW46IC0+IEBfLmF1dGhUb2tlblxuICAgICAgYmFzZVVSTDogLT4gQF8ub3JpZ2luXG4gIF1cblxuICBnZXRXb3Jrc3BhY2VzOiAtPlxuICAgIHVybCA9IFwiI3sgQGJhc2VVUkwgfS9hcGk6ZGV2ZWxvcGVyL3dvcmtzcGFjZVwiXG4gICAgb3B0aW9ucyA9XG4gICAgICBtZXRob2Q6IFwiR0VUXCJcbiAgICAgIGhlYWRlcnM6XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgI3sgQHRva2VuIH1cIlxuXG4gICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCB1cmwsIG9wdGlvbnNcbiAgICBpZiByZXNwb25zZS5zdGF0dXMgIT0gMjAwXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCJub24tMjAwIHJlc3BvbnNlIHdoZW4gZmV0Y2hpbmcgd29ya3NwYWNlc1wiXG5cbiAgICBAXy53b3Jrc3BhY2VzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgXG5cbiBcbmV4cG9ydCB7XG4gIEluc3RhbmNlXG59Il19
//# sourceURL=src/instance.coffee