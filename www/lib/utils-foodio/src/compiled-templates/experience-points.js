(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/experience-points.html',
    '<div class="experience-points-container">\n' +
    '  <div class="total-points"><i class="fa fa-shirtsinbulk"></i>3000 pontos</div>\n' +
    '  <div class="progress">\n' +
    '    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">\n' +
    '      <span class="sr-only">60% Complete</span>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="level-container">\n' +
    '    <div class="current-level">\n' +
    '      Level 5\n' +
    '    </div>\n' +
    '    <div class="next-level">\n' +
    '      <span>165 pontos para</span>\n' +
    '      Level 6\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();
