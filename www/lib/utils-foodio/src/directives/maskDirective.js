let directive = () => {
  return {
    restrict: 'A',
    link: (scope, $el, attrs) => {
      if(attrs.mask === 'phone') {
        return $el.inputmask('(99) 9999-9999[9]');
      }

      if(attrs.mask === 'date') {
        return $el.inputmask('99/99/9999');
      }

      if(attrs.mask === 'zipcode') {
        return $el.inputmask('99999-999', { autoUnmask: true });
      }

      $el.inputmask(attrs.mask, { autoUnmask: attrs.autoUnmask || false })
    }
  };
};

angular.module('utils.foodio').directive('mask', directive);