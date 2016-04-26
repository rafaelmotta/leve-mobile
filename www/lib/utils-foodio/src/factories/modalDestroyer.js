let modalDestroyer = ($interval) => {
  return new class ModalDestroyer {
    constructor() {
      this.interval = null;
    }

    destroyAll() {
      $('.modal').remove();
      $('.modal-backdrop').hide();
      $('body').removeClass('modal-open');

      if(this.interval) {
        $interval.cancel(this.interval);
      }

      this.interval = $interval(() => {
        var $modal = $('.modal');

        if ($modal.length) {
          $('.modal-backdrop').show();
        } else {
          $('.modal-backdrop').hide();
        }
      }, 100);
    }
  };
};

modalDestroyer.$inject = ['$interval'];
angular.module('utils.foodio').factory('modalDestroyer', modalDestroyer);