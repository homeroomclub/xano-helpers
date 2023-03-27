"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Fn = _interopRequireWildcard(require("@dashkite/joy/function"));
var Type = _interopRequireWildcard(require("@dashkite/joy/type"));
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var h;
h = {};
h.base = Fn.curry(Fn.rtee(function (base, context) {
  return context.base = base;
}));
h.path = Fn.curry(Fn.rtee(function (path, context) {
  return context.path = path;
}));
h.query = Fn.curry(Fn.rtee(function (query, context) {
  return context.query = query;
}));
h.method = Fn.curry(Fn.rtee(function (method, context) {
  return context.method = method;
}));
h.content = Fn.curry(Fn.rtee(function (content, context) {
  return context.content = content;
}));
h.headers = Fn.curry(Fn.rtee(function (headers, context) {
  if (context.headers == null) {
    context.headers = {};
  }
  return Object.assign(context.headers, headers);
}));
h.token = Fn.curry(Fn.rtee(function (token, context) {
  if (context.headers == null) {
    context.headers = {};
  }
  return Object.assign(context.headers, {
    Authorization: `Bearer ${token}`
  });
}));
h.createRequest = function (fx) {
  return {
    issue: async function () {
      var base, content, context, headers, key, method, options, path, query, url, value;
      context = Fn.pipe([function () {
        return {};
      }, ...fx])();
      ({
        base,
        path,
        query,
        method,
        content,
        headers
      } = context);
      url = new URL(`${base}${path}`);
      if (query != null) {
        for (key in query) {
          value = query[key];
          URL.searchParams.set(key, value);
        }
      }
      options = {
        method: method.toUpperCase(),
        headers: headers
      };
      if (content != null) {
        if (Type.isObject(content)) {
          options.body = JSON.stringify(content);
          if (options.headers["Content-Type"] == null) {
            options.headers["Content-Type"] = "application/json";
          }
        } else {
          options.body = content;
        }
      }
      // console.log url.href, options

      // Return Response instance from Fetch.
      return await (0, _nodeFetch.default)(url.href, options);
    }
  };
};
var _default = h;
exports.default = _default;
//# sourceMappingURL=data:application/json;base64,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LE9BQU8sQ0FBQ0ksSUFBUixHQUFlcEI7Ozs7OzthQUtuQixNQUFNLHdCQUFNVSxHQUFHLENBQUNhLElBQVYsRUFBZ0JQLE9BQWhCLENBQU47SUE1Qks7RUFBUDtBQURnQjtBQUFBLGVBZ0NIekI7QUFBQWlDIiwibmFtZXMiOlsiaCIsImJhc2UiLCJGbiIsImN1cnJ5IiwicnRlZSIsImNvbnRleHQiLCJwYXRoIiwicXVlcnkiLCJtZXRob2QiLCJjb250ZW50IiwiaGVhZGVycyIsIk9iamVjdCIsImFzc2lnbiIsInRva2VuIiwiQXV0aG9yaXphdGlvbiIsImNyZWF0ZVJlcXVlc3QiLCJmeCIsImlzc3VlIiwicGlwZSIsInVybCIsIlVSTCIsInNlYXJjaFBhcmFtcyIsInNldCIsImtleSIsInZhbHVlIiwib3B0aW9ucyIsInRvVXBwZXJDYXNlIiwiVHlwZSIsImlzT2JqZWN0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJocmVmIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvcmVxdWVzdC5jb2ZmZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRm4gZnJvbSBcIkBkYXNoa2l0ZS9qb3kvZnVuY3Rpb25cIlxuaW1wb3J0ICogYXMgVHlwZSBmcm9tIFwiQGRhc2hraXRlL2pveS90eXBlXCJcbmltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiXG5cblxuaCA9IHt9XG5cbmguYmFzZSA9IEZuLmN1cnJ5IEZuLnJ0ZWUgKCBiYXNlLCBjb250ZXh0ICkgLT5cbiAgY29udGV4dC5iYXNlID0gYmFzZVxuXG5oLnBhdGggPSBGbi5jdXJyeSBGbi5ydGVlICggcGF0aCwgY29udGV4dCApIC0+XG4gIGNvbnRleHQucGF0aCA9IHBhdGhcblxuaC5xdWVyeSA9IEZuLmN1cnJ5IEZuLnJ0ZWUgKCBxdWVyeSwgY29udGV4dCApIC0+XG4gIGNvbnRleHQucXVlcnkgPSBxdWVyeVxuXG5oLm1ldGhvZCA9IEZuLmN1cnJ5IEZuLnJ0ZWUgKCBtZXRob2QsIGNvbnRleHQgKSAtPlxuICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZFxuXG5oLmNvbnRlbnQgPSBGbi5jdXJyeSBGbi5ydGVlICggY29udGVudCwgY29udGV4dCApIC0+XG4gIGNvbnRleHQuY29udGVudCA9IGNvbnRlbnRcblxuaC5oZWFkZXJzID0gRm4uY3VycnkgRm4ucnRlZSAoIGhlYWRlcnMsIGNvbnRleHQgKSAtPlxuICBjb250ZXh0LmhlYWRlcnMgPz0ge31cbiAgT2JqZWN0LmFzc2lnbiBjb250ZXh0LmhlYWRlcnMsIGhlYWRlcnNcblxuaC50b2tlbiA9IEZuLmN1cnJ5IEZuLnJ0ZWUgKCB0b2tlbiwgY29udGV4dCApIC0+XG4gIGNvbnRleHQuaGVhZGVycyA/PSB7fVxuICBPYmplY3QuYXNzaWduIGNvbnRleHQuaGVhZGVycywgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgI3sgdG9rZW4gfVwiXG5cbmguY3JlYXRlUmVxdWVzdCA9ICggZnggKSAtPlxuICBpc3N1ZTogLT5cbiAgICBjb250ZXh0ID0gZG8gRm4ucGlwZSBbXG4gICAgICAtPiB7fVxuICAgICAgZnguLi5cbiAgICBdXG5cbiAgICB7IGJhc2UsIHBhdGgsIHF1ZXJ5LCBtZXRob2QsIGNvbnRlbnQsIGhlYWRlcnMgfSA9IGNvbnRleHRcblxuICAgIHVybCA9IG5ldyBVUkwgXCIjeyBiYXNlIH0jeyBwYXRoIH1cIlxuICAgIGlmIHF1ZXJ5P1xuICAgICAgZm9yIGtleSwgdmFsdWUgb2YgcXVlcnlcbiAgICAgICAgVVJMLnNlYXJjaFBhcmFtcy5zZXQga2V5LCB2YWx1ZVxuXG4gICAgb3B0aW9ucyA9XG4gICAgICBtZXRob2Q6IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXG5cbiAgICBpZiBjb250ZW50P1xuICAgICAgaWYgVHlwZS5pc09iamVjdCBjb250ZW50XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5IGNvbnRlbnRcbiAgICAgICAgaWYgIW9wdGlvbnMuaGVhZGVyc1sgXCJDb250ZW50LVR5cGVcIiBdP1xuICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1sgXCJDb250ZW50LVR5cGVcIiBdID0gXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIGVsc2VcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gY29udGVudFxuXG4gICAgIyBjb25zb2xlLmxvZyB1cmwuaHJlZiwgb3B0aW9uc1xuXG4gICAgIyBSZXR1cm4gUmVzcG9uc2UgaW5zdGFuY2UgZnJvbSBGZXRjaC5cbiAgICBhd2FpdCBmZXRjaCB1cmwuaHJlZiwgb3B0aW9uc1xuXG5cbmV4cG9ydCBkZWZhdWx0IGgiXX0=
//# sourceURL=src/request.coffee