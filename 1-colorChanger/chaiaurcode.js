let spanTag = document.querySelectorAll('.button');
let bodyTag = document.querySelectorAll('.canvas');
spanTag.forEach((element) => {
  element.addEventListener('click', function () {
    document.body.style.backgroundColor = element.id;
  });
});
