let roleVerificator = () => {
  return new class RoleVerificator {

    hasRole(roleToVerify, availableRoles) {
      let found = false;

      angular.forEach(availableRoles, (roleAlias) => {
        if(roleAlias === roleToVerify.alias) {
          found = true;
        }
      })

      return found;
    }
  };
};

angular.module('utils.foodio').factory('roleVerificator', roleVerificator);