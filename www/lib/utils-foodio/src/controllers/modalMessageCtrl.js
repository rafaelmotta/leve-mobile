let ctrl = ($scope, $uibModalInstance, constants, messageResolved) => {

  return new class Ctrl {
    constructor() {
      $scope.message = {
        title: messageResolved.title || 'Atenção',
        content: messageResolved.content || '',
      };

      new Audio(`${constants.static}/notifications/audios/success.mp3`).play();
    }

    close() {
      $uibModalInstance.dismiss('close');
    }
  }
};

ctrl.$inject = ['$scope', '$uibModalInstance', 'constants', 'messageResolved'];
angular.module('utils.foodio').controller('ModalMessageCtrl', ctrl);