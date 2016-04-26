let directive = ($templateCache) => {
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
    link: (scope, $el, attrs) => {
      let markers = [];

      scope.$watch('[latitude, longitude, markers]', () => {
        scope.map ? reset() : initialize();
      }, true);

      let initialize = () => {
        if(!scope.latitude || !scope.longitude) {
          return false;
        }

        scope.map = new GMaps({
          div: $el.get(0),
          lat: scope.latitude,
          lng: scope.longitude,
          zoom: scope.zoom || 15,
          scrollwheel: scope.scrollWheel || false,
          disableDefaultUI: scope.disableButtons || false,
        });

        if(scope.markers) {
          addMarkers();
        }

        if(scope.route) {
          drawRoute();
        }
      };

      let addMarkers = () => {
        for(let i in markers) {
          let marker = markers[i];
          marker.setMap(null);
        }

        markers = [];

        if(!angular.isArray(scope.markers)) {
          throw new Error('Markers must be an array');
        }

        for(let i in scope.markers) {
          let m = scope.markers[i];

          if(!m.latitude || !m.longitude) {
            throw new Error('Marker must have a latitude and longitude');
          }

          let marker = scope.map.addMarker({
            lat: m.latitude,
            lng: m.longitude,
            infoWindow: m.title ? { content: `<p>${m.title}</p>` } : null,
            draggable: angular.isFunction(m.onDrag) ? true : false
          });

          if(m.animate) {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }

          if(angular.isFunction(m.onDrag)) {
            google.maps.event.addListener(marker, 'dragend', (event) => {
              marker.onDrag({ latitude: event.latLng.lat(), longitude: event.latLng.lng() });
            });
          }

          markers.push(marker);
        }
      };

      let drawRoute = () => {
        if(!scope.route.destination || !scope.route.origin) {
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

      let reset = () => {
        if(scope.markers) {
          addMarkers();
        }

        let position = new google.maps.LatLng(scope.latitude, scope.longitude);
        scope.map.panTo(position);
      };
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('utils.foodio').directive('map', directive);