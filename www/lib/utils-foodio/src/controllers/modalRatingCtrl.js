let ctrl = ($scope, $uibModalInstance) => {

  return new class ModalRatingCtrl {
    constructor() {
      $scope.rating = {};
    }

    save() {
      $uibModalInstance.close({ rating: rating.plain() });
    }

    close() {
      $uibModalInstance.dismiss('close');
    }

  };
};

ctrl.$inject = ['$scope', '$uibModalInstance'];
angular.module('utils.foodio').controller('ModalRatingCtrl', ctrl);