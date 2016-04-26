'use strict';

var app = angular.module('utils.foodio', ['ngStorage', 'constants.foodio']);
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/back-button.html', '<a href="javascript:history.back()" class="btn btn-default">Voltar</a>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/box.html', '<div class="box-container">\n' + '  <div class="box-header" ng-hide="hideHeader">\n' + '    <h2>\n' + '      <i class="fa fa-{{ icon }}" ng-hide="!icon"></i>\n' + '      {{ title }}\n' + '    </h2>\n' + '  </div>\n' + '  <div ng-transclude class="box-content {{ sizeClass }} {{ hideHeader ? \'box-hide-header\' : \'\' }}">\n' + '  </div>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/delete-button.html', '<button class="{{ class || \'btn btn-default btn-xs\' }}">\n' + '  <i class="fa fa-{{ icon || \'trash-o\' }}"></i>\n' + '</button>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/edit-button.html', '<button class="btn btn-warning btn-xs">\n' + '  <i class="fa fa-{{ icon || \'pencil\' }}"></i>\n' + '</button>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/experience-points.html', '<div class="experience-points-container">\n' + '  <div class="total-points"><i class="fa fa-shirtsinbulk"></i>3000 pontos</div>\n' + '  <div class="progress">\n' + '    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">\n' + '      <span class="sr-only">60% Complete</span>\n' + '    </div>\n' + '  </div>\n' + '  <div class="level-container">\n' + '    <div class="current-level">\n' + '      Level 5\n' + '    </div>\n' + '    <div class="next-level">\n' + '      <span>165 pontos para</span>\n' + '      Level 6\n' + '    </div>\n' + '  </div>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/form-group.html', '<div class="form-group" >\n' + '  <div ng-if="!vertical">\n' + '    <label for="{{ id }}" class="col-sm-4 control-label">{{ label }}\n' + '      <span ng-show="required" tooltip="Campo obrigatório" class="required-marker">*</span>\n' + '    </label>\n' + '    <div class="col-sm-8" ng-transclude></div>\n' + '  </div>\n' + '  <div ng-if="vertical">\n' + '    <label for="{{ id }}" class="control-label">{{ label }}\n' + '      <span ng-show="required" tooltip="Campo obrigatório" class="required-marker">*</span>\n' + '    </label>\n' + '    <div ng-transclude></div>\n' + '  </div>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/limit.html', '<p class="help-block">Restando <strong>{{ maxlength - length }}</strong> caracteres</p>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/loading-bar.html', '<div class="loading-bar">\n' + '  <i class="fa fa-refresh fa-spin"></i>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/map.html', '<div class="map-canvas"></div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-address.html', '<div class="modal-header">\n' + '  <h4 class="modal-title" ng-hide="address.id">Adicionar</h4>\n' + '  <h4 class="modal-title" ng-show="address.id">Editar</h4>\n' + '</div>\n' + '<div class="modal-body clearfix">\n' + '  <form name="addressForm" class="form-horizontal" ng-submit="ctrl.submit()">\n' + '    <form-group label="Nome" required="true">\n' + '      <input type="text" tabindex="1" ng-model="address.name" autofocus />\n' + '    </form-group>\n' + '    <form-group label="CEP" required="true">\n' + '      <input type="text" tabindex="2" ng-model="address.zipcode" required mask="99999-999" auto-unmask="true" zipcode zipcode-model="address" />\n' + '    </form-group>\n' + '    <form-group label="Cidade" required="true">\n' + '      <input type="text" tabindex="3" ng-model="address.city.name" disabled required />\n' + '    </form-group>\n' + '    <form-group label="Bairro" required="true">\n' + '      <input type="text" tabindex="4" ng-model="address.neighborhood.name" disabled required />\n' + '    </form-group>\n' + '    <form-group label="Rua" required="true">\n' + '      <input type="text" tabindex="5" ng-model="address.street" disabled required />\n' + '    </form-group>\n' + '    <form-group label="Número" required="true">\n' + '      <input type="text" tabindex="6" ng-model="address.number" required />\n' + '    </form-group>\n' + '    <form-group label="Complemento">\n' + '      <textarea ng-model="address.complement" tabindex="7" rows="3"></textarea>\n' + '    </form-group>\n' + '    <div class="modal-footer">\n' + '      <button class="btn btn-success" loading-spinner>\n' + '        Salvar\n' + '      </button>\n' + '      <button class="btn btn-default" type="button" ng-click="ctrl.close()">Cancelar</button>\n' + '    </div>\n' + '  </form>\n' + '</div>\n' + '');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-chat.html', '<div class="modal-header">\n' + '  <button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="ctrl.close()"><span aria-hidden="true">&times;</span></button>\n' + '  <h4 class="modal-title">Mensagens</h4>\n' + '</div>\n' + '<div class="modal-body">\n' + '  <ul class="list-unstyled" infinite-scroll=\'ctrl.loadMessages()\' infinite-scroll-distance=\'2\'>\n' + '    <li ng-repeat="m in messages | orderBy: \'-id\'">\n' + '      <div class="row">\n' + '        <div class="col-md-2">\n' + '          <img ng-src="{{ m.user.avatar.thumb }}" alt="Avatar" class="img-thumbnail" width="100" height="100"/>\n' + '        </div>\n' + '        <div class="col-md-10">\n' + '          <div class="clearfix">\n' + '            <span ng-show="m.user.id === user.id && m.userable_type === userType" class="message-creator ">Você</span>\n' + '            <span ng-show="m.user.id != user.id || m.userable_type != userType">{{ m.user.name }}</span>\n' + '            <small ng-show="m.created_at">{{ m.created_at }}</small>\n' + '            <small ng-show="!m.created_at" class="message-pending">Enviando...</small>\n' + '            <a ng-show="m.failed" class="message-error" ng-click="ctrl.send()" tooltip-placement="bottom" tooltip="Clique para reenviar">Falha no envio</a>\n' + '          </div>\n' + '          <p>{{ m.content }}</p>\n' + '        </div>\n' + '      </div>\n' + '    </li>\n' + '  </ul>\n' + '  <form ng-submit="ctrl.send()" name="form">\n' + '    <div class="row">\n' + '      <div class="col-md-10">\n' + '        <textarea rows="4" ng-model="message.content" ng-disabled="message.sending" placeholder="Digite sua mensagem" autofocus required ng-maxlength="500" ng-keyup="ctrl.onKeyUp($event)"></textarea>\n' + '      </div>\n' + '      <div class="col-md-2">\n' + '        <button class="btn btn-success btn-block" ng-disabled="message.content.length < 1 || message.sending">\n' + '          <span ng-show="!message.sending">Enviar</span>\n' + '          <span ng-show="message.sending">\n' + '            <i class="fa fa-spinner fa-spin"></i>\n' + '          </span>\n' + '        </button>\n' + '      </div>\n' + '    </div>\n' + '  </form>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-crop.html', '<div class="modal-header">\n' + '  <button type="button" class="close" ng-click="ctrl.close()"><span aria-hidden="true">&times;</span></button>\n' + '  <h4 class="modal-title">Recorte a imagem</h4>\n' + '</div>\n' + '<div class="modal-body">\n' + '  <img ng-src="{{ imgToCrop }}" ng-cropper ng-cropper-options="options" alt="Imagem a ser recortada" ng-cropper-show="showEvent" />\n' + '</div>\n' + '<div class="modal-footer">\n' + '  <button class="btn btn-primary" ng-click="ctrl.crop()" loading-spinner>Salvar</button>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-custom-period.html', '<div class="modal-header">\n' + '  <h4 class="modal-title">Escolher período</h4>\n' + '</div>\n' + '<div class="modal-body clearfix">\n' + '  <div class="row">\n' + '    <div class="col-md-6" ng-click="ctrl.open(\'fromDate\')">\n' + '      <div class="input-group">\n' + '        <input ng-model="period.fromDate" datepicker-options="options" uib-datepicker-popup="dd/MM/yyyy" is-open="status.fromDate" disabled />\n' + '        <div class="input-group-addon">\n' + '          <i class="fa fa-calendar"></i>\n' + '        </div>\n' + '      </div>\n' + '    </div>\n' + '    <div class="col-md-6" ng-click="ctrl.open(\'toDate\')">\n' + '      <div class="input-group">\n' + '        <input ng-model="period.toDate" datepicker-options="options" uib-datepicker-popup="dd/MM/yyyy" is-open="status.toDate" disabled />\n' + '        <div class="input-group-addon">\n' + '          <i class="fa fa-calendar"></i>\n' + '        </div>\n' + '      </div>\n' + '    </div>\n' + '  </div>\n' + '  <hr />\n' + '  <div class="row">\n' + '    <div class="col-md-6">\n' + '      <timepicker ng-model="period.fromTime" readonly-input="true" hour-step="1" minute-step="15" show-meridian="false" prevent-table="true" style="margin: 0 auto;"></timepicker>\n' + '    </div>\n' + '    <div class="col-md-6">\n' + '      <timepicker ng-model="period.toTime" readonly-input="true" hour-step="1" minute-step="15" show-meridian="false" prevent-table="true" style="margin: 0 auto;"></timepicker>\n' + '    </div>\n' + '  </div>\n' + '</div>\n' + '<div class="modal-footer">\n' + '  <button class="btn btn-default" type="button" ng-click="ctrl.close()">Cancelar</button>\n' + '  <button class="btn btn-success" ng-click="ctrl.next()">Próximo</button>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-message.html', '<div class="modal-header">\n' + '  <h4>{{ message.title }}</h4>\n' + '</div>\n' + '<div class="modal-body">\n' + '  <div class="alert alert-info">\n' + '    {{ message.content }}\n' + '  </div>\n' + '</div>\n' + '<div class="modal-footer">\n' + '  <button class="btn btn-default" ng-click="ctrl.close();">\n' + '    Fechar\n' + '  </button>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-print-manager.html', '<div class="modal-header">\n' + '  <h4 class="modal-title">Software de impressão</h4>\n' + '</div>\n' + '<div class="modal-body">\n' + '  <div class="alert alert-danger" ng-show="socket && socket.disconnected">\n' + '    Software de impressão está ativo mas não há conexão\n' + '  </div>\n' + '  <div ng-show="!socket">\n' + '    <div class="alert alert-warning">\n' + '      <p>Software de impressão está inativo.</p>\n' + '      <p>\n' + '        Clique <a href="#" ng-click="ctrl.toggleOptions()">aqui</a>\n' + '        para\n' + '        <span ng-hide="options.show">exibir</span>\n' + '        <span ng-show="options.show">esconder</span>\n' + '        as opções avançadas.\n' + '      </p>\n' + '    </div>\n' + '    <div ng-show="options.show">\n' + '      <hr />\n' + '      <form class="form-horizontal">\n' + '        <form-group label="Nome" required="true">\n' + '          <input type="number" ng-model="options.port" />\n' + '          <p class="help-block">Porta do socket do programa</p>\n' + '        </form-group>\n' + '      </form>\n' + '      </div>\n' + '  </div>\n' + '  <div ng-show="socket.connected">\n' + '    <div class="alert alert-info">\n' + '      Software de impressão está ativo e ouvindo pedidos de impressão\n' + '    </div>\n' + '    <hr />\n' + '    <table>\n' + '    <thead>\n' + '      <tr>\n' + '        <th style="width: 30%;">Nome</th>\n' + '        <th style="width: 15%;">IP</th>\n' + '        <th style="width: 15%;">Porta</th>\n' + '        <th style="width: 15%;">Padrão</th>\n' + '        <th style="width: 15%;">Ações</th>\n' + '      </tr>\n' + '    </thead>\n' + '    <tbody>\n' + '      <tr ng-repeat="p in printers | orderBy: \'order\'" ng-click="ctrl.choosePrinter(p)" ng-class="{ success: printer.id === p.id }">\n' + '        <td>{{ p.name }}</td>\n' + '        <td>{{ p.ip }}</td>\n' + '        <td>{{ p.port }}</td>\n' + '        <td><i class="fa" ng-class="{ \'fa-check\': p.default, \'fa-remove\': !p.default }"></i></td>\n' + '        <td class="table-actions">\n' + '          <button class="btn btn-xs btn-default" uib-tooltip="Impressão de teste" tooltip-placement="top" ng-click="ctrl.print(p, $event);">\n' + '            <i class="fa fa-print"></i>\n' + '          </button>\n' + '        </td>\n' + '      </tr>\n' + '    </tbody>\n' + '  </table>\n' + '  </div>\n' + '</div>\n' + '<div class="modal-footer">\n' + '  <button class="btn btn-success" ng-click="ctrl.connect()" ng-show="!socket">Conectar</button>\n' + '  <button class="btn btn-danger" ng-click="ctrl.disconnect()" ng-show="socket && !choosingPrinter">Desconectar</button>\n' + '  <button class="btn btn-danger" ng-click="ctrl.next()" ng-show="choosingPrinter" ng-disabled="!printer">Escolher</button>\n' + '  <button class="btn btn-default" ng-click="ctrl.close()">Fechar</button>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-product.html', '<div class="modal-header">\n' + '  <button type="button" class="close" data-dismiss="modal" ng-click="ctrl.close()"><span aria-hidden="true">&times;</span></button>\n' + '  <div class="modal-title">\n' + '    <i class="fa fa-shopping-cart"></i>\n' + '    {{ product.name }}\n' + '  </div>\n' + '  <div class="product-total-price">\n' + '    {{ cartItem.total | currency: "R$" }}\n' + '  </div>\n' + '</div>\n' + '\n' + '<div class="modal-body clearfix">\n' + '\n' + '  <aside class="pull-left">\n' + '    <img class="product-image img-thumbnail" ng-src="{{ product.img.medium }}" width="280" height="280" alt="Foto do produto com nome {{ product.name }}">\n' + '    <p class="product-description">\n' + '      <i class="fa fa-shopping-cart"></i>\n' + '      {{ product.name }}\n' + '    </p>\n' + '    <p class="product-description">\n' + '      <i class="fa fa-money"></i>\n' + '      A partir de {{ product.price | currency: "R$" }}\n' + '    </p>\n' + '  </aside>\n' + '\n' + '  <div class="product-options pull-right">\n' + '\n' + '    <label>Descrição:</label>\n' + '    <blockquote ng-show="product.description" ng-bind-html="product.description"></blockquote>\n' + '    <hr />\n' + '    <label for="cart-item-amount">Selecione a quantidade:</label>\n' + '    <select id="cart-item-amount" ng-model="cartItem.amount" ng-options="i as i for i in [1,2,3,4,5,6,7,8,9,10]"></select>\n' + '\n' + '    <hr ng-show="product.addon_categories.length > 0">\n' + '\n' + '    <div ng-repeat="addonCategory in product.addon_categories" class="addon-categories-list">\n' + '\n' + '      <div class="addon-category-name">\n' + '        {{ addonCategory.name }}\n' + '        <small ng-show="!addonCategory.max && !addonCategory.min">Escolha quantos ingredientes desejar</span></small>\n' + '        <small ng-show="!addonCategory.max && addonCategory.min">\n' + '          Escolha pelo menos {{ addonCategory.min }} <span ng-show="addonCategory.min === 1">ingrediente</span><span ng-show="addonCategory.min > 1">ingredientes</span>\n' + '        </small>\n' + '        <small ng-show="addonCategory.max">\n' + '          <span ng-show="addonCategory.max === 1 && addonCategory.min === 1 || addonCategory.max === 1 && !addonCategory.min">Escolha ao menos 1 ingrediente</span>\n' + '          <span ng-show="addonCategory.max > 1 && addonCategory.min >= 1">Escolha entre {{ addonCategory.min }} à {{ addonCategory.max }} ingredientes</span>\n' + '          <span ng-show="addonCategory.max > 1 && !addonCategory.min">Escolha até {{ addonCategory.max }} ingredientes</span>\n' + '        </small>\n' + '      </div>\n' + '\n' + '      <div class="addons-list">\n' + '        <div ng-repeat="addon in addonCategory.addons" class="addon-item">\n' + '          <label ng-if="(addonCategory.max === 1 && addonCategory.min === 1) || (addonCategory.max === 1 && !addonCategory.min) || (!addonCategory.max && addonCategory.min === 1)"\n' + '            ng-disabled="!addon.available">\n' + '            <input type="radio" ng-disabled="!addon.available" ng-value="addon.id"  ng-model="cartItem.customization_fields[addonCategory.id]">\n' + '            {{ addon.name }}\n' + '            <span class="addon-price" ng-show="addon.price > 0 && addon.available">({{ addon.price | currency: "R$" }})</span>\n' + '            <span class="addon-unavailable" ng-show="!addon.available">Ingrediente não disponível</span>\n' + '          </label>\n' + '          <label ng-if="(addonCategory.max > 1 || addonCategory.min > 1) || (!addonCategory.max && !addonCategory.min)"\n' + '            ng-disabled="!addon.available">\n' + '            <input type="checkbox" ng-disabled="!addon.available" ng-model="cartItem.customization_fields[addonCategory.id][addon.id]" ng-init="cartItem.customization_fields[addonCategory.id][addon.id] = cartItem.customization_fields[addonCategory.id][addon.id] && addon.available ? true : false" />\n' + '            {{ addon.name }}\n' + '            <span class="addon-price" ng-show="addon.price > 0 && addon.available">({{ addon.price | currency: "R$" }})</span>\n' + '            <span class="addon-unavailable" ng-show="!addon.available">Ingrediente não disponível</span>\n' + '          </label>\n' + '        </div>\n' + '      </div>\n' + '    </div>\n' + '\n' + '    <hr>\n' + '    <label for="cart-item-note">Deseja fazer alguma observação?</label>\n' + '    <textarea id="cart-item-note" rows="3" ng-model="cartItem.note"></textarea>\n' + '    <limit maxlength="150" model="cartItem.note"></limit>\n' + '  </div>\n' + '</div>\n' + '\n' + '<div class="modal-footer">\n' + '  <button class="btn btn-success" ng-click="ctrl.add()" ng-show="!isEditing">\n' + '    <i class="fa fa-plus-square"></i>\n' + '    Adicionar\n' + '  </button>\n' + '  <button class="btn btn-success" ng-click="ctrl.add()" ng-show="isEditing">\n' + '    <i class="fa fa-pencil"></i>\n' + '    Confirmar edição\n' + '  </button>\n' + '  <button class="btn btn-default" ng-click="ctrl.close()">\n' + '    Cancelar\n' + '  </button>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-rating.html', '<div class="modal-header">\n' + '  <h4 class="modal-title">\n' + '    Avaliar pedido\n' + '  </h4>\n' + '</div>\n' + '<div class="modal-body">\n' + '  <p>1. Em uma escala de 1 a 10, sendo 1 altamente improvavel e 10 altamente provavel, qual a probabilidade de você indicar o speedy food a um amigo(a)?</p>\n' + '  <uib-rating ng-model="rating.score" max="10" state-on="\'fa fa-star fa-star-filled\'" state-off="\'fa fa-star-o\'"></uib-rating>\n' + '  <hr />\n' + '  <p>2. Qual a nota você daria para qualidade dos nossos produtos?</p>\n' + '  <uib-rating ng-model="rating.quality" max="10" state-on="\'fa fa-star fa-star-filled\'" state-off="\'fa fa-star-o\'"></uib-rating>\n' + '  <hr />\n' + '  <p>3. Qual a nota você daria para nosso serviço de entrega?</p>\n' + '  <uib-rating ng-model="rating.delivery" max="10" state-on="\'fa fa-star fa-star-filled\'" state-off="\'fa fa-star-o\'"></uib-rating>\n' + '  <hr /\n' + '  <p>4. Há algo que você não gostou que gostaria de registrar?</p>\n' + '  <textarea ng-model="rating.good_comment" rows="4" placeholder="Deixe em branco se você não tiver nenhum comentário"></textarea>\n' + '  <hr />\n' + '  <p>5. Há algo que você gostou que gostaria de registrar?</p>\n' + '  <textarea ng-model="rating.bad_comment" rows="4" placeholder="Deixe em branco se você não tiver nenhum comentário"></textarea>\n' + '  </div>\n' + '<div class="modal-footer">\n' + '  <button class="btn btn-success" ng-click="ctrl.save()">\n' + '    <i class="fa fa-pencil"></i>\n' + '    Confirmar edição\n' + '  </button>\n' + '  <button class="btn btn-default" ng-click="ctrl.close()">\n' + '    Cancelar\n' + '  </button>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/no-results.html', '<div class="row no-results">\n' + '  <div ng-class="{ \'col-md-4\': icon, \'hide\': !icon }">\n' + '    <i ng-hide="!icon" class="fa fa-{{ icon }}"></i>\n' + '  </div>\n' + '  <div ng-class="{ \'col-md-8\': icon, \'col-md-12\': !icon }">\n' + '    <p>{{ text }}</p>\n' + '  </div>\n' + '</div>\n' + '');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/print-button.html', '<button ng-disabled="!$root.socket || $root.socket.disconnected">\n' + '  <i class="fa fa-{{ icon }}"></i>\n' + '</button>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/submit-form.html', '<div class="form-group form-submit">\n' + '  <div class="col-lg-offset-4 col-lg-8">\n' + '    <button class="btn btn-success" tabindex="20" loading-spinner>\n' + '      {{ text || "Salvar" }}\n' + '    </button>\n' + '    <div ng-transclude style="display: inline-block;"></div>\n' + '  </div>\n' + '</div>\n' + '\n' + '');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('utils.foodio');
  } catch (e) {
    module = angular.module('utils.foodio', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/tik-tak.html', '<span>\n' + '  {{ value }}\n' + '</span>');
  }]);
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ctrl = function ctrl($scope, $uibModalInstance, addressResolved, onSubmitResolved) {

  return new ((function () {
    function ctrl() {
      _classCallCheck(this, ctrl);

      $scope.address = addressResolved;
      $scope.onSubmit = onSubmitResolved;
    }

    _createClass(ctrl, [{
      key: 'submit',
      value: function submit() {
        var method = this._getMethod();

        $scope.onSubmit({ address: $scope.address, method: method }).then(function (response) {
          $uibModalInstance.close({ address: response.data, method: method });
        });
      }
    }, {
      key: 'close',
      value: function close() {
        $uibModalInstance.dismiss('close');
      }
    }, {
      key: '_getMethod',
      value: function _getMethod() {
        return $scope.address.id ? 'update' : 'create';
      }
    }]);

    return ctrl;
  })())();
};

