(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/modal-product.html',
    '<div class="modal-header">\n' +
    '  <button type="button" class="close" data-dismiss="modal" ng-click="ctrl.close()"><span aria-hidden="true">&times;</span></button>\n' +
    '  <div class="modal-title">\n' +
    '    <i class="fa fa-shopping-cart"></i>\n' +
    '    {{ product.name }}\n' +
    '  </div>\n' +
    '  <div class="product-total-price">\n' +
    '    {{ cartItem.total | currency: "R$" }}\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="modal-body clearfix">\n' +
    '\n' +
    '  <aside class="pull-left">\n' +
    '    <img class="product-image img-thumbnail" ng-src="{{ product.img.medium }}" width="280" height="280" alt="Foto do produto com nome {{ product.name }}">\n' +
    '    <p class="product-description">\n' +
    '      <i class="fa fa-shopping-cart"></i>\n' +
    '      {{ product.name }}\n' +
    '    </p>\n' +
    '    <p class="product-description">\n' +
    '      <i class="fa fa-money"></i>\n' +
    '      A partir de {{ product.price | currency: "R$" }}\n' +
    '    </p>\n' +
    '  </aside>\n' +
    '\n' +
    '  <div class="product-options pull-right">\n' +
    '\n' +
    '    <label>Descrição:</label>\n' +
    '    <blockquote ng-show="product.description" ng-bind-html="product.description"></blockquote>\n' +
    '    <hr />\n' +
    '    <label for="cart-item-amount">Selecione a quantidade:</label>\n' +
    '    <select id="cart-item-amount" ng-model="cartItem.amount" ng-options="i as i for i in [1,2,3,4,5,6,7,8,9,10]"></select>\n' +
    '\n' +
    '    <hr ng-show="product.addon_categories.length > 0">\n' +
    '\n' +
    '    <div ng-repeat="addonCategory in product.addon_categories" class="addon-categories-list">\n' +
    '\n' +
    '      <div class="addon-category-name">\n' +
    '        {{ addonCategory.name }}\n' +
    '        <small ng-show="!addonCategory.max && !addonCategory.min">Escolha quantos ingredientes desejar</span></small>\n' +
    '        <small ng-show="!addonCategory.max && addonCategory.min">\n' +
    '          Escolha pelo menos {{ addonCategory.min }} <span ng-show="addonCategory.min === 1">ingrediente</span><span ng-show="addonCategory.min > 1">ingredientes</span>\n' +
    '        </small>\n' +
    '        <small ng-show="addonCategory.max">\n' +
    '          <span ng-show="addonCategory.max === 1 && addonCategory.min === 1 || addonCategory.max === 1 && !addonCategory.min">Escolha ao menos 1 ingrediente</span>\n' +
    '          <span ng-show="addonCategory.max > 1 && addonCategory.min >= 1">Escolha entre {{ addonCategory.min }} à {{ addonCategory.max }} ingredientes</span>\n' +
    '          <span ng-show="addonCategory.max > 1 && !addonCategory.min">Escolha até {{ addonCategory.max }} ingredientes</span>\n' +
    '        </small>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="addons-list">\n' +
    '        <div ng-repeat="addon in addonCategory.addons" class="addon-item">\n' +
    '          <label ng-if="(addonCategory.max === 1 && addonCategory.min === 1) || (addonCategory.max === 1 && !addonCategory.min) || (!addonCategory.max && addonCategory.min === 1)"\n' +
    '            ng-disabled="!addon.available">\n' +
    '            <input type="radio" ng-disabled="!addon.available" ng-value="addon.id"  ng-model="cartItem.customization_fields[addonCategory.id]">\n' +
    '            {{ addon.name }}\n' +
    '            <span class="addon-price" ng-show="addon.price > 0 && addon.available">({{ addon.price | currency: "R$" }})</span>\n' +
    '            <span class="addon-unavailable" ng-show="!addon.available">Ingrediente não disponível</span>\n' +
    '          </label>\n' +
    '          <label ng-if="(addonCategory.max > 1 || addonCategory.min > 1) || (!addonCategory.max && !addonCategory.min)"\n' +
    '            ng-disabled="!addon.available">\n' +
    '            <input type="checkbox" ng-disabled="!addon.available" ng-model="cartItem.customization_fields[addonCategory.id][addon.id]" ng-init="cartItem.customization_fields[addonCategory.id][addon.id] = cartItem.customization_fields[addonCategory.id][addon.id] && addon.available ? true : false" />\n' +
    '            {{ addon.name }}\n' +
    '            <span class="addon-price" ng-show="addon.price > 0 && addon.available">({{ addon.price | currency: "R$" }})</span>\n' +
    '            <span class="addon-unavailable" ng-show="!addon.available">Ingrediente não disponível</span>\n' +
    '          </label>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <hr>\n' +
    '    <label for="cart-item-note">Deseja fazer alguma observação?</label>\n' +
    '    <textarea id="cart-item-note" rows="3" ng-model="cartItem.note"></textarea>\n' +
    '    <limit maxlength="150" model="cartItem.note"></limit>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="modal-footer">\n' +
    '  <button class="btn btn-success" ng-click="ctrl.add()" ng-show="!isEditing">\n' +
    '    <i class="fa fa-plus-square"></i>\n' +
    '    Adicionar\n' +
    '  </button>\n' +
    '  <button class="btn btn-success" ng-click="ctrl.add()" ng-show="isEditing">\n' +
    '    <i class="fa fa-pencil"></i>\n' +
    '    Confirmar edição\n' +
    '  </button>\n' +
    '  <button class="btn btn-default" ng-click="ctrl.close()">\n' +
    '    Cancelar\n' +
    '  </button>\n' +
    '</div>');
}]);
})();
