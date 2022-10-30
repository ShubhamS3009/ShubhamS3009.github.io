const body = document.querySelector('body');
const av_colors = ['red', 'green', 'blue','yellow','purple'];
 function textColorChange()
 {
    let num = Math.random();
    console.log("Random Number", num);

    let len = av_colors.length;
    console.log("Current color list length :", len);

    let index = num*len;
    console.log("Multiplication of random num and color length", index);

    let int_index = parseInt(index);
    console.log("Available color:",int_index);

    text.style.color = av_colors[int_index];
 }
  function bgColorChange ()
  {
    let num = Math.random();
    let len = av_colors.length;
    let index = num*len;
    let int_index = parseInt(index);
    body.style.backgroundColor = av_colors[int_index];
  }