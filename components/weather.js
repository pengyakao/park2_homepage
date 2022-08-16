var temp_data = [];
var month_data = [];
var day_data = [];
var time_data = [];
var wx_data = [];
var pop6time_data = [];
var pop6_data = [];
var changeTime = {
    '00': '上午12時',
    '03': '上午3時',
    '06': '上午6時',
    '09': '上午9時',
    '12': '下午12時',
    '15': '下午3時',
    '18': '下午6時',
    '21': '晚上9時'
};
//預報的第一個時間是幾點
var daycnt = 0;

getWeatherFile();

function getWeatherFile() {
    var xhr = new XMLHttpRequest;
    var url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-093?Authorization=CWB-5707E42F-6830-4209-A2D4-4096A68E9514&format=JSON&locationId=F-D0047-073&elementName=PoP6h,UVI,T,RH,Wx,WeatherDescriptionAuthorization=CWB-5707E42F-6830-4209-A2D4-4096A68E9514"
    xhr.open("GET", url);
    xhr.send();

    xhr.addEventListener('load', function () {
        var data = JSON.parse(xhr.responseText);
        var data_Wx = data.records.locations[0].location[18].weatherElement[0];
        var data_T = data.records.locations[0].location[18].weatherElement[1];
        // var data_RH=data.records.locations[0].location[18].weatherElement[2]; // 用不到
        var data_PoP6h = data.records.locations[0].location[18].weatherElement[3];


        // 取溫度Temp
        data_T.time.forEach(element => {
            // time_data.push(element.dataTime);
            time_data.push(element.dataTime.substr(11, 2));
            month_data.push(element.dataTime.substr(5, 2));
            day_data.push(element.dataTime.substr(8, 2));
            temp_data.push(element.elementValue[0].value)
        });
        // 取天氣狀況wx
        data_Wx.time.forEach(element => {
            wx_data.push(element.elementValue[1].value);
        })
        // 取降雨pop
        data_PoP6h.time.forEach(element => {
            pop6time_data.push(element.startTime.substr(11, 2));
            pop6_data.push(element.elementValue[0].value)
            pop6_data.push(element.elementValue[0].value)
        })
        if (time_data[0] == 3 || time_data[0] == 9 || time_data[0] == 15 || time_data[0] == 21) {
            pop6_data.shift();
        }

        // console.log(month_data);
        // console.log(day_data);
        // console.log(time_data);
        // console.log(wx_data);
        // console.log(temp_data);
        // console.log(pop6time_data);
        // console.log(pop6_data);

        //預報的第一個時間是幾點
        daycnt = time_data[1];
        console.log(daycnt);
        daycnt = daycnt / 3 + 1;
        console.log(daycnt);



        //現在天氣
        $('#home_weatherNowTem').text(`${temp_data[0]}°C`);
        $('#home_weatherNowIcon').html(`<img src="./icon/weather/${wx_data[0]}.svg">`);
        $('#home_weatherNowRain').text(`${pop6_data[0]}%`);

        //日期
        $('#home_weatherdata1').text(`${month_data[0]}/${day_data[0]}`);
        $('#home_weatherdata2').text(`${month_data[0]}/${parseInt(day_data[0]) + 1}`);
        $('#home_weatherdata3').text(`${month_data[0]}/${parseInt(day_data[0]) + 2}`);
        $('#home_weatherdata4').text(`${month_data[0]}/${parseInt(day_data[0]) + 3}`);

        for (var i = 1; i <= 23; i++) {
            var time = time_data[i];
            var time = changeTime[time];
            $(`#home_weatherDrop${i} .home_weatherTime`).text(`${time}`);
            $(`#home_weatherDrop${i} .home_weatherTem`).text(`${temp_data[i]}°C`);
            $(`#home_weatherDrop${i} .home_weatherIcon`).html(`<img src="./icon/weather/${wx_data[i]}.svg" draggable="false">`);
            $(`#home_weatherDrop${i} .home_weatherRain`).text(`${pop6_data[i]}%`);
        }

        //在每一個00點加標籤 changeDay${n}
        var n = 2;
        for (var i = 1; i <= 24; i++) {
            if (time_data[i] == "00") {
                $(`#home_weatherDrop${i}`).addClass(`changeDay${n}`);
                // $(`#home_weatherDrop${i}`).attr('id', `changeDay${n}`);
                n++;
            }
        }
    })
}

//跳到指定位置
var weather72 = document.getElementById("home_weatherDrop");


//取每一個drop元素寬度
var dropW = $('.home_weatherDrop').width();

