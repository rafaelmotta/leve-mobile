let modalAddress = ($uibModal, $templateCache) => {

  return new class ModalAddress {

    open(params = {}){
      if(!angular.isObject(params)) {
        throw new Error('Modal Address params must be an object!');
      }

      if(!params.onSubmit || !angular.isFunction(params.onSubmit)) {
        throw new Error('Modal Address Factory must have onSubmit function!')
      }

      return $uibModal.open({
        template: $templateCache.get('/templates/modal-address.html'),
        controller: 'ModalAddressCtrl as ctrl',
        windowClass: 'modal-address',
        resolve: {
          addressResolved() {
            return params.address;
          },
          onSubmitResolved() {
            return params.onSubmit;
          }
        }
      });
    }
  };
};

modalAddress.$inject = ['$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('modalAddress', modalAddress);