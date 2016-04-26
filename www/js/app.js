// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'restangular', 'store.api.client.foodio', 'utils.foodio'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.run((function($rootScope, HttpToken) {
   // Inicia sessão do costumer
  new HttpToken('Costumer').initialize().then((costumer) => {
    if(!costumer) return false;
    $rootScope.currentCostumer = costumer;
  });
}))

.run((function(companyApi, $state, $rootScope) {

  let stateToGo = null;

  var stateChange = $rootScope.$on('$stateChangeStart', (e, toState, toParams) => {
    stateToGo = toState;

    if(!$rootScope.company) {
      e.preventDefault();
    }
  });

  companyApi.fetchBySubdomain({ subdomain: 'levedelivery' }).then((response) => {
    $rootScope.company = response.data;
    $rootScope.currentStore = $rootScope.company.stores[1];

    $state.go(stateToGo.name);
  });
}))

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/aside.html',
      controller: 'AppCtrl as appCtrl'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl as ctrl'
        }
      }
    })

    .state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'templates/register.html'
        }
      }
    })

    .state('app.menu', {
      url: '/menu',
      views: {
        'menuContent': {
          templateUrl: 'templates/menu.html',
          controller: 'MenuCtrl as ctrl'
        }
      },
      resolve: {
        menuResolved(menuApi) {
          return menuApi.fetch().then((response) => {
            return response.data;
          });
        }
      }
    })

    .state('app.checkout', {
      url: '/checkout',
      views: {
        'menuContent': {
          templateUrl: 'templates/checkout.html'
        }
      }
    })

    .state('app.track', {
      url: '/track/:number',
      views: {
        'menuContent': {
          templateUrl: 'templates/checkout.html'
        }
      }
    })

    .state('app.account', {
      url: '/account',
      views: {
        'menuContent': {
          templateUrl: 'templates/checkout.html'
        }
      }
    })

    .state('app.orders', {
      url: '/orders',
      views: {
        'menuContent': {
          templateUrl: 'templates/checkout.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
