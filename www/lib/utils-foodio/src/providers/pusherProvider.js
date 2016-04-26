let pusher = () => {
  let _settings = {
    key: null,
    authTransport: 'ajax',
    baseUrl: 'http://foodio.com.br/admin'
  };

  let self = this;

  self.setKey = (value) => {
    _settings.key = value;
  };

  self.setBaseUrl = (value) => {
    _settings.baseUrl = value;
  };

  self.setAuthTransport = (authTransport) => {
    if (authTransport !== 'ajax' && authTransport !== 'jsonp') {
      authTransport = 'ajax';
    }

    _settings.authTransport = authTransport;
  };

  self.$get = ["$localStorage", "$rootScope", function ($localStorage, $rootScope) {
    return {
      subscribe(channel) {
        if (!_settings.key) {
          throw new Error('É necessário uma chave para utilizar esse serviço');
        }

        if (!channel) {
          throw new Error('Deve ser passado um canal para se inscrever');
        }

        let costumer = $localStorage['currentCostumer'];
        let employee = $localStorage['currentEmployee'];

        let headers = {
          'X-Employee-Email': employee ? employee.email : null,
          'X-Employee-Token': employee ? employee.authentication_token : null,
          'X-Costumer-Email': costumer ? costumer.email : null,
          'X-Costumer-Token': costumer ? costumer.authentication_token : null
        };

        let pusher = new Pusher(_settings.key, { authEndpoint: _settings.baseUrl + '/companies/' + $rootScope.company.id + '/sessions/pusher/authentication', auth: { headers: headers }, authTransport: _settings.authTransport });
        return pusher.subscribe(channel);
      },
      unsubscribe(channel) {
        if (!channel) {
          throw new Error('Deve ser passado um canal para se desinscrever');
        }

        return pusher.unsubscribe(channel);
      }
    };
  }];
};

angular.module('utils.foodio').provider('pusher', pusher);