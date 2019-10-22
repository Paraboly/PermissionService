"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermissionService = /** @class */ (function () {
    function PermissionService() {
        /**
         * @param (string) encoded permission
         * ? Encoded Permission Param Example:
         * ? "permission.system.project.*.delete_button.3"
         */
        this.generatePermissionObj = function (permission) {
            // Split permissions to get permission levels
            var permissionLevels = permission.split(".");
            // Optional
            // const namespace = permissionLevels[0];
            var module = permissionLevels[1];
            var page = permissionLevels[2];
            var component = permissionLevels[3];
            var componentId = permissionLevels[4];
            var permissionValue = permissionLevels[5];
            // Initialize permission object
            var permissionObj = {};
            permissionObj[module] = permissionObj[module] || {};
            permissionObj[module][page] = permissionObj[module][page] || {};
            permissionObj[module][page][component] =
                permissionObj[module][page][component] || {};
            permissionObj[module][page][component][componentId] = Number(permissionValue);
            return permissionObj;
        };
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
        this.decodeSelectedPermission = function (type, permission) {
            // Split permissions to get permission levels
            var permissionLevels = permission.split(".");
            if (type === 5)
                return Number(permissionLevels[type]);
            return permissionLevels[type];
        };
    }
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
    PermissionService.prototype.generatePermissionEncode = function (namespace, module, page, component, componentId, permission) {
        if (namespace === void 0) { namespace = "permission"; }
        if (component === void 0) { component = "*"; }
        if (componentId === void 0) { componentId = "*"; }
        if (permission === void 0) { permission = 0; }
        return namespace + "." + module + "." + page + "." + component + "." + componentId + "." + permission;
    };
    return PermissionService;
}());
exports.default = new PermissionService();
