let popup = ($window, $q) => {
  return new class Popup {
    open(pageURL, width, height) {
      return $q((resolve, reject) => {
        let left = Number(screen.width / 2 - (width / 2));
        let top = Number(screen.height / 2 - (height / 2));

        let popup = $window.open(pageURL, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
        resolve(popup);
      });
    }
  };
};

popup.$inject = ['$window', '$q'];
angular.module('utils.foodio').factory('popup', popup);