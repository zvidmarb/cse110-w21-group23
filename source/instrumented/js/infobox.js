function cov_28erlz2mlq() {
  var path = "/Users/caijicang/Desktop/CS/CSE110/cse110-w21-group23/source/js/infobox.js";
  var hash = "d9836fa8b20b41d59d316edd2911d959dfc55560";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/caijicang/Desktop/CS/CSE110/cse110-w21-group23/source/js/infobox.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 3,
          column: 44
        }
      },
      "1": {
        start: {
          line: 7,
          column: 12
        },
        end: {
          line: 7,
          column: 50
        }
      },
      "2": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "3": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 30
        }
      },
      "4": {
        start: {
          line: 18,
          column: 14
        },
        end: {
          line: 18,
          column: 51
        }
      },
      "5": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "6": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 29
        }
      },
      "7": {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 36,
          column: 1
        }
      },
      "8": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "9": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 14
          },
          end: {
            line: 13,
            column: 15
          }
        },
        loc: {
          start: {
            line: 13,
            column: 26
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 24,
            column: 16
          },
          end: {
            line: 24,
            column: 17
          }
        },
        loc: {
          start: {
            line: 24,
            column: 28
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 24
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 32,
            column: 17
          },
          end: {
            line: 32,
            column: 18
          }
        },
        loc: {
          start: {
            line: 32,
            column: 34
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 32
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        }, {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        }],
        line: 33
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d9836fa8b20b41d59d316edd2911d959dfc55560"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_28erlz2mlq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_28erlz2mlq();
// Testing out code
// Get the info box
const info = (cov_28erlz2mlq().s[0]++, document.getElementById('info')); // Open info box when the question mark is clicked
// (We need to set this up with our question mark icon)

const btn = (cov_28erlz2mlq().s[1]++, document.getElementById('info-button'));
/**
 * Open info box when the question mark is clicked
 * @return void
 */

cov_28erlz2mlq().s[2]++;

btn.onclick = function () {
  cov_28erlz2mlq().f[0]++;
  cov_28erlz2mlq().s[3]++;
  info.style.display = 'block';
}; // Close the Info Box when we click on the x


const close = (cov_28erlz2mlq().s[4]++, document.getElementById('info-close'));
/**
 * Close the Info Box when we click on the x
 * @return void
 */

cov_28erlz2mlq().s[5]++;

close.onclick = function () {
  cov_28erlz2mlq().f[1]++;
  cov_28erlz2mlq().s[6]++;
  info.style.display = 'none';
};
/**
 *  Close the Info Box if we click anywhere else on the page
 *  @return void
 */


cov_28erlz2mlq().s[7]++;

window.onclick = function (event) {
  cov_28erlz2mlq().f[2]++;
  cov_28erlz2mlq().s[8]++;

  if (event.target === info) {
    cov_28erlz2mlq().b[0][0]++;
    cov_28erlz2mlq().s[9]++;
    info.style.display = 'none';
  } else {
    cov_28erlz2mlq().b[0][1]++;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ib3guanMiXSwibmFtZXMiOlsiaW5mbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJidG4iLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xvc2UiLCJ3aW5kb3ciLCJldmVudCIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaO0FBQ0E7QUFDQSxNQUFNQSxJQUFJLDZCQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBSCxDQUFWLEMsQ0FFQTtBQUNBOztBQUNBLE1BQU1DLEdBQUcsNkJBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFILENBQVQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBQyxHQUFHLENBQUNDLE9BQUosR0FBYyxZQUFZO0FBQUE7QUFBQTtBQUN4QkosRUFBQUEsSUFBSSxDQUFDSyxLQUFMLENBQVdDLE9BQVgsR0FBcUIsT0FBckI7QUFDRCxDQUZELEMsQ0FJQTs7O0FBQ0EsTUFBTUMsS0FBSyw2QkFBR04sUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQUgsQ0FBWDtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0FLLEtBQUssQ0FBQ0gsT0FBTixHQUFnQixZQUFZO0FBQUE7QUFBQTtBQUMxQkosRUFBQUEsSUFBSSxDQUFDSyxLQUFMLENBQVdDLE9BQVgsR0FBcUIsTUFBckI7QUFDRCxDQUZEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0FFLE1BQU0sQ0FBQ0osT0FBUCxHQUFpQixVQUFVSyxLQUFWLEVBQWlCO0FBQUE7QUFBQTs7QUFDaEMsTUFBSUEsS0FBSyxDQUFDQyxNQUFOLEtBQWlCVixJQUFyQixFQUEyQjtBQUFBO0FBQUE7QUFDekJBLElBQUFBLElBQUksQ0FBQ0ssS0FBTCxDQUFXQyxPQUFYLEdBQXFCLE1BQXJCO0FBQ0QsR0FGRDtBQUFBO0FBQUE7QUFHRCxDQUpEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGVzdGluZyBvdXQgY29kZVxuLy8gR2V0IHRoZSBpbmZvIGJveFxuY29uc3QgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvJylcblxuLy8gT3BlbiBpbmZvIGJveCB3aGVuIHRoZSBxdWVzdGlvbiBtYXJrIGlzIGNsaWNrZWRcbi8vIChXZSBuZWVkIHRvIHNldCB0aGlzIHVwIHdpdGggb3VyIHF1ZXN0aW9uIG1hcmsgaWNvbilcbmNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWJ1dHRvbicpXG5cbi8qKlxuICogT3BlbiBpbmZvIGJveCB3aGVuIHRoZSBxdWVzdGlvbiBtYXJrIGlzIGNsaWNrZWRcbiAqIEByZXR1cm4gdm9pZFxuICovXG5idG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgaW5mby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xufVxuXG4vLyBDbG9zZSB0aGUgSW5mbyBCb3ggd2hlbiB3ZSBjbGljayBvbiB0aGUgeFxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1jbG9zZScpXG5cbi8qKlxuICogQ2xvc2UgdGhlIEluZm8gQm94IHdoZW4gd2UgY2xpY2sgb24gdGhlIHhcbiAqIEByZXR1cm4gdm9pZFxuICovXG5jbG9zZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn1cblxuLyoqXG4gKiAgQ2xvc2UgdGhlIEluZm8gQm94IGlmIHdlIGNsaWNrIGFueXdoZXJlIGVsc2Ugb24gdGhlIHBhZ2VcbiAqICBAcmV0dXJuIHZvaWRcbiAqL1xud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gaW5mbykge1xuICAgIGluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9XG59XG4iXX0=