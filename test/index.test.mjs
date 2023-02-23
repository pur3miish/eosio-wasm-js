import TestDirector from "test-director/TestDirector.mjs";

import wasm from "./wasm.test.mjs";

const tests = new TestDirector();
wasm(tests);
tests.run();
