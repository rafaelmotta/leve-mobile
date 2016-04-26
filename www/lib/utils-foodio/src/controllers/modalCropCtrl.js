let ctrl = ($scope, $uibModalInstance, $timeout, Cropper, imgUrlResolved, fileResolved, scopeResolved) => {

  return new class Ctrl {

    constructor() {
      $scope.imgToCrop = imgUrlResolved;

      this.fileData = null;
      this.file = fileResolved;
      this.scope = scopeResolved;

      $scope.options = {
        maximize: true,
        movable: false,
        rotatable: false,
        zoomable: false,
        mouseWheelZoom: false,
        touchDragZoom: false,
        aspectRatio: 2 / 2,
        crop: (newData) => {
          this.fileData = newData;
        }
      };

      $scope.showEvent = 'show';

      $timeout(() => {
        return $scope.$broadcast($scope.showEvent);
      });
    }

    close() {
      $uibModalInstance.dismiss('close');
    }

    crop() {
      return Cropper.crop(this.file, this.fileData).then((blob) => {
        blob.lastModifiedDate = new Date();
        blob.name = this.file.name;

        $timeout(() => {
          this.scope.model = [blob];
        });

        this.close();
      });
    }
  }
};

ctrl.$inject = ['$scope', '$uibModalInstance', '$timeout', 'Cropper', 'imgUrlResolved', 'fileResolved', 'scopeResolved'];
angular.module('utils.foodio').controller('ModalCropController', ctrl);