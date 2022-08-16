var newdata = [
    {
        img: './img/news1.jpeg',
        date: '2022/05/16',
        title: '《我出去一下．生活裝飾篇》活動取消公告',
        text: `本週的天氣仍不穩定，期望讓參與活動的品牌主理人、和來到這裡遊逛的大家，都能夠完整體驗到活動的呈現，故審慎評估過後，決定本週《我出去一下．生活裝飾篇》活動取消。<br>但星際大戰為主題的品牌出店計畫仍會在 PARK2 B1舉行！除了會在現場販售星際大戰相關的周邊外，也邀請到重量級的星戰收藏家，在5/7活動當天帶來期間限定的精緻收藏展示！星戰迷絕對不能錯過！`
    },
    {
        img: './img/news2.jpeg',
        date: '2022/04/30',
        title: '【新村站著吃烤肉】營業時間異動公告',
        text: `因應疫情狀況，新村站著吃烤肉員工採取分流上班制，<br>為讓每位客人都能夠享有完整的桌邊服務，<br>故營業開放調整如下：<br>➜5/14-5/15本週末暫不開放內用，僅提供外送及外帶服務！<br>➜5/16-5/22，內用僅開放7桌部分座位！<br>➜5/23起恢復正常營業<br>.<br>造成不便，敬請見諒！`
    },
    {
        img: './img/news3.jpeg',
        date: '2022/04/13',
        title: '【公園裡的星期天】營業時間異動公告',
        text: `4/30(三)起 Sunday in the Park 公園裡的星期天<br>營業時間調整如下：<br>9 : 00 - 20 : 00 (最後點餐時間為 19 : 00 )<br>--------------------------------------<br>▪ 線上訂位：https://reurl.cc/XjX8W3<br>▪ 電話：04 - 2305 - 09290929<br>▪ 地點： PARK2草悟廣場 B1`
    },
    {
        img: './img/news4.jpeg',
        date: '2022/04/01',
        title: '【Rockland】營業時間異動公告',
        text: `【Rockland】及【Rockland PLUS 】因春酒及員工教育訓練，營業時間調整如下：<br>
    ▪ 4/18 (一) 公休一日<br>
    ▪ 4/19 (二) 延後至 14 : 00 開始營業`
    }
];


// 帶入arr資料
$(".flip>span").html(`${newdata[0].title}<p class="home_newsDateTitle">公告時間 | <span class="home_newsDate">${newdata[0].date}</span></p>
`);
$(".panel>p").html(`${newdata[0].text}`);
$(".flip1>span").html(`${newdata[1].title}<p class="home_newsDateTitle">公告時間 | <span class="home_newsDate">${newdata[1].date}</span></p>
`);
$(".panel1>p").html(`${newdata[1].text}`);
$(".flip2>span").html(`${newdata[2].title}<p class="home_newsDateTitle">公告時間 | <span class="home_newsDate">${newdata[2].date}</span></p>
`);
$(".panel2>p").html(`${newdata[2].text}`);
$(".flip3>span").html(`${newdata[3].title}<p class="home_newsDateTitle">公告時間 | <span class="home_newsDate">${newdata[3].date}</span></p>
`);
$(".panel3>p").html(`${newdata[3].text}`);





//click展開
$(function () {
    $(".flip").click(function () {
        //display狀態
        var panelState = [
            $('.panel').css('display'),
            $('.panel1').css('display'),
            $('.panel2').css('display'),
            $('.panel3').css('display')
        ];

        if (
            panelState[1] == "block" || panelState[2] == "block" || panelState[3] == "block") {
            $(".home_newsText").hide();
        }
        //取消1.2.3的hover
        $(".flip1").unbind('mouseenter').unbind('mouseleave');
        $(".flip2").unbind('mouseenter').unbind('mouseleave');
        $(".flip3").unbind('mouseenter').unbind('mouseleave');
        //展開
        $(".panel").slideToggle("slow");
        //恢復1.2.3的hover
        setTimeout(() => {
            $(".flip1").hover(function () {
                $("#home_newsImg").html(`<img src="${newdata[1].img}">`);
            });
            $(".flip2").hover(function () {
                $("#home_newsImg").html(`<img src="${newdata[2].img}">`);
            });
            $(".flip3").hover(function () {
                $("#home_newsImg").html(`<img src="${newdata[3].img}">`);
            });
        }, 1000);

    });
});

$(function () {
    $(".flip1").click(function () {
        var panelState = [
            $('.panel').css('display'),
            $('.panel1').css('display'),
            $('.panel2').css('display'),
            $('.panel3').css('display')
        ];

        if (
            panelState[0] == "block" || panelState[2] == "block" || panelState[3] == "block") {
            $(".home_newsText").hide();
        }
        //取消2.3的hover
        $(".flip2").unbind('mouseenter').unbind('mouseleave');
        $(".flip3").unbind('mouseenter').unbind('mouseleave');
        //展開
        $(".panel1").slideToggle("slow");
        //恢復2.3的hover
        setTimeout(() => {
            $(".flip2").hover(function () {
                $("#home_newsImg").html(`<img src="${newdata[2].img}">`);
            });
            $(".flip3").hover(function () {
                $("#home_newsImg").html(`<img src="${newdata[3].img}">`);
            });
        }, 1000);
    });
});
$(function () {
    $(".flip2").click(function () {
        var panelState = [
            $('.panel').css('display'),
            $('.panel1').css('display'),
            $('.panel2').css('display'),
            $('.panel3').css('display')
        ];
        if (
            panelState[0] == "block" || panelState[1] == "block" || panelState[3] == "block") {
            $(".home_newsText").hide();
        }
        //取消3的hover
        $(".flip3").unbind('mouseenter').unbind('mouseleave');
        //展開
        $(".panel2").slideToggle("slow");
        //恢復3的hover
        setTimeout(() => {
            $(".flip3").hover(function () {
                $("#home_newsImg").html(`<img src="${newdata[3].img}">`);
            });
        }, 1000);
    });
});
$(function () {
    $(".flip3").click(function () {
        var panelState = [
            $('.panel').css('display'),
            $('.panel1').css('display'),
            $('.panel2').css('display'),
            $('.panel3').css('display')
        ];
        if (
            panelState[0] == "block" || panelState[1] == "block" || panelState[2] == "block") {
            $(".home_newsText").hide();
        }
        $(".panel3").slideToggle("slow");
    });
});


// hover切換圖片
$(".flip").hover(function () {
    $("#home_newsImg").html(`<img src="${newdata[0].img}">`);
});
$(".flip1").hover(function () {
    $("#home_newsImg").html(`<img src="${newdata[1].img}">`);
});
$(".flip2").hover(function () {
    $("#home_newsImg").html(`<img src="${newdata[2].img}">`);
});
$(".flip3").hover(function () {
    $("#home_newsImg").html(`<img src="${newdata[3].img}">`);
});
