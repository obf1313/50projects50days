const data = [
  {
    jurisdictionId: 9101752,
    jurisdictionName: '库存管理',
    jurisdictionCode: 'app-admin018',
    urlAddress: '/stock-center-app',
    parentId: 1400001,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9101776,
    jurisdictionName: '配送管理',
    jurisdictionCode: 'app-admin019',
    urlAddress: '/delivery-manage',
    parentId: 1400001,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 900000,
    jurisdictionName: 'APP后台管理系统（新）（',
    jurisdictionCode: 'app-admin',
    urlAddress: '/app-admin',
    parentId: 0,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 910056,
    jurisdictionName: '镜像店后台管理',
    jurisdictionCode: 'app-mirror',
    urlAddress: '/app-mirror',
    parentId: 0,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-mirror',
  },
  {
    jurisdictionId: 1200000,
    jurisdictionName: '平台运营',
    jurisdictionCode: 'app-platform',
    urlAddress: '/app-platform',
    parentId: 0,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-platform',
  },
  {
    jurisdictionId: 1300000,
    jurisdictionName: '内容运营',
    jurisdictionCode: 'app-content',
    urlAddress: '/app-content',
    parentId: 0,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-content',
  },
  {
    jurisdictionId: 1400000,
    jurisdictionName: '电商运营',
    jurisdictionCode: 'app-commerce',
    urlAddress: '/app-commerce',
    parentId: 0,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-commerce',
  },
  {
    jurisdictionId: 1500000,
    jurisdictionName: '逛店管理',
    jurisdictionCode: 'app-shopping',
    urlAddress: '/app-shopping',
    parentId: 0,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-shopping',
  },
  {
    jurisdictionId: 1600000,
    jurisdictionName: '自定义页面',
    jurisdictionCode: 'app-custom',
    urlAddress: '/app-custom',
    parentId: 0,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-custom',
  },
  {
    jurisdictionId: 9100225,
    jurisdictionName: '地址管理',
    jurisdictionCode: 'app-admin006006',
    urlAddress: '/system-settings/addr',
    parentId: 1400001,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 910057,
    jurisdictionName: '店铺管理',
    jurisdictionCode: 'app-mirror001',
    urlAddress: '/shop-manage',
    parentId: 1500000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-mirror',
  },
  {
    jurisdictionId: 9101777,
    jurisdictionName: '配送公司及费用配置',
    jurisdictionCode: 'DELIVERYMANAGE01',
    urlAddress: '/delivery-config',
    parentId: 9101776,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'stock-center-app',
  },
  {
    jurisdictionId: 9101785,
    jurisdictionName: '配送发货限制管理',
    jurisdictionCode: 'DELIVERYMANAGE02',
    urlAddress: '/delivery-limit',
    parentId: 9101776,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'stock-center-app',
  },
  {
    jurisdictionId: 9101753,
    jurisdictionName: '库存规则管理',
    jurisdictionCode: 'STOCKMANAGE001',
    urlAddress: '/rules',
    parentId: 9101752,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'stock-center-app',
  },
  {
    jurisdictionId: 902000,
    jurisdictionName: '推荐管理',
    jurisdictionCode: 'app-admin002',
    urlAddress: '/home-layout',
    parentId: 900000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9101754,
    jurisdictionName: '异常库存管理',
    jurisdictionCode: 'STOCKMANAGE002',
    urlAddress: '/abnormal',
    parentId: 9101752,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'stock-center-app',
  },
  {
    jurisdictionId: 903000,
    jurisdictionName: '用户管理',
    jurisdictionCode: 'app-admin003',
    urlAddress: '/user',
    parentId: 900000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 904000,
    jurisdictionName: '订单管理',
    jurisdictionCode: 'app-admin004',
    urlAddress: '/app-order',
    parentId: 1400000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9200523,
    jurisdictionName: '聚合商品',
    jurisdictionCode: 'app-admin011004',
    urlAddress: '/goods/aggregation',
    parentId: 910079,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 905000,
    jurisdictionName: '内容管理',
    jurisdictionCode: 'app-admin005',
    urlAddress: '/content',
    parentId: 900000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9200549,
    jurisdictionName: '组合商品',
    jurisdictionCode: 'app-admin011005',
    urlAddress: '/goods/combo',
    parentId: 910079,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1400001,
    jurisdictionName: '电商配置运营',
    jurisdictionCode: 'app-commerce005',
    urlAddress: '/app-commerce-config',
    parentId: 1400000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 906000,
    jurisdictionName: '系统设置',
    jurisdictionCode: 'app-admin006',
    urlAddress: '/system-settings',
    parentId: 900000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 907000,
    jurisdictionName: '数据统计',
    jurisdictionCode: 'app-admin007',
    urlAddress: '/data-statistics',
    parentId: 900000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 908000,
    jurisdictionName: '消息管理',
    jurisdictionCode: 'app-admin008',
    urlAddress: '/message',
    parentId: 900000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 909000,
    jurisdictionName: '商城运营管理',
    jurisdictionCode: 'app-admin009',
    urlAddress: '/mall',
    parentId: 1400000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 910000,
    jurisdictionName: '文化活动',
    jurisdictionCode: 'app-admin010',
    urlAddress: '/concept',
    parentId: 900000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 910079,
    jurisdictionName: '商品管理',
    jurisdictionCode: 'app-admin011',
    urlAddress: '/goods',
    parentId: 1400000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9100320,
    jurisdictionName: '预售活动',
    jurisdictionCode: 'app-admin013',
    urlAddress: '/presell',
    parentId: 141100001,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9201493,
    jurisdictionName: '秒杀管理（待作废）',
    jurisdictionCode: 'app-admin024',
    urlAddress: '/seckill',
    parentId: 900000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 913000,
    jurisdictionName: '营销管理',
    jurisdictionCode: 'app-admin014',
    urlAddress: '/app-marketing-manage',
    parentId: 900000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'market-center-app',
  },
  {
    jurisdictionId: 1009201978,
    jurisdictionName: '秒杀活动',
    jurisdictionCode: 'app-admin025',
    urlAddress: '/seckill/common',
    parentId: 141100001,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9100391,
    jurisdictionName: '商城首页',
    jurisdictionCode: 'app-admin015',
    urlAddress: '/stores',
    parentId: 1400102,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9200448,
    jurisdictionName: '自定义页面',
    jurisdictionCode: 'app-admin020',
    urlAddress: '/custom',
    parentId: 1600000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9100395,
    jurisdictionName: '主题找书',
    jurisdictionCode: 'app-admin016',
    urlAddress: '/subject',
    parentId: 1400103,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9100396,
    jurisdictionName: '商品组列表',
    jurisdictionCode: 'app-admin017',
    urlAddress: '/goods-group-set/goods-group-list',
    parentId: 1400102,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9200774,
    jurisdictionName: '新版商城后台',
    jurisdictionCode: 'app-admin023',
    urlAddress: '/newMall',
    parentId: 900000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 902001,
    jurisdictionName: '首页今日推荐',
    jurisdictionCode: 'app-admin002001',
    urlAddress: '/home-layout/article-recommended',
    parentId: 1300106,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 904001,
    jurisdictionName: '销售订单',
    jurisdictionCode: 'app-admin004001',
    urlAddress: '/app-order/list',
    parentId: 1009201943,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1009201943,
    jurisdictionName: '销售订单管理',
    jurisdictionCode: 'app-admin004007',
    urlAddress: '/sale-order',
    parentId: 904000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1009201945,
    jurisdictionName: '积分订单',
    jurisdictionCode: 'app-admin004009',
    urlAddress: '/integral-order/order',
    parentId: 1009201944,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 905001,
    jurisdictionName: '阅历信息配置',
    jurisdictionCode: 'app-admin005001',
    urlAddress: '/content/calendar',
    parentId: 1300101,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9100273,
    jurisdictionName: '功能暂停管理',
    jurisdictionCode: 'app-admin005008',
    urlAddress: '/content/commentControl',
    parentId: 1200107,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9200468,
    jurisdictionName: '视频分类配置',
    jurisdictionCode: 'app-admin005009001',
    urlAddress: '/content/videoSet/videoClassify',
    parentId: 1300104,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 906001,
    jurisdictionName: '退货仓管理',
    jurisdictionCode: 'app-admin006001',
    urlAddress: '/system-settings/addr/warehouse',
    parentId: 9100225,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9100226,
    jurisdictionName: '下单区域限制',
    jurisdictionCode: 'app-admin006006001',
    urlAddress: '/system-settings/addr/addr-control',
    parentId: 9100225,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 907100,
    jurisdictionName: '文章数据',
    jurisdictionCode: 'app-admin007001',
    urlAddress: '/data-statistics/article',
    parentId: 1300103,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 908001,
    jurisdictionName: '意见反馈',
    jurisdictionCode: 'app-admin008001',
    urlAddress: '/message/feedback',
    parentId: 1201103,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 909001,
    jurisdictionName: '商城首页',
    jurisdictionCode: 'app-admin009001',
    urlAddress: '/mall/home-layout',
    parentId: 1400101,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 910001,
    jurisdictionName: '问闻书店',
    jurisdictionCode: 'app-admin010001',
    urlAddress: '/concept/setting',
    parentId: 1200105,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9100002,
    jurisdictionName: '活动创建',
    jurisdictionCode: 'app-admin010002',
    urlAddress: '/cultural-activity/activity-list',
    parentId: 1300105,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9100003,
    jurisdictionName: '嘉宾资料',
    jurisdictionCode: 'app-admin010003',
    urlAddress: '/cultural-activity/guest-information',
    parentId: 1300105,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9100202,
    jurisdictionName: '文化活动数据',
    jurisdictionCode: 'app-admin010005',
    urlAddress: '/cultural-activity/bulletin-board',
    parentId: 1300105,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 910081,
    jurisdictionName: '商品发布',
    jurisdictionCode: 'app-admin011001',
    urlAddress: '/goods/list',
    parentId: 910079,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9101862,
    jurisdictionName: '优惠券配置',
    jurisdictionCode: 'app-admin014003',
    urlAddress: '/app-marketing-coupon-activity',
    parentId: 141100001,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'market-center-app',
  },
  {
    jurisdictionId: 9200491,
    jurisdictionName: '底纹框词管理',
    jurisdictionCode: 'app-admin021018',
    urlAddress: '/search/shadingManagement',
    parentId: 9200472,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9201597,
    jurisdictionName: '4.23阅读活动页',
    jurisdictionCode: 'app-admin022001',
    urlAddress: '/activity/read-activity-20230423',
    parentId: 9201596,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1300101,
    jurisdictionName: '阅历管理',
    jurisdictionCode: 'app-content001',
    urlAddress: '/app-content/experience',
    parentId: 1300000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1400101,
    jurisdictionName: '小程序商城',
    jurisdictionCode: 'app-mall-operations009001',
    urlAddress: '/app-mall-operations/miniProgramMall',
    parentId: 909000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 910065,
    jurisdictionName: '问闻书店-Banner配置',
    jurisdictionCode: 'app-mirror001001',
    urlAddress: '/shop-manage/banner/MIRROR_CONCEPT',
    parentId: 910057,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-mirror',
  },
  {
    jurisdictionId: 909085,
    jurisdictionName: '标准店-Banner配置',
    jurisdictionCode: 'app-mirror001002',
    urlAddress: '/shop-manage/banner/MIRROR_NORMAL_CONCEPT',
    parentId: 910057,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-mirror',
  },
  {
    jurisdictionId: 1200101,
    jurisdictionName: '用户管理',
    jurisdictionCode: 'app-platform001',
    urlAddress: '/app-content/user',
    parentId: 1200000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1201201,
    jurisdictionName: '积分兑换',
    jurisdictionCode: 'app-platform002001',
    urlAddress: '/app-content/user/exchange',
    parentId: 1200102,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 903002,
    jurisdictionName: '用户权限',
    jurisdictionCode: 'app-admin003002',
    urlAddress: '/user/power',
    parentId: 1200101,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9201204,
    jurisdictionName: '补差价订单',
    jurisdictionCode: 'app-admin004006',
    urlAddress: '/repair-difference-order',
    parentId: 1009201943,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1009201944,
    jurisdictionName: '积分订单管理',
    jurisdictionCode: 'app-admin004008',
    urlAddress: '/integral-order',
    parentId: 904000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1009201946,
    jurisdictionName: '积分售后单',
    jurisdictionCode: 'app-admin004010',
    urlAddress: '/integral-order/after-sales',
    parentId: 1009201944,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 905002,
    jurisdictionName: '审核管理',
    jurisdictionCode: 'app-admin005002',
    urlAddress: '/content/comment',
    parentId: 1201101,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 906002,
    jurisdictionName: '配置管理',
    jurisdictionCode: 'app-admin006002',
    urlAddress: '/system-settings/config-management',
    parentId: 906000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 907200,
    jurisdictionName: '阅历数据',
    jurisdictionCode: 'app-admin007002',
    urlAddress: '/data-statistics/calendar',
    parentId: 1300101,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 908002,
    jurisdictionName: '消息推送',
    jurisdictionCode: 'app-admin008002',
    urlAddress: '/message/push',
    parentId: 1200103,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 909002,
    jurisdictionName: '商城分类配置',
    jurisdictionCode: 'app-admin009002',
    urlAddress: '/mall/home-classify',
    parentId: 1400102,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 910082,
    jurisdictionName: '推荐流配置',
    jurisdictionCode: 'app-admin011002',
    urlAddress: '/goods/recommended',
    parentId: 1009202035,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9101830,
    jurisdictionName: '积分抽奖',
    jurisdictionCode: 'app-admin014002',
    urlAddress: '/app-marketing-integral-activity',
    parentId: 1200102,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'market-center-app',
  },
  {
    jurisdictionId: 9200473,
    jurisdictionName: '搜索发现管理',
    jurisdictionCode: 'app-admin021001',
    urlAddress: '/search/discoveryManagement',
    parentId: 9200472,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9201596,
    jurisdictionName: '活动页配置',
    jurisdictionCode: 'app-admin022',
    urlAddress: '/app-application-content-admin/backend',
    parentId: 1200105,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1009202036,
    jurisdictionName: '人气商品配置',
    jurisdictionCode: 'app-admin222002',
    urlAddress: '/goods/popular',
    parentId: 1009202035,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1300102,
    jurisdictionName: '西西弗榜单',
    jurisdictionCode: 'app-content002',
    urlAddress: '/app-content/listManagement',
    parentId: 1300000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1400102,
    jurisdictionName: 'APP商城',
    jurisdictionCode: 'app-mall-operations009002',
    urlAddress: '/app-mall-operations/miniProgramMall',
    parentId: 909000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1201101,
    jurisdictionName: '用户发布内容',
    jurisdictionCode: 'app-platform001001',
    urlAddress: '/app-content/user/content',
    parentId: 1200101,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1200102,
    jurisdictionName: '积分管理',
    jurisdictionCode: 'app-platform002',
    urlAddress: '/app-content/integral',
    parentId: 1200000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1201701,
    jurisdictionName: '原因管理',
    jurisdictionCode: 'app-platform007001',
    urlAddress: '/app-platform/platformCfg/reason',
    parentId: 1200107,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 902003,
    jurisdictionName: '首页Banner运营位',
    jurisdictionCode: 'app-admin002003',
    urlAddress: '/home-layout/banner',
    parentId: 1200106,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 903003,
    jurisdictionName: '举报管理',
    jurisdictionCode: 'app-admin003003',
    urlAddress: '/user/report',
    parentId: 1201102,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 904002,
    jurisdictionName: '销售售后单',
    jurisdictionCode: 'app-admin004002',
    urlAddress: '/app-order/after-sales',
    parentId: 1009201943,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 905003,
    jurisdictionName: '举报管理',
    jurisdictionCode: 'app-admin005003',
    urlAddress: '/content/tipOff',
    parentId: 1201101,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 910068,
    jurisdictionName: '更新管理',
    jurisdictionCode: 'app-admin006003',
    urlAddress: '/system-settings/version',
    parentId: 1200107,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9200742,
    jurisdictionName: '公告配置',
    jurisdictionCode: 'app-admin008003',
    urlAddress: '/message/notice',
    parentId: 1400001,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9100227,
    jurisdictionName: '商品查询',
    jurisdictionCode: 'app-admin011003',
    urlAddress: '/goods/e-commerce',
    parentId: 910079,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9200548,
    jurisdictionName: '搜索干预',
    jurisdictionCode: 'app-admin021027',
    urlAddress: '/search/topSearchResultMenu',
    parentId: 9200472,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1300103,
    jurisdictionName: '文章管理',
    jurisdictionCode: 'app-content003',
    urlAddress: '/app-content/article',
    parentId: 1300000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 141100001,
    jurisdictionName: '营销管理',
    jurisdictionCode: 'app-mall-marketing001',
    urlAddress: '/app-mall-operations/marketing',
    parentId: 1400000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1400103,
    jurisdictionName: '重点板块管理',
    jurisdictionCode: 'app-mall-operations009003',
    urlAddress: '/app-mall-operations/miniProgramMall',
    parentId: 909000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1201102,
    jurisdictionName: '用户信息',
    jurisdictionCode: 'app-platform001002',
    urlAddress: '/app-content/user/info',
    parentId: 1200101,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1200103,
    jurisdictionName: '消息管理',
    jurisdictionCode: 'app-platform003',
    urlAddress: '/app-content/message',
    parentId: 1200000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9200421,
    jurisdictionName: '精选好物',
    jurisdictionCode: 'app-admin002009',
    urlAddress: '/home-layout/elaboration',
    parentId: 1400103,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9201396,
    jurisdictionName: '特殊账号管理',
    jurisdictionCode: 'app-admin003004',
    urlAddress: '/user/special',
    parentId: 1200101,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 904003,
    jurisdictionName: '发票查询',
    jurisdictionCode: 'app-admin004003',
    urlAddress: '/app-order/invoice',
    parentId: 904000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 904004,
    jurisdictionName: '运费模板配置',
    jurisdictionCode: 'app-admin004004',
    urlAddress: '/app-order/freight',
    parentId: 1400001,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 905004,
    jurisdictionName: '内容创作',
    jurisdictionCode: 'app-admin005004',
    urlAddress: '/content/create',
    parentId: 905000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9200453,
    jurisdictionName: '文章创作',
    jurisdictionCode: 'app-admin005004001',
    urlAddress: '/content/article/list',
    parentId: 1300103,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 906003,
    jurisdictionName: '协议管理',
    jurisdictionCode: 'app-admin006004',
    urlAddress: '/system-settings/config-agreement',
    parentId: 1200107,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1009201919,
    jurisdictionName: '营销活动',
    jurisdictionCode: 'app-admin014004',
    urlAddress: '/app-marketing-manage-activitie',
    parentId: 913000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'market-center-app',
  },
  {
    jurisdictionId: 9200472,
    jurisdictionName: '搜索管理',
    jurisdictionCode: 'app-admin021',
    urlAddress: '/search',
    parentId: 1200000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9200482,
    jurisdictionName: '搜索结果置顶',
    jurisdictionCode: 'app-admin021010',
    urlAddress: '/search/topSearchResult',
    parentId: 9200548,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1009201645,
    jurisdictionName: '搜索广告位',
    jurisdictionCode: 'app-admin021101',
    urlAddress: '/search/adv',
    parentId: 9200472,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1300104,
    jurisdictionName: '视频管理',
    jurisdictionCode: 'app-content004',
    urlAddress: '/app-content/video',
    parentId: 1300000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1201103,
    jurisdictionName: '用户反馈',
    jurisdictionCode: 'app-platform001003',
    urlAddress: '/app-content/user/feedback',
    parentId: 1200101,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9101847,
    jurisdictionName: '首页精选书单',
    jurisdictionCode: 'app-admin002006',
    urlAddress: '/home-layout/bookList',
    parentId: 1300106,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9200458,
    jurisdictionName: '视频创作',
    jurisdictionCode: 'app-admin005004006',
    urlAddress: '/content/creation/video',
    parentId: 1300104,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 905005,
    jurisdictionName: '搜索',
    jurisdictionCode: 'app-admin005005',
    urlAddress: '/content/search',
    parentId: 905000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 906004,
    jurisdictionName: '协议更新管理',
    jurisdictionCode: 'app-admin006005',
    urlAddress: '/system-settings/update-agreement',
    parentId: 1200107,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1400002,
    jurisdictionName: '取消订单原因配置',
    jurisdictionCode: 'app-commerce005002',
    urlAddress: '/app-commerce-config/cancellationOrder',
    parentId: 1400001,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1300105,
    jurisdictionName: '文化活动管理',
    jurisdictionCode: 'app-content005',
    urlAddress: '/app-content/culture',
    parentId: 1300000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9201229,
    jurisdictionName: '扫一扫图书反馈',
    jurisdictionCode: 'app-mirror002',
    urlAddress: '/app-application-common-admin/backend/sys',
    parentId: 1201103,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9201230,
    jurisdictionName: '用户图书反馈',
    jurisdictionCode: 'app-mirror002001',
    urlAddress: '/rich-scan/book-additional-collect',
    parentId: 9201229,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1200105,
    jurisdictionName: '活动管理',
    jurisdictionCode: 'app-platform005',
    urlAddress: '/app-content/activity',
    parentId: 1200000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9101852,
    jurisdictionName: '书单频道推荐书单',
    jurisdictionCode: 'app-admin002007',
    urlAddress: '/home-layout/bookChannel',
    parentId: 1300106,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 905006,
    jurisdictionName: '文章管理',
    jurisdictionCode: 'app-admin005006',
    urlAddress: '/content/article',
    parentId: 905000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1400003,
    jurisdictionName: '售后原因配置',
    jurisdictionCode: 'app-commerce005003',
    urlAddress: '/app-commerce-config/afterSalesReasons',
    parentId: 1400001,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1300106,
    jurisdictionName: '内容分发管理',
    jurisdictionCode: 'app-content006',
    urlAddress: '/app-content/distribute',
    parentId: 1300000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1200106,
    jurisdictionName: '平台资源位管理',
    jurisdictionCode: 'app-platform006',
    urlAddress: '/app-content/activity',
    parentId: 1200000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9101857,
    jurisdictionName: '书单频道推荐专题',
    jurisdictionCode: 'app-admin002008',
    urlAddress: '/home-layout/adviceProject',
    parentId: 1300106,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1400004,
    jurisdictionName: '商品保障服务配置',
    jurisdictionCode: 'app-commerce005004',
    urlAddress: '/app-commerce-config/commodityProtection',
    parentId: 1400001,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1200107,
    jurisdictionName: '平台配置管理',
    jurisdictionCode: 'app-platform007',
    urlAddress: '/app-content/activity',
    parentId: 1200000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 902004,
    jurisdictionName: '每日画题配置',
    jurisdictionCode: 'app-admin002004',
    urlAddress: '/home-layout/focus',
    parentId: 1300101,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9200467,
    jurisdictionName: '视频管理',
    jurisdictionCode: 'app-admin005009',
    urlAddress: '/video/category',
    parentId: 905000,
    needToken: false,
    symbol: '0100',
    type: 'MENU',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9201546,
    jurisdictionName: '西西弗榜单',
    jurisdictionCode: 'app-admin002010',
    urlAddress: '/home-layout/rankingList',
    parentId: 1300102,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9201574,
    jurisdictionName: '活动运营位',
    jurisdictionCode: 'app-admin002011',
    urlAddress: '/home-layout/activity-operating',
    parentId: 1200106,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1009201652,
    jurisdictionName: '西西弗独家文案配置',
    jurisdictionCode: 'app-admin002013',
    urlAddress: '/home-layout/exclusiveCopy',
    parentId: 902000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9200775,
    jurisdictionName: '少儿馆',
    jurisdictionCode: 'app-admin023001',
    urlAddress: '/children-hall',
    parentId: 1400102,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9201209,
    jurisdictionName: '独家定制',
    jurisdictionCode: 'app-admin023002',
    urlAddress: '/exclusive',
    parentId: 1400103,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9201285,
    jurisdictionName: '新品速递',
    jurisdictionCode: 'app-admin023-dashbook',
    urlAddress: '/book-dash',
    parentId: 1400103,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1009201836,
    jurisdictionName: '文创馆',
    jurisdictionCode: 'app-admin023004',
    urlAddress: '/booArt',
    parentId: 1400102,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1009202035,
    jurisdictionName: '运营商品配置',
    jurisdictionCode: 'app-admin222',
    urlAddress: '/goods/opt/confg',
    parentId: 900000,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 905501,
    jurisdictionName: '搜索提示词配置',
    jurisdictionCode: 'app-admin005005001',
    urlAddress: '/content/search/prompt',
    parentId: 905005,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 905601,
    jurisdictionName: '文章审核',
    jurisdictionCode: 'app-admin005006001',
    urlAddress: '/content/article/audit',
    parentId: 1300103,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 907101,
    jurisdictionName: '文章数据统计',
    jurisdictionCode: 'app-admin007001001',
    urlAddress: '/data-statistics/article/data',
    parentId: 907100,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 907201,
    jurisdictionName: '阅历数据看板',
    jurisdictionCode: 'app-admin007002001',
    urlAddress: '/data-statistics/calendar/data',
    parentId: 907200,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 9101863,
    jurisdictionName: '券活动列表',
    jurisdictionCode: 'app-admin014003001',
    urlAddress: '/app-marketing-activities',
    parentId: 9101862,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'market-center-app',
  },
  {
    jurisdictionId: 9101871,
    jurisdictionName: '券批次查询',
    jurisdictionCode: 'app-admin014003002',
    urlAddress: '/app-marketing-batch',
    parentId: 9101862,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'market-center-app',
  },
  {
    jurisdictionId: 9101873,
    jurisdictionName: '手动发券',
    jurisdictionCode: 'app-admin014003003',
    urlAddress: '/app-marketing-manual',
    parentId: 9101862,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'market-center-app',
  },
  {
    jurisdictionId: 9101876,
    jurisdictionName: '已发券管理',
    jurisdictionCode: 'app-admin014003004',
    urlAddress: '/app-marketing-sentManagement',
    parentId: 9101862,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'market-center-app',
  },
  {
    jurisdictionId: 913001,
    jurisdictionName: '商品活动',
    jurisdictionCode: 'app-admin014004001',
    urlAddress: '/app-marketing-condition-activity',
    parentId: 1009201919,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'market-center-app',
  },
  {
    jurisdictionId: 905502,
    jurisdictionName: '搜索权重配置',
    jurisdictionCode: 'app-admin005005002',
    urlAddress: '/content/search/weight',
    parentId: 905005,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 905602,
    jurisdictionName: '文章发布',
    jurisdictionCode: 'app-admin005006002',
    urlAddress: '/content/article/publish',
    parentId: 1300103,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 907102,
    jurisdictionName: '文章明细查询',
    jurisdictionCode: 'app-admin007001002',
    urlAddress: '/data-statistics/article/details',
    parentId: 907100,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 1009201920,
    jurisdictionName: '运费活动',
    jurisdictionCode: 'app-admin014004002',
    urlAddress: '/app-marketing-carriage-activity',
    parentId: 1009201919,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'market-center-app',
  },
  {
    jurisdictionId: 905603,
    jurisdictionName: '书单分类配置',
    jurisdictionCode: 'app-admin005006003',
    urlAddress: '/content/article/bookListClassify',
    parentId: 1300103,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
  {
    jurisdictionId: 907103,
    jurisdictionName: '文章历史数据查询',
    jurisdictionCode: 'app-admin007001003',
    urlAddress: '/data-statistics/article/history',
    parentId: 907100,
    needToken: false,
    symbol: '0100',
    type: 'PAGE',
    systemAbbr: 'app-admin',
  },
]
module.exports = {
  data: data
}