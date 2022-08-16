let marqueeText = document.querySelector('.marquee p');

    function getMarqueeWidth () {;
      return document.querySelector('.marquee').offsetWidth;
    }
    let marqueeWidth = getMarqueeWidth();

    function marquee () {
      marqueeWidth -= 1;
      marqueeText.style.left = marqueeWidth + 'px';
      // if (marqueeWidth < marqueeTextWidth * -1) {
      //   marqueeWidth = getMarqueeWidth();
      // }
      let marqueeTextWidth = document.querySelector('.marquee p').offsetWidth;
      if (marqueeWidth + marqueeTextWidth === getMarqueeWidth()) {
        addElement ();
      }
    }
    let marqueeEffect = setInterval(marquee, 20);


    document.body.onload = addElement;
    
    let marqueeContent = '';

    function addElement () {
      marqueeContent += '  ➜  ➜  ➜ 交通資訊公告：英才路與公益路口將於111/8/2 ~ 111/8/5 進行道路施工，造成不便，敬請見諒！ ヾ(⌒(_´･ㅅ･`)_'
      let container = document.querySelector(".marquee p");
      container.innerText = marqueeContent;
    }