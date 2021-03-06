YUI.add('module-tests', function(Y) {

    var suite = new Y.Test.Suite('requestanimframe');

    suite.add(new Y.Test.Case({
        name: 'Automated Tests',
        'Y.requestAnimFrame method should be registered': function() {
            Y.Assert.isFunction(Y.requestAnimFrame);
        },

        'Y.requestAnimFrameWithContext method should be registered': function() {
            Y.Assert.isFunction(Y.requestAnimFrame);
        },

        'Y.cancelAnimFrame method should be registered': function(){
            Y.Assert.isFunction(Y.cancelAnimFrame);
        }
    }));

    Y.Test.Runner.add(suite);
    
},'', { requires: [ 'test', 'requestanimframe' ] });
