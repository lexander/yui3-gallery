requestanimframe
========
Polyfill that binds native, vendor-prefixed, or `setTimeout` based version of `requestAnimationFrame` and
`cancelRequestAnimationFrame` to the top-level YUI object as:
   * `Y.requestAnimFrame`
   * `Y.cancelRequestAnimFrame`

If the `setTimeout` fallback is used, it will return a `timeoutID` that must be passed to the
`cancelRequestAnimFrame` method.
