'use strict';

define('parch-web/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('parch-web/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'parch-web/tests/helpers/start-app', 'parch-web/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _parchWebTestsHelpersStartApp, _parchWebTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _parchWebTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _parchWebTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('parch-web/tests/helpers/resolver', ['exports', 'parch-web/resolver', 'parch-web/config/environment'], function (exports, _parchWebResolver, _parchWebConfigEnvironment) {

  var resolver = _parchWebResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _parchWebConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _parchWebConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('parch-web/tests/helpers/start-app', ['exports', 'ember', 'parch-web/app', 'parch-web/config/environment'], function (exports, _ember, _parchWebApp, _parchWebConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _parchWebConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _parchWebApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('parch-web/tests/test-helper', ['exports', 'parch-web/tests/helpers/resolver', 'ember-qunit'], function (exports, _parchWebTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_parchWebTestsHelpersResolver['default']);
});
define('parch-web/tests/unit/routes/getting-started/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:getting-started/index', 'Unit | Route | getting started/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('parch-web/tests/unit/routes/getting-started/page-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:getting-started/page', 'Unit | Route | getting started/page', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('parch-web/tests/unit/routes/guide/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:guide/index', 'Unit | Route | guide/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('parch-web/tests/unit/routes/guide/page-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:guide/page', 'Unit | Route | guide/page', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('parch-web/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('parch-web/tests/unit/services/scroller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:scroller', 'Unit | Service | scroller', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
/* jshint ignore:start */

require('parch-web/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
