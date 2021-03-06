// Generated by CoffeeScript 1.6.3
(function() {
  var Aggregator, Collector, CounterCache,
    __slice = [].slice;

  CounterCache = require('./counter_cache');

  Aggregator = require('./aggregator');

  Collector = (function() {
    function Collector() {
      this.counters = new CounterCache();
      this.aggregate = new Aggregator();
    }

    Collector.prototype.increment = function() {
      var args, _ref;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref = this.counters).increment.apply(_ref, args);
    };

    Collector.prototype.timing = function() {
      var args, _ref;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref = this.aggregate).timing.apply(_ref, args);
    };

    Collector.prototype.flushTo = function(queue) {
      this.counters.flushTo(queue);
      return this.aggregate.flushTo(queue);
    };

    return Collector;

  })();

  module.exports = Collector;

}).call(this);
