"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = void 0;
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var Meta = _interopRequireWildcard(require("@dashkite/joy/metaclass"));
var Text = _interopRequireWildcard(require("@dashkite/joy/text"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Base, XanoError;
exports.Base = Base;
XanoError = class XanoError extends Error {
  constructor(response, message) {
    super(message);
    this.response = response;
    this.status = response.status;
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
    async list() {
      var options, response, url;
      url = `${this.baseURL}/${this.resource}`;
      options = {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      };
      response = await (0, _nodeFetch.default)(url, options);
      if (response.status !== 200) {
        throw new XanoError(response, "xano-helpers: unexpected response status");
      }
      return await response.json();
    }
    async add(data = {}) {
      var options, response, url;
      url = `${this.baseURL}/${this.resource}`;
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      };
      response = await (0, _nodeFetch.default)(url, options);
      if (response.status !== 200) {
        throw new XanoError(response, "xano-helpers: unexpected response status");
      }
      return await response.json();
    }
    async get(id) {
      var options, response, url;
      url = `${this.baseURL}/${this.resource}/${encodeURIComponent(id)}`;
      options = {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      };
      response = await (0, _nodeFetch.default)(url, options);
      if (response.status === 404) {
        return void 0;
      }
      if (response.status !== 200) {
        throw new XanoError(response, "xano-helpers: unexpected response status");
      }
      return await response.json();
    }
    async update(data) {
      var options, response, url;
      url = `${this.baseURL}/${this.resource}/${encodeURIComponent(data.id)}`;
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      };
      response = await (0, _nodeFetch.default)(url, options);
      if (response.status !== 200) {
        throw new XanoError(response, "xano-helpers: unexpected response status");
      }
      return await response.json();
    }
    async delete(id) {
      var options, response, url;
      url = `${this.baseURL}/${this.resource}/${encodeURIComponent(id)}`;
      options = {
        method: "DELETE",
        headers: {}
      };
      response = await (0, _nodeFetch.default)(url, options);
      if (response.status !== 200) {
        throw new XanoError(response, "xano-helpers: unexpected response status");
      }
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
//# sourceMappingURL=data:application/json;base64,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RVIsTUFBTUEsUUFBUSxDQUFDaUIsSUFBVCxFQUFOO0lBYk07SUFlQSxNQUFSVSxNQUFRQSxDQUFFSCxFQUFGO01BQ1Y7TUFBSVosTUFBTSxHQUFJLElBQUMsUUFBTCxJQUFrQixJQUFDLFNBQW5CLElBQWlDYSxtQkFBbUJELEVBQW5CLENBQWpDO01BQ05YLFVBQ0U7UUFBQUMsUUFBUSxRQUFSO1FBQ0FDLFNBQVM7TUFEVDtNQUdGZixXQUFXLE1BQU0sd0JBQU1ZLEdBQU4sRUFBV0MsT0FBWCxDQUFOO01BQ1gsSUFBR2IsUUFBUSxDQUFDRSxNQUFULEtBQW1CLEdBQXRCO1FBQ0UsTUFBTSxJQUFJTCxTQUFKLENBQWNHLFFBQWQsRUFBd0IsMENBQXhCOzthQUVSLE1BQU1BLFFBQVEsQ0FBQ2lCLElBQVQsRUFBTjtJQVZNO0VBekVWO0VBQUE7RUFNRVcsSUFBSSxDQUFDQyxLQUFMLENBQVdDLElBQUMsVUFBWixFQUFnQixDQUNkRixJQUFJLENBQUNHLE9BQUwsQ0FDRTtJQUFBUCxJQUFJO2FBQUcsSUFBQyxFQUFDLENBQUNBO0lBQU4sQ0FBSjtJQUNBaEIsTUFBTTthQUFHLElBQUMsRUFBQyxDQUFDQTtJQUFOLENBRE47SUFFQXdCLFNBQVM7YUFBRyxJQUFDLEVBQUMsQ0FBQ0M7SUFBTixDQUZUO0lBR0FDLFlBQVk7YUFBRyxJQUFDLEVBQUMsQ0FBQ0M7SUFBTixDQUhaO0lBSUE5QixVQUFVO2FBQUcsSUFBQyxFQUFDLENBQUNBO0lBQU47RUFKVixDQURGLENBRGMsQ0FBaEIiLCJuYW1lcyI6WyJleHBvcnRzIiwiWGFub0Vycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJlc3BvbnNlIiwibWVzc2FnZSIsInN0YXR1cyIsImNyZWF0ZSIsIl8iLCJyZXNvdXJjZSIsIlRleHQiLCJ1bmRlcnNjb3JlIiwibmFtZSIsIk9iamVjdCIsImFzc2lnbiIsImxpc3QiLCJ1cmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImpzb24iLCJhZGQiLCJkYXRhIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXQiLCJpZCIsImVuY29kZVVSSUNvbXBvbmVudCIsInVwZGF0ZSIsImRlbGV0ZSIsIk1ldGEiLCJtaXhpbiIsIkJhc2UiLCJnZXR0ZXJzIiwiYmFzZVVSTCIsImFwaSIsInN3YWdnZXJVUkwiLCJzd2FnZ2Vyc3BlYyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvYmFzZS5jb2ZmZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCJcbmltcG9ydCAqIGFzIE1ldGEgZnJvbSBcIkBkYXNoa2l0ZS9qb3kvbWV0YWNsYXNzXCJcbmltcG9ydCAqIGFzIFRleHQgZnJvbSBcIkBkYXNoa2l0ZS9qb3kvdGV4dFwiXG5cbmNsYXNzIFhhbm9FcnJvciBleHRlbmRzIEVycm9yXG4gIGNvbnN0cnVjdG9yOiAoIHJlc3BvbnNlLCBtZXNzYWdlICkgLT5cbiAgICBzdXBlciggbWVzc2FnZSApXG4gICAgQHJlc3BvbnNlID0gcmVzcG9uc2VcbiAgICBAc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzXG5cblxuY2xhc3MgQmFzZVxuXG4gIEBjcmVhdGU6ICggXyApIC0+XG4gICAgXy5yZXNvdXJjZSA9IFRleHQudW5kZXJzY29yZSBfLm5hbWVcbiAgICBPYmplY3QuYXNzaWduICggbmV3IEAgKSwgeyBfIH1cblxuICBNZXRhLm1peGluIEA6OiwgW1xuICAgIE1ldGEuZ2V0dGVyc1xuICAgICAgaWQ6IC0+IEBfLmlkXG4gICAgICBuYW1lOiAtPiBAXy5uYW1lXG4gICAgICBiYXNlVVJMOiAtPiBAXy5hcGlcbiAgICAgIHN3YWdnZXJVUkw6IC0+IEBfLnN3YWdnZXJzcGVjXG4gICAgICByZXNvdXJjZTogLT4gQF8ucmVzb3VyY2VcbiAgXVxuXG4gIGxpc3Q6IC0+XG4gICAgdXJsID0gXCIjeyBAYmFzZVVSTCB9LyN7IEByZXNvdXJjZSB9XCJcbiAgICBvcHRpb25zID1cbiAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgICAgaGVhZGVyczpcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgXG4gICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCB1cmwsIG9wdGlvbnNcbiAgICBpZiByZXNwb25zZS5zdGF0dXMgIT0gMjAwXG4gICAgICB0aHJvdyBuZXcgWGFub0Vycm9yIHJlc3BvbnNlLCBcInhhbm8taGVscGVyczogdW5leHBlY3RlZCByZXNwb25zZSBzdGF0dXNcIlxuXG4gICAgYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgYWRkOiAoIGRhdGEgPSB7fSApIC0+XG4gICAgdXJsID0gXCIjeyBAYmFzZVVSTCB9LyN7IEByZXNvdXJjZSB9XCJcbiAgICBvcHRpb25zID1cbiAgICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgICAgIGhlYWRlcnM6XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5IGRhdGFcblxuICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggdXJsLCBvcHRpb25zXG4gICAgaWYgcmVzcG9uc2Uuc3RhdHVzICE9IDIwMFxuICAgICAgdGhyb3cgbmV3IFhhbm9FcnJvciByZXNwb25zZSwgXCJ4YW5vLWhlbHBlcnM6IHVuZXhwZWN0ZWQgcmVzcG9uc2Ugc3RhdHVzXCJcblxuICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIGdldDogKCBpZCApIC0+XG4gICAgdXJsID0gXCIjeyBAYmFzZVVSTCB9LyN7IEByZXNvdXJjZSB9LyN7IGVuY29kZVVSSUNvbXBvbmVudCBpZCB9XCJcbiAgICBvcHRpb25zID1cbiAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgICAgaGVhZGVyczpcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXG4gICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCB1cmwsIG9wdGlvbnNcbiAgICBpZiByZXNwb25zZS5zdGF0dXMgPT0gNDA0XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgaWYgcmVzcG9uc2Uuc3RhdHVzICE9IDIwMFxuICAgICAgdGhyb3cgbmV3IFhhbm9FcnJvciByZXNwb25zZSwgXCJ4YW5vLWhlbHBlcnM6IHVuZXhwZWN0ZWQgcmVzcG9uc2Ugc3RhdHVzXCJcblxuICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIHVwZGF0ZTogKCBkYXRhICkgLT5cbiAgICB1cmwgPSBcIiN7IEBiYXNlVVJMIH0vI3sgQHJlc291cmNlIH0vI3sgZW5jb2RlVVJJQ29tcG9uZW50IGRhdGEuaWQgfVwiXG4gICAgb3B0aW9ucyA9XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiXG4gICAgICBoZWFkZXJzOlxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSBkYXRhXG5cbiAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoIHVybCwgb3B0aW9uc1xuICAgIGlmIHJlc3BvbnNlLnN0YXR1cyAhPSAyMDBcbiAgICAgIHRocm93IG5ldyBYYW5vRXJyb3IgcmVzcG9uc2UsIFwieGFuby1oZWxwZXJzOiB1bmV4cGVjdGVkIHJlc3BvbnNlIHN0YXR1c1wiXG4gICAgXG4gICAgYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgZGVsZXRlOiAoIGlkICkgLT5cbiAgICB1cmwgPSBcIiN7IEBiYXNlVVJMIH0vI3sgQHJlc291cmNlIH0vI3sgZW5jb2RlVVJJQ29tcG9uZW50IGlkIH1cIlxuICAgIG9wdGlvbnMgPVxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiXG4gICAgICBoZWFkZXJzOiB7fVxuICAgIFxuICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggdXJsLCBvcHRpb25zXG4gICAgaWYgcmVzcG9uc2Uuc3RhdHVzICE9IDIwMFxuICAgICAgdGhyb3cgbmV3IFhhbm9FcnJvciByZXNwb25zZSwgXCJ4YW5vLWhlbHBlcnM6IHVuZXhwZWN0ZWQgcmVzcG9uc2Ugc3RhdHVzXCJcblxuICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cbmV4cG9ydCB7XG4gIEJhc2Vcbn0iXX0=
//# sourceURL=src/base.coffee