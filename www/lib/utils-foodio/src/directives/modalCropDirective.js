let directive = ($uibModal, $templateCache, $parse, $timeout, Cropper) => {
  return {
    restrict: 'A',
    scope: false,
    require: 'ngModel',
    scope: {
      model: '=ngModel'
    },
    link: (scope, $el, attrs, ngModel) => {

      if ($el.get(0).type.toLowerCase() !== 'file') {
        return false;
      }

      $el.on('change', function(e) {
        let file = $el.get(0).files[0];
        let data = null;
        let blob = null;

        return Cropper.encode((blob = file)).then((url) => {
          return $uibModal.open({
            template: $templateCache.get('/templates/modal-crop.html'),
            windowClass: 'modal-crop',
            controller: 'ModalCropController as ctrl',
            resolve: {
              imgUrlResolved() {
                return url;
              },
              fileResolved() {
                return file;
              },
              scopeResolved() {
                return scope;
              }
            }
          });
        });
      });
    }
  };
};

directive.$inject = ['$uibModal', '$templateCache', '$parse', '$timeout', 'Cropper'];
angular.module("utils.foodio").directive('modalCrop', directive);