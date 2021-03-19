function cov_17w1kef5zz() {
  var path = "/Users/caijicang/Desktop/CS/CSE110/cse110-w21-group23/source/CypressTests/cypress/plugins/index.js";
  var hash = "11a9d63b29265706526d06150538b7d4fdf17727";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/caijicang/Desktop/CS/CSE110/cse110-w21-group23/source/CypressTests/cypress/plugins/index.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "1": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 52
        }
      },
      "2": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 72
        }
      },
      "3": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 17
          },
          end: {
            line: 19,
            column: 18
          }
        },
        loc: {
          start: {
            line: 19,
            column: 33
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 19
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "11a9d63b29265706526d06150538b7d4fdf17727"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_17w1kef5zz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_17w1kef5zz();
cov_17w1kef5zz().s[0]++;

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  cov_17w1kef5zz().f[0]++;
  cov_17w1kef5zz().s[1]++;

  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  require('@cypress/code-coverage/task')(on, config);

  cov_17w1kef5zz().s[2]++;
  on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
  cov_17w1kef5zz().s[3]++;
  return config;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJvbiIsImNvbmZpZyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7Ozs7QUFmWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLENBQUNDLEVBQUQsRUFBS0MsTUFBTCxLQUFnQjtBQUFBO0FBQUE7O0FBQy9CO0FBQ0E7QUFDQUMsRUFBQUEsT0FBTyxDQUFDLDZCQUFELENBQVAsQ0FBdUNGLEVBQXZDLEVBQTJDQyxNQUEzQzs7QUFIK0I7QUFJL0JELEVBQUFBLEVBQUUsQ0FBQyxtQkFBRCxFQUFzQkUsT0FBTyxDQUFDLG9DQUFELENBQTdCLENBQUY7QUFKK0I7QUFLL0IsU0FBT0QsTUFBUDtBQUNELENBTkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIFRoaXMgZXhhbXBsZSBwbHVnaW5zL2luZGV4LmpzIGNhbiBiZSB1c2VkIHRvIGxvYWQgcGx1Z2luc1xuLy9cbi8vIFlvdSBjYW4gY2hhbmdlIHRoZSBsb2NhdGlvbiBvZiB0aGlzIGZpbGUgb3IgdHVybiBvZmYgbG9hZGluZ1xuLy8gdGhlIHBsdWdpbnMgZmlsZSB3aXRoIHRoZSAncGx1Z2luc0ZpbGUnIGNvbmZpZ3VyYXRpb24gb3B0aW9uLlxuLy9cbi8vIFlvdSBjYW4gcmVhZCBtb3JlIGhlcmU6XG4vLyBodHRwczovL29uLmN5cHJlc3MuaW8vcGx1Z2lucy1ndWlkZVxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiBhIHByb2plY3QgaXMgb3BlbmVkIG9yIHJlLW9wZW5lZCAoZS5nLiBkdWUgdG9cbi8vIHRoZSBwcm9qZWN0J3MgY29uZmlnIGNoYW5naW5nKVxuXG4vKipcbiAqIEB0eXBlIHtDeXByZXNzLlBsdWdpbkNvbmZpZ31cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5tb2R1bGUuZXhwb3J0cyA9IChvbiwgY29uZmlnKSA9PiB7XG4gIC8vIGBvbmAgaXMgdXNlZCB0byBob29rIGludG8gdmFyaW91cyBldmVudHMgQ3lwcmVzcyBlbWl0c1xuICAvLyBgY29uZmlnYCBpcyB0aGUgcmVzb2x2ZWQgQ3lwcmVzcyBjb25maWdcbiAgcmVxdWlyZSgnQGN5cHJlc3MvY29kZS1jb3ZlcmFnZS90YXNrJykob24sIGNvbmZpZylcbiAgb24oJ2ZpbGU6cHJlcHJvY2Vzc29yJywgcmVxdWlyZSgnQGN5cHJlc3MvY29kZS1jb3ZlcmFnZS91c2UtYmFiZWxyYycpKVxuICByZXR1cm4gY29uZmlnXG59XG4iXX0=