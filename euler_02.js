<!doctype html>
<html>
<head>
  <title>I &hearts; Initials</title>
</head>
<body>
  <script type="text/javascript">

    var fibonacci = [1, 2];
    var number = 2;
    while (number < 4000000) {
      var lastIndex = fibonacci.length-1;
      var prevIndex = lastIndex-1;
      fibonacci.push(fibonacci[lastIndex]+fibonacci[prevIndex]);
      number = fibonacci[lastIndex];
    };

    var myTotal = 0;
    fibonacci.forEach(function(number, index){
      if (number % 2 === 0){
       myTotal += number;
      };
    });

    console.log(myTotal);

  </script>
</body>
</html>
