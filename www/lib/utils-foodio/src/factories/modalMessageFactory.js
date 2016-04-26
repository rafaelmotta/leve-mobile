let modal = ($uibModal, $templateCache) => {
  return new class Modal {
    open(params = {}){
      return $uibModal.open({
        template: $templateCache.get('/templates/modal-message.html'),
        controller: 'ModalMessageCtrl as ctrl',
        windowClass: 'modal-message',
        resolve: {
          messageResolved: () => {
            return params;
          }
        }
      });
    }
  };
};

modal.$inject = ['$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('modalMessage', modal);