$("#home_weatherdata1").click(function () {
    // console.log(1);
    weather72.scrollLeft = 0;
    // $('#home_weatherdata1').addClass('displaydate');
    // $('#home_weatherdata2').removeClass('displaydate');
    // $('#home_weatherdata3').removeClass('displaydate');
    // $('#home_weatherdata4').removeClass('displaydate');
});

$("#home_weatherdata2").click(function () {
    console.log(2);
    // $('#home_weatherdata1').removeClass('displaydate');
    // $('#home_weatherdata2').addClass('displaydate');
    // $('#home_weatherdata3').removeClass('displaydate');
    // $('#home_weatherdata4').removeClass('displaydate');
    let dropCnt = 9 - daycnt;
    weather72.scrollLeft = (dropW + 20) * dropCnt;

});

$("#home_weatherdata3").click(function () {
    // console.log(3);
    // $('#home_weatherdata1').removeClass('displaydate');
    // $('#home_weatherdata2').removeClass('displaydate');
    // $('#home_weatherdata3').addClass('displaydate');
    // $('#home_weatherdata4').removeClass('displaydate');
    let dropCnt = 9 - daycnt + 8;
    weather72.scrollLeft = (dropW + 20) * dropCnt;

});
$("#home_weatherdata4").click(function () {
    // console.log(4);
    // $('#home_weatherdata1').removeClass('displaydate');
    // $('#home_weatherdata2').removeClass('displaydate');
    // $('#home_weatherdata3').removeClass('displaydate');
    // $('#home_weatherdata4').addClass('displaydate');
    let dropCnt = 9 - daycnt + 8 + 8;
    weather72.scrollLeft = (dropW + 20) * dropCnt;
});




//拖曳滾動橫軸效果
const items = document.querySelector('#home_weatherDrop');
let isdown = false;
let startX; // 現在滑鼠在slide的哪個位置
let scrollnow; // 捲軸現在位置

function active() {
    isdown ? items.classList.add('active') : items.classList.remove('active');
    // if(scrollnow >=1000){
    //     console.log("ok")
    // }
}

// 滑鼠按下
items.addEventListener('mousedown', (e) => {
    isdown = true;
    active();
    console.log('mousedown');
    scrollnow = items.scrollLeft
    startX = e.pageX //取起點位置
    console.log(startX);
})

// 滑鼠起來
items.addEventListener('mouseup', () => {
    console.log('mouseup');
    isdown = false;
    active();
})



// 滑鼠離開此區域
items.addEventListener('mouseleave', () => {
    console.log('mouseleave');
    isdown = false;
    active();
})


// 滑鼠移動
items.addEventListener('mousemove', (e) => {
    console.log('mousemove');

    if (!isdown) return
    let moveafter = e.pageX;
    let move = moveafter - startX; //實際要移動的量
    items.scrollLeft = scrollnow - move;
    // 滑鼠移動後的位置-剛開始的位置 = 捲軸要移動的距離

})



//監測捲軸位置
//每天捲軸的位置計算(第一天=0)

setTimeout(() => {
    let dropCnt2 = 9 - daycnt;
    var dropCnt2_move = (dropW + 20) * dropCnt2;
    let dropCnt3 = 9 - daycnt + 8;
    var dropCnt3_move = (dropW + 20) * dropCnt3;
    let dropCnt4 = 9 - daycnt + 8 + 8;
    var dropCnt4_move = (dropW + 20) * dropCnt4;

    $(weather72).scroll(function () {
        console.log($(this).scrollLeft())
        if ($(this).scrollLeft() < dropCnt2_move-10) {
            console.log('day1');
            $('#home_weatherdata1').addClass('displaydate');
            $('#home_weatherdata2').removeClass('displaydate');
            $('#home_weatherdata3').removeClass('displaydate');
            $('#home_weatherdata4').removeClass('displaydate');
        }
        else if ($(this).scrollLeft() <= dropCnt3_move-10) {
            console.log('day2');
            $('#home_weatherdata1').removeClass('displaydate');
            $('#home_weatherdata2').addClass('displaydate');
            $('#home_weatherdata3').removeClass('displaydate');
            $('#home_weatherdata4').removeClass('displaydate');
        }
        else if ($(this).scrollLeft() <= dropCnt4_move-10) {
            console.log('day3');
            $('#home_weatherdata1').removeClass('displaydate');
            $('#home_weatherdata2').removeClass('displaydate');
            $('#home_weatherdata3').addClass('displaydate');
            $('#home_weatherdata4').removeClass('displaydate');
        }
        else {
            console.log('day4');
            $('#home_weatherdata1').removeClass('displaydate');
            $('#home_weatherdata2').removeClass('displaydate');
            $('#home_weatherdata3').removeClass('displaydate');
            $('#home_weatherdata4').addClass('displaydate');
        };

    })



}, 500);
