import PermissionService from "../index";

test("Permission Service Generate Permission Obj", () => {
  expect(
    PermissionService.generatePermissionObj(
      "permission.system.*.*.delete_button.3"
    )
  ).toStrictEqual({ system: { "*": { "*": { delete_button: 3 } } } });
});

test("Permission Service Generate Permission Encode", () => {
  expect(
    PermissionService.generatePermissionEncode(
      "permission",
      "system",
      "globalMap",
      "*",
      "delete_button",
      7
    )
  ).toBe("permission.system.globalMap.*.delete_button.7");
});

test("Permission Service Decode Selected Permission", () => {
  expect(
    PermissionService.decodeSelectedPermission(
      1,
      "permission.system.*.*.delete_button.3"
    )
  ).toBe("system");
});
