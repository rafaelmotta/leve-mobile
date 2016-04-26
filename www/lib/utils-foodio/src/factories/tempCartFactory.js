let tempCart = () => {
  return class TempCart {
    constructor($scope, cartItem) {
      this.$scope = $scope;
      $scope.isEditing = cartItem ? true : false;

      if($scope.isEditing) {
        cartItem.customization_fields = JSON.parse(cartItem.customization_fields);
      }

      $scope.cartItem = cartItem || { amount: 1, note: null, total: ($scope.product.price * 1), product: $scope.product, customization_fields: {}, addons: [] };

      this._setCustomizationFields();
      this._listenScopeEvents();
    }

    _setCustomizationFields() {
      if(this.$scope.isEditing) {
        return false;
      }

      angular.forEach(this.$scope.product.addon_categories, (addonCategory) => {
        this.$scope.cartItem.customization_fields[addonCategory.id] = {};

        angular.forEach(addonCategory.addons, (addon) => {
          if(addonCategory.max === 1) {
            this.$scope.cartItem.customization_fields[addonCategory.id] = addonCategory.addons[0].id;
          } else {
            let fill = (addonCategory.auto_fill && !parseFloat(addon.price) && addon.available) ? true : false;
            this.$scope.cartItem.customization_fields[addonCategory.id][addon.id] = fill;
          }
        });
      });
    }

    _listenScopeEvents() {
      let findAndInsert = (addonId) => {
        let _addon = null;

        angular.forEach(this.$scope.product.addon_categories, (addonCategory) => {
          let find = _.findWhere(addonCategory.addons, { id: parseInt(addonId, 10) });
          if(find) {
            _addon = find;
          }
        });

        if(!_addon) {
          return false;
        }

        this.$scope.cartItem.addons.push({
          id: _addon.id,
          name: _addon.name,
          price: _addon.price,
          product_addon_id: _addon.product_addon_id
        });
      };

      this.$scope.$watch('cartItem', (newObject, oldObject) => {
        this.$scope.cartItem.addons = [];

        angular.forEach(this.$scope.cartItem.customization_fields, (addon) => {
          if(!_.isObject(addon)) {
            return findAndInsert(addon);
          }

          angular.forEach(addon, (checked, addonId) => {
            if(!checked) {
              return false;
            }

            return findAndInsert(addonId);
          });
        });
      }, true);

      this.$scope.$watch('cartItem', (newValue, oldValue) => {
        let addonsPrice = 0;

        angular.forEach(this.$scope.cartItem.addons, (addon) => {
          addonsPrice += parseFloat(addon.price);
        });

        this.$scope.cartItem.total = (parseFloat(this.$scope.product.price) + addonsPrice) * this.$scope.cartItem.amount;
      }, true);
    }
  };
};

angular.module('utils.foodio').factory('TempCart', tempCart);