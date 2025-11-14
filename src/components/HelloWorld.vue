<template>
  <div class="page-container">
    <!-- 背景装饰元素 -->
    <div class="bg-decoration bg-1"></div>
    <div class="bg-decoration bg-2"></div>
    <div class="bg-decoration bg-3"></div>
    <div class="bg-decoration bg-4"></div>
    <div class="bg-decoration bg-5"></div>

    <!-- 浮动食物图标 -->
    <div class="floating-food">🍳</div>
    <div class="floating-food">🥘</div>
    <div class="floating-food">🍲</div>

    <div class="head">
      <span class="title-text">今天吃啥呀</span>
      <span class="title-emoji">🤔</span>
    </div>

    <!-- 添加一个可爱的图标 -->
    <div class="food-icon">🍕</div>

    <div class="radio-section">
      <el-radio-group v-model="radio1">
        <el-radio-button label="1" class="radio-btn">
          <span class="btn-icon">🎯</span>帮我选~
        </el-radio-button>
        <el-radio-button label="2" class="radio-btn">
          <span class="btn-icon">🔍</span>自己挑！
        </el-radio-button>
      </el-radio-group>
    </div>

    <!-- 帮我选模式 -->
    <div class="help-choose" v-if="radio1 == 1">
      <div class="filter-section">
        <div class="filter-title">
          <span class="filter-icon">🎛️</span>筛选条件：
        </div>
        <div class="filter-options">
          <el-checkbox-group v-model="filters">
            <el-checkbox label="quick" class="filter-checkbox">
              <span class="checkbox-icon">⚡</span>快手菜(15分钟)
            </el-checkbox>
            <el-checkbox label="lowCost" class="filter-checkbox">
              <span class="checkbox-icon">💰</span>省钱模式(＜20元)
            </el-checkbox>
            <el-checkbox label="healthy" class="filter-checkbox">
              <span class="checkbox-icon">🥗</span>健康轻食
            </el-checkbox>
            <el-checkbox label="mealPrep" class="filter-checkbox">
              <span class="checkbox-icon">🍱</span>适合带饭
            </el-checkbox>
            <el-checkbox label="weekend" class="filter-checkbox">
              <span class="checkbox-icon">🎉</span>周末大餐
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </div>

      <div class="recommend-section">
        <el-button
          type="warning"
          class="recommend-btn"
          @click="recommendDish"
          :loading="recommending"
          :icon="recommending ? '' : 'el-icon-food'"
        >
          <span class="btn-spin" v-if="recommending">🌀</span>
          <span v-else>🎲</span>
          {{ recommending ? "思考中..." : "随机推荐" }}
        </el-button>

        <div v-if="recommendedDish" class="result-card">
          <div class="result-header">
            <div class="result-title">🎉 今日推荐</div>
            <div class="dish-emoji">
              {{ getDishEmoji(recommendedDish.name) }}
            </div>
          </div>
          <div class="dish-name">{{ recommendedDish.name }}</div>
          <div class="dish-tags">
            <span v-for="tag in recommendedDish.tags" :key="tag" class="tag">{{
              tag
            }}</span>
          </div>
          <div class="dish-info">
            <span class="info-item">⏱️ {{ recommendedDish.time }}</span>
            <span class="info-item">💰 {{ recommendedDish.cost }}</span>
            <span class="info-item">👨‍👩‍👧 {{ recommendedDish.serving }}</span>
          </div>

          <!-- 食材和做法按钮 -->
          <div class="action-buttons">
            <el-button
              type="primary"
              class="detail-btn ingredient-btn"
              @click="showIngredients(recommendedDish)"
            >
              <span class="btn-emoji">🛒</span>
              查看食材
            </el-button>
            <el-button
              type="success"
              class="detail-btn recipe-btn"
              @click="showRecipe(recommendedDish)"
            >
              <span class="btn-emoji">👨‍🍳</span>
              做法步骤
            </el-button>
          </div>

          <el-button type="text" class="retry-btn" @click="recommendDish">
            <span class="retry-icon">🔄</span>换一个试试
          </el-button>
        </div>
      </div>
    </div>

    <!-- 自己挑模式 -->
    <div class="cm" v-if="radio1 == 2">
      <div class="search-section">
        <span class="input-label">🔍 输入菜名：</span>
        <el-input
          size="mini"
          style="width: 14rem"
          class="fix-ios-zoom custom-input"
          placeholder="比如：红烧肉、番茄炒蛋..."
          v-model="searchKeyword"
        >
          <template slot="append">
            <el-button icon="el-icon-search"></el-button>
          </template>
        </el-input>
      </div>
    </div>

    <!-- 食材弹窗 -->
    <el-dialog
      title="🛒 所需食材"
      :visible.sync="ingredientsVisible"
      width="90%"
      max-width="400px"
      class="ingredients-dialog"
      center
    >
      <div class="ingredients-content">
        <h3>{{ currentDish?.name }} {{ getDishEmoji(currentDish?.name) }}</h3>
        <div class="ingredients-card">
          <ul class="ingredients-list">
            <li
              v-for="(ingredient, index) in currentDish?.ingredients"
              :key="index"
            >
              <span class="ingredient-emoji">{{
                getIngredientEmoji(ingredient.name)
              }}</span>
              <span class="ingredient-name">{{ ingredient.name }}</span>
              <span class="ingredient-amount">{{ ingredient.amount }}</span>
            </li>
          </ul>
        </div>
        <div class="cooking-tips" v-if="currentDish?.tips">
          <strong>💡 小贴士：</strong>{{ currentDish.tips }}
        </div>
      </div>
    </el-dialog>

    <!-- 做法弹窗 -->
    <el-dialog
      title="👨‍🍳 详细做法"
      :visible.sync="recipeVisible"
      width="90%"
      max-width="500px"
      class="recipe-dialog"
      center
    >
      <div class="recipe-content">
        <h3>{{ currentDish?.name }} {{ getDishEmoji(currentDish?.name) }}</h3>
        <div class="steps">
          <div
            v-for="(step, index) in currentDish?.steps"
            :key="index"
            class="step-item"
          >
            <div class="step-header">
              <span class="step-number">{{ index + 1 }}</span>
              <span class="step-title">步骤 {{ index + 1 }}</span>
            </div>
            <div class="step-content">{{ step }}</div>
          </div>
        </div>
        <div class="cooking-tips" v-if="currentDish?.tips">
          <strong>💡 小贴士：</strong>{{ currentDish.tips }}
        </div>
      </div>
    </el-dialog>

    <!-- 添加底部装饰 -->
    <div class="bottom-decoration">
      <span>🍔</span>
      <span>🍣</span>
      <span>🍜</span>
      <span>🍦</span>
      <span>🍩</span>
      <span>🥗</span>
      <span>🍖</span>
    </div>
  </div>
