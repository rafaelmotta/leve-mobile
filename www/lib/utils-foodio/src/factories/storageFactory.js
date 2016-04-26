let storage = ($localStorage, $q) => {
  return new class Storage {

    get(key) {
      return $q((resolve, reject) => {
        let response = $localStorage[key] || null;
        resolve(response);
      });
    }

    set(key, value) {
      return $q((resolve, reject) => {
        $localStorage[key] = value;
        resolve();
      });
    }

    remove(key) {
      return $q((resolve, reject) => {
        delete $localStorage[key]
        let response = $localStorage[key] || null;
        resolve(response);
      });
    }
  };
};

storage.$inject = ['$localStorage', '$q'];
angular.module('utils.foodio').factory('storage', storage);