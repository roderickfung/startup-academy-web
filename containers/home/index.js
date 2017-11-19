import React from 'react';

class Home extends React.Component {

  render() {
    return(

    );
  }
}

export default Main;


// function numGeneratorEffect(e) {
//   $('.stats-number').each(function (index) {
//     var desired = ($(this).attr('data-value'));
//     var isEmpty = $(this).text() == '';
//     if (window.pageYOffset > 4000 && isEmpty) {
//       var output, started, duration

//       duration = 500;

//       output = $(this);
//       started = new Date().getTime();

//       if ($(window).scrollTop() > 60) {
//         animationTimer = setInterval(function () {
//           if (new Date().getTime() - started > duration) {
//             clearInterval(animationTimer);
//             setNumber()
//           } else {
//             output.text(
//               '' +
//               Math.floor(Math.random() * 10) +
//               Math.floor(Math.random() * 10),
//             );
//           }
//         }, 100);
//         var setNumber = function () {
//           if (index === 3) {
//             if (desired > 999) {
//               output.text('' + parseFloat(desired / 1000).toFixed(0) + 'k')
//             } else {
//               output.text('' + desired)
//             }
//           } else {
//             output.text('' + desired)
//           }
//         }
//       }
//     };
//   })
// }
// window.onscroll = numGeneratorEffect

// var dialog = $("#speaker-modal").dialog({
//   autoOpen: false,
//   height: 400,
//   width: 350,
//   modal: true,
//   closeText: "Close",
//   close: function () {
//     dialog.dialog("close");
//   }
// });


// $(".speaker-item-container").button().on("click", function () {
//   dialog.dialog("open");
// });