requestAnimationFrameFunction = (function() {
    var lastTime = 0,
        vendors = ['ms', 'moz', 'webkit', 'o'],
        x;
    // native?
    if(window.requestAnimationFrame){
        return window.requestAnimationFrame;
    }
    // vendor prefixed
    for(x = 0; x < vendors.length; ++x) {
        if(typeof window[vendors[x]+'RequestAnimationFrame'] === "function"){
            return window[vendors[x]+'RequestAnimationFrame'];
        }
    }
    // fallback
    return function(callback, element) {
        var currTime = new Date().getTime(),
            timeToCall = Math.max(0, 16 - (currTime - lastTime)),
            id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);

        lastTime = currTime + timeToCall;
        return id;
    };

}());

cancelRequestAnimationFrameFunction = (function() {
    var vendors = ['ms', 'moz', 'webkit', 'o'],
        x;

    for(x = 0; x < vendors.length; ++x) {
        if(typeof window[vendors[x]+'CancelRequestAnimationFrame'] === "function"){
            return window[vendors[x]+'CancelRequestAnimationFrame'];
        }
    }

    
    return function(id) {
        clearTimeout(id);
    };
}());

/**
 * RequestAnimationFrame polyfill hooked into the top-level YUI object.
 * Adapted from
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @method requestAnimFrame
 * @param callback {function} A parameter specifying a function to call when
 * it's time to update your animation for the next repaint.
 */
// Need to bind the context appropriately or the browser will
// not know what scope to execute the function in and will error out.
Y.requestAnimFrame = Y.bind(requestAnimationFrameFunction, window);


/**
 * Execute an animation inside a passed scope. Allows you to persist state
 * between animation loops by pushing values to the containing scope.
 * Inspired by the requestAnimFrame wrapper from Leaflet.js
 * @method requestAnimFrameWithScope
 * @param fn {function} the animation function to execute
 * @param context {object} the execution scope in which to execute
 * the animation function.
 */
Y.requestAnimFrameWithScope = function(fn, context) {
    fn = Y.bind(fn, context);
    return Y.requestAnimFrame.call(window, fn);
};

/**
 * CancelRequestAnimationFrame polyfill hooked into the top-level YUI object.
 * Adapted from
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @method cancelRequestAnimFrame
 * @param id {string} animation id to cancel, if using the fallback setTimeout based
 * animation.
 */
Y.cancelRequestAnimFrame = Y.bind(cancelRequestAnimationFrameFunction, window);
