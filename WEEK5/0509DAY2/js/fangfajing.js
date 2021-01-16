$(function() {
  let $magnifierBox = $('.magnifierBox'),
    $smallBox = $magnifierBox.find('.smallBox'),
    $mark = $smallBox.find('.mark'),
    $bigBox = $magnifierBox.find('.bigBox'),
    $bigBoxImg = $bigBox.find('img')
  $smallBox.on('mouseenter', function() {
    $mark.css('display', 'block');
    $bigBox.css('display', 'block');
  }).on('mouseleave', function() {
    $mark.css('display', 'none');
    $bigBox.css('display', 'none');
  }).on('mousemove', function(e) {
    computedBox(e)
  })

  function computedBox(e) {
    let offsetObj = $smallBox.offset(),
      curL = e.pageX - offsetObj.left - $mark.outerWidth() / 2,
      curT = e.pageY - offsetObj.top - $mark.outerHeight() / 2
    let minL = 0,
      minT = 0,
      maxL = $smallBox.outerWidth() - $mark.outerWidth(),
      maxT = $smallBox.outerHeight() - $mark.outerHeight()
    curL = curL < minL ? minL : (curL > maxL ? maxL : curL)
    curT = curT < minT ? minT : (curT > maxT ? maxT : curT)
    $mark.css({
      left: curL,
      top: curT
    })
    $bigBoxImg.css({
      left: -curL * 3,
      top: -curT * 3
    })
  }
})
