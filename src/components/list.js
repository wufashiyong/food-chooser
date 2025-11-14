export const list =  [
  {
    name: '番茄鸡蛋面',
    tags: ['快手', '省钱', '带饭友好'],
    time: '15分钟',
    cost: '约8元',
    serving: '1-2人份',
    category: ['quick', 'lowCost', 'mealPrep', 'healthy'],
    ingredients: [
      { name: '面条', amount: '100g' },
      { name: '鸡蛋', amount: '2个' },
      { name: '番茄', amount: '1个' },
      { name: '小葱', amount: '1根' },
      { name: '生抽', amount: '1勺' },
      { name: '盐', amount: '适量' }
    ],
    steps: [
      '番茄切块，鸡蛋打散，小葱切末',
      '热锅少油，先炒鸡蛋盛出',
      '同锅炒番茄至出汁，加一碗水煮沸',
      '下面条煮3分钟，加入炒好的鸡蛋',
      '加生抽、盐调味，撒葱花出锅'
    ],
    tips: '番茄炒出汁水更入味，鸡蛋不要炒太老'
  },
  {
    name: '电饭煲腊肠饭',
    tags: ['懒人', '一锅端', '省时'],
    time: '25分钟',
    cost: '约15元',
    serving: '2-3人份',
    category: ['quick', 'lowCost', 'mealPrep'],
    ingredients: [
      { name: '大米', amount: '1杯' },
      { name: '腊肠', amount: '2根' },
      { name: '香菇', amount: '5朵' },
      { name: '青菜', amount: '适量' },
      { name: '生抽', amount: '2勺' },
      { name: '蚝油', amount: '1勺' }
    ],
    steps: [
      '大米洗净，腊肠香菇切片',
      '所有材料放入电饭煲，加水略低于平常',
      '按下煮饭键，最后10分钟放入青菜',
      '煮好后淋上生抽蚝油，拌匀即可'
    ],
    tips: '水不要放多，蔬菜最后放保持翠绿'
  },
  {
    name: '鸡胸肉沙拉',
    tags: ['健康', '低卡', '健身'],
    time: '10分钟',
    cost: '约12元',
    serving: '1人份',
    category: ['quick', 'healthy', 'mealPrep'],
    ingredients: [
      { name: '鸡胸肉', amount: '150g' },
      { name: '生菜', amount: '适量' },
      { name: '黄瓜', amount: '半根' },
      { name: '小番茄', amount: '5个' },
      { name: '橄榄油', amount: '1勺' },
      { name: '黑醋', amount: '1勺' }
    ],
    steps: [
      '鸡胸肉水煮或煎熟后撕成条',
      '所有蔬菜洗净切好放入碗中',
      '橄榄油和黑醋调成油醋汁',
      '淋在沙拉上拌匀即可'
    ],
    tips: '鸡胸肉煮10分钟关火焖5分钟更嫩'
  },
  {
    name: '麻辣香锅',
    tags: ['下饭', '解馋', '周末'],
    time: '30分钟',
    cost: '约25元',
    serving: '2-3人份',
    category: ['weekend'],
    ingredients: [
      { name: '火锅底料', amount: '50g' },
      { name: '喜欢的蔬菜', amount: '任意' },
      { name: '肉类丸子', amount: '适量' },
      { name: '葱姜蒜', amount: '适量' },
      { name: '干辣椒', amount: '5个' },
      { name: '花椒', amount: '1小把' }
    ],
    steps: [
      '所有食材焯水煮熟备用',
      '热油爆香葱姜蒜、干辣椒、花椒',
      '加入火锅底料炒出红油',
      '倒入所有食材大火翻炒均匀',
      '撒上芝麻香菜即可'
    ],
    tips: '食材先焯水可以缩短炒制时间'
  },
  {
    name: '咖喱鸡肉饭',
    tags: ['下饭', '便当', '隔夜香'],
    time: '25分钟',
    cost: '约18元',
    serving: '3-4人份',
    category: ['mealPrep', 'weekend'],
    ingredients: [
      { name: '鸡腿肉', amount: '300g' },
      { name: '土豆', amount: '1个' },
      { name: '胡萝卜', amount: '半根' },
      { name: '洋葱', amount: '半个' },
      { name: '咖喱块', amount: '2块' },
      { name: '椰浆', amount: '50ml' }
    ],
    steps: [
      '鸡肉切块，土豆胡萝卜切滚刀块',
      '先炒洋葱，再加入鸡肉翻炒',
      '加入土豆胡萝卜，加水没过食材',
      '煮15分钟后加入咖喱块搅化',
      '最后加入椰浆煮至粘稠'
    ],
    tips: '咖喱块含盐，一般不用再加盐'
  },
  {
    name: '酸辣土豆丝',
    tags: ['下饭', '素菜', '快手'],
    time: '10分钟',
    cost: '约5元',
    serving: '2人份',
    category: ['quick', 'lowCost', 'healthy'],
    ingredients: [
      { name: '土豆', amount: '2个' },
      { name: '干辣椒', amount: '3个' },
      { name: '大蒜', amount: '3瓣' },
      { name: '醋', amount: '2勺' },
      { name: '生抽', amount: '1勺' },
      { name: '糖', amount: '半勺' }
    ],
    steps: [
      '土豆切丝后泡水去淀粉',
      '热油爆香干辣椒和蒜末',
      '下土豆丝大火快速翻炒',
      '加入醋、生抽、糖调味',
      '炒至断生即可出锅'
    ],
    tips: '土豆丝切好后泡水更脆爽'
  },
  {
    name: '红烧肉',
    tags: ['硬菜', '周末', '下饭'],
    time: '60分钟',
    cost: '约30元',
    serving: '3-4人份',
    category: ['weekend'],
    ingredients: [
      { name: '五花肉', amount: '500g' },
      { name: '姜片', amount: '5片' },
      { name: '料酒', amount: '2勺' },
      { name: '老抽', amount: '1勺' },
      { name: '冰糖', amount: '30g' },
      { name: '八角', amount: '2个' }
    ],
    steps: [
      '五花肉切块焯水去腥',
      '冰糖炒糖色至焦黄色',
      '下五花肉翻炒上色',
      '加料酒、老抽、八角、姜片',
      '加水炖煮40分钟至软烂'
    ],
    tips: '炒糖色时火候要小，避免炒糊'
  },
  {
    name: '速冻水饺',
    tags: ['急救', '零失败', '夜宵'],
    time: '8分钟',
    cost: '约10元',
    serving: '1人份',
    category: ['quick', 'lowCost'],
    ingredients: [
      { name: '速冻水饺', amount: '15个' },
      { name: '醋', amount: '2勺' },
      { name: '生抽', amount: '1勺' },
      { name: '蒜末', amount: '适量' },
      { name: '辣椒油', amount: '适量' }
    ],
    steps: [
      '锅中水烧开下饺子',
      '煮至浮起后加半碗冷水',
      '再次煮开重复加一次冷水',
      '第三次煮开即可捞出',
      '调蘸料：醋+生抽+蒜末+辣椒油'
    ],
    tips: '煮饺子时加两次冷水更劲道'
  },
  {
    name: '泡菜炒饭',
    tags: ['清冰箱', '快手', '韩式'],
    time: '12分钟',
    cost: '约8元',
    serving: '1人份',
    category: ['quick', 'lowCost'],
    ingredients: [
      { name: '剩米饭', amount: '1碗' },
      { name: '泡菜', amount: '50g' },
      { name: '鸡蛋', amount: '1个' },
      { name: '火腿肠', amount: '1根' },
      { name: '韩式辣酱', amount: '1勺' },
      { name: '芝麻', amount: '适量' }
    ],
    steps: [
      '火腿肠切丁，泡菜切碎',
      '热油先煎荷包蛋盛出',
      '炒香火腿和泡菜',
      '加入米饭和韩式辣酱翻炒',
      '装盘放上煎蛋撒芝麻'
    ],
    tips: '用隔夜米饭炒出来更香'
  },
  {
    name: '蒜蓉西兰花',
    tags: ['健康', '素菜', '快手'],
    time: '8分钟',
    cost: '约6元',
    serving: '1-2人份',
    category: ['quick', 'healthy', 'lowCost'],
    ingredients: [
      { name: '西兰花', amount: '1个' },
      { name: '大蒜', amount: '5瓣' },
      { name: '盐', amount: '适量' },
      { name: '蚝油', amount: '1勺' },
      { name: '淀粉', amount: '1小勺' }
    ],
    steps: [
      '西兰花掰小朵焯水1分钟',
      '大蒜切末备用',
      '热油爆香蒜末',
      '下西兰花翻炒',
      '加盐、蚝油调味，水淀粉勾芡'
    ],
    tips: '西兰花焯水时加少许油保持翠绿'
  },
  {
    name: '西红柿鸡蛋汤',
    tags: ['快手', '汤品', '家常'],
    time: '10分钟',
    cost: '约6元',
    serving: '2人份',
    category: ['quick', 'lowCost', 'healthy'],
    ingredients: [
      { name: '西红柿', amount: '2个' },
      { name: '鸡蛋', amount: '2个' },
      { name: '小葱', amount: '1根' },
      { name: '盐', amount: '适量' },
      { name: '香油', amount: '几滴' }
    ],
    steps: [
      '西红柿切块，鸡蛋打散',
      '热油炒西红柿出汁',
      '加水煮开转小火煮5分钟',
      '淋入蛋花形成蛋花',
      '加盐、香油、葱花即可'
    ],
    tips: '淋蛋花时火要小，蛋花更嫩'
  },
  {
    name: '青椒肉丝',
    tags: ['下饭', '家常', '快手'],
    time: '15分钟',
    cost: '约12元',
    serving: '2人份',
    category: ['quick', 'mealPrep'],
    ingredients: [
      { name: '猪里脊', amount: '200g' },
      { name: '青椒', amount: '2个' },
      { name: '姜蒜', amount: '适量' },
      { name: '料酒', amount: '1勺' },
      { name: '淀粉', amount: '1勺' },
      { name: '生抽', amount: '2勺' }
    ],
    steps: [
      '肉切丝用料酒淀粉腌制',
      '青椒切丝，姜蒜切末',
      '热油滑炒肉丝变色盛出',
      '炒香姜蒜下青椒翻炒',
      '加入肉丝和生抽炒匀'
    ],
    tips: '肉丝提前腌制更嫩滑'
  },
  {
    name: '麻婆豆腐',
    tags: ['下饭', '川菜', '麻辣'],
    time: '20分钟',
    cost: '约10元',
    serving: '2人份',
    category: ['quick', 'lowCost'],
    ingredients: [
      { name: '豆腐', amount: '1块' },
      { name: '肉末', amount: '50g' },
      { name: '豆瓣酱', amount: '1勺' },
      { name: '花椒粉', amount: '1小勺' },
      { name: '淀粉', amount: '1勺' },
      { name: '小葱', amount: '1根' }
    ],
    steps: [
      '豆腐切块焯水去豆腥',
      '炒香肉末和豆瓣酱',
      '加水放入豆腐煮5分钟',
      '水淀粉勾芡撒花椒粉',
      '装盘撒葱花即可'
    ],
    tips: '豆腐焯水时加少许盐不易碎'
  },
  {
    name: '可乐鸡翅',
    tags: ['甜口', '简单', '受欢迎'],
    time: '25分钟',
    cost: '约18元',
    serving: '2-3人份',
    category: ['quick', 'weekend'],
    ingredients: [
      { name: '鸡翅', amount: '8个' },
      { name: '可乐', amount: '1罐' },
      { name: '姜片', amount: '3片' },
      { name: '料酒', amount: '1勺' },
      { name: '老抽', amount: '1勺' },
      { name: '芝麻', amount: '适量' }
    ],
    steps: [
      '鸡翅两面划刀用料酒腌制',
      '煎至两面金黄',
      '倒入可乐没过鸡翅',
      '加姜片、老抽煮15分钟',
      '大火收汁撒芝麻'
    ],
    tips: '用无糖可乐更健康'
  },
  {
    name: '蒜蓉粉丝蒸虾',
    tags: ['宴客', '鲜美', '简单'],
    time: '20分钟',
    cost: '约25元',
    serving: '2人份',
    category: ['weekend'],
    ingredients: [
      { name: '鲜虾', amount: '12只' },
      { name: '粉丝', amount: '1把' },
      { name: '大蒜', amount: '1头' },
      { name: '蒸鱼豉油', amount: '2勺' },
      { name: '小葱', amount: '1根' }
    ],
    steps: [
      '粉丝泡软铺在盘底',
      '虾开背去虾线摆盘',
      '蒜蓉用热油爆香',
      '蒜蓉铺在虾上蒸8分钟',
      '淋蒸鱼豉油撒葱花'
    ],
    tips: '蒸的时间不宜过长，虾肉会老'
  },
  {
    name: '地三鲜',
    tags: ['东北菜', '下饭', '素菜'],
    time: '20分钟',
    cost: '约10元',
    serving: '2人份',
    category: ['lowCost', 'mealPrep'],
    ingredients: [
      { name: '土豆', amount: '1个' },
      { name: '茄子', amount: '1个' },
      { name: '青椒', amount: '1个' },
      { name: '大蒜', amount: '3瓣' },
      { name: '生抽', amount: '2勺' },
      { name: '淀粉', amount: '适量' }
    ],
    steps: [
      '土豆茄子切滚刀块炸熟',
      '青椒过油捞出',
      '爆香蒜末',
      '下三鲜加生抽翻炒',
      '水淀粉勾芡出锅'
    ],
    tips: '茄子用盐腌一下再炸不吸油'
  },
  {
    name: '西红柿炒鸡蛋',
    tags: ['国民菜', '快手', '下饭'],
    time: '10分钟',
    cost: '约7元',
    serving: '2人份',
    category: ['quick', 'lowCost'],
    ingredients: [
      { name: '鸡蛋', amount: '3个' },
      { name: '西红柿', amount: '2个' },
      { name: '小葱', amount: '1根' },
      { name: '糖', amount: '1小勺' },
      { name: '盐', amount: '适量' }
    ],
    steps: [
      '鸡蛋打散炒熟盛出',
      '西红柿炒出汤汁',
      '加入鸡蛋翻炒均匀',
      '加糖和盐调味',
      '撒葱花出锅'
    ],
    tips: '加少许糖可以中和西红柿的酸味'
  },
  {
    name: '清蒸鲈鱼',
    tags: ['健康', '鲜美', '简单'],
    time: '15分钟',
    cost: '约20元',
    serving: '2人份',
    category: ['healthy', 'weekend'],
    ingredients: [
      { name: '鲈鱼', amount: '1条' },
      { name: '姜', amount: '1块' },
      { name: '小葱', amount: '2根' },
      { name: '蒸鱼豉油', amount: '3勺' },
      { name: '料酒', amount: '1勺' }
    ],
    steps: [
      '鲈鱼改刀用料酒腌制',
      '盘底铺姜片放上鱼',
      '水开蒸8-10分钟',
      '倒掉蒸鱼水淋蒸鱼豉油',
      '铺葱丝淋热油'
    ],
    tips: '蒸鱼时间按鱼大小调整'
  },
  {
    name: '回锅肉',
    tags: ['川菜', '下饭', '经典'],
    time: '25分钟',
    cost: '约15元',
    serving: '2-3人份',
    category: ['weekend'],
    ingredients: [
      { name: '五花肉', amount: '300g' },
      { name: '青蒜', amount: '3根' },
      { name: '豆瓣酱', amount: '1勺' },
      { name: '豆豉', amount: '1小勺' },
      { name: '甜面酱', amount: '1勺' }
    ],
    steps: [
      '五花肉煮20分钟切片',
      '热锅少油下肉片煸炒',
      '加入豆瓣酱豆豉炒香',
      '下青蒜翻炒均匀',
      '加甜面酱炒匀出锅'
    ],
    tips: '肉煮到筷子能插透即可'
  },
  {
    name: '蛋炒饭',
    tags: ['清冰箱', '快手', '经典'],
    time: '10分钟',
    cost: '约6元',
    serving: '1-2人份',
    category: ['quick', 'lowCost'],
    ingredients: [
      { name: '剩米饭', amount: '1碗' },
      { name: '鸡蛋', amount: '2个' },
      { name: '火腿肠', amount: '1根' },
      { name: '小葱', amount: '1根' },
      { name: '盐', amount: '适量' }
    ],
    steps: [
      '鸡蛋打散，火腿切丁',
      '热油炒鸡蛋盛出',
      '炒火腿丁和米饭',
      '加入鸡蛋翻炒均匀',
      '加盐和葱花出锅'
    ],
    tips: '用隔夜米饭炒出来粒粒分明'
  },
  {
    name: '凉拌黄瓜',
    tags: ['开胃', '快手', '夏日'],
    time: '5分钟',
    cost: '约4元',
    serving: '2人份',
    category: ['quick', 'lowCost', 'healthy'],
    ingredients: [
      { name: '黄瓜', amount: '2根' },
      { name: '大蒜', amount: '3瓣' },
      { name: '醋', amount: '2勺' },
      { name: '生抽', amount: '1勺' },
      { name: '糖', amount: '半勺' },
      { name: '辣椒油', amount: '适量' }
    ],
    steps: [
      '黄瓜拍松切段',
      '大蒜切末',
      '所有调料混合成汁',
      '淋在黄瓜上拌匀',
      '冰箱冷藏10分钟更佳'
    ],
    tips: '黄瓜拍松比切更易入味'
  },
  {
    name: '鱼香肉丝',
    tags: ['川菜', '下饭', '经典'],
    time: '20分钟',
    cost: '约15元',
    serving: '2人份',
    category: ['mealPrep'],
    ingredients: [
      { name: '猪里脊', amount: '200g' },
      { name: '木耳', amount: '5朵' },
      { name: '胡萝卜', amount: '半根' },
      { name: '豆瓣酱', amount: '1勺' },
      { name: '醋', amount: '1勺' },
      { name: '糖', amount: '1勺' }
    ],
    steps: [
      '肉丝腌制，蔬菜切丝',
      '调鱼香汁：醋糖生抽淀粉',
      '炒熟肉丝盛出',
      '炒豆瓣酱下蔬菜',
      '加入肉丝和鱼香汁翻炒'
    ],
    tips: '鱼香汁要提前调好'
  },
  {
    name: '冬瓜排骨汤',
    tags: ['汤品', '养生', '清淡'],
    time: '60分钟',
    cost: '约25元',
    serving: '3-4人份',
    category: ['healthy', 'weekend'],
    ingredients: [
      { name: '排骨', amount: '300g' },
      { name: '冬瓜', amount: '500g' },
      { name: '姜', amount: '5片' },
      { name: '料酒', amount: '1勺' },
      { name: '盐', amount: '适量' }
    ],
    steps: [
      '排骨焯水去血沫',
      '加水姜片料酒炖40分钟',
      '冬瓜去皮切块',
      '下冬瓜再炖20分钟',
      '加盐调味即可'
    ],
    tips: '排骨冷水下锅焯水更干净'
  },
  {
    name: '干煸豆角',
    tags: ['川菜', '下饭', '香辣'],
    time: '15分钟',
    cost: '约8元',
    serving: '2人份',
    category: ['quick', 'lowCost'],
    ingredients: [
      { name: '豆角', amount: '300g' },
      { name: '干辣椒', amount: '5个' },
      { name: '花椒', amount: '1小把' },
      { name: '猪肉末', amount: '50g' },
      { name: '生抽', amount: '1勺' },
      { name: '糖', amount: '半勺' }
    ],
    steps: [
      '豆角切段炸至皱皮',
      '炒香肉末和干辣椒花椒',
      '下豆角翻炒',
      '加生抽糖调味',
      '炒匀出锅'
    ],
    tips: '豆角一定要炸熟避免中毒'
  },
  {
    name: '糖醋里脊',
    tags: ['甜酸', '受欢迎', '宴客'],
    time: '25分钟',
    cost: '约20元',
    serving: '2-3人份',
    category: ['weekend'],
    ingredients: [
      { name: '猪里脊', amount: '300g' },
      { name: '鸡蛋', amount: '1个' },
      { name: '番茄酱', amount: '3勺' },
      { name: '糖', amount: '2勺' },
      { name: '醋', amount: '1勺' },
      { name: '淀粉', amount: '适量' }
    ],
    steps: [
      '肉切条用蛋清淀粉腌制',
      '炸至金黄酥脆',
      '炒番茄酱加糖醋水',
      '下肉条快速翻炒',
      '裹匀酱汁出锅'
    ],
    tips: '复炸一次更酥脆'
  },
  {
    name: '蚂蚁上树',
    tags: ['下饭', '素菜', '快手'],
    time: '15分钟',
    cost: '约7元',
    serving: '2人份',
    category: ['quick', 'lowCost'],
    ingredients: [
      { name: '粉丝', amount: '2把' },
      { name: '肉末', amount: '50g' },
      { name: '豆瓣酱', amount: '1勺' },
      { name: '小葱', amount: '1根' },
      { name: '生抽', amount: '1勺' }
    ],
    steps: [
      '粉丝泡软剪短',
      '炒香肉末和豆瓣酱',
      '加水生抽煮开',
      '下粉丝煮至收汁',
      '撒葱花出锅'
    ],
    tips: '粉丝不要泡太久影响口感'
  },
  {
    name: '白灼菜心',
    tags: ['粤菜', '健康', '简单'],
    time: '8分钟',
    cost: '约6元',
    serving: '2人份',
    category: ['quick', 'healthy'],
    ingredients: [
      { name: '菜心', amount: '300g' },
      { name: '姜丝', amount: '适量' },
      { name: '蒸鱼豉油', amount: '2勺' },
      { name: '食用油', amount: '1勺' }
    ],
    steps: [
      '菜心洗净焯水1分钟',
      '捞出摆盘放姜丝',
      '淋蒸鱼豉油',
      '淋上热油即可'
    ],
    tips: '焯水时加少许油和盐保持翠绿'
  },
  {
    name: '京酱肉丝',
    tags: ['京菜', '甜面', '卷饼'],
    time: '20分钟',
    cost: '约18元',
    serving: '2-3人份',
    category: ['weekend'],
    ingredients: [
      { name: '猪里脊', amount: '300g' },
      { name: '甜面酱', amount: '3勺' },
      { name: '糖', amount: '1勺' },
      { name: '豆腐皮', amount: '2张' },
      { name: '黄瓜', amount: '1根' },
      { name: '大葱', amount: '1根' }
    ],
    steps: [
      '肉切丝腌制滑炒',
      '炒甜面酱加糖和水',
      '下肉丝裹匀酱汁',
      '豆腐皮切块焯水',
      '搭配黄瓜葱丝卷食'
    ],
    tips: '甜面酱要炒出香味'
  },
  {
    name: '蚝油生菜',
    tags: ['快手', '素菜', '健康'],
    time: '5分钟',
    cost: '约5元',
    serving: '2人份',
    category: ['quick', 'lowCost', 'healthy'],
    ingredients: [
      { name: '生菜', amount: '1颗' },
      { name: '蚝油', amount: '2勺' },
      { name: '大蒜', amount: '3瓣' },
      { name: '食用油', amount: '1勺' }
    ],
    steps: [
      '生菜焯水10秒捞出',
      '爆香蒜末',
      '加蚝油和少许水',
      '淋在生菜上即可'
    ],
    tips: '生菜焯水时间要短保持脆爽'
  },
  {
    name: '辣子鸡丁',
    tags: ['川菜', '麻辣', '下酒'],
    time: '25分钟',
    cost: '约22元',
    serving: '2-3人份',
    category: ['weekend'],
    ingredients: [
      { name: '鸡腿肉', amount: '2个' },
      { name: '干辣椒', amount: '1碗' },
      { name: '花椒', amount: '2勺' },
      { name: '花生米', amount: '50g' },
      { name: '芝麻', amount: '适量' },
      { name: '料酒', amount: '1勺' }
    ],
    steps: [
      '鸡丁腌制炸至金黄',
      '爆香干辣椒花椒',
      '下鸡丁翻炒',
      '加花生米芝麻',
      '炒匀出锅'
    ],
    tips: '辣椒剪段更出味'
  }
]