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
    async loadSwagger() {
      var response;
      response = await (0, _nodeFetch.default)(this._.swaggerspec);
      return console.log(await response.json());
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
    swaggerURL: function () {
      return this._.swaggerspec;
    },
    token: function () {
      return this._.authToken;
    },
    baseURL: function () {
      return this._.origin;
    }
  })]);
  return Instance;
}.call(void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUFBO0FBR01BO0VBQU47SUFFVyxhQUFSQyxNQUFRQSxDQUFFQyxDQUFGO01BQ1g7TUFBSUMsV0FBVyxNQUFNLHdCQUFNRCxDQUFDLENBQUNFLFFBQVIsQ0FBTjtNQUNYRixJQUFJLE1BQU1DLFFBQVEsQ0FBQ0UsSUFBVCxFQUFOO2FBQ0pDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFnQixJQUFJLElBQUosRUFBaEIsRUFBeUI7UUFBRUw7TUFBRixDQUF6QjtJQUhPO0lBWUksTUFBYk0sV0FBYUE7TUFDZjtNQUFJTCxXQUFXLE1BQU0sd0JBQU0sSUFBQyxFQUFDLENBQUNNLFdBQVQsQ0FBTjthQUNYQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFNUixRQUFRLENBQUNFLElBQVQsRUFBTixDQUFaO0lBRlc7SUFJRSxNQUFmTyxhQUFlQTtNQUNqQjtNQUFJQyxNQUFNLEdBQUksSUFBQyxRQUFMO01BQ05DLFVBQ0U7UUFBQUMsUUFBUSxLQUFSO1FBQ0FDLFNBQ0U7VUFBQUMsUUFBUSxrQkFBUjtVQUNBQyxlQUFlLFVBQVcsSUFBQyxNQUFaO1FBRGY7TUFGRjtNQUtGZixXQUFXLE1BQU0sd0JBQU1VLEdBQU4sRUFBV0MsT0FBWCxDQUFOO01BQ1gsSUFBR1gsUUFBUSxDQUFDZ0IsTUFBVCxLQUFtQixHQUF0QjtRQUNFLE1BQU0sSUFBSUMsS0FBSixDQUFVLDJDQUFWOzthQUVSLElBQUMsRUFBQyxDQUFDQyxVQUFILEdBQWdCLE1BQU1sQixRQUFRLENBQUNFLElBQVQsRUFBTjtJQVpIO0VBbEJqQjtFQUFBO0VBT0VpQixJQUFJLENBQUNDLEtBQUwsQ0FBV0MsUUFBQyxVQUFaLEVBQWdCLENBQ2RGLElBQUksQ0FBQ0csT0FBTCxDQUNFO0lBQUFDLFlBQVk7YUFBRyxJQUFDLEVBQUMsQ0FBQ2pCO0lBQU4sQ0FBWjtJQUNBa0IsT0FBTzthQUFHLElBQUMsRUFBQyxDQUFDQztJQUFOLENBRFA7SUFFQUMsU0FBUzthQUFHLElBQUMsRUFBQyxDQUFDQztJQUFOO0VBRlQsQ0FERixDQURjLENBQWhCIiwibmFtZXMiOlsiZXhwb3J0cyIsImNyZWF0ZSIsIl8iLCJyZXNwb25zZSIsInRva2VuVXJsIiwianNvbiIsIk9iamVjdCIsImFzc2lnbiIsImxvYWRTd2FnZ2VyIiwic3dhZ2dlcnNwZWMiLCJjb25zb2xlIiwibG9nIiwiZ2V0V29ya3NwYWNlcyIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInN0YXR1cyIsIkVycm9yIiwid29ya3NwYWNlcyIsIk1ldGEiLCJtaXhpbiIsIkluc3RhbmNlIiwiZ2V0dGVycyIsInN3YWdnZXJVUkwiLCJ0b2tlbiIsImF1dGhUb2tlbiIsImJhc2VVUkwiLCJvcmlnaW4iXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3JjL2luc3RhbmNlLmNvZmZlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIlxuaW1wb3J0ICogYXMgTWV0YSBmcm9tIFwiQGRhc2hraXRlL2pveS9tZXRhY2xhc3NcIlxuXG5jbGFzcyBJbnN0YW5jZVxuXG4gIEBjcmVhdGU6ICggXyApIC0+XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCBfLnRva2VuVXJsXG4gICAgXyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIE9iamVjdC5hc3NpZ24gKCBuZXcgQCApLCB7IF8gfVxuXG4gIE1ldGEubWl4aW4gQDo6LCBbXG4gICAgTWV0YS5nZXR0ZXJzXG4gICAgICBzd2FnZ2VyVVJMOiAtPiBAXy5zd2FnZ2Vyc3BlY1xuICAgICAgdG9rZW46IC0+IEBfLmF1dGhUb2tlbiAgICBcbiAgICAgIGJhc2VVUkw6IC0+IEBfLm9yaWdpblxuICBdXG5cbiAgbG9hZFN3YWdnZXI6IC0+XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCBAXy5zd2FnZ2Vyc3BlY1xuICAgIGNvbnNvbGUubG9nIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIGdldFdvcmtzcGFjZXM6IC0+XG4gICAgdXJsID0gXCIjeyBAYmFzZVVSTCB9L2FwaTpkZXZlbG9wZXIvd29ya3NwYWNlXCJcbiAgICBvcHRpb25zID1cbiAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgICAgaGVhZGVyczpcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciAjeyBAdG9rZW4gfVwiXG5cbiAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoIHVybCwgb3B0aW9uc1xuICAgIGlmIHJlc3BvbnNlLnN0YXR1cyAhPSAyMDBcbiAgICAgIHRocm93IG5ldyBFcnJvciBcIm5vbi0yMDAgcmVzcG9uc2Ugd2hlbiBmZXRjaGluZyB3b3Jrc3BhY2VzXCJcblxuICAgIEBfLndvcmtzcGFjZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICBcblxuIFxuZXhwb3J0IHtcbiAgSW5zdGFuY2Vcbn0iXX0=
//# sourceURL=src/instance.coffee