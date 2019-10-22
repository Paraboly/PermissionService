class PermissionService {
  encodedPermission: string = null;
  permissionObj: Object = {};

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
}

export default new PermissionService();
