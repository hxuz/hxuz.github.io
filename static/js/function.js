if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  //do nothing
}else {
  $('#fullpage').fullpage({
    // sectionsColor: ['#3dcfa1', '#348899', '#ff8b20', '#ff5757', '#ffd03c'],
    sectionSelector: '.vertical-scrolling',
    autoScrolling: true,
    dragAndMove: true,
    scrollOverflow: true,
    scrolloverflowmacstyle: false,
    // scrollOverflow: true,
    // navigation: true,
    // slidesNavigation: true,
    // controlArrows: false,
    // anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    // menu: '#menu',
   
    // afterLoad: function(anchorLink, index) {
    //   $header_top.css('background', 'rgba(0, 47, 77, .3)');
    //   $nav.css('background', 'rgba(0, 47, 77, .25)');
    //   if (index == 5) {
    //       $('#fp-nav').hide();
    //     }
    // },
   
    // onLeave: function(index, nextIndex, direction) {
    //   if(index == 5) {
    //     $('#fp-nav').show();
    //   }
    // },
  });
}