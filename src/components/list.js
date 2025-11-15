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


// weekend-special.js - 周末豪华大餐专属菜谱
export const weekendSpecial = [
  {
    name: '红酒炖牛肉',
    tags: ['法式', '浪漫', '耗时但值得'],
    time: '3小时',
    cost: '约80元',
    serving: '3-4人份',
    category: ['weekend', 'special'],
    difficulty: '中等',
    ingredients: [
      { name: '牛腩', amount: '500g' },
      { name: '红酒', amount: '1瓶（750ml）' },
      { name: '胡萝卜', amount: '2根' },
      { name: '洋葱', amount: '1个' },
      { name: '蘑菇', amount: '200g' },
      { name: '培根', amount: '100g' },
      { name: '番茄膏', amount: '2勺' },
      { name: '百里香', amount: '适量' },
      { name: '月桂叶', amount: '2片' },
      { name: '黑胡椒', amount: '适量' },
      { name: '海盐', amount: '适量' },
      { name: '面粉', amount: '2勺' }
    ],
    steps: [
      '牛腩切块用厨房纸吸干水分，撒盐和黑胡椒腌制15分钟',
      '培根切条煎至金黄，取出备用',
      '用培根油将牛腩每面煎至焦黄，取出备用',
      '洋葱、胡萝卜切块，蘑菇切片，用同一锅炒香',
      '加入番茄膏炒出红油，撒入面粉炒匀',
      '倒入红酒，加入百里香、月桂叶，煮沸后转小火',
      '放回牛肉和培根，加盖慢炖2.5小时',
      '最后30分钟加入蘑菇，炖至牛肉软烂',
      '去除月桂叶，调整盐味，搭配法棍或土豆泥享用'
    ],
    tips: '选择酒体饱满的红酒如赤霞珠，炖煮时间越长风味越浓郁',
    pairing: '搭配烤蔬菜和红酒更佳',
    specialNote: '适合纪念日或重要聚会'
  },
  {
    name: '意大利海鲜烩饭',
    tags: ['意式', '海鲜盛宴', '餐厅级'],
    time: '45分钟',
    cost: '约60元',
    serving: '2-3人份',
    category: ['weekend', 'special'],
    difficulty: '中等',
    ingredients: [
      { name: '意大利米', amount: '200g' },
      { name: '大虾', amount: '8只' },
      { name: '青口贝', amount: '10个' },
      { name: '鱿鱼', amount: '1只' },
      { name: '鱼高汤', amount: '500ml' },
      { name: '白葡萄酒', amount: '100ml' },
      { name: '洋葱', amount: '半个' },
      { name: '大蒜', amount: '3瓣' },
      { name: '番茄', amount: '2个' },
      { name: '藏红花', amount: '一小撮' },
      { name: '帕玛森奶酪', amount: '适量' },
      { name: '欧芹', amount: '适量' },
      { name: '柠檬', amount: '1个' }
    ],
    steps: [
      '海鲜处理干净，虾去壳留尾，鱿鱼切圈',
      '鱼高汤加热保温，藏红花用温水泡发',
      '洋葱、大蒜切末，番茄去皮切丁',
      '橄榄油炒香洋葱大蒜，加入意大利米炒至透明',
      '倒入白葡萄酒煮至酒精挥发',
      '分次加入热高汤，每次待米吸收后再加下一勺',
      '煮10分钟后加入番茄和藏红花水',
      '米粒八成熟时铺上海鲜，加盖焖5分钟',
      '撒帕玛森奶酪和欧芹，挤柠檬汁即可'
    ],
    tips: '米粒要有嚼劲（al dente），不要过度搅拌',
    pairing: '搭配白葡萄酒如霞多丽',
    specialNote: '藏红花是这道菜的灵魂'
  },
  {
    name: '慢烤羊排配薄荷酱',
    tags: ['西餐', '节日大餐', '精致'],
    time: '2小时',
    cost: '约120元',
    serving: '2人份',
    category: ['weekend', 'special'],
    difficulty: '中等',
    ingredients: [
      { name: '法式羊排', amount: '1扇（8根）' },
      { name: '迷迭香', amount: '2枝' },
      { name: '大蒜', amount: '5瓣' },
      { name: '橄榄油', amount: '适量' },
      { name: '海盐', amount: '适量' },
      { name: '黑胡椒', amount: '适量' },
      { name: '第戎芥末酱', amount: '1勺' },
      { name: '面包糠', amount: '50g' },
      { name: '帕玛森奶酪', amount: '30g' },
      // 薄荷酱部分
      { name: '新鲜薄荷', amount: '1把' },
      { name: '希腊酸奶', amount: '100g' },
      { name: '柠檬汁', amount: '1个' },
      { name: '蜂蜜', amount: '1小勺' }
    ],
    steps: [
      '羊排用厨房纸吸干，两面撒满海盐和黑胡椒',
      '大蒜压碎与迷迭香、橄榄油混合，涂抹羊排腌制1小时',
      '烤箱预热200°C，羊排煎至两面金黄',
      '抹上第戎芥末酱，撒面包糠和帕玛森奶酪混合物',
      '入烤箱烤15-20分钟（三分熟）或至个人喜好程度',
      '制作薄荷酱：薄荷叶切碎，与希腊酸奶、柠檬汁、蜂蜜混合',
      '羊排静置5分钟后切块，搭配薄荷酱和烤蔬菜'
    ],
    tips: '用温度计测量内部温度：55°C三分熟，65°C全熟',
    pairing: '搭配红酒如西拉或梅洛',
    specialNote: '适合生日或浪漫晚餐'
  },
  {
    name: '日式寿喜烧',
    tags: ['日式', '围炉', '丰盛'],
    time: '90分钟',
    cost: '约100元',
    serving: '3-4人份',
    category: ['weekend', 'special'],
    difficulty: '简单',
    ingredients: [
      { name: '和牛片', amount: '300g' },
      { name: '老豆腐', amount: '1块' },
      { name: '大葱', amount: '2根' },
      { name: '香菇', amount: '8朵' },
      { name: '金针菇', amount: '1把' },
      { name: '茼蒿', amount: '1把' },
      { name: '白菜', amount: '适量' },
      { name: '魔芋丝', amount: '1包' },
      { name: '寿喜烧酱汁', amount: '200ml' },
      { name: '可生食鸡蛋', amount: '4个' },
      { name: '黄油', amount: '20g' }
    ],
    steps: [
      '所有蔬菜洗净切好，豆腐切块煎至两面金黄',
      '寿喜锅加热，融化黄油，煎香大葱段',
      '铺入和牛片略煎，倒入寿喜烧酱汁',
      '整齐摆放所有食材：豆腐、香菇、金针菇、白菜等',
      '加入适量水，煮沸后转小火慢炖',
      '可生食鸡蛋打散作为蘸料',
      '边煮边吃，最后可加入乌冬面收尾'
    ],
    tips: '先煎肉再放蔬菜，牛肉不要煮太久保持嫩滑',
    pairing: '搭配清酒或绿茶',
    specialNote: '冬日暖身最佳选择'
  },
  {
    name: '泰式冬阴功汤',
    tags: ['泰式', '酸辣开胃', '异国风味'],
    time: '40分钟',
    cost: '约50元',
    serving: '3-4人份',
    category: ['weekend', 'special'],
    difficulty: '简单',
    ingredients: [
      { name: '大虾', amount: '200g' },
      { name: '草菇', amount: '150g' },
      { name: '香茅', amount: '2根' },
      { name: '柠檬叶', amount: '5片' },
      { name: '南姜', amount: '3片' },
      { name: '小米椒', amount: '3个' },
      { name: '番茄', amount: '1个' },
      { name: '洋葱', amount: '半个' },
      { name: '椰浆', amount: '200ml' },
      { name: '鱼露', amount: '2勺' },
      { name: '青柠', amount: '2个' },
      { name: '冬阴功酱', amount: '2勺' },
      { name: '香菜', amount: '适量' }
    ],
    steps: [
      '虾去壳留尾，虾头用来熬汤底',
      '香茅拍松切段，南姜切片，番茄切块',
      '虾头炒出红油，加水煮沸熬10分钟，过滤得虾汤',
      '虾汤中加入香茅、南姜、柠檬叶煮5分钟出味',
      '加入冬阴功酱、草菇、番茄煮5分钟',
      '放入虾仁煮至变色，加入椰浆',
      '关火后加入鱼露、青柠汁、小米椒',
      '撒香菜，搭配米饭享用'
    ],
    tips: '青柠汁最后放，煮久会变苦',
    pairing: '搭配泰国茉莉香米',
    specialNote: '酸辣开胃，适合夏天'
  },
  {
    name: '法式焦糖布蕾',
    tags: ['法式甜点', '精致', '完美收官'],
    time: '2小时（含冷藏）',
    cost: '约30元',
    serving: '4人份',
    category: ['weekend', 'special', 'dessert'],
    difficulty: '中等',
    ingredients: [
      { name: '淡奶油', amount: '250ml' },
      { name: '牛奶', amount: '100ml' },
      { name: '蛋黄', amount: '4个' },
      { name: '细砂糖', amount: '40g' },
      { name: '香草荚', amount: '半根' },
      { name: '黄砂糖', amount: '适量（焦糖用）' },
      { name: '喷枪', amount: '1个' }
    ],
    steps: [
      '淡奶油、牛奶、刮出的香草籽和荚一起加热至微沸',
      '蛋黄加细砂糖打至发白浓稠',
      '慢慢倒入热奶油，边倒边搅拌',
      '过筛布丁液，倒入烤碗中',
      '烤盘加热水，150°C水浴烤40分钟',
      '冷藏4小时以上，表面撒黄砂糖用喷枪焦化'
    ],
    tips: '水浴法防止布丁开裂，焦糖要趁热吃',
    pairing: '搭配甜白葡萄酒或咖啡',
    specialNote: '宴客甜点的绝佳选择'
  }
];