ctrl.$inject = ['$scope', '$uibModalInstance', 'addressResolved', 'onSubmitResolved'];
angular.module('utils.foodio').controller('ModalAddressCtrl', ctrl);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ctrl = function ctrl($scope, $uibModalInstance, hint, pusher, chatMessageApi, chatResolved, userResolved, userTypeResolved, onScrollResolved) {

  return new ((function () {
    function ctrl() {
      _classCallCheck(this, ctrl);

      $scope.chat = chatResolved;
      $scope.messagesResponse = $scope.chat.messages;
      $scope.messages = $scope.messagesResponse.data;
      $scope.userType = userTypeResolved;
      $scope.onScroll = onScrollResolved;

      // Usuário que está no chat
      $scope.user = userResolved;

      $scope.message = {
        content: '',
        sending: false
      };

      // Ouve mensagens que chegam de outras pessoas no chat
      pusher.subscribe('private-chat-' + $scope.chat.id).bind('message:created', function (response) {
        var message = response.data;

        // Só ouve se mensagem for criada por outra pessoa
        if (message.user.id === $scope.user.id && $scope.userType === message.userable_type) {
          return false;
        }

        $scope.messages.push(message);
        hint.success(message.content, { title: message.user.name + ' diz:' });
      });
    }

    // Envia mensagem

    _createClass(ctrl, [{
      key: 'onKeyUp',
      value: function onKeyUp($event) {
        if ($event.keyCode == 13 && !$event.shiftKey) {
          return this.send();
        }
      }
    }, {
      key: 'send',
      value: function send() {
        var _this = this;

        // Notifica view que mensagem está sendo enviada
        $scope.message.sending = true;

        // Grava referencia de variável para posteriormente editar a mensagem enviada, com
        // dados do horário que foi criado, por exemplo
        var index = $scope.messages.length;

        // Adiciona mensagem no scope
        // Fica com status 'enviando' até ser confirmado o envio
        $scope.messages.push({
          content: $scope.message.content,
          user: $scope.user
        });

        chatMessageApi.create($scope.chat, $scope.message).then(function (response) {

          // Altera scope
          $scope.messages[index] = response.data;
          _this._resetMessage();
        }, function () {
          // Houve erro no envio
        });
      }
    }, {
      key: 'onScroll',
      value: function onScroll() {
        $scope.onScroll($scope.chat).then(function (response) {
          $scope.chat = response.data;
          $scope.messagesResponse = $scope.chat.messages;
          $scope.messages = $scope.messagesResponse.data;
        });
      }
    }, {
      key: 'close',
      value: function close() {
        $uibModalInstance.dismiss('close');
      }
    }, {
      key: '_resetMessage',
      value: function _resetMessage() {
        $scope.message = {
          content: '',
          sending: false
        };
      }
    }]);

    return ctrl;
  })())();
};

