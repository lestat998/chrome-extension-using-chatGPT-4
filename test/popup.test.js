document.body.innerHTML = `
  <div>
    <button id="pastHour"></button>
    <button id="pastDay"></button>
    <button id="pastMinute"></button>
    <button id="pastWeek"></button>
    <button id="pastMonth"></button>
    <button id="allHistory"></button>
    <p id="lastCleared"></p>
  </div>
`;

require('../src/popup/popup.js');

test('buttons have click event listeners', () => {
  expect(document.getElementById('pastHour').onclick).toBeDefined();
  expect(document.getElementById('pastDay').onclick).toBeDefined();
  expect(document.getElementById('pastMinute').onclick).toBeDefined();
  expect(document.getElementById('pastWeek').onclick).toBeDefined();
  expect(document.getElementById('pastMonth').onclick).toBeDefined();
  expect(document.getElementById('allHistory').onclick).toBeDefined();
});