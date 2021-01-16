let $menuBox = $('.menuBox');
$menuBox.on('click', function(e) {
  let target = e.target, // 获取事件源(想要操作的元素)
    $target = $(target), // 原生js事件对象转为jq对象
    tarTag = target.tagName; // 获取当前操作的元素的标签名
  if (tarTag === 'EM') { // 如果当前标签名为em
    $target = $target.next(); // 获取当前元素的下一个弟弟元素
    target = $target[0]; // jq对象转为原生js
    tarTag = target.tagName // 获取当前元素的弟弟的标签名
  }
  if (tarTag === 'SPAN') {
    let $ul = $target.next('ul'), // 获取当前元素下一个标签名为ul的弟弟
      $em = $target.prev('em') // 获取当前元素上个哥哥标签名为em的元素
    let promise = new Promise(resolve => { // 因为sildeToggle是异步动画，可以使用Promise
      $ul.stop().slideToggle(200, () => {
        // 动画切换200ms后执行resolve方法
        resolve()
      })
    })
    if ($em.hasClass('plus')) {
      $em.addClass('minus').removeClass('plus');
      // $ul.stop().slideDown(200)
    } else {
      $em.addClass('plus').removeClass('minus');
      // $ul.stop().slideUp(200)
      promise.then(() => { // then方法中的回调函数就是resolve
        $ul.find('em').addClass('plus').removeClass('minus')
        $ul.find('ul').css('display', 'none')
      })
    }
  }
})
