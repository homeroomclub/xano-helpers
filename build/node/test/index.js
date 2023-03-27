"use strict";

var _amen = require("@dashkite/amen");
var _amenConsole = _interopRequireDefault(require("@dashkite/amen-console"));
var _assert = _interopRequireDefault(require("@dashkite/assert"));
var h = _interopRequireWildcard(require("./helpers.js"));
var _configuration = _interopRequireDefault(require("./configuration.js"));
var _index = require("../src/index.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var test;
test = function (name, f) {
  return (0, _amen.test)({
    description: name,
    wait: 30000
  }, f);
};
(async function ({
  xano,
  base,
  token,
  person
}) {
  (0, _amenConsole.default)(await (0, _amen.test)("Xano Helpers", [await test("setup", async function () {
    xano = await _index.Xano.create(_configuration.default.xano);
    (0, _assert.default)(Object.keys(xano.bases).length > 0);
    base = xano.bases["TestPeople"];
    return token = await h.authenticate(_configuration.default);
  }), await test("add record", async function () {
    person = await base.add({
      token: token,
      content: {
        first_name: "David",
        last_name: "Test",
        workspace: await h.random()
      }
    });
    return (0, _assert.default)(person != null);
  }), await test("list records", async function () {
    var list, match;
    list = await base.list({
      token
    });
    match = list.find(function (record) {
      return record.id === person.id;
    });
    return (0, _assert.default)(match != null);
  }), await test("get record", async function () {
    var _person;
    _person = await base.get({
      token: token,
      id: person.id
    });
    return _assert.default.deepEqual(person, _person);
  }), await test("update record", async function () {
    var _person;
    _person = await base.update({
      token: token,
      content: {
        ...person,
        last_name: "Updated"
      }
    });
    _assert.default.equal(person.id, _person.id);
    return _assert.default.equal("Updated", _person.last_name);
  }), await test("delete record", async function () {
    var _person;
    await base.delete({
      token: token,
      id: person.id
    });
    _person = await base.get({
      token: token,
      id: person.id
    });
    return (0, _assert.default)(_person == null);
  })]));
  return process.exit(_amen.success);
})({});
//# sourceMappingURL=data:application/json;base64,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OlsidGVzdCIsIm5hbWUiLCJmIiwiZGVzY3JpcHRpb24iLCJ3YWl0IiwieGFubyIsImJhc2UiLCJ0b2tlbiIsInBlcnNvbiIsIlhhbm8iLCJjcmVhdGUiLCJjb25maWd1cmF0aW9uIiwiT2JqZWN0Iiwia2V5cyIsImJhc2VzIiwibGVuZ3RoIiwiaCIsImF1dGhlbnRpY2F0ZSIsImFkZCIsImNvbnRlbnQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwid29ya3NwYWNlIiwicmFuZG9tIiwibGlzdCIsIm1hdGNoIiwiZmluZCIsInJlY29yZCIsImlkIiwiX3BlcnNvbiIsImdldCIsImFzc2VydCIsImRlZXBFcXVhbCIsInVwZGF0ZSIsImVxdWFsIiwiZGVsZXRlIiwicHJvY2VzcyIsImV4aXQiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QvaW5kZXguY29mZmVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRlc3QgYXMgX3Rlc3QsIHN1Y2Nlc3MgfSBmcm9tIFwiQGRhc2hraXRlL2FtZW5cIlxuaW1wb3J0IHByaW50IGZyb20gXCJAZGFzaGtpdGUvYW1lbi1jb25zb2xlXCJcbmltcG9ydCBhc3NlcnQgZnJvbSBcIkBkYXNoa2l0ZS9hc3NlcnRcIlxuaW1wb3J0ICogYXMgaCBmcm9tIFwiLi9oZWxwZXJzXCJcblxuaW1wb3J0IGNvbmZpZ3VyYXRpb24gZnJvbSBcIi4vY29uZmlndXJhdGlvblwiXG5cbmltcG9ydCB7IFhhbm8gfSBmcm9tIFwiLi4vc3JjXCJcblxudGVzdCA9IChuYW1lLCBmKSAtPlxuICBfdGVzdFxuICAgIGRlc2NyaXB0aW9uOiBuYW1lXG4gICAgd2FpdDogMzAwMDBcbiAgICBmXG5cbmRvICh7IHhhbm8sIGJhc2UsIHRva2VuLCBwZXJzb24gfSA9IHt9KSAtPlxuXG4gIHByaW50IGF3YWl0IF90ZXN0IFwiWGFubyBIZWxwZXJzXCIsIFtcblxuICAgIGF3YWl0IHRlc3QgXCJzZXR1cFwiLCAtPlxuICAgICAgeGFubyA9IGF3YWl0IFhhbm8uY3JlYXRlIGNvbmZpZ3VyYXRpb24ueGFub1xuICAgICAgYXNzZXJ0ICggT2JqZWN0LmtleXMgeGFuby5iYXNlcyApLmxlbmd0aCA+IDBcbiAgICAgIGJhc2UgPSB4YW5vLmJhc2VzWyBcIlRlc3RQZW9wbGVcIiBdXG4gICAgICB0b2tlbiA9IGF3YWl0IGguYXV0aGVudGljYXRlIGNvbmZpZ3VyYXRpb25cblxuICAgIGF3YWl0IHRlc3QgXCJhZGQgcmVjb3JkXCIsIC0+XG4gICAgICBwZXJzb24gPSBhd2FpdCBiYXNlLmFkZFxuICAgICAgICB0b2tlbjogdG9rZW5cbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICBmaXJzdF9uYW1lOiBcIkRhdmlkXCJcbiAgICAgICAgICBsYXN0X25hbWU6IFwiVGVzdFwiXG4gICAgICAgICAgd29ya3NwYWNlOiBhd2FpdCBoLnJhbmRvbSgpXG5cbiAgICAgIGFzc2VydCBwZXJzb24/XG5cbiAgICBhd2FpdCB0ZXN0IFwibGlzdCByZWNvcmRzXCIsIC0+XG4gICAgICBsaXN0ID0gYXdhaXQgYmFzZS5saXN0IHsgdG9rZW4gfVxuICAgICAgbWF0Y2ggPSBsaXN0LmZpbmQgKCByZWNvcmQgKSAtPiByZWNvcmQuaWQgPT0gcGVyc29uLmlkXG4gICAgICBhc3NlcnQgbWF0Y2g/XG5cbiAgICBhd2FpdCB0ZXN0IFwiZ2V0IHJlY29yZFwiLCAtPlxuICAgICAgX3BlcnNvbiA9IGF3YWl0IGJhc2UuZ2V0IFxuICAgICAgICB0b2tlbjogdG9rZW5cbiAgICAgICAgaWQ6IHBlcnNvbi5pZFxuXG4gICAgICBhc3NlcnQuZGVlcEVxdWFsIHBlcnNvbiwgX3BlcnNvblxuXG4gICAgYXdhaXQgdGVzdCBcInVwZGF0ZSByZWNvcmRcIiwgLT5cbiAgICAgIF9wZXJzb24gPSBhd2FpdCBiYXNlLnVwZGF0ZVxuICAgICAgICB0b2tlbjogdG9rZW5cbiAgICAgICAgY29udGVudDoge1xuICAgICAgICAgIHBlcnNvbi4uLlxuICAgICAgICAgIGxhc3RfbmFtZTogXCJVcGRhdGVkXCJcbiAgICAgICAgfVxuXG4gICAgICBhc3NlcnQuZXF1YWwgcGVyc29uLmlkLCBfcGVyc29uLmlkXG4gICAgICBhc3NlcnQuZXF1YWwgXCJVcGRhdGVkXCIsIF9wZXJzb24ubGFzdF9uYW1lXG5cbiAgICBhd2FpdCB0ZXN0IFwiZGVsZXRlIHJlY29yZFwiLCAtPlxuICAgICAgYXdhaXQgYmFzZS5kZWxldGUgXG4gICAgICAgIHRva2VuOiB0b2tlblxuICAgICAgICBpZDogcGVyc29uLmlkXG4gICAgICBcbiAgICAgIF9wZXJzb24gPSBhd2FpdCBiYXNlLmdldCBcbiAgICAgICAgdG9rZW46IHRva2VuXG4gICAgICAgIGlkOiBwZXJzb24uaWRcbiAgICAgIFxuICAgICAgYXNzZXJ0ICFfcGVyc29uP1xuXG4gIF1cblxuICBcbiAgcHJvY2Vzcy5leGl0IHN1Y2Nlc3MiXX0=
//# sourceURL=test/index.coffee