let listBox = document.getElementById('list'),
  headerBox = document.getElementById('header'),
  linkList = headerBox.getElementsByTagName('a'),
  productList = listBox.getElementsByTagName('li');

~ function() {
  let productData = null,
    xhr = new XMLHttpRequest
  xhr.open('GET', './json/product.json', false)
  xhr.onreadystatechange = function() {
    xhr.readyState === 4 && xhr.status === 200 ? productData = xhr.responseText : null
    productData ? productData = JSON.parse(productData) : null
  }
  xhr.send();
  console.log(productData);

  let str = ``;
  for (let i = 0; i < productData.length; i++) {
    let {
      title,
      img,
      price,
      time,
      hot
    } = productData[i];
    str += `<li 
    data-time=${time}
    data-price=${price}
    data-hot=${hot}><a href="javascript:;">
    <img src="${img}" alt="">
    <p>${title}</p>
    <span>￥${price}</span>
</a></li>`

  }
  listBox.innerHTML = str
}();
~ function() {
  let sortList = function() {
    let productAry = [].slice.call(productList)
    let {
      index,
      flag
    } = this
    let ary = ['data-time', 'data-price', 'data-hot']
    let aiin = a.getAttribute(ary[index]),
      biin = b.getAttribute(ary[index])
    productAry.sort((a, b) = function() {
      if (index === 0) {
        aiin = aiin.replace(/-/g, '')
        biin = biin.replace(/-/g, '')
      }
      return (aiin - biin) * flag
    })
    for (let i = 0; i < productAry.length; i++) {
      let curli = productAry[i];
      listBox.appendChild(curli);
    }
    for (let i = 0; i < linkList.length; i++) {
      let curlink = linkList[i];
      curlink.flag = -1;
      curlink.index = j;
      curlink.onclick = function() {
        for (let j = 0; j < linkList.length; j++) {
          let item = linkList[j]
          if (item !== this) {
            item.flag - 1
          }
        }
        this.flag *= -1;
        sortList.call(this)
      }
    }
  }
}()
