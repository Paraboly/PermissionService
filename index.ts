class PermissionService {
  encodedPermission: string = null;
  permissionObj: Object = {};

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
}

export default new PermissionService();
