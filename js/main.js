window.onload = function () {
  var apple = 2000;
  var banana = 3000;
  var total = apple + banana;
  var totalA = apple * banana;
  var totalB = apple - banana;

  console.log(apple);
  console.log(banana);

  document.write(
    `<p class = total>사과랑 바나나의 합은 ${total}원 입니다 ~ ❤ </p>`
  );
  document.write(
    `<p class = totalA>사과랑 바나나의 곱은 ${totalA} 입니다 ~</p>`
  );
  document.write(`<p>사과랑 바나나의 빼기는 ${totalB} 입니다</p>`);
};
