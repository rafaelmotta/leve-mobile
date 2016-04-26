let modalRating = ($uibModal, $templateCache) => {
  return new class ModalRating {
    open(order){
      return $uibModal.open({
        template: $templateCache.get('/templates/modal-rating.html'),
        controller: 'ModalRatingCtrl as ctrl',
        windowClass: 'modal-rating',
        resolve: {
          orderResolvedd: () => {
            return order;
          }
        }
      });
    }
  };
};

modalRating.$inject = ['$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('modalRating', modalRating);