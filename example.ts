import PermissionService from "./index";

const permission: string = "permission.system.project.*.delete_button.3";
const permissionObj = PermissionService.generatePermissionObj(permission);

console.log("PermissionObj: ", permissionObj);