ctrl.$inject = ['$scope', '$uibModalInstance', 'hint', 'pusher', 'chatMessageApi', 'chatResolved', 'userResolved', 'userTypeResolved'];
angular.module('utils.foodio').controller('ModalChatCtrl', ctrl);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ctrl = function ctrl($scope, $uibModalInstance, $timeout, Cropper, imgUrlResolved, fileResolved, scopeResolved) {

  return new ((function () {
    function Ctrl() {
      var _this = this;

      _classCallCheck(this, Ctrl);

      $scope.imgToCrop = imgUrlResolved;

      this.fileData = null;
      this.file = fileResolved;
      this.scope = scopeResolved;

      $scope.options = {
        maximize: true,
        movable: false,
        rotatable: false,
        zoomable: false,
        mouseWheelZoom: false,
        touchDragZoom: false,
        aspectRatio: 2 / 2,
        crop: function crop(newData) {
          _this.fileData = newData;
        }
      };

      $scope.showEvent = 'show';

      $timeout(function () {
        return $scope.$broadcast($scope.showEvent);
      });
    }

    _createClass(Ctrl, [{
      key: 'close',
      value: function close() {
        $uibModalInstance.dismiss('close');
      }
    }, {
      key: 'crop',
      value: function crop() {
        var _this2 = this;

        return Cropper.crop(this.file, this.fileData).then(function (blob) {
          blob.lastModifiedDate = new Date();
          blob.name = _this2.file.name;

          $timeout(function () {
            _this2.scope.model = [blob];
          });

          _this2.close();
        });
      }
    }]);

    return Ctrl;
  })())();
};

