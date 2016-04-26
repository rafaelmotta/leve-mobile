(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/modal-print-manager.html',
    '<div class="modal-header">\n' +
    '  <h4 class="modal-title">Software de impressão</h4>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '  <div class="alert alert-danger" ng-show="socket && socket.disconnected">\n' +
    '    Software de impressão está ativo mas não há conexão\n' +
    '  </div>\n' +
    '  <div ng-show="!socket">\n' +
    '    <div class="alert alert-warning">\n' +
    '      <p>Software de impressão está inativo.</p>\n' +
    '      <p>\n' +
    '        Clique <a href="#" ng-click="ctrl.toggleOptions()">aqui</a>\n' +
    '        para\n' +
    '        <span ng-hide="options.show">exibir</span>\n' +
    '        <span ng-show="options.show">esconder</span>\n' +
    '        as opções avançadas.\n' +
    '      </p>\n' +
    '    </div>\n' +
    '    <div ng-show="options.show">\n' +
    '      <hr />\n' +
    '      <form class="form-horizontal">\n' +
    '        <form-group label="Nome" required="true">\n' +
    '          <input type="number" ng-model="options.port" />\n' +
    '          <p class="help-block">Porta do socket do programa</p>\n' +
    '        </form-group>\n' +
    '      </form>\n' +
    '      </div>\n' +
    '  </div>\n' +
    '  <div ng-show="socket.connected">\n' +
    '    <div class="alert alert-info">\n' +
    '      Software de impressão está ativo e ouvindo pedidos de impressão\n' +
    '    </div>\n' +
    '    <hr />\n' +
    '    <table>\n' +
    '    <thead>\n' +
    '      <tr>\n' +
    '        <th style="width: 30%;">Nome</th>\n' +
    '        <th style="width: 15%;">IP</th>\n' +
    '        <th style="width: 15%;">Porta</th>\n' +
    '        <th style="width: 15%;">Padrão</th>\n' +
    '        <th style="width: 15%;">Ações</th>\n' +
    '      </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '      <tr ng-repeat="p in printers | orderBy: \'order\'" ng-click="ctrl.choosePrinter(p)" ng-class="{ success: printer.id === p.id }">\n' +
    '        <td>{{ p.name }}</td>\n' +
    '        <td>{{ p.ip }}</td>\n' +
    '        <td>{{ p.port }}</td>\n' +
    '        <td><i class="fa" ng-class="{ \'fa-check\': p.default, \'fa-remove\': !p.default }"></i></td>\n' +
    '        <td class="table-actions">\n' +
    '          <button class="btn btn-xs btn-default" uib-tooltip="Impressão de teste" tooltip-placement="top" ng-click="ctrl.print(p, $event);">\n' +
    '            <i class="fa fa-print"></i>\n' +
    '          </button>\n' +
    '        </td>\n' +
    '      </tr>\n' +
    '    </tbody>\n' +
    '  </table>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '  <button class="btn btn-success" ng-click="ctrl.connect()" ng-show="!socket">Conectar</button>\n' +
    '  <button class="btn btn-danger" ng-click="ctrl.disconnect()" ng-show="socket && !choosingPrinter">Desconectar</button>\n' +
    '  <button class="btn btn-danger" ng-click="ctrl.next()" ng-show="choosingPrinter" ng-disabled="!printer">Escolher</button>\n' +
    '  <button class="btn btn-default" ng-click="ctrl.close()">Fechar</button>\n' +
    '</div>');
}]);
})();
