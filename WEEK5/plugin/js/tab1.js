let tabBox = document.querySelector('#tabBox'),
  childAry = [].slice.call(tabBox.children),
  option = null,
  optionList = null,
  conList = null

let hasClass = (ele, str) => ele.className.trim().split(/ +/).indexOf(str) >= 0;

let addClass = (ele, str) => {
  let isHas = hasClass(ele, str);
  if (isHas) return;
  ele.className += ` ${str}`
}

let removeClass = (ele, str) => {
  let isHas = hasClass(ele, str);
  if (!isHas) return;
  let ary = ele.className.trim().split(/ +/);
  ary = ary.filter(item => item !== str);
  ele.className = ary.join(' ');
}

option = childAry.filter(item => hasClass(item, 'option'))
option = option.length > 0 ? option[0] : null;
optionList = [].filter.call(option.children, item => item.tagName === 'LI');
conList = childAry.filter(item => hasClass(item, 'con'));

let lastIndex = 0;
optionList.forEach((item, index) => {
  item.onmouseover = function asyncs() {
    if (lastIndex === index) return;
    addClass(item, 'active');
    removeClass(optionList[lastIndex], 'active');

    addClass(conList[index], 'active');
    removeClass(conList[lastIndex], 'active');

    lastIndex = index;
  }
})
