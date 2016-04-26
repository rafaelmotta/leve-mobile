let HttpToken = ($q, $state, $http, hint, storage) => {

  return class HttpToken {

    constructor(userKey) {
      this._setUserKey(userKey);
      return this;
    }

    initialize() {
      return $q((resolve, reject) => {
        return this.get().then((user) => {
          if(!user) return reject();

          this.set(user).then((user) => {
            resolve(user);
          });
        });
      });
    }

    get() {
      return storage.get(`current${this.key}`).then((currentUser) => {
        return currentUser;
      });
    }

    set(user) {
      return $q((resolve, reject) => {
        $http.defaults.headers.common[`X-${this.key}-Email`] = user.email;
        $http.defaults.headers.common[`X-${this.key}-Token`] = user.authentication_token;

        storage.set(`current${this.key}`, user);

        resolve(this.get());
      });
    }

    remove() {
      return $q((resolve, reject) => {
        return storage.remove(`current${this.key}`).then(() => {
          delete $http.defaults.headers.common[`X-${this.key}-Email`];
          delete $http.defaults.headers.common[`X-${this.key}-Token`];
          resolve();
        });
      });
    }

    _setUserKey(key = 'Employee') {
      if(key !== 'Employee' && key !== 'Costumer') {
        throw new Error('Chave para uso do serviço HttpToken deve ter os valores Employee ou Costumer');
      }
      this.key = key;
    }
  }
};

HttpToken.$inject = ['$q', '$state', '$http', 'hint', 'storage'];
angular.module('utils.foodio').factory('HttpToken', HttpToken);