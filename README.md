
ecipeapp@0.1.0 test /projects/challenge

> rm -rf ./test-report.xml && CI=true ./node_modules/.bin/react-scripts test --verbose --env=jsdom --testResultsProcessor ./node_modules/jest-junit-reporter

FAIL src/App.test.js

  testing App component

    ✓ Header content (25ms)

    ✓ Recipe container (8ms)

    ✕ Add Recipe (50ms)

    ✓ pop and pop out Modal (12ms)

    ✕ display recipe modal (81ms)

    ✓ Search Bar (7ms)

  ● testing App component › Add Recipe

    TypeError: Cannot read property 'ingredients' of undefined

      70 |     });

      71 |     addBuuton.simulate("click");

    > 72 |     expect(component.state().recipes[6].ingredients).toStrictEqual([

         |            ^

      73 |       "Bread slices",

      74 |       "egg",

      75 |       "milk",

      at Object.test (src/App.test.js:72:12)

  ● testing App component › display recipe modal

    TypeError: Cannot read property 'target' of undefined

      63 |     this.setState({ mode: true });

      64 |

    > 65 |     const res = i.target.parentElement.id;

         |                   ^

      66 |

      67 |     const reci = this.state.recipes[res];

      68 |     this.setState({

      at App.handleView.i (src/App.js:65:19)

      at fn (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:801:20)

      at withSetStateAllowed (node_modules/enzyme-adapter-utils/src/Utils.js:100:18)

      at Object.simulateEvent (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:797:11)

      at ShallowWrapper.call (node_modules/enzyme/src/ShallowWrapper.js:1134:7)

      at ShallowWrapper.single (node_modules/enzyme/src/ShallowWrapper.js:1654:21)

      at ShallowWrapper.simulate (node_modules/enzyme/src/ShallowWrapper.js:1133:17)

      at Object.test (src/App.test.js:104:20)

Test Suites: 1 failed, 1 total

Tests:       2 failed, 4 passed, 6 total

Snapshots:   0 total

Time:        2.545s

Ran all test suites.

npm ERR! Test failed.  See above for more details.
