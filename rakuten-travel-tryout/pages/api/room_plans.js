import DoneIcon from "@mui/icons-material/Done";

const room_plans = [
  {
    name: "房間不含餐計劃 [不含餐]",
    price: {
      value: "3581.62",
      currency: "$",
      description: `
      包稅與其他費用
1 間房 2 位住客 1 晚
`.trim(),
    },
    description: `
該計劃僅適用於房費。
請注意，不提供餐點。



`.trim(),
    photos: [
      {
        text: "",
        src: "https://trvis.r10s.com/d/strg/ctrl/26/29b07c11adfbe275fccb7954078ce369f4117416.82.9.26.3.jpg",
      },
      {
        src: "https://trvis.r10s.com/d/strg/ctrl/26/8ec76ddf7c5016c1184536f286383abcd7282894.47.9.26.3.jpg",
      },
    ],
    points: [
      { icon: <DoneIcon />, text: "特大雙人床 x 1" },
      { icon: <DoneIcon />, text: "50m²" },
      { icon: <DoneIcon />, text: "1–2 位住客" },
      { icon: <DoneIcon />, text: "禁煙" },
      { icon: <DoneIcon />, text: "海景" },
    ],
    facilities: [
      {
        title: "餐飲",
        service_list: ["不含餐"],
      },
    ],
  },

  {
    name: "民宿 [早餐]",
    description: `
僅含房價的最靈活計劃。
蔚藍的大海和潔白的沙灘展現在你的面前。
每位客人從抵達大堂的那一刻起，就在夏威夷
擁有100多年曆史的Halekulani獨有
我們將熱情好客地包裹您，優雅地歡迎您。

■預約時的注意事項■
□■□兒童住宿□■□
0 歲以上的兒童可以在 Halekulani Okinawa 享受他們的住宿。
如果您想睡在現有床上，同床睡的年齡限制是多少？
最多 12 歲和最多 1 名兒童與 1 名成人同床
我被允許。
此外，如果 13 歲以下的兒童單獨使用床鋪，
他們的待遇與成人相同，並包含在客房容量內。
我們懇請您的理解和諒解。

□■□取消費信息□■□
哈利庫拉尼沖繩酒店提供以下取消政策。
如果您想更改或取消您的預訂，請盡快與我們聯繫。
謝謝你。

沒有聯繫的未出現/未抵達：住宿費總額的100%
抵達當天：住宿費總額的100%
抵達前3天~住宿費總額的50%
抵達前7天~住宿費總額的20%

此外，對於以下期間，從抵達前 7 天起，全額支付住宿期間的房費，
從抵達前 30 天起，將收取抵達第一晚的房費。
・ 2022年12月29日（星期四）～2023年1月3日（星期二）
・2023年4月29日星期六～2023年5月5日星期五
・2023年8月5日（週六）～8月16日（週三）


□■□ 押金 □■□
請注意，Halekulani Okinawa 將在客人代表辦理入住時確保信用卡使用限額或押金指定金額的現金。
押金將用於支付住宿費用，超出部分將在退房時退還。
擔保信用卡使用限額將被取消。
`.trim(),
    photos: [
      {
        text: "",
        src: "https://trvis.r10s.com/d/strg/ctrl/26/29b07c11adfbe275fccb7954078ce369f4117416.82.9.26.3.jpg",
      },
      {
        src: "https://trvis.r10s.com/d/strg/ctrl/26/8ec76ddf7c5016c1184536f286383abcd7282894.47.9.26.3.jpg",
      },
    ],
    points: [
      { icon: <DoneIcon />, text: "特大雙人床 x 1" },
      { icon: <DoneIcon />, text: "50m²" },
      { icon: <DoneIcon />, text: "1–2 位住客" },
      { icon: <DoneIcon />, text: "禁煙" },
      { icon: <DoneIcon />, text: "海景" },
    ],
    facilities: [
      {
        title: "餐飲",
        service_list: ["不含餐"],
      },
    ],
  },
];

export default room_plans;
