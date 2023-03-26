"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _configuration2 = _interopRequireDefault(require("./_configuration.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var configuration, environment, ref;
environment = (ref = process.env.mode) != null ? ref : "development";
console.log(`Loading configuration for ${environment}`);
configuration = _configuration2.default[environment];
var _default = configuration;
exports.default = _default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBQSx1REFBaUM7QUFDakNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUE2QkYsV0FBN0IsRUFBWjtBQUNBRyxnQkFBZ0JDLHVCQUFjLENBQUVKLFdBQUY7QUFBQSxlQUVmRztBQUFBRSIsIm5hbWVzIjpbImVudmlyb25tZW50IiwiY29uc29sZSIsImxvZyIsImNvbmZpZ3VyYXRpb24iLCJfY29uZmlndXJhdGlvbiIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVzdC9jb25maWd1cmF0aW9uLmNvZmZlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2NvbmZpZ3VyYXRpb24gZnJvbSBcIi4vX2NvbmZpZ3VyYXRpb25cIlxuZW52aXJvbm1lbnQgPSBwcm9jZXNzLmVudi5tb2RlID8gXCJkZXZlbG9wbWVudFwiXG5jb25zb2xlLmxvZyBcIkxvYWRpbmcgY29uZmlndXJhdGlvbiBmb3IgI3tlbnZpcm9ubWVudH1cIlxuY29uZmlndXJhdGlvbiA9IF9jb25maWd1cmF0aW9uWyBlbnZpcm9ubWVudCBdXG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyYXRpb24iXX0=
//# sourceURL=test/configuration.coffee