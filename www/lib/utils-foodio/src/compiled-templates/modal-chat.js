(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/modal-chat.html',
    '<div class="modal-header">\n' +
    '  <button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="ctrl.close()"><span aria-hidden="true">&times;</span></button>\n' +
    '  <h4 class="modal-title">Mensagens</h4>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '  <ul class="list-unstyled" infinite-scroll=\'ctrl.loadMessages()\' infinite-scroll-distance=\'2\'>\n' +
    '    <li ng-repeat="m in messages | orderBy: \'-id\'">\n' +
    '      <div class="row">\n' +
    '        <div class="col-md-2">\n' +
    '          <img ng-src="{{ m.user.avatar.thumb }}" alt="Avatar" class="img-thumbnail" width="100" height="100"/>\n' +
    '        </div>\n' +
    '        <div class="col-md-10">\n' +
    '          <div class="clearfix">\n' +
    '            <span ng-show="m.user.id === user.id && m.userable_type === userType" class="message-creator ">Você</span>\n' +
    '            <span ng-show="m.user.id != user.id || m.userable_type != userType">{{ m.user.name }}</span>\n' +
    '            <small ng-show="m.created_at">{{ m.created_at }}</small>\n' +
    '            <small ng-show="!m.created_at" class="message-pending">Enviando...</small>\n' +
    '            <a ng-show="m.failed" class="message-error" ng-click="ctrl.send()" tooltip-placement="bottom" tooltip="Clique para reenviar">Falha no envio</a>\n' +
    '          </div>\n' +
    '          <p>{{ m.content }}</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '  <form ng-submit="ctrl.send()" name="form">\n' +
    '    <div class="row">\n' +
    '      <div class="col-md-10">\n' +
    '        <textarea rows="4" ng-model="message.content" ng-disabled="message.sending" placeholder="Digite sua mensagem" autofocus required ng-maxlength="500" ng-keyup="ctrl.onKeyUp($event)"></textarea>\n' +
    '      </div>\n' +
    '      <div class="col-md-2">\n' +
    '        <button class="btn btn-success btn-block" ng-disabled="message.content.length < 1 || message.sending">\n' +
    '          <span ng-show="!message.sending">Enviar</span>\n' +
    '          <span ng-show="message.sending">\n' +
    '            <i class="fa fa-spinner fa-spin"></i>\n' +
    '          </span>\n' +
    '        </button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </form>\n' +
    '</div>');
}]);
})();
