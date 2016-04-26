(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/modal-rating.html',
    '<div class="modal-header">\n' +
    '  <h4 class="modal-title">\n' +
    '    Avaliar pedido\n' +
    '  </h4>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '  <p>1. Em uma escala de 1 a 10, sendo 1 altamente improvavel e 10 altamente provavel, qual a probabilidade de você indicar o speedy food a um amigo(a)?</p>\n' +
    '  <uib-rating ng-model="rating.score" max="10" state-on="\'fa fa-star fa-star-filled\'" state-off="\'fa fa-star-o\'"></uib-rating>\n' +
    '  <hr />\n' +
    '  <p>2. Qual a nota você daria para qualidade dos nossos produtos?</p>\n' +
    '  <uib-rating ng-model="rating.quality" max="10" state-on="\'fa fa-star fa-star-filled\'" state-off="\'fa fa-star-o\'"></uib-rating>\n' +
    '  <hr />\n' +
    '  <p>3. Qual a nota você daria para nosso serviço de entrega?</p>\n' +
    '  <uib-rating ng-model="rating.delivery" max="10" state-on="\'fa fa-star fa-star-filled\'" state-off="\'fa fa-star-o\'"></uib-rating>\n' +
    '  <hr /\n' +
    '  <p>4. Há algo que você não gostou que gostaria de registrar?</p>\n' +
    '  <textarea ng-model="rating.good_comment" rows="4" placeholder="Deixe em branco se você não tiver nenhum comentário"></textarea>\n' +
    '  <hr />\n' +
    '  <p>5. Há algo que você gostou que gostaria de registrar?</p>\n' +
    '  <textarea ng-model="rating.bad_comment" rows="4" placeholder="Deixe em branco se você não tiver nenhum comentário"></textarea>\n' +
    '  </div>\n' +
    '<div class="modal-footer">\n' +
    '  <button class="btn btn-success" ng-click="ctrl.save()">\n' +
    '    <i class="fa fa-pencil"></i>\n' +
    '    Confirmar edição\n' +
    '  </button>\n' +
    '  <button class="btn btn-default" ng-click="ctrl.close()">\n' +
    '    Cancelar\n' +
    '  </button>\n' +
    '</div>');
}]);
})();
