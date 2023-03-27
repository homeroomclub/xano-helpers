"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = void 0;
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var Meta = _interopRequireWildcard(require("@dashkite/joy/metaclass"));
var Text = _interopRequireWildcard(require("@dashkite/joy/text"));
var _request = _interopRequireDefault(require("./request.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Base, XanoError, success;
exports.Base = Base;
XanoError = class XanoError extends Error {
  constructor(response, message) {
    super(message);
    this.response = response;
    this.status = response.status;
  }
};
success = function (status, response) {
  if (response.status !== status) {
    throw new XanoError(response, `xano-helpers: unexpected response status ${response.status}`);
  }
};
exports.Base = Base = function () {
  class Base {
    static create(_) {
      _.resource = Text.underscore(_.name);
      return Object.assign(new this(), {
        _
      });
    }
    async loadSwagger() {
      var response;
      response = await (0, _nodeFetch.default)(this.swaggerURL);
      return console.log(await response.json());
    }
    async list(config = {}) {
      var request, response;
      request = _request.default.createRequest([_request.default.base(this.baseURL), _request.default.path(`/${this.resource}`), _request.default.method("get"), _request.default.query(config.query), _request.default.headers({
        Accept: "application/json",
        ...config.headers
      }), _request.default.token(config.token)]);
      response = await request.issue();
      success(200, response);
      return await response.json();
    }
    async add(config = {}) {
      var request, response;
      request = _request.default.createRequest([_request.default.base(this.baseURL), _request.default.path(`/${this.resource}`), _request.default.method("post"), _request.default.query(config.query), _request.default.content(config.content), _request.default.headers({
        Accept: "application/json",
        ...config.headers
      }), _request.default.token(config.token)]);
      response = await request.issue();
      success(200, response);
      return await response.json();
    }
    async get(config = {}) {
      var id, request, response;
      // TODO: Is there a convention we like more here?
      id = encodeURIComponent(config.id);
      request = _request.default.createRequest([_request.default.base(this.baseURL), _request.default.path(`/${this.resource}/${id}`), _request.default.method("get"), _request.default.query(config.query), _request.default.headers({
        Accept: "application/json",
        ...config.headers
      }), _request.default.token(config.token)]);
      response = await request.issue();
      if (response.status === 404) {
        return;
      }
      success(200, response);
      return await response.json();
    }
    async update(config = {}) {
      var id, request, response;
      // TODO: Is there a convention we like more here?
      id = encodeURIComponent(config.content.id);
      request = _request.default.createRequest([_request.default.base(this.baseURL), _request.default.path(`/${this.resource}/${id}`), _request.default.method("post"), _request.default.query(config.query), _request.default.content(config.content), _request.default.headers({
        Accept: "application/json",
        ...config.headers
      }), _request.default.token(config.token)]);
      response = await request.issue();
      success(200, response);
      return await response.json();
    }
    async delete(config = {}) {
      var id, request, response;
      // TODO: Is there a convention we like more here?
      id = encodeURIComponent(config.id);
      request = _request.default.createRequest([_request.default.base(this.baseURL), _request.default.path(`/${this.resource}/${id}`), _request.default.method("delete"), _request.default.query(config.query), _request.default.headers({
        Accept: "application/json",
        ...config.headers
      }), _request.default.token(config.token)]);
      response = await request.issue();
      success(200, response);
      return await response.json();
    }
  }
  ;
  Meta.mixin(Base.prototype, [Meta.getters({
    id: function () {
      return this._.id;
    },
    name: function () {
      return this._.name;
    },
    baseURL: function () {
      return this._.api;
    },
    swaggerURL: function () {
      return this._.swaggerspec;
    },
    resource: function () {
      return this._.resource;
    }
  })]);
  return Base;
}.call(void 0);
//# sourceMappingURL=data:application/json;base64,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TCxDQUNFO0lBQUFQLElBQUk7YUFBRyxJQUFDLEVBQUMsQ0FBQ0E7SUFBTixDQUFKO0lBQ0F2QixNQUFNO2FBQUcsSUFBQyxFQUFDLENBQUNBO0lBQU4sQ0FETjtJQUVBK0IsU0FBUzthQUFHLElBQUMsRUFBQyxDQUFDQztJQUFOLENBRlQ7SUFHQUMsWUFBWTthQUFHLElBQUMsRUFBQyxDQUFDQztJQUFOLENBSFo7SUFJQXJDLFVBQVU7YUFBRyxJQUFDLEVBQUMsQ0FBQ0E7SUFBTjtFQUpWLENBREYsQ0FEYyxDQUFoQiIsIm5hbWVzIjpbImV4cG9ydHMiLCJYYW5vRXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwic3RhdHVzIiwic3VjY2VzcyIsImNyZWF0ZSIsIl8iLCJyZXNvdXJjZSIsIlRleHQiLCJ1bmRlcnNjb3JlIiwibmFtZSIsIk9iamVjdCIsImFzc2lnbiIsImxvYWRTd2FnZ2VyIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJsaXN0IiwiY29uZmlnIiwicmVxdWVzdCIsInIiLCJjcmVhdGVSZXF1ZXN0IiwiYmFzZSIsInBhdGgiLCJtZXRob2QiLCJxdWVyeSIsImhlYWRlcnMiLCJBY2NlcHQiLCJ0b2tlbiIsImlzc3VlIiwiYWRkIiwiY29udGVudCIsImdldCIsImlkIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidXBkYXRlIiwiZGVsZXRlIiwiTWV0YSIsIm1peGluIiwiQmFzZSIsImdldHRlcnMiLCJiYXNlVVJMIiwiYXBpIiwic3dhZ2dlclVSTCIsInN3YWdnZXJzcGVjIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9iYXNlLmNvZmZlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIlxuaW1wb3J0ICogYXMgTWV0YSBmcm9tIFwiQGRhc2hraXRlL2pveS9tZXRhY2xhc3NcIlxuaW1wb3J0ICogYXMgVGV4dCBmcm9tIFwiQGRhc2hraXRlL2pveS90ZXh0XCJcbmltcG9ydCByIGZyb20gXCIuL3JlcXVlc3RcIlxuXG5jbGFzcyBYYW5vRXJyb3IgZXh0ZW5kcyBFcnJvclxuICBjb25zdHJ1Y3RvcjogKCByZXNwb25zZSwgbWVzc2FnZSApIC0+XG4gICAgc3VwZXIoIG1lc3NhZ2UgKVxuICAgIEByZXNwb25zZSA9IHJlc3BvbnNlXG4gICAgQHN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1c1xuXG5zdWNjZXNzID0gKCBzdGF0dXMsIHJlc3BvbnNlICkgLT5cbiAgaWYgcmVzcG9uc2Uuc3RhdHVzICE9IHN0YXR1c1xuICAgIHRocm93IG5ldyBYYW5vRXJyb3IgcmVzcG9uc2UsIFxuICAgICAgXCJ4YW5vLWhlbHBlcnM6IHVuZXhwZWN0ZWQgcmVzcG9uc2Ugc3RhdHVzICN7IHJlc3BvbnNlLnN0YXR1cyB9XCJcblxuXG5jbGFzcyBCYXNlXG5cbiAgQGNyZWF0ZTogKCBfICkgLT5cbiAgICBfLnJlc291cmNlID0gVGV4dC51bmRlcnNjb3JlIF8ubmFtZVxuICAgIE9iamVjdC5hc3NpZ24gKCBuZXcgQCApLCB7IF8gfVxuXG4gIE1ldGEubWl4aW4gQDo6LCBbXG4gICAgTWV0YS5nZXR0ZXJzXG4gICAgICBpZDogLT4gQF8uaWRcbiAgICAgIG5hbWU6IC0+IEBfLm5hbWVcbiAgICAgIGJhc2VVUkw6IC0+IEBfLmFwaVxuICAgICAgc3dhZ2dlclVSTDogLT4gQF8uc3dhZ2dlcnNwZWNcbiAgICAgIHJlc291cmNlOiAtPiBAXy5yZXNvdXJjZVxuICBdXG5cbiAgbG9hZFN3YWdnZXI6IC0+XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCBAc3dhZ2dlclVSTFxuICAgIGNvbnNvbGUubG9nIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIGxpc3Q6ICggY29uZmlnID0ge30gKS0+XG4gICAgcmVxdWVzdCA9IHIuY3JlYXRlUmVxdWVzdCBbXG4gICAgICByLmJhc2UgQGJhc2VVUkxcbiAgICAgIHIucGF0aCBcIi8jeyBAcmVzb3VyY2UgfVwiXG4gICAgICByLm1ldGhvZCBcImdldFwiXG4gICAgICByLnF1ZXJ5IGNvbmZpZy5xdWVyeVxuICAgICAgci5oZWFkZXJzIHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICBjb25maWcuaGVhZGVycy4uLlxuICAgICAgfVxuICAgICAgci50b2tlbiBjb25maWcudG9rZW5cbiAgICBdXG4gICBcbiAgICByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuaXNzdWUoKVxuICAgIHN1Y2Nlc3MgMjAwLCByZXNwb25zZVxuICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIGFkZDogKCBjb25maWcgPSB7fSApIC0+XG4gICAgcmVxdWVzdCA9IHIuY3JlYXRlUmVxdWVzdCBbXG4gICAgICByLmJhc2UgQGJhc2VVUkxcbiAgICAgIHIucGF0aCBcIi8jeyBAcmVzb3VyY2UgfVwiXG4gICAgICByLm1ldGhvZCBcInBvc3RcIlxuICAgICAgci5xdWVyeSBjb25maWcucXVlcnlcbiAgICAgIHIuY29udGVudCBjb25maWcuY29udGVudFxuICAgICAgci5oZWFkZXJzIHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICBjb25maWcuaGVhZGVycy4uLlxuICAgICAgfVxuICAgICAgci50b2tlbiBjb25maWcudG9rZW5cbiAgICBdXG4gICBcbiAgICByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuaXNzdWUoKVxuICAgIHN1Y2Nlc3MgMjAwLCByZXNwb25zZVxuICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIGdldDogKCBjb25maWcgPSB7fSApIC0+XG4gICAgIyBUT0RPOiBJcyB0aGVyZSBhIGNvbnZlbnRpb24gd2UgbGlrZSBtb3JlIGhlcmU/XG4gICAgaWQgPSBlbmNvZGVVUklDb21wb25lbnQgY29uZmlnLmlkXG5cbiAgICByZXF1ZXN0ID0gci5jcmVhdGVSZXF1ZXN0IFtcbiAgICAgIHIuYmFzZSBAYmFzZVVSTFxuICAgICAgci5wYXRoIFwiLyN7IEByZXNvdXJjZSB9LyN7IGlkIH1cIlxuICAgICAgci5tZXRob2QgXCJnZXRcIlxuICAgICAgci5xdWVyeSBjb25maWcucXVlcnlcbiAgICAgIHIuaGVhZGVycyB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgY29uZmlnLmhlYWRlcnMuLi5cbiAgICAgIH1cbiAgICAgIHIudG9rZW4gY29uZmlnLnRva2VuXG4gICAgXVxuICAgXG4gICAgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmlzc3VlKClcbiAgICByZXR1cm4gaWYgcmVzcG9uc2Uuc3RhdHVzID09IDQwNFxuICAgIHN1Y2Nlc3MgMjAwLCByZXNwb25zZVxuICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIHVwZGF0ZTogKCBjb25maWcgPSB7fSApIC0+XG4gICAgIyBUT0RPOiBJcyB0aGVyZSBhIGNvbnZlbnRpb24gd2UgbGlrZSBtb3JlIGhlcmU/XG4gICAgaWQgPSBlbmNvZGVVUklDb21wb25lbnQgY29uZmlnLmNvbnRlbnQuaWRcblxuICAgIHJlcXVlc3QgPSByLmNyZWF0ZVJlcXVlc3QgW1xuICAgICAgci5iYXNlIEBiYXNlVVJMXG4gICAgICByLnBhdGggXCIvI3sgQHJlc291cmNlIH0vI3sgaWQgfVwiXG4gICAgICByLm1ldGhvZCBcInBvc3RcIlxuICAgICAgci5xdWVyeSBjb25maWcucXVlcnlcbiAgICAgIHIuY29udGVudCBjb25maWcuY29udGVudFxuICAgICAgci5oZWFkZXJzIHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICBjb25maWcuaGVhZGVycy4uLlxuICAgICAgfVxuICAgICAgci50b2tlbiBjb25maWcudG9rZW5cbiAgICBdXG4gICBcbiAgICByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuaXNzdWUoKVxuICAgIHN1Y2Nlc3MgMjAwLCByZXNwb25zZVxuICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIGRlbGV0ZTogKCBjb25maWcgPSB7fSApIC0+XG4gICAgIyBUT0RPOiBJcyB0aGVyZSBhIGNvbnZlbnRpb24gd2UgbGlrZSBtb3JlIGhlcmU/XG4gICAgaWQgPSBlbmNvZGVVUklDb21wb25lbnQgY29uZmlnLmlkXG5cbiAgICByZXF1ZXN0ID0gci5jcmVhdGVSZXF1ZXN0IFtcbiAgICAgIHIuYmFzZSBAYmFzZVVSTFxuICAgICAgci5wYXRoIFwiLyN7IEByZXNvdXJjZSB9LyN7IGlkIH1cIlxuICAgICAgci5tZXRob2QgXCJkZWxldGVcIlxuICAgICAgci5xdWVyeSBjb25maWcucXVlcnlcbiAgICAgIHIuaGVhZGVycyB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgY29uZmlnLmhlYWRlcnMuLi5cbiAgICAgIH1cbiAgICAgIHIudG9rZW4gY29uZmlnLnRva2VuXG4gICAgXVxuICAgXG4gICAgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmlzc3VlKClcbiAgICBzdWNjZXNzIDIwMCwgcmVzcG9uc2VcbiAgICBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXG5leHBvcnQge1xuICBCYXNlXG59Il19
//# sourceURL=src/base.coffee