//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

import * as MotionWordTests from './MotionWord.test';
import * as MotionIntegrationTest from './MotionIntegration.test';
import * as TextObjectsWordTest from './TextObjects/Word.test';
import * as ActionSelectionTest from './Actions/Selection.test';

// Defines a Mocha test suite to group tests of similar kind together
suite('Extension Tests', () => {
    MotionWordTests.run();
    MotionIntegrationTest.run();

    ActionSelectionTest.run();

    TextObjectsWordTest.run();
});
