let scrollTop = () => {
  return new class ScrollTop {
    goTop(delay = 500) {
      let position = 0;
      $('html, body').animate({ scrollTop: position }, delay);
    }
  };
};

angular.module('utils.foodio').factory('scrollTop', scrollTop);