ctrl.$inject = ['$scope', '$uibModalInstance', '$timeout', 'Cropper', 'imgUrlResolved', 'fileResolved', 'scopeResolved'];
angular.module('utils.foodio').controller('ModalCropController', ctrl);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ctrl = function ctrl($scope, $uibModalInstance, $filter) {

  return new ((function () {
    function ModalCustomPeriodCtrl() {
      _classCallCheck(this, ModalCustomPeriodCtrl);

      var date = $filter('date')(new Date(), "dd/MM/yyyy");

      $scope.period = { fromDate: date, toDate: date, fromTime: new Date().setHours(0, 0, 0, 0), toTime: new Date().setHours(23, 59, 59, 0) };
      $scope.status = { fromDate: false, toDate: false };
      $scope.options = { showWeeks: false };
    }

    // Abre o datepicker

    _createClass(ModalCustomPeriodCtrl, [{
      key: 'open',
      value: function open(name) {
        $scope.status[name] = !$scope.status[name];
      }

      // Fecha o modal e envia os dados selecionados
    }, {
      key: 'next',
      value: function next() {
        $uibModalInstance.close($scope.period);
      }

      // Fecha o modal sem enviar os dados selecionados
    }, {
      key: 'close',
      value: function close() {
        $uibModalInstance.dismiss('close');
      }
    }]);

    return ModalCustomPeriodCtrl;
  })())();
};

ctrl.$inject = ['$scope', '$uibModalInstance', '$filter'];
angular.module('utils.foodio').controller('ModalCustomPeriodCtrl', ctrl);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ctrl = function ctrl($scope, $uibModalInstance, constants, messageResolved) {

  return new ((function () {
    function Ctrl() {
      _classCallCheck(this, Ctrl);

      $scope.message = {
        title: messageResolved.title || 'Atenção',
        content: messageResolved.content || ''
      };

      new Audio(constants['static'] + '/notifications/audios/success.mp3').play();
    }

    _createClass(Ctrl, [{
      key: 'close',
      value: function close() {
        $uibModalInstance.dismiss('close');
      }
    }]);

    return Ctrl;
  })())();
};

ctrl.$inject = ['$scope', '$uibModalInstance', 'constants', 'messageResolved'];
angular.module('utils.foodio').controller('ModalMessageCtrl', ctrl);
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModalPrintManagerController = function ModalPrintManagerController($scope, $rootScope, $uibModal, $uibModalInstance, printManager, printersResolved, printerChooseResolved) {

  return new ((function () {
    function Ctrl() {
      _classCallCheck(this, Ctrl);

      $scope.options = {
        show: false,
        port: 7333
      };

      $scope.printers = printersResolved;
      $scope.choosingPrinter = printerChooseResolved;
      $scope.printer = null;
    }

    // @toggleOptions
    // @description Exibe / esconde opções avançadas

    _createClass(Ctrl, [{
      key: "toggleOptions",
      value: function toggleOptions() {
        $scope.options.show = !$scope.options.show;
      }

      // @name connect
      // @description Connecta com o software
    }, {
      key: "connect",
      value: function connect() {
        $scope.options.printers = angular.copy($scope.printers);
        printManager.connect($scope.options).then(this._afterConnect.bind(this));
      }

      // @name connect
      // @description Desconecta do software
    }, {
      key: "disconnect",
      value: function disconnect() {
        printManager.disconnect().then(this._afterDisconnect.bind(this));
      }
    }, {
      key: "_afterConnect",
      value: function _afterConnect(socket) {
        $rootScope.socket = socket;
      }
    }, {
      key: "_afterDisconnect",
      value: function _afterDisconnect(socket) {
        $rootScope.socket = null;
      }
    }, {
      key: "choosePrinter",
      value: function choosePrinter(printer) {
        if ($scope.choosingPrinter) {

          if ($scope.printer && printer.id === $scope.printer.id) {
            return $scope.printer = null;
          }

          $scope.printer = printer;
        }
      }
    }, {
      key: "next",
      value: function next() {
        $uibModalInstance.close({ printer: $scope.printer });
      }

      // @name print
      // @description Realiza impressão de teste
    }, {
      key: "print",
      value: function print(printer, $event) {
        $event.stopPropagation();
        printManager.print({ layout: 'test', printer: printer });
      }

      // @name close
      // @description Fecha modal
    }, {
      key: "close",
      value: function close() {
        $uibModalInstance.close();
      }
    }]);

    return Ctrl;
  })())();
};

ModalPrintManagerController.$inject = ["$scope", "$rootScope", "$uibModal", "$uibModalInstance", "printManager", "printersResolved", "printerChooseResolved"];
angular.module('utils.foodio').controller('ModalPrintManagerController', ModalPrintManagerController);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ctrl = function ctrl($scope, $uibModalInstance, TempCart, cartItemApi, cartResolved, storeProductResolved, cartItemResolved) {

  return new ((function () {
    function ModalProductCustomizationCtrl() {
      _classCallCheck(this, ModalProductCustomizationCtrl);

      $scope.product = storeProductResolved;
      $scope.cart = cartResolved;
      $scope.cartItem = cartItemResolved;

      new TempCart($scope, cartItemResolved);
    }

    _createClass(ModalProductCustomizationCtrl, [{
      key: 'add',
      value: function add() {
        cartItemApi[this._getCartMethod()]($scope.cartItem, { cart_id: $scope.cart.id }).then(function (cart) {
          $uibModalInstance.close({ cart: cart.plain() });
        });
      }
    }, {
      key: 'close',
      value: function close() {
        $uibModalInstance.dismiss('close');
      }
    }, {
      key: '_getCartMethod',
      value: function _getCartMethod() {
        return $scope.cartItem.id ? 'update' : 'create';
      }
    }]);

    return ModalProductCustomizationCtrl;
  })())();
};

ctrl.$inject = ['$scope', '$uibModalInstance', 'TempCart', 'cartItemApi', 'cartResolved', 'storeProductResolved', 'cartItemResolved'];
angular.module('utils.foodio').controller('ModalProductCtrl', ctrl);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ctrl = function ctrl($scope, $uibModalInstance) {

  return new ((function () {
    function ModalRatingCtrl() {
      _classCallCheck(this, ModalRatingCtrl);

      $scope.rating = {};
    }

    _createClass(ModalRatingCtrl, [{
      key: 'save',
      value: function save() {
        $uibModalInstance.close({ rating: rating.plain() });
      }
    }, {
      key: 'close',
      value: function close() {
        $uibModalInstance.dismiss('close');
      }
    }]);

    return ModalRatingCtrl;
  })())();
};

ctrl.$inject = ['$scope', '$uibModalInstance'];
angular.module('utils.foodio').controller('ModalRatingCtrl', ctrl);
'use strict';

var directive = function directive($window) {
  return {
    restrict: 'A',
    link: function link($scope, $element, attrs) {
      var win = angular.element($window);
      var topOffset = $element[0].offsetTop;

      var width = $element.width();
      $element.css('width', width);

      function affixElement() {
        if ($window.pageYOffset > attrs.affixer) {
          $element.css('position', 'fixed');
          $element.css('top', '0px');
        } else {
          $element.css('position', '');
          $element.css('top', '');
        }
      }

      $scope.$on('$routeChangeStart', function () {
        win.unbind('scroll', affixElement);
      });

      win.bind('scroll', affixElement);
    }
  };
};

