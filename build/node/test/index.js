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
  person
}) {
  (0, _amenConsole.default)(await (0, _amen.test)("Xano Helpers", [await test("setup", async function () {
    xano = await _index.Xano.create(_configuration.default.xano);
    (0, _assert.default)(Object.keys(xano.bases).length > 0);
    return base = xano.bases["TestPeople"];
  }), await test("add record", async function () {
    return person = await base.add({
      first_name: "David",
      last_name: "Test",
      workspace: await h.random()
    });
  }), await test("list records", async function () {
    var list, match;
    list = await base.list();
    match = list.find(function (record) {
      return record.id === person.id;
    });
    return (0, _assert.default)(match != null);
  }), await test("get record", async function () {
    var _person;
    _person = await base.get(person.id);
    return _assert.default.deepEqual(person, _person);
  }), await test("update record", async function () {
    var _person;
    _person = await base.update({
      ...person,
      last_name: "Updated"
    });
    _assert.default.equal(person.id, _person.id);
    return _assert.default.equal("Updated", _person.last_name);
  }), await test("delete record", async function () {
    var _person;
    await base.delete(person.id);
    _person = await base.get(person.id);
    return (0, _assert.default)(_person == null);
  })]));
  return process.exit(_amen.success);
})({});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVNBQSxPQUFPLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtTQUNMLGdCQUNFO0lBQUFDLGFBQWFGLElBQWI7SUFDQUcsTUFBTTtFQUROLENBREYsRUFHRUYsQ0FIRjtBQURLO0FBTUosaUJBQUM7RUFBRUcsSUFBRjtFQUFRQyxJQUFSO0VBQWNDO0FBQWQsQ0FBRDtFQUVELDBCQUFNLE1BQU0sZ0JBQU0sY0FBTixFQUFzQixDQUVoQyxNQUFNUCxLQUFLLE9BQUwsRUFBYztJQUNsQkssT0FBTyxNQUFNRyxXQUFJLENBQUNDLE1BQUwsQ0FBWUMsc0JBQWEsQ0FBQ0wsSUFBMUIsQ0FBTjtJQUNQLHFCQUFTTSxNQUFNLENBQUNDLElBQVAsQ0FBWVAsSUFBSSxDQUFDUSxLQUFqQixDQUFGLENBQTJCQyxNQUEzQixHQUFvQyxDQUEzQztXQUNBUixPQUFPRCxJQUFJLENBQUNRLEtBQUssQ0FBRSxZQUFGO0VBSEMsQ0FBZCxDQUFOLEVBS0EsTUFBTWIsS0FBSyxZQUFMLEVBQW1CO1dBQ3ZCTyxTQUFTLE1BQU1ELElBQUksQ0FBQ1MsR0FBTCxDQUNiO01BQUFDLFlBQVksT0FBWjtNQUNBQyxXQUFXLE1BRFg7TUFFQUMsV0FBVyxNQUFNQyxDQUFDLENBQUNDLE1BQUY7SUFGakIsQ0FEYSxDQUFOO0VBRGMsQ0FBbkIsQ0FBTixFQU1BLE1BQU1wQixLQUFLLGNBQUwsRUFBcUI7SUFDL0I7SUFBTXFCLE9BQU8sTUFBTWYsSUFBSSxDQUFDZSxJQUFMLEVBQU47SUFDUEMsUUFBUUQsSUFBSSxDQUFDRSxJQUFMLENBQVUsVUFBRUMsTUFBRjthQUFjQSxNQUFNLENBQUNDLEVBQVAsS0FBYWxCLE1BQU0sQ0FBQ2tCO0lBQWxDLENBQVY7V0FDUixxQkFBT0gsYUFBUDtFQUh5QixDQUFyQixDQUFOLEVBS0EsTUFBTXRCLEtBQUssWUFBTCxFQUFtQjtJQUM3QjtJQUFNMEIsVUFBVSxNQUFNcEIsSUFBSSxDQUFDcUIsR0FBTCxDQUFTcEIsTUFBTSxDQUFDa0IsRUFBaEIsQ0FBTjtXQUNWRyxlQUFNLENBQUNDLFNBQVAsQ0FBaUJ0QixNQUFqQixFQUF5Qm1CLE9BQXpCO0VBRnVCLENBQW5CLENBQU4sRUFJQSxNQUFNMUIsS0FBSyxlQUFMLEVBQXNCO0lBQ2hDO0lBQU0wQixVQUFVLE1BQU1wQixJQUFJLENBQUN3QixNQUFMLENBQVk7TUFDMUIsU0FEMEI7TUFFMUJiLFdBQVc7SUFGZSxDQUFaLENBQU47SUFLVlcsZUFBTSxDQUFDRyxLQUFQLENBQWF4QixNQUFNLENBQUNrQixFQUFwQixFQUF3QkMsT0FBTyxDQUFDRCxFQUFoQztXQUNBRyxlQUFNLENBQUNHLEtBQVAsQ0FBYSxTQUFiLEVBQXdCTCxPQUFPLENBQUNULFNBQWhDO0VBUDBCLENBQXRCLENBQU4sRUFTQSxNQUFNakIsS0FBSyxlQUFMLEVBQXNCO0lBQ2hDO0lBQU0sTUFBTU0sSUFBSSxDQUFDMEIsTUFBTCxDQUFZekIsTUFBTSxDQUFDa0IsRUFBbkI7SUFDTkMsVUFBVSxNQUFNcEIsSUFBSSxDQUFDcUIsR0FBTCxDQUFTcEIsTUFBTSxDQUFDa0IsRUFBaEIsQ0FBTjtXQUNWLHFCQUFRQyxlQUFSO0VBSDBCLENBQXRCLENBQU4sQ0EvQlUsQ0FBTixDQUFOO1NBdUNBTyxPQUFPLENBQUNDLElBQVIsQ0FBYUMsYUFBYjtBQXpDQyxHQUEwQiIsIm5hbWVzIjpbInRlc3QiLCJuYW1lIiwiZiIsImRlc2NyaXB0aW9uIiwid2FpdCIsInhhbm8iLCJiYXNlIiwicGVyc29uIiwiWGFubyIsImNyZWF0ZSIsImNvbmZpZ3VyYXRpb24iLCJPYmplY3QiLCJrZXlzIiwiYmFzZXMiLCJsZW5ndGgiLCJhZGQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwid29ya3NwYWNlIiwiaCIsInJhbmRvbSIsImxpc3QiLCJtYXRjaCIsImZpbmQiLCJyZWNvcmQiLCJpZCIsIl9wZXJzb24iLCJnZXQiLCJhc3NlcnQiLCJkZWVwRXF1YWwiLCJ1cGRhdGUiLCJlcXVhbCIsImRlbGV0ZSIsInByb2Nlc3MiLCJleGl0Iiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0L2luZGV4LmNvZmZlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0ZXN0IGFzIF90ZXN0LCBzdWNjZXNzIH0gZnJvbSBcIkBkYXNoa2l0ZS9hbWVuXCJcbmltcG9ydCBwcmludCBmcm9tIFwiQGRhc2hraXRlL2FtZW4tY29uc29sZVwiXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJAZGFzaGtpdGUvYXNzZXJ0XCJcbmltcG9ydCAqIGFzIGggZnJvbSBcIi4vaGVscGVyc1wiXG5cbmltcG9ydCBjb25maWd1cmF0aW9uIGZyb20gXCIuL2NvbmZpZ3VyYXRpb25cIlxuXG5pbXBvcnQgeyBYYW5vIH0gZnJvbSBcIi4uL3NyY1wiXG5cbnRlc3QgPSAobmFtZSwgZikgLT5cbiAgX3Rlc3RcbiAgICBkZXNjcmlwdGlvbjogbmFtZVxuICAgIHdhaXQ6IDMwMDAwXG4gICAgZlxuXG5kbyAoeyB4YW5vLCBiYXNlLCBwZXJzb24gfSA9IHt9KSAtPlxuXG4gIHByaW50IGF3YWl0IF90ZXN0IFwiWGFubyBIZWxwZXJzXCIsIFtcblxuICAgIGF3YWl0IHRlc3QgXCJzZXR1cFwiLCAtPlxuICAgICAgeGFubyA9IGF3YWl0IFhhbm8uY3JlYXRlIGNvbmZpZ3VyYXRpb24ueGFub1xuICAgICAgYXNzZXJ0ICggT2JqZWN0LmtleXMgeGFuby5iYXNlcyApLmxlbmd0aCA+IDBcbiAgICAgIGJhc2UgPSB4YW5vLmJhc2VzWyBcIlRlc3RQZW9wbGVcIiBdXG5cbiAgICBhd2FpdCB0ZXN0IFwiYWRkIHJlY29yZFwiLCAtPlxuICAgICAgcGVyc29uID0gYXdhaXQgYmFzZS5hZGRcbiAgICAgICAgZmlyc3RfbmFtZTogXCJEYXZpZFwiXG4gICAgICAgIGxhc3RfbmFtZTogXCJUZXN0XCJcbiAgICAgICAgd29ya3NwYWNlOiBhd2FpdCBoLnJhbmRvbSgpXG5cbiAgICBhd2FpdCB0ZXN0IFwibGlzdCByZWNvcmRzXCIsIC0+XG4gICAgICBsaXN0ID0gYXdhaXQgYmFzZS5saXN0KClcbiAgICAgIG1hdGNoID0gbGlzdC5maW5kICggcmVjb3JkICkgLT4gcmVjb3JkLmlkID09IHBlcnNvbi5pZFxuICAgICAgYXNzZXJ0IG1hdGNoP1xuXG4gICAgYXdhaXQgdGVzdCBcImdldCByZWNvcmRcIiwgLT5cbiAgICAgIF9wZXJzb24gPSBhd2FpdCBiYXNlLmdldCBwZXJzb24uaWRcbiAgICAgIGFzc2VydC5kZWVwRXF1YWwgcGVyc29uLCBfcGVyc29uXG5cbiAgICBhd2FpdCB0ZXN0IFwidXBkYXRlIHJlY29yZFwiLCAtPlxuICAgICAgX3BlcnNvbiA9IGF3YWl0IGJhc2UudXBkYXRlIHtcbiAgICAgICAgcGVyc29uLi4uXG4gICAgICAgIGxhc3RfbmFtZTogXCJVcGRhdGVkXCJcbiAgICAgIH1cblxuICAgICAgYXNzZXJ0LmVxdWFsIHBlcnNvbi5pZCwgX3BlcnNvbi5pZFxuICAgICAgYXNzZXJ0LmVxdWFsIFwiVXBkYXRlZFwiLCBfcGVyc29uLmxhc3RfbmFtZVxuXG4gICAgYXdhaXQgdGVzdCBcImRlbGV0ZSByZWNvcmRcIiwgLT5cbiAgICAgIGF3YWl0IGJhc2UuZGVsZXRlIHBlcnNvbi5pZFxuICAgICAgX3BlcnNvbiA9IGF3YWl0IGJhc2UuZ2V0IHBlcnNvbi5pZFxuICAgICAgYXNzZXJ0ICFfcGVyc29uP1xuXG4gIF1cblxuICBcbiAgcHJvY2Vzcy5leGl0IHN1Y2Nlc3MiXX0=
//# sourceURL=test/index.coffee