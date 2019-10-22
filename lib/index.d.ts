declare type IPermissionType = {
    [key: string]: any;
};
declare class PermissionService {
    /**
     * @param (string) encoded permission
     * ? Encoded Permission Param Example:
     * ? "permission.system.project.*.delete_button.3"
     */
    generatePermissionObj: (permission: string) => IPermissionType;
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
    generatePermissionEncode(namespace: string | undefined, module: string, page: string, component?: string, componentId?: string, permission?: number): string;
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
    decodeSelectedPermission: (type: number, permission: string) => string | number;
}
declare const _default: PermissionService;
export default _default;
