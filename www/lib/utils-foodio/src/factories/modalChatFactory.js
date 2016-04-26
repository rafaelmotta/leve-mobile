let modal = ($uibModal, $templateCache) => {
  return new class Modal {
    open(params = {}){
      return $uibModal.open({
        template: $templateCache.get('/templates/modal-chat.html'),
        controller: 'ModalChatCtrl as ctrl',
        windowClass: 'modal-chat',
        resolve: {
          onScrollResolved: () => {
            return params.onScroll;
          },
          chatResolved: () => {
            return params.chat;
          },
          userResolved: () => {
            return params.user;
          },
          userTypeResolved: () => {
            let userType = params.userType;

            if(userType !== 'Costumer' && userType !== 'Employee') {
              userType = 'Costumer';
            }

            return userType;
          }
        }
      });
    }
  };
};

modal.$inject = ['$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('modalChat', modal);