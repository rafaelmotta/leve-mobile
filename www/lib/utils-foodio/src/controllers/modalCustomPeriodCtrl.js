let ctrl = ($scope, $uibModalInstance, $filter) => {

  return new class ModalCustomPeriodCtrl {
    constructor() {
      let date = $filter('date')(new Date(), "dd/MM/yyyy");

      $scope.period  = { fromDate: date, toDate: date, fromTime: new Date().setHours(0,0,0,0), toTime: new Date().setHours(23, 59, 59, 0) };
      $scope.status  = { fromDate: false, toDate: false };
      $scope.options = { showWeeks: false };
    }

    // Abre o datepicker
    open(name) {
      $scope.status[name] = !$scope.status[name];
    }

    // Fecha o modal e envia os dados selecionados
    next() {
      $uibModalInstance.close($scope.period);
    }

    // Fecha o modal sem enviar os dados selecionados
    close() {
      $uibModalInstance.dismiss('close');
    }
  };
};

ctrl.$inject = ['$scope', '$uibModalInstance', '$filter'];
angular.module('utils.foodio').controller('ModalCustomPeriodCtrl', ctrl);