</template>

<script>
import { list } from "./list";
export default {
  data() {
    return {
      activeName: "activeName",
      radio1: 1,
      filters: ["quick", "lowCost", "mealPrep"],
      recommending: false,
      recommendedDish: null,
      searchKeyword: "",
      ingredientsVisible: false,
      recipeVisible: false,
      currentDish: null,

      // 增强版菜谱数据库
      dishDatabase: list
    };
  },
  methods: {
    handleClick() {},

    recommendDish() {
      this.recommending = true;

      setTimeout(() => {
        let filteredDishes = this.dishDatabase;

        if (this.filters.length > 0) {
          filteredDishes = this.dishDatabase.filter((dish) =>
            this.filters.some((filter) => dish.category.includes(filter))
          );
        }

        if (filteredDishes.length === 0) {
          filteredDishes = this.dishDatabase;
        }

        const randomIndex = Math.floor(Math.random() * filteredDishes.length);
        this.recommendedDish = filteredDishes[randomIndex];
        this.recommending = false;
      }, 800);
    },

    showIngredients(dish) {
      this.currentDish = dish;
      this.ingredientsVisible = true;
    },

    showRecipe(dish) {
      this.currentDish = dish;
      this.recipeVisible = true;
    },

    getDishEmoji(name) {
      const emojiMap = {
        番茄鸡蛋面: "🍜",
        电饭煲一锅出: "🍚",
        鸡胸肉沙拉: "🥗",
        麻辣香锅: "🥘",
        咖喱鸡肉饭: "🍛",
      };
      return emojiMap[name] || "🍽️";
    },
    getIngredientEmoji(name) {
      const emojiMap = {
        // 主食类
        面条: "🍜",
        大米: "🍚",
        米饭: "🍚",
        剩米饭: "🍚",
        粉丝: "🍜",
        速冻水饺: "🥟",
        豆腐皮: "🥠",
        馒头: "🍞",
        面包: "🍞",
        饼: "🫓",

        // 肉类
        鸡蛋: "🥚",
        猪肉: "🐷",
        猪里脊: "🐷",
        五花肉: "🐷",
        肉末: "🐷",
        排骨: "🍖",
        鸡胸肉: "🍗",
        鸡腿肉: "🍗",
        鸡翅: "🍗",
        腊肠: "🌭",
        火腿肠: "🌭",
        肉类丸子: "🍡",
        鲜虾: "🦐",
        鲈鱼: "🐟",
        虾: "🦐",
        鱼: "🐟",

        // 蔬菜类
        番茄: "🍅",
        西红柿: "🍅",
        土豆: "🥔",
        胡萝卜: "🥕",
        洋葱: "🧅",
        小葱: "🧅",
        大葱: "🧅",
        葱: "🧅",
        姜: "🧄",
        大蒜: "🧄",
        姜片: "🧄",
        蒜末: "🧄",
        姜蒜: "🧄",
        青椒: "🫑",
        辣椒: "🌶️",
        干辣椒: "🌶️",
        花椒: "🌿",
        八角: "🌟",
        芝麻: "🌰",
        西兰花: "🥦",
        生菜: "🥬",
        青菜: "🥬",
        菜心: "🥬",
        黄瓜: "🥒",
        小番茄: "🍅",
        茄子: "🍆",
        豆角: "🥬",
        冬瓜: "🍈",
        木耳: "🍄",
        香菇: "🍄",
        花生米: "🥜",
        泡菜: "🥬",
        喜欢的蔬菜: "🥬",
        豆豉: "🥫",
        甜面酱: "🥫",
        豆瓣酱: "🥫",

        // 调味料
        生抽: "🧂",
        老抽: "🧂",
        蚝油: "🧂",
        醋: "🧂",
        料酒: "🍶",
        盐: "🧂",
        糖: "🧂",
        蒸鱼豉油: "🧂",
        辣椒油: "🌶️",
        橄榄油: "🫒",
        黑醋: "🧂",
        香油: "🪔",
        淀粉: "🌾",
        韩式辣酱: "🥫",
        火锅底料: "🥘",
        咖喱块: "🍛",
        椰浆: "🥥",
        可乐: "🥤",
        番茄酱: "🥫",
        水: "💧",
        食用油: "🫒",
        冰糖: "🍬",

        // 其他
        豆腐: "🥟",
        豆腐块: "🥟",
        香菜: "🌿",
        葱花: "🧅",
        葱姜蒜: "🧄",
        姜丝: "🧄",
        蒜蓉: "🧄",
        肉丝: "🐷",
        鸡丁: "🍗",
        肉条: "🐷",
        肉片: "🐷",
        鸡块: "🍗",
        虾线: "🦐",
        蛋清: "🥚",
        蛋花: "🥚",
        荷包蛋: "🍳",
        蘸料: "🧂",
        油醋汁: "🧂",
        鱼香汁: "🧂",
        水淀粉: "🌾",
      };

      // 模糊匹配
      for (const [key, emoji] of Object.entries(emojiMap)) {
        if (name.includes(key)) {
          return emoji;
        }
      }

      return "📝"; // 默认图标
    },
  },

  mounted() {
    this.recommendDish();
  },
};
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #fff9f0 0%, #ffe8d6 50%, #ffd8b3 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;
}

