angular.module('starter.controllers', [])

.controller('AppCtrl', function($rootScope, HttpToken, $state) {
  this.logout = function() {
    if(!$rootScope.currentCostumer) return false;

    new HttpToken('Costumer').remove().then(() => {
      delete $rootScope.currentCostumer;

      // Redireciona para página de login
      $state.go('app.menu');
    });
  };
})

.controller('HomeCtrl', function($scope, storeProductApi) {
})

.controller('LoginCtrl', function($rootScope, $scope, $state, $timeout, loginApi, HttpToken) {
  $scope.costumer = {
    company_id: $scope.company.id
  };

  this.submit = function(){
    loginApi.loginWithEmail($scope.costumer).then((response) => {

      $rootScope.currentCostumer = response.data;

      new HttpToken('Costumer').set($rootScope.currentCostumer).then( () => {

        $timeout(() => {
          if($rootScope.currentCostumer) {
            $state.go('app.menu');
          }
        });
      });

    });
  };
})

.controller('RegisterCtrl', function($scope) {
})

.controller('MenuCtrl', function($scope, $ionicModal, storeProductApi, menuResolved) {
  $scope.categories = menuResolved;

   $ionicModal.fromTemplateUrl('product-customization.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  this.close = function() {
    $scope.modal.hide();
  };

  this.showProductModal = function(product) {
    storeProductApi.show(product).then(function(response) {
      $scope.product = response.data;
      $scope.modal.show();
    });
  };
});
