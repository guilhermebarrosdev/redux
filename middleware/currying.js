const li = Array.from(document.querySelectorAll('li'));

// Função normal
// function getElementAttr(key) {
//   return function (element) {
//     return element.getAttribute(key);
//   };
// }

// Função refatorada
const getElementAttr = (key) => (el) => el.getAttribute(key);

const getAttrDataSlide = getElementAttr('data-slide');
const getAttrId = getElementAttr('id');

const dataSlideList = li.map(getAttrDataSlide);
const idList = li.map(getAttrId);

console.log(dataSlideList);
console.log(idList);
