const Mock = require("mockjs");
const Random = Mock.Random;
export const doCustomTimes = (times, callback) => {
  let i = -1;
  while (++i < times) {
    callback(i);
  }
};
export const getMessageInit = () => {
  let unreadList = [];
  doCustomTimes(8, () => {
    unreadList.push(
      Mock.mock({
        title: `协议商品竞价公告：${Random.cword(8, 22)}`,
        comp: "未开始竞价",
        create_time: "@date",
        msg_id: Random.increment(100)
      })
    );
  });
  let readedList = [];
  doCustomTimes(8, () => {
    readedList.push(
      Mock.mock({
        title: Random.cword(20, 30),
        create_time: "@date",
        msg_id: Random.increment(100)
      })
    );
  });
  let trashList = [];
  doCustomTimes(8, () => {
    trashList.push(
      Mock.mock({
        title: `协议商品成交公告：${Random.cword(20, 40)}`,
        create_time: "@date",
        msg_id: Random.increment(100)
      })
    );
  });
  return {
    unread: unreadList,
    readed: readedList,
    trash: trashList
  };
};
Mock.mock(/\/message\/init/, getMessageInit);
export const getMessageprovde = () => {
  let trashList = [];
  doCustomTimes(10, () => {
    trashList.push(
      Mock.mock({
        provider: `重庆${Random.cword(2, 4)}有限公司`,
        address: Random.county(true),
        men: Random.cname(),
        phone: `02${Random.integer(120487439, 999999999)}`,
        telphone: `18${Random.integer(0, 9)}${Random.integer(
          12048749,
          99999999
        )}`,
        chuanzhen: Random.integer(120484, 999999),
        action: "查看"
      })
    );
  });
  return trashList;
};
Mock.mock(/\/message\/provide/, getMessageprovde);
Mock.mock(/user\.json/, [
  {
    name: "18223962895",
    access: ["super_admin", "admin"],
    token: "刘志鸿",
    avatar: "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"
  },
  {
    name: "15523722189",
    token: "聂文亮",
    avatar: "https://avatars0.githubusercontent.com/u/20942571?s=460&v=4"
  }
]);

Mock.mock(/\/get_info/, {
  id: 0,
  label: "XXX科技有限公司",
  children: [
    {
      id: 2,
      label: "产品研发部",
      children: [
        {
          id: 5,
          label: "研发-前端"
        },
        {
          id: 6,
          label: "研发-后端"
        },
        {
          id: 9,
          label: "UI设计"
        },
        {
          id: 10,
          label: "产品经理"
        }
      ]
    },
    {
      id: 3,
      label: "销售部",
      children: [
        {
          id: 7,
          label: "销售一部"
        },
        {
          id: 8,
          label: "销售二部"
        }
      ]
    },
    {
      id: 4,
      label: "财务部"
    },
    {
      id: 11,
      label: "HR人事"
    }
  ]
});
