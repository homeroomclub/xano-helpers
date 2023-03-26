"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xano = void 0;
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var Meta = _interopRequireWildcard(require("@dashkite/joy/metaclass"));
var _secrets = require("@dashkite/dolores/secrets");
var _instance = require("./instance.js");
var _workspace = require("./workspace.js");
var _base = require("./base.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Xano;
exports.Xano = Xano;
exports.Xano = Xano = function () {
  class Xano {
    static async create(options = {}) {
      var developerToken, self;
      developerToken = await (0, _secrets.getSecret)(options.secret);
      self = Object.assign(new this(), {
        _: {
          developerToken,
          options
        }
      });
      await self.load();
      return self;
    }
    async getInstances() {
      var options, response, url;
      url = "https://app.xano.com/api:developer/instance";
      options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.developerToken}`
        }
      };
      response = await (0, _nodeFetch.default)(url, options);
      if (response.status !== 200) {
        throw new Error("Failed to fetch Xano account instances");
      }
      return await response.json();
    }
    async loadInstance() {
      var instance;
      instance = (await this.getInstances()).find(instance => {
        return instance.display === this.options.instance;
      });
      if (instance == null) {
        throw new Error(`Did not locate a Xano instance with display name ${this.options.instance}`);
      }
      return this._.instance = await _instance.Instance.create(instance);
    }
    async loadWorkspace() {
      var workspace;
      workspace = (await this.instance.getWorkspaces()).find(workspace => {
        return workspace.name === this.options.workspace;
      });
      if (workspace == null) {
        throw new Error(`Did not locate a Xano workspace with name ${this.options.workspace}`);
      }
      return this._.workspace = await _workspace.Workspace.create(workspace);
    }
    loadBases() {
      var base, i, len, match, ref, results;
      this._.bases = {};
      ref = this.options.bases;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        base = ref[i];
        match = this.workspace.groups.find(function (group) {
          return group.name === base;
        });
        if (match == null) {
          throw new Error(`Did not locate a Xano base with name ${base}`);
        }
        results.push(this.bases[base] = _base.Base.create(match));
      }
      return results;
    }
    async load() {
      await this.loadInstance();
      await this.loadWorkspace();
      return await this.loadBases();
    }
  }
  ;
  Meta.mixin(Xano.prototype, [Meta.getters({
    options: function () {
      return this._.options;
    },
    developerToken: function () {
      return this._.developerToken;
    },
    instance: function () {
      return this._.instance;
    },
    workspace: function () {
      return this._.workspace;
    },
    bases: function () {
      return this._.bases;
    }
  })]);
  return Xano;
}.call(void 0);
//# sourceMappingURL=data:application/json;base64,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QUFDQTtJQUFOLENBRlY7SUFHQUssV0FBVzthQUFHLElBQUMsRUFBQyxDQUFDQTtJQUFOLENBSFg7SUFJQUssT0FBTzthQUFHLElBQUMsRUFBQyxDQUFDQTtJQUFOO0VBSlAsQ0FERixDQURjLENBQWhCIiwibmFtZXMiOlsiZXhwb3J0cyIsImNyZWF0ZSIsIm9wdGlvbnMiLCJkZXZlbG9wZXJUb2tlbiIsInNlY3JldCIsInNlbGYiLCJPYmplY3QiLCJhc3NpZ24iLCJfIiwibG9hZCIsImdldEluc3RhbmNlcyIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsImpzb24iLCJsb2FkSW5zdGFuY2UiLCJpbnN0YW5jZSIsImZpbmQiLCJkaXNwbGF5IiwiSW5zdGFuY2UiLCJsb2FkV29ya3NwYWNlIiwid29ya3NwYWNlIiwiZ2V0V29ya3NwYWNlcyIsIm5hbWUiLCJXb3Jrc3BhY2UiLCJsb2FkQmFzZXMiLCJiYXNlcyIsInJlZiIsInJlc3VsdHMiLCJtYXRjaCIsImdyb3VwcyIsImdyb3VwIiwiYmFzZSIsIkJhc2UiLCJNZXRhIiwibWl4aW4iLCJYYW5vIiwiZ2V0dGVycyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvaW5kZXguY29mZmVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiXG5pbXBvcnQgKiBhcyBNZXRhIGZyb20gXCJAZGFzaGtpdGUvam95L21ldGFjbGFzc1wiXG5pbXBvcnQgeyBnZXRTZWNyZXQgfSBmcm9tIFwiQGRhc2hraXRlL2RvbG9yZXMvc2VjcmV0c1wiXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL2luc3RhbmNlXCJcbmltcG9ydCB7IFdvcmtzcGFjZSB9IGZyb20gXCIuL3dvcmtzcGFjZVwiXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZVwiXG5cbmNsYXNzIFhhbm9cblxuICBAY3JlYXRlOiAoIG9wdGlvbnMgPSB7fSApIC0+XG4gICAgZGV2ZWxvcGVyVG9rZW4gPSBhd2FpdCBnZXRTZWNyZXQgb3B0aW9ucy5zZWNyZXRcbiAgICBzZWxmID0gT2JqZWN0LmFzc2lnbiAoIG5ldyBAICksIF86IHsgZGV2ZWxvcGVyVG9rZW4sIG9wdGlvbnMgfVxuICAgIGF3YWl0IHNlbGYubG9hZCgpXG4gICAgc2VsZlxuXG4gIE1ldGEubWl4aW4gQDo6LCBbXG4gICAgTWV0YS5nZXR0ZXJzXG4gICAgICBvcHRpb25zOiAtPiBAXy5vcHRpb25zXG4gICAgICBkZXZlbG9wZXJUb2tlbjogLT4gQF8uZGV2ZWxvcGVyVG9rZW5cbiAgICAgIGluc3RhbmNlOiAtPiBAXy5pbnN0YW5jZVxuICAgICAgd29ya3NwYWNlOiAtPiBAXy53b3Jrc3BhY2VcbiAgICAgIGJhc2VzOiAtPiBAXy5iYXNlc1xuICBdXG5cbiAgZ2V0SW5zdGFuY2VzOiAtPlxuICAgIHVybCA9IFwiaHR0cHM6Ly9hcHAueGFuby5jb20vYXBpOmRldmVsb3Blci9pbnN0YW5jZVwiXG4gICAgb3B0aW9ucyA9IFxuICAgICAgbWV0aG9kOiBcIkdFVFwiXG4gICAgICBoZWFkZXJzOlxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyICN7IEBkZXZlbG9wZXJUb2tlbiB9XCJcblxuICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggdXJsLCBvcHRpb25zXG5cbiAgICBpZiByZXNwb25zZS5zdGF0dXMgIT0gMjAwXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCJGYWlsZWQgdG8gZmV0Y2ggWGFubyBhY2NvdW50IGluc3RhbmNlc1wiXG5cbiAgICBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICBsb2FkSW5zdGFuY2U6IC0+XG4gICAgaW5zdGFuY2UgPSAoIGF3YWl0IEBnZXRJbnN0YW5jZXMoKSApXG4gICAgICAuZmluZCAoIGluc3RhbmNlICkgPT4gaW5zdGFuY2UuZGlzcGxheSA9PSBAb3B0aW9ucy5pbnN0YW5jZVxuXG4gICAgaWYgIWluc3RhbmNlP1xuICAgICAgdGhyb3cgbmV3IEVycm9yIFwiRGlkIG5vdCBsb2NhdGUgYSBYYW5vIGluc3RhbmNlIHdpdGggZGlzcGxheSBuYW1lICN7QG9wdGlvbnMuaW5zdGFuY2V9XCJcblxuICAgIEBfLmluc3RhbmNlID0gYXdhaXQgSW5zdGFuY2UuY3JlYXRlIGluc3RhbmNlXG5cbiAgbG9hZFdvcmtzcGFjZTogLT5cbiAgICB3b3Jrc3BhY2UgPSAoIGF3YWl0IEBpbnN0YW5jZS5nZXRXb3Jrc3BhY2VzKCkgKVxuICAgICAgLmZpbmQgKCB3b3Jrc3BhY2UgKSA9PiB3b3Jrc3BhY2UubmFtZSA9PSBAb3B0aW9ucy53b3Jrc3BhY2VcblxuICAgIGlmICF3b3Jrc3BhY2U/XG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCJEaWQgbm90IGxvY2F0ZSBhIFhhbm8gd29ya3NwYWNlIHdpdGggbmFtZSAjeyBAb3B0aW9ucy53b3Jrc3BhY2UgfVwiXG4gICAgXG4gICAgQF8ud29ya3NwYWNlID0gYXdhaXQgV29ya3NwYWNlLmNyZWF0ZSB3b3Jrc3BhY2VcblxuICBsb2FkQmFzZXM6IC0+XG4gICAgQF8uYmFzZXMgPSB7fVxuICAgIGZvciBiYXNlIGluIEBvcHRpb25zLmJhc2VzXG4gICAgICBtYXRjaCA9IEB3b3Jrc3BhY2UuZ3JvdXBzLmZpbmQgKCBncm91cCApIC0+IGdyb3VwLm5hbWUgPT0gYmFzZVxuICAgICAgaWYgIW1hdGNoP1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgXCJEaWQgbm90IGxvY2F0ZSBhIFhhbm8gYmFzZSB3aXRoIG5hbWUgI3sgYmFzZSB9XCJcblxuICAgICAgQGJhc2VzWyBiYXNlIF0gPSBCYXNlLmNyZWF0ZSBtYXRjaCAgIFxuICAgICAgXG5cbiAgbG9hZDogLT5cbiAgICBhd2FpdCBAbG9hZEluc3RhbmNlKClcbiAgICBhd2FpdCBAbG9hZFdvcmtzcGFjZSgpXG4gICAgYXdhaXQgQGxvYWRCYXNlcygpXG5cbmV4cG9ydCB7XG4gIFhhbm9cbn0iXX0=
//# sourceURL=src/index.coffee