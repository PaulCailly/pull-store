const { kcProtect } = require('../../app-core/keycloak/keycloak');

const csProtect = (roleName) => {
  return kcProtect((decoded, req) => {
    return decoded.resource_access['nodejs-concreteasy']?.roles.some((el) => el === roleName);
  });
};

// /**
//  * Allow or deny access based on resource group
//  * @param {string|Function} resourceGroup Name of the resource group to check for or callback for custom check
//  * @returns {Function} keycloak middleware
//  */
// const protectResourceGroup = (resourceGroup) => {
//   return kcProtect((token, request) => {
//     const checkGroup = (groupName) => token.group.some((el) => el === groupName);

//     const internalRoles = [];

//     for (const role of Object.values(rabacRoles)) {
//       if (checkGroup(role)) {
//         internalRoles.push(...rabacToResourceGroup(role));
//       }
//     }

//     if (resourceGroup instanceof Function) {
//       const callback = resourceGroup;
//       return callback(internalRoles, request);
//     } else return internalRoles.some((el) => el === resourceGroup);
//   });
// };

module.exports = csProtect;
