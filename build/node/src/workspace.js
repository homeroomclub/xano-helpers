"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Workspace = void 0;
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var Meta = _interopRequireWildcard(require("@dashkite/joy/metaclass"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Workspace;
exports.Workspace = Workspace;
exports.Workspace = Workspace = function () {
  class Workspace {
    static create(_) {
      return Object.assign(new this(), {
        _
      });
    }
  }
  ;
  Meta.mixin(Workspace.prototype, [Meta.getters({
    groups: function () {
      return this._.apigroups;
    }
  })]);
  return Workspace;
}.call(void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUFBO0FBR01BO0VBQU47SUFFVyxPQUFSQyxNQUFRQSxDQUFFQyxDQUFGO2FBQ1BDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFnQixJQUFJLElBQUosRUFBaEIsRUFBeUI7UUFBRUY7TUFBRixDQUF6QjtJQURPO0VBRlg7RUFBQTtFQUtFRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsU0FBQyxVQUFaLEVBQWdCLENBQ2RGLElBQUksQ0FBQ0csT0FBTCxDQUNFO0lBQUFDLFFBQVE7YUFBRyxJQUFDLEVBQUMsQ0FBQ0M7SUFBTjtFQUFSLENBREYsQ0FEYyxDQUFoQiIsIm5hbWVzIjpbImV4cG9ydHMiLCJjcmVhdGUiLCJfIiwiT2JqZWN0IiwiYXNzaWduIiwiTWV0YSIsIm1peGluIiwiV29ya3NwYWNlIiwiZ2V0dGVycyIsImdyb3VwcyIsImFwaWdyb3VwcyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvd29ya3NwYWNlLmNvZmZlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIlxuaW1wb3J0ICogYXMgTWV0YSBmcm9tIFwiQGRhc2hraXRlL2pveS9tZXRhY2xhc3NcIlxuXG5jbGFzcyBXb3Jrc3BhY2VcblxuICBAY3JlYXRlOiAoIF8gKSAtPlxuICAgIE9iamVjdC5hc3NpZ24gKCBuZXcgQCApLCB7IF8gfVxuXG4gIE1ldGEubWl4aW4gQDo6LCBbXG4gICAgTWV0YS5nZXR0ZXJzXG4gICAgICBncm91cHM6IC0+IEBfLmFwaWdyb3Vwc1xuICBdXG5cblxuZXhwb3J0IHtcbiAgV29ya3NwYWNlXG59Il19
//# sourceURL=src/workspace.coffee