directive.$inject = ['$window'];
angular.module('utils.foodio').directive('affixed', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: $templateCache.get('/templates/box.html'),
    scope: {
      title: '@',
      icon: '@',
      containerClass: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('utils.foodio').directive('box', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/delete-button.html'),
    scope: {
      'class': '@',
      icon: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('utils.foodio').directive('deleteButton', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/edit-button.html'),
    scope: {
      'class': '@',
      icon: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('utils.foodio').directive('editButton', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    require: '^form',
    transclude: true,
    replace: true,
    template: $templateCache.get('/templates/form-group.html'),
    priority: 10000,
    scope: {
      label: '@',
      vertical: '@',
      required: '@'
    },
    link: function link(scope, $el, attrs) {
      scope.id = 'field-' + Math.floor(Math.random() * 50000 + 1);
      $el.find('input, textarea').attr('id', scope.id);
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module("utils.foodio").directive('formGroup', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      $el.append('<input type="text" style="display:none" />').append('<input type="password" style="display:none" />');
    }
  };
};

angular.module('utils.foodio').directive('form', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      var el = $el[0];

      if (el.type !== 'radio' && el.type !== 'checkbox') {
        el.classList.add('form-control');
      }
    }
  };
};

angular.module('utils.foodio').directive('input', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    template: $templateCache.get('/templates/limit.html'),
    replace: true,
    scope: {
      maxlength: '=',
      model: '='
    },
    link: function link(scope, $el, attrs) {
      scope.maxlength = parseInt(scope.maxlength, 10);

      if (_.isNaN(scope.maxlength) || !_.isNumber(scope.maxlength)) {
        throw new Error('Valor do atributo maxlength da directiva limit deve ser numeral.');
      }

      // Verifica se o elemento antes da directiva é um input
      var $textarea = $el.prev();
      var type = $textarea.get(0).type;

      if (type !== 'textarea') {
        throw new Error('Elemento antes da directiva limit deve ser um textarea');
      }

      // Adiciona atributo maxlength no HTML para previnir de usuário digitar um valor com mais de 300 carácteres
      $textarea.attr('maxlength', scope.maxlength);

      // Usamos o valor length para lidar com o tamanho de chars do textarea
      scope.length = 0;
      scope.$watch('model', function (message) {
        scope.length = message ? message.length : 0;
      });
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('utils.foodio').directive('limit', directive);
'use strict';

var directive = function directive($compile) {
  return {
    restrict: 'A',
    link: function link(scope, $el, attrs) {
      attrs.$set('ngDisabled', 'withLoader.inAction');
      $el.prepend('<i class="fa fa-circle-o-notch fa-spin with-loader hide"></i> ');

      $el.removeAttr('loading-spinner');

      $compile($el)(scope);
    }
  };
};

directive.$inject = ['$compile'];
angular.module('utils.foodio').directive('loadingSpinner', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    template: $templateCache.get('/templates/map.html'),
    replace: true,
    scope: {
      latitude: '=',
      longitude: '=',
      scrollWheel: '=',
      zoom: '=',
      markers: '=',
      route: '=',
      disableButtons: '='
    },
    link: function link(scope, $el, attrs) {
      var markers = [];

      scope.$watch('[latitude, longitude, markers]', function () {
        scope.map ? reset() : initialize();
      }, true);

      var initialize = function initialize() {
        if (!scope.latitude || !scope.longitude) {
          return false;
        }

        scope.map = new GMaps({
          div: $el.get(0),
          lat: scope.latitude,
          lng: scope.longitude,
          zoom: scope.zoom || 15,
          scrollwheel: scope.scrollWheel || false,
          disableDefaultUI: scope.disableButtons || false
        });

        if (scope.markers) {
          addMarkers();
        }

        if (scope.route) {
          drawRoute();
        }
      };

      var addMarkers = function addMarkers() {
        for (var i in markers) {
          var marker = markers[i];
          marker.setMap(null);
        }

        markers = [];

        if (!angular.isArray(scope.markers)) {
          throw new Error('Markers must be an array');
        }

        var _loop = function (i) {
          var m = scope.markers[i];

          if (!m.latitude || !m.longitude) {
            throw new Error('Marker must have a latitude and longitude');
          }

          var marker = scope.map.addMarker({
            lat: m.latitude,
            lng: m.longitude,
            infoWindow: m.title ? { content: '<p>' + m.title + '</p>' } : null,
            draggable: angular.isFunction(m.onDrag) ? true : false
          });

          if (m.animate) {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }

          if (angular.isFunction(m.onDrag)) {
            google.maps.event.addListener(marker, 'dragend', function (event) {
              marker.onDrag({ latitude: event.latLng.lat(), longitude: event.latLng.lng() });
            });
          }

          markers.push(marker);
        };

        for (var i in scope.markers) {
          _loop(i);
        }
      };

      var drawRoute = function drawRoute() {
        if (!scope.route.destination || !scope.route.origin) {
          throw new Error('Route must have a destination and a origin');
        }

        scope.map.drawRoute({
          destination: [scope.route.destination.latitude, scope.route.destination.longitude],
          origin: [scope.route.origin.latitude, scope.route.origin.longitude],
          travelMode: 'driving',
          strokeColor: '#DD390D',
          strokeOpacity: 0.6,
          strokeWeight: 6
        });
      };

      var reset = function reset() {
        if (scope.markers) {
          addMarkers();
        }

        var position = new google.maps.LatLng(scope.latitude, scope.longitude);
        scope.map.panTo(position);
      };
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('utils.foodio').directive('map', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'A',
    link: function link(scope, $el, attrs) {
      if (attrs.mask === 'phone') {
        return $el.inputmask('(99) 9999-9999[9]');
      }

      if (attrs.mask === 'date') {
        return $el.inputmask('99/99/9999');
      }

      if (attrs.mask === 'zipcode') {
        return $el.inputmask('99999-999', { autoUnmask: true });
      }

      $el.inputmask(attrs.mask, { autoUnmask: attrs.autoUnmask || false });
    }
  };
};

angular.module('utils.foodio').directive('mask', directive);
'use strict';

var directive = function directive($uibModal, $templateCache, $parse, $timeout, Cropper) {
  return {
    restrict: 'A',
    scope: false,
    require: 'ngModel',
    scope: {
      model: '=ngModel'
    },
    link: function link(scope, $el, attrs, ngModel) {

      if ($el.get(0).type.toLowerCase() !== 'file') {
        return false;
      }

      $el.on('change', function (e) {
        var file = $el.get(0).files[0];
        var data = null;
        var blob = null;

        return Cropper.encode(blob = file).then(function (url) {
          return $uibModal.open({
            template: $templateCache.get('/templates/modal-crop.html'),
            windowClass: 'modal-crop',
            controller: 'ModalCropController as ctrl',
            resolve: {
              imgUrlResolved: function imgUrlResolved() {
                return url;
              },
              fileResolved: function fileResolved() {
                return file;
              },
              scopeResolved: function scopeResolved() {
                return scope;
              }
            }
          });
        });
      });
    }
  };
};

directive.$inject = ['$uibModal', '$templateCache', '$parse', '$timeout', 'Cropper'];
angular.module("utils.foodio").directive('modalCrop', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/no-results.html'),
    scope: {
      text: '@',
      icon: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('utils.foodio').directive('noResults', directive);
'use strict';

var directive = function directive($rootScope, $templateCache, printManager) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/print-button.html'),
    scope: {
      icon: '@',
      layout: '@',
      printData: '=',
      printDataKey: '@'
    },
    link: function link(scope, el, attrs) {
      el.on('click', function (e) {
        e.stopPropagation();

        if ($rootScope.socket && $rootScope.socket.connected) {
          var data = {};
          data[scope.printDataKey] = scope.printData;
          printManager.print({ layout: scope.layout, data: data });
        }
      });
    }
  };
};

directive.$inject = ['$rootScope', '$templateCache', 'printManager'];
angular.module('utils.foodio').directive('printButton', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      $el[0].classList.add('form-control');
    }
  };
};

angular.module('utils.foodio').directive('select', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function link(scope, $el, attrs, ngModel) {
      if ($el.get(0).type === 'number') {
        ngModel.$parsers.push(function (value) {
          if (value) return value.toString();
        });

        ngModel.$formatters.push(function (value) {
          if (value) return parseFloat(value, 10);
        });
      }
    }
  };
};

angular.module('utils.foodio').directive('step', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    template: $templateCache.get('/templates/submit-form.html'),
    replace: true,
    transclude: true,
    require: '^form',
    scope: {
      text: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('utils.foodio').directive('submitForm', directive);
"use strict";

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      $el.addClass("table table-hover table-striped").wrap("<div class='table-responsive'></div>");
    }
  };
};

angular.module('utils.foodio').directive('table', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      var el = $el[0];
      el.classList.add('form-control');
    }
  };
};

angular.module('utils.foodio').directive('textarea', directive);
'use strict';

var directive = function directive($templateCache, $interval) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/tik-tak.html'),
    scope: {
      interval: '@',
      value: '=',
      operator: '@'
    },
    link: function link(scope, $el, attrs) {
      var operator = scope.operator && (scope.operator == '+' || scope.operator == '-') ? scope.operator : '-';

      var operation = {
        '+': function _(a, b) {
          return parseFloat(a) + parseFloat(b);
        },
        '-': function _(a, b) {
          return parseFloat(a) - parseFloat(b);
        }
      };

      $interval(function () {
        scope.value = operation[operator](scope.value, 1);
      }, scope.interval);
    }
  };
};

directive.$inject = ['$templateCache', '$interval'];
angular.module('utils.foodio').directive('tikTak', directive);
'use strict';

var directive = function directive(zipcodeApi) {
  return {
    restrict: 'A',
    scope: {
      zipcode: '&ngModel',
      model: '=zipcodeModel'
    },
    link: function link(scope, $el, attrs) {
      var _zipcode = null;

      scope.$watch(scope.zipcode, function (value, oldValue) {
        if (!value) return false;
        if (value.length !== 8) return false;
        if (value === oldValue) return false;
        if (_zipcode === value) return false;

        _zipcode = value;

        var number = scope.model.number ? scope.model.number : null;

        zipcodeApi.fetch({ zipcode: _zipcode, number: number }).then(function (response) {
          var data = response.data;

          scope.model.latitude = data.latitude;
          scope.model.longitude = data.longitude;
          scope.model.neighborhood = data.neighborhood;
          scope.model.city = data.city;
          scope.model.street = data.street;
          scope.model.city_id = data.city.id;
          scope.model.neighborhood_id = data.neighborhood.id;

          $el.parents('.form-group').siblings().find("input[ng-model='address.number']").focus();
        });
      });
    }
  };
};

