import {
  NAMESPACE,
  MODULE,
  PAGE,
  COMPONENT,
  COMPONENT_ID,
  PERMISSION_VALUE
} from "./constants";

class PermissionService {
  /**
   * @param (string) encoded permission
   * ? Encoded Permission Param Example:
   * ? "permission.system.project.*.delete_button.3"
   */
  generatePermissionObj = (permission: string) => {
    // Split permissions to get permission levels
    const permissionLevels = permission.split(".");
    // Optional
    // const namespace = permissionLevels[0];
    const module = permissionLevels[1];
    const page = permissionLevels[2];
    const component = permissionLevels[3];
    const componentId = permissionLevels[4];
    const permissionValue = permissionLevels[5];
    // Initialize permission object
    const permissionObj = {};
    permissionObj[module] = permissionObj[module] || {};
    permissionObj[module][page] = permissionObj[module][page] || {};
    permissionObj[module][page][component] =
      permissionObj[module][page][component] || {};
    permissionObj[module][page][component][componentId] = permissionValue;
    return permissionObj;
  };

  /**
   * @param {string} namespace
   * @param {string} module
   * @param {string} page
   * @param {string} component
   * @param {string} component_id
   * @param {number} permission // ? This should be an integer !
   *
   * ? Example Encoded Permission:
   * ? "permission.system.project.*.delete_button.3"
   */
  generatePermissionEncode(
    namespace: string = "permission",
    module: string,
    page: string,
    component: string = "*",
    component_id: string = "*",
    permission: number = 0
  ) {
    return `[${namespace}][${module}][${page}][${component}][${component_id}][${permission}]`;
  }

  /**
   * @param (string) type
   * @param (string) encoded permission
   * Decode to each permission value to receive and use each of them separately
   */
  decodeEachPermission = (
    type: string = PERMISSION_VALUE,
    permission: string
  ) => {
    // Split permissions to get permission levels
    const permissionLevels = permission.split(".");

    switch (type) {
      case NAMESPACE:
        return permissionLevels[0];
      case MODULE:
        return permissionLevels[1];
      case PAGE:
        return permissionLevels[2];
      case COMPONENT:
        return permissionLevels[3];
      case COMPONENT_ID:
        return permissionLevels[4];
      case PERMISSION_VALUE:
        return permissionLevels[5];
      default:
        return permissionLevels[5];
    }
  };
}

export default new PermissionService();
