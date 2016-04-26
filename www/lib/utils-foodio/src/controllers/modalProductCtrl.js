let ctrl = ($scope, $uibModalInstance, TempCart, cartItemApi, cartResolved, storeProductResolved, cartItemResolved) => {

  return new class ModalProductCustomizationCtrl {
    constructor() {
      $scope.product = storeProductResolved;
      $scope.cart = cartResolved;
      $scope.cartItem = cartItemResolved;

      new TempCart($scope, cartItemResolved);
    }

    add() {
      cartItemApi[this._getCartMethod()]($scope.cartItem, { cart_id: $scope.cart.id }).then((cart) => {
        $uibModalInstance.close({ cart: cart.plain() });
      });
    }

    close() {
      $uibModalInstance.dismiss('close');
    }

    _getCartMethod() {
      return $scope.cartItem.id ? 'update' : 'create';
    }
  };
};

ctrl.$inject = ['$scope', '$uibModalInstance', 'TempCart', 'cartItemApi', 'cartResolved', 'storeProductResolved', 'cartItemResolved'];
angular.module('utils.foodio').controller('ModalProductCtrl', ctrl);