directive.$inject = ['zipcodeApi'];
angular.module('utils.foodio').directive('zipcode', directive);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var StoreCallbacks = function StoreCallbacks($q) {
  return (function () {
    function StoreCallbacks(store) {
      _classCallCheck(this, StoreCallbacks);

      if (store) this.setStore(store);
      return this;
    }

    _createClass(StoreCallbacks, [{
      key: 'setStore',
      value: function setStore(store) {
        this.store = store;
      }
    }, {
      key: 'getDiffFromNow',
      value: function getDiffFromNow(reference) {
        return moment(reference).diff(moment(), 'seconds');
      }
    }, {
      key: 'toOpen',
      value: function toOpen() {
        var _this = this;

        return $q(function (resolve, reject) {
          if (!_this.store.opening_time) {
            return reject();
          }

          return resolve({ event: 'toOpen', seconds: _this.getDiffFromNow(_this.store.opening_time) });
        });
      }
    }, {
      key: 'toClose',
      value: function toClose() {
        var _this2 = this;

        return $q(function (resolve, reject) {
          if (!_this2.store.closing_time) {
            return reject();
          }

          return resolve({ event: 'toClose', seconds: _this2.getDiffFromNow(_this2.store.closing_time) });
        });
      }
    }]);

    return StoreCallbacks;
  })();
};

StoreCallbacks.$inject = ['$q'];
angular.module('utils.foodio').factory('StoreCallbacks', StoreCallbacks);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var hint = function hint($timeout, $window, toaster, constants) {

  return new ((function () {
    function Hint() {
      _classCallCheck(this, Hint);

      this.notifications = [];
      this.timeout = 5000;
      this.notification = $window.Notification || $window.mozNotification || $window.webkitNotification;

      if (!this.notification) {
        return false;
      }

      this.notification.requestPermission();
    }

    _createClass(Hint, [{
      key: 'success',
      value: function success(message) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        this._notify('success', 'Sucesso :)', message, options);
      }
    }, {
      key: 'error',
      value: function error(message) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        this._notify('error', 'Ops...', message, options);
      }
    }, {
      key: 'info',
      value: function info(message) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        this._notify('info', 'Atenção', message, options);
      }
    }, {
      key: '_notify',
      value: function _notify(type, title, message, options) {
        var _this = this;

        if (options.title) {
          title = options.title;
        }

        if (!options.timeout) {
          options.timeout = this.timeout;
        }

        if (!options.autoClose) {
          options.autoClose = true;
        }

        // Toca audio
        var audio = new Audio(constants['static'] + '/notifications/audios/' + type + '.mp3').play();

        if (!message) {
          return false;
        }

        if (this.notification.permission === 'granted') {

          var settings = {
            body: message,
            icon: constants['static'] + '/notifications/icons/' + type + '.png'
          };

          // Só adiciona um hint se não houver nenhum hint com o mesmo conteudi
          if (!this._hasMessage(settings.body)) {
            var _notification = new this.notification(title, settings);
            this.notifications.push(_notification);

            if (options.autoClose) {
              $timeout(function () {

                // Acha posicão da notificação no array
                var index = _this.notifications.indexOf(_notification);
                _notification = _this.notifications[index];

                // Força fechamento
                _notification.close();

                // Remove do array
                _this.notifications.splice(index, 1);
              }, options.timeout);
            }
          }
        } else {
          toaster.pop({
            type: type,
            title: title,
            body: message,
            timeout: options.timeout
          });
        }
      }
    }, {
      key: '_hasMessage',
      value: function _hasMessage(message) {
        var hasMessage = false;

        angular.forEach(this.notifications, function (notification) {
          if (notification.body === message) {
            hasMessage = true;
          }
        });

        return hasMessage;
      }
    }, {
      key: '_randonNumber',
      value: function _randonNumber() {
        return Math.floor(Math.random() * (99999999 - 1 + 1)) + 1;
      }
    }]);

    return Hint;
  })())();
};

hint.$inject = ['$timeout', '$window', 'toaster', 'constants'];
angular.module('utils.foodio').factory('hint', hint);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var httpConfig = function httpConfig($httpProvider) {
  return $httpProvider.interceptors.push("httpHintInterceptor");
};

httpConfig.$inject = ['$httpProvider'];

var httpHintInterceptor = function httpHintInterceptor($q, $window, $rootScope) {
  return {
    request: function request(config) {
      config.timeout = 20000;
      return config || $q.when(config);
    },
    response: function response(_response) {
      return _response || $q.when(_response);
    },
    responseError: function responseError(response) {
      $rootScope.$emit('request:end', {
        error: true
      });
      $rootScope.$emit('request:error', response.data.error);
      return $q.reject(response);
    }
  };
};

httpHintInterceptor.$inject = ['$q', '$window', '$rootScope'];
angular.module("utils.foodio").config(httpConfig).factory("httpHintInterceptor", httpHintInterceptor);

var RestangularInterceptors = function RestangularInterceptors(Restangular, $rootScope) {
  return new function RestangularInterceptors() {
    _classCallCheck(this, RestangularInterceptors);

    Restangular.addRequestInterceptor(function (element) {
      $rootScope.$emit('request:start');

      $('.with-loader').removeClass('hide');
      $rootScope.withLoader = { inAction: true };

      return element;
    });

    Restangular.addResponseInterceptor(function (data) {
      $rootScope.$emit('request:end');

      $('.with-loader').addClass('hide');
      $rootScope.withLoader = { inAction: false };

      return data;
    });
  }();
};

RestangularInterceptors.$inject = ['Restangular', '$rootScope'];
angular.module('utils.foodio').factory('RestangularInterceptors', RestangularInterceptors);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var HttpToken = function HttpToken($q, $state, $http, storage) {

  return (function () {
    function HttpToken(userKey) {
      _classCallCheck(this, HttpToken);

      this._setUserKey(userKey);
      return this;
    }

    _createClass(HttpToken, [{
      key: 'initialize',
      value: function initialize() {
        var _this = this;

        return $q(function (resolve, reject) {
          return _this.get().then(function (user) {
            if (!user) return reject();

            _this.set(user).then(function (user) {
              resolve(user);
            });
          });
        });
      }
    }, {
      key: 'get',
      value: function get() {
        return storage.get('current' + this.key).then(function (currentUser) {
          return currentUser;
        });
      }
    }, {
      key: 'set',
      value: function set(user) {
        var _this2 = this;

        return $q(function (resolve, reject) {
          $http.defaults.headers.common['X-' + _this2.key + '-Email'] = user.email;
          $http.defaults.headers.common['X-' + _this2.key + '-Token'] = user.authentication_token;

          storage.set('current' + _this2.key, user);

          resolve(_this2.get());
        });
      }
    }, {
      key: 'remove',
      value: function remove() {
        var _this3 = this;

        return $q(function (resolve, reject) {
          return storage.remove('current' + _this3.key).then(function () {
            delete $http.defaults.headers.common['X-' + _this3.key + '-Email'];
            delete $http.defaults.headers.common['X-' + _this3.key + '-Token'];
            resolve();
          });
        });
      }
    }, {
      key: '_setUserKey',
      value: function _setUserKey() {
        var key = arguments.length <= 0 || arguments[0] === undefined ? 'Employee' : arguments[0];

        if (key !== 'Employee' && key !== 'Costumer') {
          throw new Error('Chave para uso do serviço HttpToken deve ter os valores Employee ou Costumer');
        }
        this.key = key;
      }
    }]);

    return HttpToken;
  })();
};

HttpToken.$inject = ['$q', '$state', '$http', 'storage'];
angular.module('utils.foodio').factory('HttpToken', HttpToken);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalAddress = function modalAddress($uibModal, $templateCache) {

  return new ((function () {
    function ModalAddress() {
      _classCallCheck(this, ModalAddress);
    }

    _createClass(ModalAddress, [{
      key: 'open',
      value: function open() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        if (!angular.isObject(params)) {
          throw new Error('Modal Address params must be an object!');
        }

        if (!params.onSubmit || !angular.isFunction(params.onSubmit)) {
          throw new Error('Modal Address Factory must have onSubmit function!');
        }

        return $uibModal.open({
          template: $templateCache.get('/templates/modal-address.html'),
          controller: 'ModalAddressCtrl as ctrl',
          windowClass: 'modal-address',
          resolve: {
            addressResolved: function addressResolved() {
              return params.address;
            },
            onSubmitResolved: function onSubmitResolved() {
              return params.onSubmit;
            }
          }
        });
      }
    }]);

    return ModalAddress;
  })())();
};

