let ModalPrintManagerController = ($scope, $rootScope, $uibModal, $uibModalInstance, printManager, printersResolved, printerChooseResolved) => {

  return new class Ctrl {

    constructor() {
      $scope.options = {
        show: false,
        port: 7333
      };

      $scope.printers = printersResolved;
      $scope.choosingPrinter = printerChooseResolved;
      $scope.printer = null;
    }

    // @toggleOptions
    // @description Exibe / esconde opções avançadas
    toggleOptions() {
      $scope.options.show = !$scope.options.show;
    }

    // @name connect
    // @description Connecta com o software
    connect() {
      $scope.options.printers = angular.copy($scope.printers);
      printManager.connect($scope.options).then(this._afterConnect.bind(this));
    }

    // @name connect
    // @description Desconecta do software
    disconnect() {
      printManager.disconnect().then(this._afterDisconnect.bind(this));
    }

    _afterConnect(socket) {
      $rootScope.socket = socket;
    }

    _afterDisconnect(socket) {
      $rootScope.socket = null;
    }

    choosePrinter(printer) {
      if($scope.choosingPrinter) {

        if($scope.printer && printer.id === $scope.printer.id) {
          return $scope.printer = null;
        }

        $scope.printer = printer;
      }
    }

    next() {
      $uibModalInstance.close({ printer: $scope.printer });
    }

    // @name print
    // @description Realiza impressão de teste
    print(printer, $event) {
      $event.stopPropagation();
      printManager.print({ layout: 'test', printer: printer });
    }

    // @name close
    // @description Fecha modal
    close() {
      $uibModalInstance.close();
    }
  }
};

ModalPrintManagerController.$inject = ["$scope", "$rootScope", "$uibModal", "$uibModalInstance", "printManager", "printersResolved", "printerChooseResolved"];
angular.module('utils.foodio').controller('ModalPrintManagerController', ModalPrintManagerController);

