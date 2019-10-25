type IPermissionType = { [key: string]: any };

class PermissionService {
  /**
   * @param (string) encoded permission
   * ? Encoded Permission Param Example:
   * ? "permission.system.project.*.delete_button.3"
   */
  public generatePermissionObj = (permission: string) => {
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
    const permissionObj: IPermissionType = {};
    permissionObj[module] = permissionObj[module] || {};
    permissionObj[module][page] = permissionObj[module][page] || {};
    permissionObj[module][page][component] =
      permissionObj[module][page][component] || {};
    permissionObj[module][page][component][componentId] = Number(
      permissionValue
    );
    return permissionObj;
  };

  /**
   * @param {string} namespace
   * @param {string} module
   * @param {string} page
   * @param {string} component
   * @param {string} componentId
   * @param {number} permission // ? This should be an integer !
   *
   * ? Example Encoded Permission:
   * ? "permission.system.project.*.delete_button.3"
   */
  public generatePermissionEncode(
    namespace: string = "permission",
    module: string,
    page: string,
    component: string = "*",
    componentId: string = "*",
    permission: number = 0
  ) {
    return `${namespace}.${module}.${page}.${component}.${componentId}.${permission}`;
  }

  /**
   * @param (number) type
   * @param (string) encoded permission
   *
   * ? Permission Types:
   * ? 0: NAMESPACE
   * ? 1: MODULE
   * ? 2: PAGE
   * ? 3: COMPONENT
   * ? 4: COMPONENT_ID
   * ? 5: PERMISSION_VALUE
   *
   * Decode to selected permission value to receive and use each of them separately
   */
  public decodeSelectedPermission = (type: number, permission: string) => {
    // Split permissions to get permission levels
    const permissionLevels = permission.split(".");
    if (type === 5) return Number(permissionLevels[type]);
    return permissionLevels[type];
  };

  /**
   *
   * @param permission is the number of permission value
   */
  public hasRead = (permission: number) => {
    if (
      permission === 1 ||
      permission === 3 ||
      permission === 5 ||
      permission === 7
    )
      return true;
    return false;
  };

  /**
   *
   * @param permission is the number of permission value
   */
  public hasWrite = (permission: number) => {
    if (
      permission === 2 ||
      permission === 3 ||
      permission === 6 ||
      permission === 7
    )
      return true;
    return false;
  };

  /**
   *
   * @param permission is the number of permission value
   */
  public hasExecute = (permission: number) => {
    if (
      permission === 4 ||
      permission === 5 ||
      permission === 6 ||
      permission === 7
    )
      return true;
    return false;
  };
}

export default new PermissionService();
