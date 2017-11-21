"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('parch-web/app', ['exports', 'ember', 'parch-web/resolver', 'ember-load-initializers', 'parch-web/config/environment'], function (exports, _ember, _parchWebResolver, _emberLoadInitializers, _parchWebConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _parchWebConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _parchWebConfigEnvironment['default'].podModulePrefix,
    Resolver: _parchWebResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _parchWebConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("parch-web/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _liquidFireComponentsLfGetOutletState) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLfGetOutletState["default"];
    }
  });
});
define("parch-web/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define('parch-web/components/link-to-external', ['exports', 'ember-engines/components/link-to-external-component'], function (exports, _emberEnginesComponentsLinkToExternalComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberEnginesComponentsLinkToExternalComponent['default'];
    }
  });
});
define("parch-web/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("parch-web/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("parch-web/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define("parch-web/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("parch-web/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("parch-web/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("parch-web/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('parch-web/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define("parch-web/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("parch-web/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
define('parch-web/components/md-dummy', ['exports', 'ember-remarkable/components/md-dummy'], function (exports, _emberRemarkableComponentsMdDummy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRemarkableComponentsMdDummy['default'];
    }
  });
});
define('parch-web/components/md-text', ['exports', 'ember-remarkable/components/md-text'], function (exports, _emberRemarkableComponentsMdText) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRemarkableComponentsMdText['default'];
    }
  });
});
define('parch-web/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('parch-web/config/asset-manifest', ['exports', 'parch-web/config/environment'], function (exports, _parchWebConfigEnvironment) {

  var modulePrefix = _parchWebConfigEnvironment['default'].modulePrefix;
  var metaName = modulePrefix + '/config/asset-manifest';
  var nodeName = modulePrefix + '/config/node-asset-manifest';

  var config = {};

  try {
    // If we have a Node version of the asset manifest, use that for FastBoot and
    // similar environments.
    if (require.has(nodeName)) {
      config = require(nodeName)['default']; // eslint-disable-line
    } else {
        var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
        config = JSON.parse(unescape(rawConfig));
      }
  } catch (err) {
    throw new Error('Failed to load asset manifest. For browser environments, verify the meta tag with name "' + metaName + '" is present. For non-browser environments, verify that you included the node-asset-manifest module.');
  }

  exports['default'] = config;
});
define('parch-web/helpers/app-version', ['exports', 'ember', 'parch-web/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _parchWebConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _parchWebConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('parch-web/helpers/fr-markdown-file', ['exports', 'ember-fr-markdown-file/helpers/fr-markdown-file'], function (exports, _emberFrMarkdownFileHelpersFrMarkdownFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrMarkdownFileHelpersFrMarkdownFile['default'];
    }
  });
  Object.defineProperty(exports, 'frMarkdownFile', {
    enumerable: true,
    get: function get() {
      return _emberFrMarkdownFileHelpersFrMarkdownFile.frMarkdownFile;
    }
  });
});
define('parch-web/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _liquidFireHelpersLfLockModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel['default'];
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel.lfLockModel;
    }
  });
});
define('parch-web/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _liquidFireHelpersLfOr) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr['default'];
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr.lfOr;
    }
  });
});
define('parch-web/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('parch-web/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('parch-web/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'parch-web/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _parchWebConfigEnvironment) {
  var _config$APP = _parchWebConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('parch-web/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('parch-web/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('parch-web/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('parch-web/initializers/engines', ['exports', 'ember-engines/initializers/engines'], function (exports, _emberEnginesInitializersEngines) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberEnginesInitializersEngines['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberEnginesInitializersEngines.initialize;
    }
  });
});
define('parch-web/initializers/export-application-global', ['exports', 'ember', 'parch-web/config/environment'], function (exports, _ember, _parchWebConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_parchWebConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _parchWebConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_parchWebConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('parch-web/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("parch-web/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {

  (0, _liquidFireEmberInternals.initialize)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define('parch-web/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('parch-web/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("parch-web/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('parch-web/instance-initializers/ember-devtools', ['exports', 'parch-web/config/environment'], function (exports, _parchWebConfigEnvironment) {
  exports['default'] = {
    initialize: function initialize(appInstance) {
      var devToolsConfig = _parchWebConfigEnvironment['default']['ember-devtools'] || {};
      var enabled = devToolsConfig.enabled;
      if (enabled === undefined) {
        enabled = /(development|test)/.test(_parchWebConfigEnvironment['default'].environment);
      }
      if (!enabled) return;
      var service = 'service:ember-devtools';
      var devTools = appInstance.lookup ? appInstance.lookup(service)
      // backwards compatibility < 2.1
      : appInstance.container.lookup(service);
      if (devToolsConfig.global === true) {
        devTools.globalize();
      } else if (devToolsConfig.global) {
        window[devToolsConfig.global] = devTools;
      }
    }
  };
});
/* global window */
define('parch-web/instance-initializers/load-asset-manifest', ['exports', 'parch-web/config/asset-manifest'], function (exports, _parchWebConfigAssetManifest) {
  exports.initialize = initialize;

  /**
   * Initializes the AssetLoader service with a generated asset-manifest.
   */

  function initialize(instance) {
    var service = instance.lookup('service:asset-loader');
    service.pushManifest(_parchWebConfigAssetManifest['default']);
  }

  exports['default'] = {
    name: 'load-asset-manifest',
    initialize: initialize
  };
});
define('parch-web/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('parch-web/router', ['exports', 'ember', 'scroll-tracker/scroll-tracking-router', 'parch-web/config/environment'], function (exports, _ember, _scrollTrackerScrollTrackingRouter, _parchWebConfigEnvironment) {

  var Router = _scrollTrackerScrollTrackingRouter['default'].extend({
    location: _parchWebConfigEnvironment['default'].locationType,
    rootURL: _parchWebConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('guide', function () {
      this.route('page', { path: '/:page' });
    });

    this.route('getting-started', function () {
      this.route('page', { path: '/:page' });
    });
  });

  exports['default'] = Router;
});
define("parch-web/routes/getting-started/index", ["exports", "ember", "parch-web/utils/table-of-contents"], function (exports, _ember, _parchWebUtilsTableOfContents) {

  var TABLE_OF_CONTENTS = _parchWebUtilsTableOfContents["default"].gettingStarted;

  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      return TABLE_OF_CONTENTS;
    }
  });
});
define("parch-web/routes/getting-started/page", ["exports", "ember", "parch-web/utils/table-of-contents"], function (exports, _ember, _parchWebUtilsTableOfContents) {

  var TABLE_OF_CONTENTS = _parchWebUtilsTableOfContents["default"].gettingStarted;

  exports["default"] = _ember["default"].Route.extend({
    model: function model(params) {
      var page = params.page;

      var currentPageIndex = TABLE_OF_CONTENTS.findIndex(function (item) {
        return item.page === page;
      });
      var next = currentPageIndex < TABLE_OF_CONTENTS.length ? TABLE_OF_CONTENTS[currentPageIndex + 1] : null;
      var previous = currentPageIndex > 0 ? TABLE_OF_CONTENTS[currentPageIndex - 1] : null;

      return {
        currentPage: TABLE_OF_CONTENTS[currentPageIndex],
        currentPageMarkdown: "getting-started/" + page,
        nextPage: next,
        previousPage: previous,
        tableOfContents: TABLE_OF_CONTENTS
      };
    }
  });
});
define("parch-web/routes/guide/index", ["exports", "ember", "parch-web/utils/table-of-contents"], function (exports, _ember, _parchWebUtilsTableOfContents) {

  var TABLE_OF_CONTENTS = _parchWebUtilsTableOfContents["default"].guide;

  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      return TABLE_OF_CONTENTS;
    }
  });
});
define('parch-web/routes/guide/page', ['exports', 'ember', 'parch-web/utils/table-of-contents'], function (exports, _ember, _parchWebUtilsTableOfContents) {

  var TABLE_OF_CONTENTS = _parchWebUtilsTableOfContents['default'].guide;

  var $ = _ember['default'].$;
  var get = _ember['default'].get;
  var service = _ember['default'].inject.service;
  exports['default'] = _ember['default'].Route.extend({
    scroller: service(),

    activate: function activate() {
      get(this, 'scroller').setup();
    },

    deactivate: function deactivate() {
      get(this, 'scroller').tearDown();
    },

    model: function model(params) {
      var page = params.page;

      var currentPageIndex = TABLE_OF_CONTENTS.findIndex(function (item) {
        return item.page === page;
      });
      var next = currentPageIndex < TABLE_OF_CONTENTS.length ? TABLE_OF_CONTENTS[currentPageIndex + 1] : null;
      var previous = currentPageIndex > 0 ? TABLE_OF_CONTENTS[currentPageIndex - 1] : null;

      return {
        currentPage: TABLE_OF_CONTENTS[currentPageIndex],
        currentPageMarkdown: 'guide/' + page,
        nextPage: next,
        previousPage: previous,
        tableOfContents: TABLE_OF_CONTENTS
      };
    },

    actions: {
      willTransition: function willTransition() {
        this._super.apply(this, arguments);
        get(this, 'scroller').setup();
      }
    }
  });
});
define('parch-web/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('parch-web/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('parch-web/services/asset-loader', ['exports', 'ember-asset-loader/services/asset-loader'], function (exports, _emberAssetLoaderServicesAssetLoader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAssetLoaderServicesAssetLoader['default'];
    }
  });
});
define('parch-web/services/ember-devtools', ['exports', 'ember'], function (exports, _ember) {
  var Service = _ember['default'].Service;
  exports['default'] = Service.extend({
    renderedComponents: {},
    init: function init() {
      this.global = this.global || window;
      this.console = this.console || window.console;
      if (_ember['default'].getOwner) {
        // for ember > 2.3
        Object.defineProperty(this, 'container', {
          get: function get() {
            return _ember['default'].getOwner(this);
          }
        });
      }
      Object.defineProperty(this, 'store', {
        get: function get() {
          return this.lookup('service:store') || this.lookup('store:main'); // for ember-data < 2
        }
      });
    },
    consoleLog: function consoleLog() {
      var _console;

      (_console = this.console).log.apply(_console, arguments);
    },
    app: function app() {
      var name = arguments.length <= 0 || arguments[0] === undefined ? 'main' : arguments[0];

      return this.lookup('application:' + name);
    },
    route: function route(name) {
      name = name || this.currentRouteName();
      return this.lookup('route:' + name);
    },
    controller: function controller(name) {
      name = name || this.currentRouteName();
      return this.lookup('controller:' + name);
    },
    model: function model(name) {
      var controller = this.controller(name);
      return controller && controller.get('model');
    },
    service: function service(name) {
      return this.lookup('service:' + name);
    },
    router: function router() {
      var name = arguments.length <= 0 || arguments[0] === undefined ? 'main' : arguments[0];

      return this.lookup('router:' + name).get('router');
    },
    routes: function routes() {
      return Object.keys(this.router().recognizer.names);
    },
    // component(idDomElementOrSelector, type) {
    //  if (typeof idDomElementOrSelector === 'object') {
    //    idDomElementOrSelector = idDomElementOrSelector.id;
    //  }
    //  return this.lookup(`component:${type}::${idDomElementOrSelector}`);
    // },
    currentRouteName: function currentRouteName() {
      return this.controller('application').get('currentRouteName');
    },
    currentPath: function currentPath() {
      return this.controller('application').get('currentPath');
    },
    log: function log(promise, property, getEach) {
      var _this = this;

      return promise.then(function (value) {
        _this.global.$E = value;
        if (property) {
          value = value[getEach ? 'getEach' : 'get'].call(value, property);
        }
        _this.consoleLog(value);
      }, function (err) {
        _this.console.error(err);
      });
    },
    lookup: function lookup(name) {
      return this.container.lookup(name);
    },
    resolveRegistration: function resolveRegistration(name) {
      return this.container.resolveRegistration
      // ember < 2.3.1
      ? this.container.resolveRegistration(name)
      // previous ember versions
      : this.container.lookupFactory(name);
    },
    containerNameFor: function containerNameFor(object) {
      var cache =
      // ember 2.3.1
      _ember['default'].get(this.container, '__container__.cache')
      // previous ember versions
       || _ember['default'].get(this.container, '_defaultContainer.cache') || this.container.cache;
      var keys = Object.keys(cache);
      for (var i = 0; i < keys.length; i++) {
        if (cache[keys[i]] === object) return keys[i];
      }
    },
    inspect: _ember['default'].inspect,
    logResolver: function logResolver() {
      var bool = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      _ember['default'].ENV.LOG_MODULE_RESOLVER = bool;
    },
    logAll: function logAll() {
      var bool = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      var app = this.app();
      app.LOG_ACTIVE_GENERATION = bool;
      app.LOG_VIEW_LOOKUPS = bool;
      app.LOG_TRANSITIONS = bool;
      app.LOG_TRANSITIONS_INTERNAL = bool;
      this.logResolver(bool);
    },
    logRenders: function logRenders() {
      var self = this;

      _ember['default'].subscribe('render', {
        before: function before(name, start, payload) {
          return start;
        },
        after: function after(name, end, payload, start) {
          var id = payload.containerKey;
          if (!id) return;

          var duration = Math.round(end - start);
          var color = self.colorForRender(duration);
          var logId = 'renderedComponents.' + id;
          var ocurrences = self.get(logId);

          if (!ocurrences) {
            self.set(logId, []);
          }

          self.get(logId).push(duration);

          console.log('%c rendered ' + id + ' in ' + duration + 'ms', 'color: ' + color);
        }
      });
    },
    colorForRender: function colorForRender(duration) {
      var ok = '#000000';
      var warning = '#F1B178';
      var serious = '#E86868';

      if (duration < 300) return ok;
      if (duration < 600) return warning;

      return serious;
    },
    environment: function environment() {
      _ember['default'].deprecate('environment() has been deprecated, please use config() instead');
    },
    config: function config() {
      return this.resolveRegistration('config:environment');
    },
    globalize: function globalize() {
      var _this2 = this;

      var props = ['app', 'container', 'store', 'typeMaps', 'route', 'controller', 'model', 'service', 'routes', 'view', 'component', 'currentRouteName', 'currentPath', 'log', 'lookup', 'resolveRegistration', 'containerNameFor', 'inspect', 'logResolver', 'logAll', 'environment', 'config'];
      // don't stomp on pre-existing global vars
      var skipGlobalize = this.constructor.skipGlobalize;
      if (skipGlobalize === null) {
        skipGlobalize = this.constructor.skipGlobalize = props.filter(function (prop) {
          return !_ember['default'].isNone(_this2.global[prop]);
        });
      }
      var self = this;
      props.map(function (name) {
        if (skipGlobalize.indexOf(name) !== -1) return;
        var prop = _this2[name];
        if (typeof prop === 'function') {
          prop = function () {
            // arguments variable is wrong if we use an arrow function here
            return self[name].apply(self, arguments);
          };
        }
        _this2.global[name] = prop;
      });
    }
  }).reopenClass({
    skipGlobalize: null
  });
});
/* global DS */
define("parch-web/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _liquidFireTransitionMap) {
  exports["default"] = _liquidFireTransitionMap["default"];
});
define('parch-web/services/scroller', ['exports', 'ember'], function (exports, _ember) {
  var $ = _ember['default'].$;
  var computed = _ember['default'].computed;
  var get = _ember['default'].get;
  var run = _ember['default'].run;
  exports['default'] = _ember['default'].Service.extend({
    duration: 750,
    scrollable: computed(function () {
      return $("html, body");
    }),

    setup: function setup() {
      var _this = this;

      run.next(function () {
        $('.scrollable').bind('click', run.bind(_this, _this._doScroll));
      });
    },

    tearDown: function tearDown() {
      run.next(function () {
        $('.scrollable').unbind('click');
      });
    },

    _doScroll: function _doScroll(evt) {
      var $scrollable = get(this, 'scrollable');
      var targetId = $(evt.currentTarget).attr("href");

      $scrollable.animate({
        scrollTop: $scrollable.scrollTop() - $scrollable.offset().top + this._getVerticalCoords(targetId)
      }, 750, "swing");
    },

    _getVerticalCoords: function _getVerticalCoords(targetId) {
      var offset = $(targetId).offset();

      return offset ? offset.top : 0;
    }
  });
});
define("parch-web/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "PRpXRt3T", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"global-nav\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"global-nav__logo\"],[\"flush-element\"],[\"text\",\"\\n    Parch\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"global-nav__menu menu menu_inline\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"menu__item menu__item_inline\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"link link_primary menu__link\"]],2],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"menu__item menu__item_inline\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"getting-started\"],[[\"class\"],[\"link link_primary menu__link\"]],1],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"menu__item menu__item_inline\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"guide\"],[[\"class\"],[\"link link_primary menu__link\"]],0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"menu__item menu__item_inline\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"link link_primary menu__link\"],[\"static-attr\",\"href\",\"https://parch-js.github.io/docs\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"API Documentation\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"liquid-outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        Guide\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        Getting Started\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        Home\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "parch-web/templates/application.hbs" } });
});
define("parch-web/templates/getting-started", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "EP3G53fg", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"liquid-outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "parch-web/templates/getting-started.hbs" } });
});
define("parch-web/templates/getting-started/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "MfsUdwC6", "block": "{\"statements\":[[\"block\",[\"with\"],[[\"get\",[\"model\"]]],null,2]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"append\",[\"unknown\",[\"page\",\"title\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"toc__item\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"getting-started.page\",[\"get\",[\"page\",\"page\"]]],[[\"class\"],[\"link link_primary\"]],0],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"page\"]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container container_page\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"toc\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"toc\"]]],null,1],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"toc\"]}],\"hasPartials\":false}", "meta": { "moduleName": "parch-web/templates/getting-started/index.hbs" } });
});
define("parch-web/templates/getting-started/page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "VwomHZtx", "block": "{\"statements\":[[\"block\",[\"liquid-bind\"],[[\"get\",[\"model\"]]],[[\"class\"],[\"container container_page\"]],4]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"          Next: \"],[\"append\",[\"unknown\",[\"page\",\"nextPage\",\"title\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"pagination__link pagination__link_next\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"getting-started.page\",[\"get\",[\"page\",\"nextPage\",\"page\"]]],[[\"class\"],[\"link link_primary\"]],0],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          Previous: \"],[\"append\",[\"unknown\",[\"page\",\"previousPage\",\"title\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"pagination__link pagination__link_previous\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"getting-started.page\",[\"get\",[\"page\",\"previousPage\",\"page\"]]],[[\"class\"],[\"link link_primary\"]],2],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"markdown\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"md-text\"],null,[[\"text\",\"typopgrapher\"],[[\"helper\",[\"fr-markdown-file\"],[[\"get\",[\"page\",\"currentPageMarkdown\"]]],null],true]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"pagination\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"page\",\"previousPage\"]]],null,3],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"page\",\"nextPage\"]]],null,1],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"page\"]}],\"hasPartials\":false}", "meta": { "moduleName": "parch-web/templates/getting-started/page.hbs" } });
});
define("parch-web/templates/guide", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "C7pOnWJW", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"liquid-outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "parch-web/templates/guide.hbs" } });
});
define("parch-web/templates/guide/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "sW1K0xbM", "block": "{\"statements\":[[\"block\",[\"with\"],[[\"get\",[\"model\"]]],null,2]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"append\",[\"unknown\",[\"page\",\"title\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"toc__item\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"guide.page\",[\"get\",[\"page\",\"page\"]]],[[\"class\"],[\"link link_primary\"]],0],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"page\"]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container container_page\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"toc\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"toc\"]]],null,1],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"toc\"]}],\"hasPartials\":false}", "meta": { "moduleName": "parch-web/templates/guide/index.hbs" } });
});
define("parch-web/templates/guide/page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "mcy4gCpJ", "block": "{\"statements\":[[\"block\",[\"liquid-bind\"],[[\"get\",[\"model\"]]],[[\"class\"],[\"container container_page top\"]],4]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"          Next: \"],[\"append\",[\"unknown\",[\"page\",\"nextPage\",\"title\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"pagination__link pagination__link_next\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"guide.page\",[\"get\",[\"page\",\"nextPage\",\"page\"]]],[[\"class\"],[\"link link_primary\"]],0],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          Previous: \"],[\"append\",[\"unknown\",[\"page\",\"previousPage\",\"title\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"pagination__link pagination__link_previous\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"guide.page\",[\"get\",[\"page\",\"previousPage\",\"page\"]]],[[\"class\"],[\"link link_primary\"]],2],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"markdown\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"md-text\"],null,[[\"html\",\"text\",\"typopgrapher\"],[true,[\"helper\",[\"fr-markdown-file\"],[[\"get\",[\"page\",\"currentPageMarkdown\"]]],null],true]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"pagination\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"page\",\"previousPage\"]]],null,3],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"page\",\"nextPage\"]]],null,1],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"page\"]}],\"hasPartials\":false}", "meta": { "moduleName": "parch-web/templates/guide/page.hbs" } });
});
define("parch-web/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "p9PUCVwP", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container container_main\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hero-image__container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hero-image__overlay\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"usage usage_main\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"class\",\"readonly\",\"value\"],[\"usage__input\",\"readonly\",\"$ npm install -g parch-cli\"]]],false],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"usage__description\"],[\"flush-element\"],[\"text\",\"\\n          Flexibility, power and simplicity.\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"usage__social\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"button button_primary\"],[\"static-attr\",\"href\",\"https://github.com/dylanfoster/parch\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"\\n            Github\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"button button_primary\"],[\"static-attr\",\"href\",\"https://npmjs.com/package/parch\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"\\n            NPM\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "parch-web/templates/index.hbs" } });
});
define('parch-web/transitions', ['exports'], function (exports) {
  exports['default'] = function () {
    this.setDefault({ duration: 300 });

    this.transition(this.fromRoute('index'), this.toRoute(['getting-started', 'getting-started.index']), this.use('smart-fade'));

    this.transition(this.fromRoute('getting-started.index'), this.toRoute('getting-started.page'), this.use('smart-fade'), this.reverse('smart-fade'));

    this.transition(this.hasClass('container_page'), this.use('scroll-then', 'cross-fade'));

    this.transition(this.use('smart-fade'));
  };

  ;
});
define('parch-web/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('parch-web/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('parch-web/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('parch-web/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('parch-web/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('parch-web/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define('parch-web/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define('parch-web/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('parch-web/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define('parch-web/transitions/smart-fade', ['exports', 'scroll-tracker/transitions/smart-fade'], function (exports, _scrollTrackerTransitionsSmartFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _scrollTrackerTransitionsSmartFade['default'];
    }
  });
});
define('parch-web/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('parch-web/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('parch-web/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('parch-web/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('parch-web/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
define('parch-web/utils/table-of-contents', ['exports'], function (exports) {
  exports['default'] = {
    gettingStarted: [{ page: 'overview', title: "Overview" }, { page: 'installation', title: "Installation and Scaffolding" }],

    guide: [{ page: 'configuration', title: 'Configuration' }, { page: 'controllers', title: 'Controllers' }, { page: 'models', title: 'Models' }, { page: 'migrations', title: 'Migrations' }, { page: 'logging-and-errors', title: 'Logging and Errors' }, { page: 'di', title: 'Dependency Injection' }, { page: 'store', title: 'Accessing Data' }]
  };
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('parch-web/config/environment', ['ember'], function(Ember) {
  var prefix = 'parch-web';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("parch-web/app")["default"].create({"name":"parch-web","version":"0.1.0+b13afd97"});
}

/* jshint ignore:end */
//# sourceMappingURL=parch-web.map
