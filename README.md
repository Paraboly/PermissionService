

<img alt="Generic Permission Service" src="assets/logo.png" width="1050"/>


[![Generic Permission Service with Jest Test via Paraboly](https://img.shields.io/badge/-Generic%20Permission%20Service%20with%20Jest%20Test%20via%20Paraboly-lightgrey?style=for-the-badge)](https://github.com/Paraboly/pwc-permission-service)


[![npm version](https://img.shields.io/npm/v/@paraboly/pwc-permission-service.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/pwc-permission-service)
[![npm](https://img.shields.io/npm/dt/@paraboly/pwc-permission-service.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/pwc-permission-service)
![Platform - Platform Free Web](https://img.shields.io/badge/-Web%20%7C%20Platform%20Free-blue?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

# Architecture of Using Permission Service

| Types            | Values | Example    | Example2      |
| ---------------- | ------ | ---------- | ------------- |
| NAMESPACE        | 0      | permission | permission    |
| MODULE           | 1      | system     | system        |
| PAGE             | 2      | globalMap  | globalMap     |
| COMPONENT        | 3      | *          | button        |
| COMPONENT ID     | 4      | *          | delete_button |
| PERMISSION VALUE | 5      | 7          | 0             |

## Installation

```js
npm i @paraboly/pwc-permission-service
```

# Usage

## Import

```js
import PermissionService from "@paraboly/pwc-permission-service";
```

## Basic Usage

### Generate Permission Object from Encoded Permission String

Generate (Decode) the given encoded permission string to usable object

```js
const {
  generatePermissionObj,
} = PermissionService;

const permissionObj = generatePermissionObj(permission);
console.log("Permission Object: ", permissionObj);
```

### Decode Selected Permission

Please check the permission architecture about the permission of the each type.

```js
const {
  decodeSelectedPermission
} = PermissionService;
const module = decodeSelectedPermission(1, permission);
const page = decodeSelectedPermission(2, permission);
const permissionValue = decodeSelectedPermission(
  5,
  permission
);
```

### Generate Permission Encode

Generate the fundamental encoded permission string with given parameters

```js
PermissionService.generatePermissionEncode(
  "permission",
  "system",
  "globalMap",
  "*",
  "delete_button",
  7
)
```

## Authors

FreakyCoder, kuray.ogun@paraboly.com | kurayogun@gmail.com

## License

Permission Service is available under the Apache License 2.0 license. See the LICENSE file for more info.
