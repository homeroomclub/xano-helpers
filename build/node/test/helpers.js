"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = void 0;
var _pandaConfidential = require("panda-confidential");
var Confidential, random;
exports.random = random;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBQTtBQUVBQyxlQUFlO0FBRWZELDBCQUFTLGdCQUFFRSxTQUFTLEVBQVg7RUFDVDtFQUFFO0lBQUVDLFNBQVMsRUFBWDtJQUFlQyxXQUFXO0VBQTFCLElBQXVDRixNQUF2QztTQUVBRCxZQUFZLENBQUNJLE9BQWIsQ0FBcUI7SUFBQUMsTUFBTSxPQUFOO0lBQWVDLElBQUlIO0VBQW5CLENBQXJCLEVBQ0UsTUFBTUgsWUFBWSxDQUFDTyxXQUFiLENBQXlCTCxNQUF6QixDQUFOLENBREY7QUFITyIsIm5hbWVzIjpbImV4cG9ydHMiLCJDb25maWRlbnRpYWwiLCJjb25maWciLCJsZW5ndGgiLCJlbmNvZGluZyIsImNvbnZlcnQiLCJmcm9tIiwidG8iLCJyYW5kb21CeXRlcyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0L2hlbHBlcnMuY29mZmVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZGVudGlhbCB9IGZyb20gXCJwYW5kYS1jb25maWRlbnRpYWxcIlxuXG5Db25maWRlbnRpYWwgPSBjb25maWRlbnRpYWwoKVxuXG5yYW5kb20gPSAoIGNvbmZpZyA9IHt9ICkgLT5cbiAgeyBsZW5ndGggPSAxNiwgZW5jb2RpbmcgPSBcImJhc2UzNlwiIH0gPSBjb25maWdcblxuICBDb25maWRlbnRpYWwuY29udmVydCBmcm9tOiBcImJ5dGVzXCIsIHRvOiBlbmNvZGluZywgXG4gICAgYXdhaXQgQ29uZmlkZW50aWFsLnJhbmRvbUJ5dGVzIGxlbmd0aFxuXG5leHBvcnQge1xuICByYW5kb21cbn0iXX0=
//# sourceURL=test/helpers.coffee