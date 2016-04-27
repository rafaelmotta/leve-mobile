angular.module('starter.controllers', [])

.controller('AppCtrl', function($rootScope, $scope, $ionicModal, HttpToken, $state) {

  $ionicModal.fromTemplateUrl('templates/cart-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  this.close = function() {
    $scope.modal.hide();
  };

  this.openCart = function(){
    $scope.modal.show();
  };

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

.controller('MenuCtrl', function($rootScope, $scope, $ionicModal, storeProductApi, menuResolved) {
  var ctrl = this;
  $scope.categories = menuResolved;
  $scope.currentAddonCategoryIndex = 0;

   $ionicModal.fromTemplateUrl('templates/menu-choose-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  this.close = function() {
    $scope.modal.hide();
  };

  this.getCurrentAddonCategory = function(){
    if(!$scope.product)
      return;
    return $scope.product.addon_categories[$scope.currentAddonCategoryIndex];
  }

  this.showProductModal = function(product) {
    storeProductApi.show(product).then(function(response) {
      $scope.product = response.data;
      $scope.modal.show();
    });
  };

  $scope.getSelectedItems = function(){
    var selecteds = $scope.product.addon_categories[$scope.currentAddonCategoryIndex].addons.filter(function(value){
      return value.selected;
    });
    //angular.forEach(obj, iterator, [context]);
    return selecteds;
  };

  this.itemChoose = function(addon){
    //var addons = $scope.product.addon_categories[$scope.currentAddonCategoryIndex].addons;
    var selecteds = $scope.getSelectedItems();
    if(ctrl.getCurrentAddonCategory().max && ctrl.getCurrentAddonCategory().max > 0){
      if(selecteds.length > ctrl.getCurrentAddonCategory().max){
        if(selecteds[0] != addon)
          selecteds[0].selected = false;
        else
          selecteds[1].selected = false;
      }
    }
  };

  this.getNextButtonText = function(){
    if(!$scope.product)
      return;

    if($scope.currentAddonCategoryIndex >= $scope.product.addon_categories.length-1)
      return "Finalizar";

    return "Próximo";
  };
  
  this.goToNextAddonCategory = function(){
    if($scope.currentAddonCategoryIndex >= $scope.product.addon_categories.length-1){
      if(!$rootScope.cart)
        $rootScope.cart = [];
      $rootScope.cart.push(angular.copy($scope.product));
      $scope.modal.hide();
      $scope.currentAddonCategoryIndex = 0;      
    }else{
      $scope.currentAddonCategoryIndex++;
    }
  };
})

.controller('CartController', function($rootScope, $scope, $ionicModal){
  
});
