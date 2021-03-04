// const sum = require("../js/sum");


// describe('Test if block active when it is clicked', () => {
//     test('Click is working', () => { 
//         btn.click()
//         expect(info.style.display).toBe('block')
//     })
// })


const info = document.getElementById("info");
const btn = document.getElementById("mybtn");


// test("Test the click button", () => {
//   // Temporary test while the codebase is setup
//   expect(1).toBe(1);
// });



test('Test if block active when it is clicked', () => { 
  const btnOnclick = btn.onclick('mybtn')
  btnOnclick.onclick()
  expect(btnOnclick.content).toBe('info-box')
})

// test("Test if block active when it is clicked", () => {
//   const btnOnclick = document.getElementsById('mybtn');
//   btnOnclick.onclick()
//   expect(btnOnclick.inf.style.display).toBe(true);
// });