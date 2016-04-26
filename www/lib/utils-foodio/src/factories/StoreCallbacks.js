let StoreCallbacks = ($q) => {
  return class StoreCallbacks {
    constructor(store) {
      if(store) this.setStore(store);
      return this;
    }

    setStore(store) {
      this.store = store;
    }

    getDiffFromNow(reference) {
      return moment(reference).diff(moment(), 'seconds');
    }

    toOpen() {
      return $q((resolve, reject) => {
        if(!this.store.opening_time) {
          return reject();
        }

        return resolve({ event: 'toOpen', seconds: this.getDiffFromNow(this.store.opening_time) })
      });
    }

    toClose() {
      return $q((resolve, reject) => {
        if(!this.store.closing_time) {
          return reject();
        }

        return resolve({ event: 'toClose', seconds: this.getDiffFromNow(this.store.closing_time) })
      });
    }

  };
};

StoreCallbacks.$inject = ['$q'];
angular.module('utils.foodio').factory('StoreCallbacks', StoreCallbacks);