modalAddress.$inject = ['$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('modalAddress', modalAddress);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modal = function modal($uibModal, $templateCache) {
  return new ((function () {
    function Modal() {
      _classCallCheck(this, Modal);
    }

    _createClass(Modal, [{
      key: 'open',
      value: function open() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return $uibModal.open({
          template: $templateCache.get('/templates/modal-chat.html'),
          controller: 'ModalChatCtrl as ctrl',
          windowClass: 'modal-chat',
          resolve: {
            onScrollResolved: function onScrollResolved() {
              return params.onScroll;
            },
            chatResolved: function chatResolved() {
              return params.chat;
            },
            userResolved: function userResolved() {
              return params.user;
            },
            userTypeResolved: function userTypeResolved() {
              var userType = params.userType;

              if (userType !== 'Costumer' && userType !== 'Employee') {
                userType = 'Costumer';
              }

              return userType;
            }
          }
        });
      }
    }]);

    return Modal;
  })())();
};

modal.$inject = ['$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('modalChat', modal);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalCustomPeriod = function modalCustomPeriod($uibModal, $templateCache) {
  return new ((function () {
    function ModalCustomPeriod() {
      _classCallCheck(this, ModalCustomPeriod);
    }

    _createClass(ModalCustomPeriod, [{
      key: 'open',
      value: function open() {
        return $uibModal.open({
          template: $templateCache.get('/templates/modal-custom-period.html'),
          controller: 'ModalCustomPeriodCtrl as ctrl',
          windowClass: 'modal-custom-period'
        });
      }
    }]);

    return ModalCustomPeriod;
  })())();
};

modalCustomPeriod.$inject = ['$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('modalCustomPeriod', modalCustomPeriod);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalDestroyer = function modalDestroyer($interval) {
  return new ((function () {
    function ModalDestroyer() {
      _classCallCheck(this, ModalDestroyer);

      this.interval = null;
    }

    _createClass(ModalDestroyer, [{
      key: 'destroyAll',
      value: function destroyAll() {
        $('.modal').remove();
        $('.modal-backdrop').hide();
        $('body').removeClass('modal-open');

        if (this.interval) {
          $interval.cancel(this.interval);
        }

        this.interval = $interval(function () {
          var $modal = $('.modal');

          if ($modal.length) {
            $('.modal-backdrop').show();
          } else {
            $('.modal-backdrop').hide();
          }
        }, 100);
      }
    }]);

    return ModalDestroyer;
  })())();
};

modalDestroyer.$inject = ['$interval'];
angular.module('utils.foodio').factory('modalDestroyer', modalDestroyer);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modal = function modal($uibModal, $templateCache) {
  return new ((function () {
    function Modal() {
      _classCallCheck(this, Modal);
    }

    _createClass(Modal, [{
      key: 'open',
      value: function open() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return $uibModal.open({
          template: $templateCache.get('/templates/modal-message.html'),
          controller: 'ModalMessageCtrl as ctrl',
          windowClass: 'modal-message',
          resolve: {
            messageResolved: function messageResolved() {
              return params;
            }
          }
        });
      }
    }]);

    return Modal;
  })())();
};

modal.$inject = ['$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('modalMessage', modal);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalProduct = function modalProduct($uibModal, storeProductApi, $templateCache) {
  return new ((function () {
    function ModalProduct() {
      _classCallCheck(this, ModalProduct);
    }

    _createClass(ModalProduct, [{
      key: 'open',
      value: function open(params) {

        if (!params.cart) {
          throw new Error('Modal Product service must have a cart');
        }

        if (!params.product) {
          throw new Error('Modal Product service must have a product');
        }

        if (!params.cartItem) {
          params.cartItem = false;
        }

        return $uibModal.open({
          template: $templateCache.get('/templates/modal-product.html'),
          controller: 'ModalProductCtrl as ctrl',
          windowClass: 'modal-product',
          resolve: {
            cartResolved: function cartResolved() {
              return params.cart;
            },
            storeProductResolved: function storeProductResolved() {
              return storeProductApi.show(params.product).then(function (response) {
                return response.data;
              });
            },
            cartItemResolved: function cartItemResolved() {
              return params.cartItem;
            }
          }
        });
      }
    }]);

    return ModalProduct;
  })())();
};

modalProduct.$inject = ['$uibModal', 'storeProductApi', '$templateCache'];
angular.module('utils.foodio').factory('modalProduct', modalProduct);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalRating = function modalRating($uibModal, $templateCache) {
  return new ((function () {
    function ModalRating() {
      _classCallCheck(this, ModalRating);
    }

    _createClass(ModalRating, [{
      key: 'open',
      value: function open(order) {
        return $uibModal.open({
          template: $templateCache.get('/templates/modal-rating.html'),
          controller: 'ModalRatingCtrl as ctrl',
          windowClass: 'modal-rating',
          resolve: {
            orderResolvedd: function orderResolvedd() {
              return order;
            }
          }
        });
      }
    }]);

    return ModalRating;
  })())();
};

modalRating.$inject = ['$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('modalRating', modalRating);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var popup = function popup($window, $q) {
  return new ((function () {
    function Popup() {
      _classCallCheck(this, Popup);
    }

    _createClass(Popup, [{
      key: 'open',
      value: function open(pageURL, width, height) {
        return $q(function (resolve, reject) {
          var left = Number(screen.width / 2 - width / 2);
          var top = Number(screen.height / 2 - height / 2);

          var popup = $window.open(pageURL, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
          resolve(popup);
        });
      }
    }]);

    return Popup;
  })())();
};

popup.$inject = ['$window', '$q'];
angular.module('utils.foodio').factory('popup', popup);
'use strict';

var printManager = function printManager($rootScope, $localStorage, hint, printerApi, orderApi, $uibModal, $templateCache) {

  var socket = null;
  var printers = [];

  return {

    // @name connect
    // @description Conecta com o socket
    connect: function connect() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var channel = duel.channel('socket');

      // Seta impressoras
      if (options.printers && options.printers.length) {
        printers = options.printers;
      }

      return new Promise(function (resolve, reject) {

        // Previne de criar se já está criado
        if (socket) {
          return resolve(socket);
        }

        var address = options.port ? 'http://localhost:' + options.port : 'http://localhost:7333';
        socket = io(address);

        channel.broadcast('socket:connected', { connected: true });

        // Adiciona evento de erro
        socket.on('print:error', function (data) {
          hint[data.type](data.description);
        });

        return resolve(socket);
      });
    },

    // @name disconnect
    // @description Desconecta socket
    disconnect: function disconnect() {
      var channel = duel.channel('socket');

      return new Promise(function (resolve, reject) {
        channel.broadcast('socket:disconnected', { disconnected: true });
        resolve(socket = null);
      });
    },

    // @name print
    // @description Realiza impressão utilizando socket.io
    // @params {Object} options - Layout, impressora e dados opcionais para impressão
    print: function print(options) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        return _this._getPrinter(options).then(function (printer) {
          return _this._getData(options).then(function (data) {

            if (options.layout === 'delivery' && data.order.order_type.type !== 'delivery') {
              return _this._throwError(reject, "Para imprimir uma via delivery é necessário que o pedido seja do tipo delivery");
            }

            socket.emit('print:start');
            return resolve(socket.emit('print', { layout: options.layout, copies: options.copies, printer: printer, data: data }));
          });
        });
      });
    },

    // @name _getPrinter
    // @description Valida dados e escolhe impressora
    // @params {Object} options - Layout, impressora e dados opcionais para impressão
    _getPrinter: function _getPrinter(options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {

        // Evita de tentar imprimir se o programa de impressão não estiver
        if (!socket || socket.disconnected) {
          return _this2._throwError(reject, "O programa de impressão não encontra-se ativo. Instale-o e inicie para prosseguir!");
        }

        if (options.printer) {
          return resolve(options.printer);
        }

        // Não há impressora cadastrada
        if (!printers.length) {
          return _this2._throwError(reject, "Você não possui nenhuma impressora cadastrada. Cadastre uma para prosseguir!");
        }

        // Só há uma impressora, dessa forma usa ela
        if (printers.length === 1) {
          return resolve(printers[0]);
        }

        // Exibe modal para escolher impressora
        if (printers.length > 1) {
          _this2.openModal({ printerChooser: true }).result.then(function (result) {
            return resolve(result.printer);
          });
        }
      });
    },

    _getData: function _getData(options) {
      return new Promise(function (resolve, reject) {
        var data = {
          company: $rootScope.company,
          store: $rootScope.currentStore
        };

        if (options.data && options.data.order) {
          orderApi.show({ id: options.data.order.id }).then(function (response) {
            data.order = response.data;
            return resolve(data);
          });
        } else {
          return resolve(data);
        }
      });
    },

    // @name openModal
    // @description Abre modal
    openModal: function openModal() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var modal = $uibModal.open({
        template: $templateCache.get('/templates/modal-print-manager.html'),
        controller: 'ModalPrintManagerController as ctrl',
        windowClass: 'modal-printer',
        resolve: {
          printersResolved: function printersResolved() {
            return printerApi.fetch().then(function (response) {
              printers = response.data;
              return printers;
            });
          },
          printerChooseResolved: function printerChooseResolved() {
            return options.printerChooser || false;
          }
        }
      });

      return modal;
    },

    // @name _throwError
    // @description Exibe erro e rejeita prommessa
    // @param {Fn} reject - Reject promise
    // @param {String} errorMsg - Mensagem de erro
    _throwError: function _throwError(reject, errorMsg) {
      hint.error(errorMsg);
      reject(errorMsg);
    },

    // @name _fetchPrinters
    // @description Busca impressoras
    _fetchPrinters: function _fetchPrinters() {
      return printerApi.fetch();
    },

    // @name _resetSocket
    // @description Realiza impressão utilizando socket.io
    _resetSocket: function _resetSocket() {
      return socket = {
        disconnected: true,
        connected: false
      };
    }
  };
};

