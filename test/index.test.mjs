import TestDirector from 'test-director'
import wasm from './wasm.test.mjs'

const tests = new TestDirector()
wasm(tests)
tests.run()
