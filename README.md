<a href="http://promises-aplus.github.com/promises-spec">
    <img src="http://promises-aplus.github.com/promises-spec/assets/logo-small.png"
         align="right" alt="Promises/A+ logo" />
</a>

# Promises/A+ Compliance Test Suite, Running Against Your Browser!

This repo contains files for running the [Promises/A+][] specification [tests][] against the browser's `Promise` global.
The `Promise` global is meant to conform to the [ES6 promises specification][], which is entirely compliant with
Promises/A+ but also adds additional APIs and requirements.

In practice, this means that there is still a lot of test coverage left to go before we fully cover the ES6 spec. Right
now we have, via the Promises/A+ suite, *very* extensive tests of the `.then` method, and indirectly of the `Promise`
constructor itself, and the `Promise.resolve` and `Promise.reject` static methods. The subtleties of `Promise.all`,
`Promise.cast`, `Promise.race`, and even the not-so-subtleties of `Promise.prototype.catch`, will need to wait for
better tests.

That said, this should provide a nice minimum bar for implementers to aspire to! Hey implementers: if you need help,
check out any of the many [Promises/A+ implementations][] passing these tests, or the [reference implementation][] that
comes with the spec.

[Promises/A+]: http://promisesaplus.com/
[tests]: https://github.com/promises-aplus/promises-tests
[ES6 promises specification]: https://github.com/domenic/promises-unwrapping
[Promises/A+ implementations]: http://promisesaplus.com/implementations
[reference implementation]: https://github.com/domenic/promises-unwrapping/blob/master/testable-implementation.js

## Further Work

This was hacked together in an hour by browserifying the Promises/A+ tests and wrapping the result in a custom HTML
page. I'm even committing the bundle to source control so as to make it easier to view on GitHub pages; ick!

Ideally, we need to put together [test-262][] tests for the ES6 promise spec. We should probably build out on the areas
that are _not_ covered by the Promises/A+ tests first. This effort is being tracked
[in the ES6 promises spec issue tracker][testable-implementation issues].

From another angle, if you're interested in getting the Promises/A+ tests more easily run in the browser without hackery
like this, against any library, your ideas would be welcome over at
[the Promises/A+ tests issue tracker][promises-tests issues].

[test-262]: http://test262.ecmascript.org/
[testable-implementation issues]: https://github.com/domenic/promises-unwrapping/issues?labels=testable-implementation
[promises-tests issues]: https://github.com/promises-aplus/promises-tests/issues/15