printManager.$inject = ['$rootScope', '$localStorage', 'hint', 'printerApi', 'orderApi', '$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('printManager', printManager);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var factory = function factory($rootScope, $state, hint) {

  return (function () {
    function RequestError() {
      var _this = this;

      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, RequestError);

      if (params.onError && angular.isFunction(params.onError)) {
        this.onError = params.onError;
      }

      $rootScope.$on('request:error', function ($event, data) {
        _this._onError(data);
      });
    }

    // Exibe mensagem
    // @param {Object} data com descrição do erro

    _createClass(RequestError, [{
      key: '_onError',
      value: function _onError(data) {
        if (typeof data === 'undefined') {
          return false;
        }

        if (data.code === 0) {
          data = { code: 408, description: 'Não foi possível conectar com o servidor. Tente mais tarde. ' };
        }

        if (angular.isArray(data.description)) {
          angular.forEach(data.description, function (message) {
            hint.error(message);
          });
        } else {
          hint.error(data.description);
        }

        if (this.onError) {
          this.onError(data);
        }
      }
    }]);

    return RequestError;
  })();
};

factory.$inject = ['$rootScope', '$state', 'hint'];
angular.module('utils.foodio').factory('RequestError', factory);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var roleVerificator = function roleVerificator() {
  return new ((function () {
    function RoleVerificator() {
      _classCallCheck(this, RoleVerificator);
    }

    _createClass(RoleVerificator, [{
      key: 'hasRole',
      value: function hasRole(roleToVerify, availableRoles) {
        var found = false;

        angular.forEach(availableRoles, function (roleAlias) {
          if (roleAlias === roleToVerify.alias) {
            found = true;
          }
        });

        return found;
      }
    }]);

    return RoleVerificator;
  })())();
};

angular.module('utils.foodio').factory('roleVerificator', roleVerificator);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var scrollTop = function scrollTop() {
  return new ((function () {
    function ScrollTop() {
      _classCallCheck(this, ScrollTop);
    }

    _createClass(ScrollTop, [{
      key: 'goTop',
      value: function goTop() {
        var delay = arguments.length <= 0 || arguments[0] === undefined ? 500 : arguments[0];

        var position = 0;
        $('html, body').animate({ scrollTop: position }, delay);
      }
    }]);

    return ScrollTop;
  })())();
};

angular.module('utils.foodio').factory('scrollTop', scrollTop);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var storage = function storage($localStorage, $q) {
  return new ((function () {
    function Storage() {
      _classCallCheck(this, Storage);
    }

    _createClass(Storage, [{
      key: 'get',
      value: function get(key) {
        return $q(function (resolve, reject) {
          var response = $localStorage[key] || null;
          resolve(response);
        });
      }
    }, {
      key: 'set',
      value: function set(key, value) {
        return $q(function (resolve, reject) {
          $localStorage[key] = value;
          resolve();
        });
      }
    }, {
      key: 'remove',
      value: function remove(key) {
        return $q(function (resolve, reject) {
          delete $localStorage[key];
          var response = $localStorage[key] || null;
          resolve(response);
        });
      }
    }]);

    return Storage;
  })())();
};

storage.$inject = ['$localStorage', '$q'];
angular.module('utils.foodio').factory('storage', storage);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var tempCart = function tempCart() {
  return (function () {
    function TempCart($scope, cartItem) {
      _classCallCheck(this, TempCart);

      this.$scope = $scope;
      $scope.isEditing = cartItem ? true : false;

      if ($scope.isEditing) {
        cartItem.customization_fields = JSON.parse(cartItem.customization_fields);
      }

      $scope.cartItem = cartItem || { amount: 1, note: null, total: $scope.product.price * 1, product: $scope.product, customization_fields: {}, addons: [] };

      this._setCustomizationFields();
      this._listenScopeEvents();
    }

    _createClass(TempCart, [{
      key: '_setCustomizationFields',
      value: function _setCustomizationFields() {
        var _this = this;

        if (this.$scope.isEditing) {
          return false;
        }

        angular.forEach(this.$scope.product.addon_categories, function (addonCategory) {
          _this.$scope.cartItem.customization_fields[addonCategory.id] = {};

          angular.forEach(addonCategory.addons, function (addon) {
            if (addonCategory.max === 1) {
              _this.$scope.cartItem.customization_fields[addonCategory.id] = addonCategory.addons[0].id;
            } else {
              var fill = addonCategory.auto_fill && !parseFloat(addon.price) && addon.available ? true : false;
              _this.$scope.cartItem.customization_fields[addonCategory.id][addon.id] = fill;
            }
          });
        });
      }
    }, {
      key: '_listenScopeEvents',
      value: function _listenScopeEvents() {
        var _this2 = this;

        var findAndInsert = function findAndInsert(addonId) {
          var _addon = null;

          angular.forEach(_this2.$scope.product.addon_categories, function (addonCategory) {
            var find = _.findWhere(addonCategory.addons, { id: parseInt(addonId, 10) });
            if (find) {
              _addon = find;
            }
          });

          if (!_addon) {
            return false;
          }

          _this2.$scope.cartItem.addons.push({
            id: _addon.id,
            name: _addon.name,
            price: _addon.price,
            product_addon_id: _addon.product_addon_id
          });
        };

        this.$scope.$watch('cartItem', function (newObject, oldObject) {
          _this2.$scope.cartItem.addons = [];

          angular.forEach(_this2.$scope.cartItem.customization_fields, function (addon) {
            if (!_.isObject(addon)) {
              return findAndInsert(addon);
            }

            angular.forEach(addon, function (checked, addonId) {
              if (!checked) {
                return false;
              }

              return findAndInsert(addonId);
            });
          });
        }, true);

        this.$scope.$watch('cartItem', function (newValue, oldValue) {
          var addonsPrice = 0;

          angular.forEach(_this2.$scope.cartItem.addons, function (addon) {
            addonsPrice += parseFloat(addon.price);
          });

          _this2.$scope.cartItem.total = (parseFloat(_this2.$scope.product.price) + addonsPrice) * _this2.$scope.cartItem.amount;
        }, true);
      }
    }]);

    return TempCart;
  })();
};

angular.module('utils.foodio').factory('TempCart', tempCart);
'use strict';

var pusher = function pusher() {
  var _settings = {
    key: null,
    authTransport: 'ajax',
    baseUrl: 'http://foodio.com.br/admin'
  };

  var self = this;

  self.setKey = function (value) {
    _settings.key = value;
  };

  self.setBaseUrl = function (value) {
    _settings.baseUrl = value;
  };

  self.setAuthTransport = function (authTransport) {
    if (authTransport !== 'ajax' && authTransport !== 'jsonp') {
      authTransport = 'ajax';
    }

    _settings.authTransport = authTransport;
  };

  self.$get = ["$localStorage", "$rootScope", function ($localStorage, $rootScope) {
    return {
      subscribe: function subscribe(channel) {
        if (!_settings.key) {
          throw new Error('É necessário uma chave para utilizar esse serviço');
        }

        if (!channel) {
          throw new Error('Deve ser passado um canal para se inscrever');
        }

        var costumer = $localStorage['currentCostumer'];
        var employee = $localStorage['currentEmployee'];

        var headers = {
          'X-Employee-Email': employee ? employee.email : null,
          'X-Employee-Token': employee ? employee.authentication_token : null,
          'X-Costumer-Email': costumer ? costumer.email : null,
          'X-Costumer-Token': costumer ? costumer.authentication_token : null
        };

        var pusher = new Pusher(_settings.key, { authEndpoint: _settings.baseUrl + '/companies/' + $rootScope.company.id + '/sessions/pusher/authentication', auth: { headers: headers }, authTransport: _settings.authTransport });
        return pusher.subscribe(channel);
      },
      unsubscribe: function unsubscribe(channel) {
        if (!channel) {
          throw new Error('Deve ser passado um canal para se desinscrever');
        }

        return pusher.unsubscribe(channel);
      }
    };
  }];
};

angular.module('utils.foodio').provider('pusher', pusher);