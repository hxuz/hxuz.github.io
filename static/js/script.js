/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
    // document.getElementById("nav-bar").style.backgroundColor = "hsla(0, 0%, 20%, 0.85)";
  } else {
    document.getElementById("nav-bar").style.top = "-144px";
  }
  prevScrollpos = currentScrollPos;
}

// /* Show and hide popup window */
// window.onload = function() {
// 	$("#overlay").show();
// 	$("#overlay").appendTo(document.body);
// 	$("#popup").show();
// 	$("#close-button").click(function() {
// 		$("#popup").hide();
// 		$("#overlay").appendTo(document.body).remove();
// 		return false;
// 	});
// };



// var homeCover = document.getElementById('homeCover');
// var homeProj1 = document.getElementById('homeProj1');
// var homeProj2 = document.getElementById('homeProj2');
// var homeProj3 = document.getElementById('homeProj3');
// var homeProj4 = document.getElementById('homeProj4');
// var homeFooter = document.getElementById('homeFooter');

// var coverTop = homeCover.getBoundingClientRect().top;
// var proj1Top = homeProj1.getBoundingClientRect().top - coverTop;
// var proj2Top = homeProj2.getBoundingClientRect().top - coverTop;
// var proj3Top = homeProj3.getBoundingClientRect().top - coverTop;
// var proj4Top = homeProj4.getBoundingClientRect().top - coverTop;
// var footerTop = homeFooter.getBoundingClientRect().top - coverTop;

// console.log("c:", coverTop);
// console.log("1:", proj1Top);
// console.log("2:", proj2Top);
// console.log("3:", proj3Top);
// console.log("4:", proj4Top);

// check scroll position:
// window.addEventListener('scroll', function() {
//   const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   //debug check:
//   console.log("Current scroll position:", currentScrollTop);
//   console.log("Previous scroll position:", lastScrollTop);

//   lastScrollTop = currentScrollTop;

//   console.log("New previous scroll position:", lastScrollTop);
// });

// var lastScrollTop = 0;

// window.onscroll = function() {
//   var st = window.pageYOffset || document.documentElement.scrollTop;

//   //debug check:
//   console.log("st:", st);
//   console.log("lst", lastScrollTop);

//   // if (lastScrollTop < proj1Top && st > lastScrollTop) {
//   //   document.onscroll = function scroll() {
//   //     homeProj1.scrollIntoView({behavior: "smooth"});
//   //   }
//   // }

//   // if (0 <= lastScrollTop < proj1Top) {
//   //   if (st > lastScrollTop) {
//   //     homeProj1.scrollIntoView({behavior: "smooth"});
//   //   } else if (st < lastScrollTop) {
//   //     homeCover.scrollIntoView({behavior: "smooth"});
//   //   }
//   // }

//   var coverCenter = proj1Top * 0.5;
//   var center1 = proj2Top * 0.75;
//   var center2 = proj3Top * 0.83;
//   var center3 = proj4Top * 0.875;
//   var center4 = footerTop * 0.9;

//   if ((coverTop <= lastScrollTop < coverCenter) && (st > lastScrollTop)) {
//     document.onscroll = function scroll() {
//       homeProj1.scrollIntoView({behavior: "smooth"});
//     }
//     // lastScrollTop = st <= 0 ? 0 : st;
//   }

//   if ((coverCenter <= lastScrollTop < center1) && (st > lastScrollTop)) {
//     document.onscroll = function scroll() {
//       homeProj2.scrollIntoView({behavior: "smooth"});
//     }
//     // lastScrollTop = st <= 0 ? 0 : st;
//   }

//   if ((center2 <= lastScrollTop < center3) && (st > lastScrollTop)) {
//     document.onscroll = function scroll() {
//       homeProj3.scrollIntoView({behavior: "smooth"});
//     }
//     // lastScrollTop = st <= 0 ? 0 : st;
//   }

//   if ((center3 <= lastScrollTop < center4) && (st > lastScrollTop)) {
//     document.onscroll = function scroll() {
//       homeProj4.scrollIntoView({behavior: "smooth"});
//     }
//     // lastScrollTop = st <= 0 ? 0 : st;
//   }

//   if ((coverCenter <= lastScrollTop < center1) && (st < lastScrollTop)) {
//     document.onscroll = function scroll() {
//       homeCover.scrollIntoView({behavior: "smooth"});
//     }
//     // lastScrollTop = st <= 0 ? 0 : st;
//   }

//   if ((center1 <= lastScrollTop < center2) && (st < lastScrollTop)) {
//     document.onscroll = function scroll() {
//       homeProj1.scrollIntoView({behavior: "smooth"});
//     }
//     // lastScrollTop = st <= 0 ? 0 : st;
//   }

//   if ((center2 <= lastScrollTop < center3) && (st < lastScrollTop)) {
//     document.onscroll = function scroll() {
//       homeProj2.scrollIntoView({behavior: "smooth"});
//     }
//     // lastScrollTop = st <= 0 ? 0 : st;
//   }

//   if ((center3 <= lastScrollTop < center4) && (st < lastScrollTop)) {
//     document.onscroll = function scroll() {
//       homeProj3.scrollIntoView({behavior: "smooth"});
//     }
//     // lastScrollTop = st <= 0 ? 0 : st;
//   }

//   lastScrollTop = st <= 0 ? 0 : st;

//   console.log((coverTop <= lastScrollTop < coverCenter) && (st > lastScrollTop));
//   console.log((coverCenter <= lastScrollTop < center1) && (st > lastScrollTop));
//   console.log((center1 <= lastScrollTop < center2) && (st > lastScrollTop));
//   console.log((center2 <= lastScrollTop < center3) && (st > lastScrollTop));
//   console.log((center3 <= lastScrollTop < center4) && (st > lastScrollTop));
// }

// document.onscroll = function scroll() {
//   homeProj2.scrollIntoView({behavior: "smooth"});
// }

// document.onscroll = function scroll() {
//   homeProj3.scrollIntoView({behavior: "smooth"});
// }

// document.onscroll = function scroll() {
//   homeProj4.scrollIntoView({behavior: "smooth"});
// }

// window.onscroll = function(){
//    var st = window.pageYOffset || document.documentElement.scrollTop;
//    if (st > lastScrollTop){
//       homeProj1.scrollIntoView({behavior: "smooth"});
//    } else {
//       homeCover.scrollIntoView({behavior: "smooth"});
//    }
//    lastScrollTop = st <= 0 ? 0 : st;
// }