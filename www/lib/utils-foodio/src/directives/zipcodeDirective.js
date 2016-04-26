let directive = (zipcodeApi) => {
  return {
    restrict: 'A',
    scope: {
      zipcode: '&ngModel',
      model: '=zipcodeModel'
    },
    link: (scope, $el, attrs) => {
      let _zipcode = null;

      scope.$watch(scope.zipcode, (value, oldValue) => {
        if(!value)             return false;
        if(value.length !== 8) return false;
        if(value === oldValue) return false;
        if(_zipcode === value) return false;

        _zipcode = value;

        let number = scope.model.number ? scope.model.number : null;

        zipcodeApi.fetch({ zipcode: _zipcode, number: number }).then((response) => {
          let data = response.data;

          scope.model.latitude = data.latitude;
          scope.model.longitude = data.longitude;
          scope.model.neighborhood = data.neighborhood;
          scope.model.city = data.city;
          scope.model.street = data.street;
          scope.model.city_id = data.city.id;
          scope.model.neighborhood_id = data.neighborhood.id;

          $el
            .parents('.form-group')
            .siblings()
            .find("input[ng-model='address.number']")
            .focus();
        });
      });
    }
  };
};

directive.$inject = ['zipcodeApi'];
angular.module('utils.foodio').directive('zipcode', directive);