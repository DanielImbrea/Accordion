const accordion = document.querySelectorAll('.panel');
accordion.forEach(function (ele) {
  ele.addEventListener('click', function (e) {
    if (e.target.parentElement === ele) {
      ele.classList.toggle('active');
    } else {
      ele.classList.remove('active');
    }
  });
});





// const allActives = document.querySelectorAll('.active');
// allActives.forEach(function (ele) {
//   if (e.target.parentElement === ele) {
//     ele.classList.toggle('active');
//   } else {
//     ele.classList.remove('active');
//   }
// });
// console.log(e);
// console.log(this);
// console.log(e.target);
