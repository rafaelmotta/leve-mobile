(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/modal-custom-period.html',
    '<div class="modal-header">\n' +
    '  <h4 class="modal-title">Escolher período</h4>\n' +
    '</div>\n' +
    '<div class="modal-body clearfix">\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6" ng-click="ctrl.open(\'fromDate\')">\n' +
    '      <div class="input-group">\n' +
    '        <input ng-model="period.fromDate" datepicker-options="options" uib-datepicker-popup="dd/MM/yyyy" is-open="status.fromDate" disabled />\n' +
    '        <div class="input-group-addon">\n' +
    '          <i class="fa fa-calendar"></i>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6" ng-click="ctrl.open(\'toDate\')">\n' +
    '      <div class="input-group">\n' +
    '        <input ng-model="period.toDate" datepicker-options="options" uib-datepicker-popup="dd/MM/yyyy" is-open="status.toDate" disabled />\n' +
    '        <div class="input-group-addon">\n' +
    '          <i class="fa fa-calendar"></i>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <hr />\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <timepicker ng-model="period.fromTime" readonly-input="true" hour-step="1" minute-step="15" show-meridian="false" prevent-table="true" style="margin: 0 auto;"></timepicker>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <timepicker ng-model="period.toTime" readonly-input="true" hour-step="1" minute-step="15" show-meridian="false" prevent-table="true" style="margin: 0 auto;"></timepicker>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '  <button class="btn btn-default" type="button" ng-click="ctrl.close()">Cancelar</button>\n' +
    '  <button class="btn btn-success" ng-click="ctrl.next()">Próximo</button>\n' +
    '</div>');
}]);
})();
