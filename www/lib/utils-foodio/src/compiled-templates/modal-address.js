(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/modal-address.html',
    '<div class="modal-header">\n' +
    '  <h4 class="modal-title" ng-hide="address.id">Adicionar</h4>\n' +
    '  <h4 class="modal-title" ng-show="address.id">Editar</h4>\n' +
    '</div>\n' +
    '<div class="modal-body clearfix">\n' +
    '  <form name="addressForm" class="form-horizontal" ng-submit="ctrl.submit()">\n' +
    '    <form-group label="Nome" required="true">\n' +
    '      <input type="text" tabindex="1" ng-model="address.name" autofocus />\n' +
    '    </form-group>\n' +
    '    <form-group label="CEP" required="true">\n' +
    '      <input type="text" tabindex="2" ng-model="address.zipcode" required mask="99999-999" auto-unmask="true" zipcode zipcode-model="address" />\n' +
    '    </form-group>\n' +
    '    <form-group label="Cidade" required="true">\n' +
    '      <input type="text" tabindex="3" ng-model="address.city.name" disabled required />\n' +
    '    </form-group>\n' +
    '    <form-group label="Bairro" required="true">\n' +
    '      <input type="text" tabindex="4" ng-model="address.neighborhood.name" disabled required />\n' +
    '    </form-group>\n' +
    '    <form-group label="Rua" required="true">\n' +
    '      <input type="text" tabindex="5" ng-model="address.street" disabled required />\n' +
    '    </form-group>\n' +
    '    <form-group label="Número" required="true">\n' +
    '      <input type="text" tabindex="6" ng-model="address.number" required />\n' +
    '    </form-group>\n' +
    '    <form-group label="Complemento">\n' +
    '      <textarea ng-model="address.complement" tabindex="7" rows="3"></textarea>\n' +
    '    </form-group>\n' +
    '    <div class="modal-footer">\n' +
    '      <button class="btn btn-success" loading-spinner>\n' +
    '        Salvar\n' +
    '      </button>\n' +
    '      <button class="btn btn-default" type="button" ng-click="ctrl.close()">Cancelar</button>\n' +
    '    </div>\n' +
    '  </form>\n' +
    '</div>\n' +
    '');
}]);
})();
