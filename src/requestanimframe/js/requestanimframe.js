requestAnimationFrameFunction = (function() {
    var lastTime = 0,
        vendors = ['ms', 'moz', 'webkit', 'o'],
        x;
    // native?
    if(window.requestAnimationFrame){
        return window.requestAnimationFrame;
    }
    // vendor prefixed?
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

cancelAnimationFrameFunction = (function() {
    var vendors = ['ms', 'moz', 'webkit', 'o'],
        x;

    // native?
    if(window.cancelAnimationFrame){
        return window.cancelAnimationFrame;
    }
    // vendor prefixed?
    for(x = 0; x < vendors.length; ++x) {
        if(typeof window[vendors[x]+'CancelAnimationFrame'] === "function"){
            return window[vendors[x]+'CancelAnimationFrame'];
        }
    }
    // fallback 
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
 * @return requestId {number} uniquely identifies the request, pass
 * this to cancelAnimFrame to skip drawing a previously scheduled frame.
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
 * CancelAnimationFrame polyfill hooked into the top-level YUI object.
 * Adapted from
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @method cancelAnimFrame
 * @param id {number} animation id to cancel
 */
Y.cancelAnimFrame = Y.bind(cancelAnimationFrameFunction, window);