/* 背景装饰元素 - 增强版 */
.bg-decoration {
  position: absolute;
  border-radius: 50%;
  opacity: 0.08;
  animation: float 6s ease-in-out infinite;
  filter: blur(1px);
}

.bg-1 {
  width: 120px;
  height: 120px;
  background: #ff9a00;
  top: 10%;
  left: -30px;
  animation-delay: 0s;
}

.bg-2 {
  width: 80px;
  height: 80px;
  background: #ff6a00;
  top: 60%;
  right: -20px;
  animation-delay: 2s;
}

.bg-3 {
  width: 60px;
  height: 60px;
  background: #ff4757;
  bottom: 20%;
  left: 10%;
  animation-delay: 4s;
}

.bg-4 {
  width: 100px;
  height: 100px;
  background: #ffa502;
  top: 30%;
  right: 10%;
  animation-delay: 1s;
}

.bg-5 {
  width: 70px;
  height: 70px;
  background: #ff6348;
  bottom: 40%;
  left: 60%;
  animation-delay: 3s;
}

/* 浮动食物图标 */
.floating-food {
  position: absolute;
  font-size: 24px;
  opacity: 0.1;
  animation: floatFood 8s ease-in-out infinite;
}

.floating-food:nth-child(1) {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.floating-food:nth-child(2) {
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.floating-food:nth-child(3) {
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
}

/* 头部样式增强 */
.head {
  background: linear-gradient(135deg, #ff9a00, #ff6a00, #ff4757);
  color: white;
  text-align: center;
  padding: 25px 0;
  font-size: 28px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 0 8px 25px rgba(255, 106, 0, 0.4);
  position: relative;
  overflow: hidden;
  margin: 10px auto;
  border-radius: 20px;
  max-width: 95%;
}

.title-text {
  display: inline-block;
  animation: bounce 2s ease-in-out infinite;
}

.title-emoji {
  margin-left: 10px;
  font-size: 32px;
}

.head::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 20% 30%,
      rgba(255, 255, 255, 0.2) 2px,
      transparent 3px
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(255, 255, 255, 0.15) 1px,
      transparent 2px
    );
  background-size: 40px 40px;
  animation: float 3s ease-in-out infinite alternate;
}

/* 食物图标 */
.food-icon {
  font-size: 48px;
  text-align: center;
  margin: 10px 0;
  animation: bounce 2s ease-in-out infinite;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

/* 单选按钮区域美化 */
.radio-section {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(255, 106, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-icon {
  margin-right: 8px;
  font-size: 16px;
}

/* 筛选区域美化 */
.filter-section {
  background: rgba(255, 255, 255, 0.95);
  padding: 25px;
  border-radius: 20px;
  margin-bottom: 25px;
  box-shadow: 0 8px 25px rgba(255, 106, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.filter-title {
  font-weight: bold;
  color: #ff6a00;
  margin-bottom: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.filter-icon {
  margin-right: 10px;
  font-size: 20px;
}

.filter-options {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.filter-checkbox {
  margin-right: 0;
}

.checkbox-icon {
  margin-right: 8px;
  font-size: 14px;
}

/* 推荐按钮美化 */
.recommend-btn {
  background: linear-gradient(135deg, #ff9a00, #ff6a00);
  border: none;
  border-radius: 30px;
  padding: 15px 35px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 6px 20px rgba(255, 106, 0, 0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.recommend-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(255, 106, 0, 0.5);
}

.recommend-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s;
}

.recommend-btn:hover::before {
  left: 100%;
}

/* 结果卡片美化 */
.result-card {
  background: linear-gradient(135deg, #ffffff, #fff9f0);
  border-radius: 25px;
  padding: 30px;
  margin-top: 25px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  animation: slideUp 0.6s ease;
  position: relative;
  overflow: hidden;
}

.result-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff9a00, #ff6a00, #ff4757);
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.result-title {
  font-size: 16px;
  color: #666;
  font-weight: bold;
}

.dish-emoji {
  font-size: 32px;
}

.dish-name {
  font-size: 28px;
  font-weight: bold;
  color: #ff6a00;
  margin-bottom: 15px;
  text-align: center;
}

.dish-tags {
  margin-bottom: 20px;
  text-align: center;
}

.tag {
  display: inline-block;
  background: linear-gradient(135deg, #fff0e6, #ffe0cc);
  color: #ff6a00;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 12px;
  margin: 0 5px 8px 0;
  border: 1px solid rgba(255, 154, 0, 0.2);
}

.dish-info {
  display: flex;
  justify-content: space-around;
  color: #666;
  font-size: 14px;
  margin-bottom: 25px;
  padding: 15px;
  background: rgba(255, 250, 240, 0.8);
  border-radius: 15px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

/* 按钮组美化 */
.action-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: 25px 0;
  flex-wrap: wrap;
}

.detail-btn {
  border-radius: 25px;
  padding: 12px 25px;
  font-weight: bold;
  border: none;
  transition: all 0.3s ease;
}

.ingredient-btn {
  background: linear-gradient(135deg, #409eff, #337ecc);
  box-shadow: 0 4px 15px rgba(64, 158, 255, 0.3);
}

.recipe-btn {
  background: linear-gradient(135deg, #67c23a, #529b2e);
  box-shadow: 0 4px 15px rgba(103, 194, 58, 0.3);
}

.detail-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.btn-emoji {
  margin-right: 8px;
  font-size: 16px;
}

.retry-btn {
  color: #ff9a00;
  font-size: 14px;
  font-weight: bold;
}

.retry-icon {
  margin-right: 5px;
}

/* 搜索区域美化 */
.search-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(255, 106, 0, 0.15);
}

.input-label {
  font-weight: bold;
  color: #ff6a00;
  margin-right: 15px;
  font-size: 16px;
  white-space: nowrap;
}

/* 弹窗内容美化 */
.ingredients-content h3,
.recipe-content h3 {
  color: #ff6a00;
  text-align: center;
  margin-bottom: 25px;
  font-size: 22px;
}

.ingredients-card {
  background: #fffaf0;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ffe0b2;
}

.ingredients-list {
  list-style: none;
  padding: 0;
}

.ingredients-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.ingredient-emoji {
  font-size: 18px;
  margin-right: 10px;
}

.ingredient-name {
  color: #333;
  flex: 1;
}

.ingredient-amount {
  color: #ff6a00;
  font-weight: bold;
  background: #fff0e6;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
}

.steps {
  margin: 25px 0;
}

.step-item {
  margin-bottom: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #f8f9fa, #f0f2f5);
  border-radius: 15px;
  border-left: 5px solid #ff9a00;
  transition: transform 0.3s ease;
}

.step-item:hover {
  transform: translateX(5px);
}

.step-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.step-number {
  background: #ff9a00;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
}

.step-title {
  font-weight: bold;
  color: #ff6a00;
}

.step-content {
  color: #666;
  line-height: 1.6;
  padding-left: 40px;
}

.cooking-tips {
  background: linear-gradient(135deg, #fff0e6, #ffe0cc);
  padding: 20px;
  border-radius: 15px;
  margin-top: 20px;
  color: #666;
  border-left: 4px solid #ff9a00;
}

/* 底部装饰 */
.bottom-decoration {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 28px;
  opacity: 0.15;
  animation: float 10s ease-in-out infinite;
}

.bottom-decoration span {
  margin: 0 10px;
  display: inline-block;
  animation: bounce 3s ease-in-out infinite;
}

.bottom-decoration span:nth-child(2) {
  animation-delay: 0.5s;
}
.bottom-decoration span:nth-child(3) {
  animation-delay: 1s;
}
.bottom-decoration span:nth-child(4) {
  animation-delay: 1.5s;
}
.bottom-decoration span:nth-child(5) {
  animation-delay: 2s;
}
.bottom-decoration span:nth-child(6) {
  animation-delay: 2.5s;
}
.bottom-decoration span:nth-child(7) {
  animation-delay: 3s;
}

/* 动画效果 */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) rotate(120deg);
  }
  66% {
    transform: translateY(8px) rotate(240deg);
  }
}

@keyframes floatFood {
  0%,
  100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) translateX(10px) rotate(90deg);
  }
  50% {
    transform: translateY(10px) translateX(-10px) rotate(180deg);
  }
  75% {
    transform: translateY(-10px) translateX(5px) rotate(270deg);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* 弹窗样式优化 */
:deep(.ingredients-dialog .el-dialog__header) {
  background: linear-gradient(135deg, #ff9a00, #ff6a00);
  border-radius: 10px 10px 0 0;
  padding: 20px;
}

:deep(.ingredients-dialog .el-dialog__title) {
  color: white;
  font-weight: bold;
  font-size: 18px;
}

:deep(.recipe-dialog .el-dialog__header) {
  background: linear-gradient(135deg, #67c23a, #529b2e);
  border-radius: 10px 10px 0 0;
  padding: 20px;
}

:deep(.recipe-dialog .el-dialog__title) {
  color: white;
  font-weight: bold;
  font-size: 18px;
}

:deep(.el-dialog__body) {
  padding: 30px;
}

/* 响应式调整 */
@media (max-width: 480px) {
  .page-container {
    padding: 15px;
  }

  .head {
    font-size: 22px;
    padding: 20px 0;
    border-radius: 15px;
  }

  .radio-section {
    padding: 20px;
    margin-top: 20px;
  }

  .filter-section {
    padding: 20px;
  }

  .filter-options {
    flex-direction: column;
    gap: 12px;
  }

  .action-buttons {
    flex-direction: column;
  }

  .detail-btn {
    width: 100%;
  }

  .dish-info {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .search-section {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .step-item {
    padding: 15px;
  }

  .step-content {
    padding-left: 0;
  }
}

/* 修复iOS缩放问题 */
.fix-ios-zoom :deep(.el-input__inner) {
  font-size: 16px !important;
  border-radius: 15px;
  border: 2px solid #ffe0b2;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.fix-ios-zoom :deep(.el-input__inner:focus) {
  border-color: #ff9a00;
  box-shadow: 0 0 0 2px rgba(255, 154, 0, 0.2);
  background: white;
}
</style>