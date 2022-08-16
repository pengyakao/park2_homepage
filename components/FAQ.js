var FAQdata = [
    {
        qu:"請問草悟廣場有置物櫃嗎？",
        ans:`目前場域內未設有置物櫃，可至臨近的勤美誠品B1使用`
    },
    {
        qu:"請問草悟廣場有哺乳/育嬰室嗎？",
        ans:`有的！位置在B1廣場廁所旁！跟著大大的奶瓶標誌走就對了！`
    },
    {
        qu:"請問草悟廣場有服務台嗎？",
        ans:`目前場域內未設有服務台，如有任何需求請私訊粉專！感謝您！`
    },
    {
        qu:"請問最近的停車場是？",
        ans:`PARK2草悟廣場地下B2及B3就是停車場喔！停車場入口在英才路上！<br>
        汽車→平日20:00−11:59 半小時/15元<br>
        →平日12:00−20:00 半小時/20元<br>
        →例假日 全日半小時/20元<br>
        機車→計次收費，每次30元`
    },
];

// 帶入arr資料
$(".flip4>span").html(`Q1. ${FAQdata[0].qu}`);
$(".panel4>p").html(`${FAQdata[0].ans}`);
$(".flip5>span").html(`Q2. ${FAQdata[1].qu}`);
$(".panel5>p").html(`${FAQdata[1].ans}`);
$(".flip6>span").html(`Q3. ${FAQdata[2].qu}`);
$(".panel6>p").html(`${FAQdata[2].ans}`);
$(".flip7>span").html(`Q4. ${FAQdata[3].qu}`);
$(".panel7>p").html(`${FAQdata[3].ans}`);