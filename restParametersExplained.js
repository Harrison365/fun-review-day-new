let func = (a) => {
  console.log(a);
};

func(1, 2, 3, 4);
//won't work

//but

let func2 = (...a) => {
  console.log(...a);
};

func2(1, 2, 3, 4);
//will work
