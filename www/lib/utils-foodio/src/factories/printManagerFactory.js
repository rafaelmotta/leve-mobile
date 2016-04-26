let printManager = ($rootScope, $localStorage, hint, printerApi, orderApi, $uibModal, $templateCache) => {

  let socket = null;
  let printers = [];

  return {

    // @name connect
    // @description Conecta com o socket
    connect(options = {}) {
      let channel = duel.channel('socket');

      // Seta impressoras
      if(options.printers && options.printers.length) {
        printers = options.printers;
      }

      return new Promise((resolve, reject) => {

        // Previne de criar se já está criado
        if(socket) {
          return resolve(socket);
        }

        let address = options.port ? `http://localhost:${options.port}` : 'http://localhost:7333';
        socket = io(address);

        channel.broadcast('socket:connected', { connected: true });

        // Adiciona evento de erro
        socket.on('print:error', (data) => {
          hint[data.type](data.description);
        });

        return resolve(socket);
      });
    },

    // @name disconnect
    // @description Desconecta socket
    disconnect() {
      let channel = duel.channel('socket');

      return new Promise((resolve, reject) => {
        channel.broadcast('socket:disconnected', { disconnected: true });
        resolve(socket = null);
      });
    },

    // @name print
    // @description Realiza impressão utilizando socket.io
    // @params {Object} options - Layout, impressora e dados opcionais para impressão
    print(options) {
      return new Promise((resolve, reject) => {
        return this._getPrinter(options).then((printer) => {
          return this._getData(options).then((data) => {

            if(options.layout === 'delivery' && data.order.order_type.type !== 'delivery') {
              return this._throwError(reject, "Para imprimir uma via delivery é necessário que o pedido seja do tipo delivery");
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
    _getPrinter(options) {
      return new Promise((resolve, reject) => {

        // Evita de tentar imprimir se o programa de impressão não estiver
        if(!socket || socket.disconnected) {
          return this._throwError(reject, "O programa de impressão não encontra-se ativo. Instale-o e inicie para prosseguir!");
        }

        if(options.printer) {
          return resolve(options.printer);
        }

        // Não há impressora cadastrada
        if(!printers.length) {
          return this._throwError(reject, "Você não possui nenhuma impressora cadastrada. Cadastre uma para prosseguir!");
        }

        // Só há uma impressora, dessa forma usa ela
        if(printers.length === 1) {
          return resolve(printers[0]);
        }

        // Exibe modal para escolher impressora
        if(printers.length > 1) {
          this.openModal({ printerChooser: true }).result.then((result) => {
            return resolve(result.printer);
          });
        }
      });
    },

    _getData(options) {
      return new Promise((resolve, reject) => {
        let data = {
          company: $rootScope.company,
          store: $rootScope.currentStore
        };

        if(options.data && options.data.order) {
          orderApi.show({ id: options.data.order.id }).then((response) => {
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
    openModal(options = {}) {
      let modal = $uibModal.open({
        template: $templateCache.get('/templates/modal-print-manager.html'),
        controller: 'ModalPrintManagerController as ctrl',
        windowClass: 'modal-printer',
        resolve: {
          printersResolved() {
            return printerApi.fetch().then((response) => {
              printers = response.data;
              return printers;
            });
          },
          printerChooseResolved() {
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
    _throwError(reject, errorMsg) {
      hint.error(errorMsg);
      reject(errorMsg);
    },

    // @name _fetchPrinters
    // @description Busca impressoras
    _fetchPrinters() {
      return printerApi.fetch();
    },

    // @name _resetSocket
    // @description Realiza impressão utilizando socket.io
    _resetSocket() {
      return socket = {
        disconnected: true,
        connected: false
      };
    }
  }
};

printManager.$inject = ['$rootScope', '$localStorage', 'hint', 'printerApi', 'orderApi', '$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('printManager', printManager);