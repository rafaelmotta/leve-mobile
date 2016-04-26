let ctrl = ($scope, $uibModalInstance, addressResolved, onSubmitResolved) => {

  return new class ctrl {

    constructor() {
      $scope.address = addressResolved;
      $scope.onSubmit = onSubmitResolved;
    }

    submit() {
      let method = this._getMethod();

      $scope.onSubmit({ address: $scope.address, method: method }).then((response) => {
        $uibModalInstance.close({ address: response.data, method: method });
      });
    }

    close() {
      $uibModalInstance.dismiss('close');
    }

     _getMethod() {
      return $scope.address.id ? 'update' : 'create';
    }
  };
};

ctrl.$inject = ['$scope', '$uibModalInstance', 'addressResolved', 'onSubmitResolved'];
angular.module('utils.foodio').controller('ModalAddressCtrl', ctrl);
