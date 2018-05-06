<template>
  <div>
      <div class="contain">
          <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="诗歌" name="poem">
            <img src="@/assets/head1.jpg" class="himg" height="180px" width="100%" alt="">
            <div class="poemcontain">
            <div class="onep">
            <h1>七律 长征</h1> 
            <h2>（毛泽东1935年10月作）</h2>
            <p>红军不怕远征难，万水千山只等闲。</p>
            <p>五岭逶迤腾细浪，乌蒙磅礴走泥丸。</p>
            <p>金沙水拍云崖暖，大渡桥横铁索寒。</p>
            <p>更喜岷山千里雪，三军过后尽开颜。</p>
            <img src="@/assets/poem1.jpg" class="pimg" height="180px" alt="" srcset="">            
                </div>
            <div class="onep">
            <h1>十六字令三首</h1>
            <h2>（毛泽东1934年至1935年作）</h2>
            <p>山，快马加鞭未下鞍。惊回首，离天三尺三。</p>
            <p>山，倒海翻江卷巨澜。奔腾急，万马战犹酣。</p>
            <p>山，刺破青天锷未残。天欲堕，赖以拄其间。</p>
            <img src="@/assets/poem2.jpg" class="pimg" height="180px" alt="" srcset="">
                </div>
            <div class="onep">
            <h1>忆秦娥·娄山关</h1>
            <h2>（毛泽东 1935年2月作）</h2>
            <p>西风烈，长空雁叫霜晨月。</p>
            <p>霜晨月，马蹄声碎，喇叭声咽。</p>
            <p>雄关漫道真如铁，而今迈步从头越。</p>
            <p>从头越，苍山如海，残阳如血。</p>
            <img src="@/assets/poem3.jpg" class="pimg" height="180px" alt="" srcset="">
                </div>
            <div class="onep">
            <h1>清平乐·六盘山</h1>
            <h2>（毛泽东1935年10月作）</h2>
            <p>天高云淡，望断南飞雁。</p>
            <p>不到长城非好汉，屈指行程二万。</p>
            <p>六盘山上高峰，红旗漫卷西风。</p>
            <p>今日长缨在手，何时缚住苍龙？</p>
            <img src="@/assets/poem4.jpg" class="pimg" height="180px" alt="" srcset="">
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="小故事" name="story">
            <img src="@/assets/head2.jpg" class="himg" height="180px" width="100%" alt="">
            <div class="story">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;红军队伍在冰天雪地里艰难的前进。严寒把云中山冻成了一个大冰坨，狂风呼啸，大雪纷飞，似乎要吞掉这支装备很差的队伍。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将军早把他的马让给了重伤员。他要率领战士们向前挺进，在冰雪中为后续部队开辟一条通路。等待他们的是恶劣的环境和残酷的战斗，可能吃不上饭，可能睡雪窝，可能一天要走一百几十里路，可能遭到敌人的突然袭击。这支队伍能不能经受住这样严峻的考验呢？将军思索着。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;队伍忽然放慢了速度，前面有许多人围在一起，不知在干什么。将军边走边喊：不要停下来，快速前进！将军的警卫员回来告诉他：前面有一个人被冻死了</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将军愣了愣，什么话也没说，朝那边走去。风雪太大了。他步履有些踉跄，眼睛有点迷离。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个冻僵的老战士，倚靠一棵光秃秃的树干坐着，一动也不动，好似一尊塑像。他浑身都落满了雪，可以看出镇定、自然的神情，却一时无法辨认面目，半截带纸卷的旱烟还夹在右手的中指和食指间，烟火已被风雪打熄。他微微向前伸出手来，好像要向战友借火.单薄破旧的衣服紧紧地贴在他的身上.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将军的脸上顿时阴云密布，嘴角边的肌肉明显地抽动了一下，蓦然转过头向身边的人吼道：叫军需处长来，为什么不给他发棉衣？一阵风雪吞没了他的话。他红着眼睛，像一头发怒的豹子，样子十分可怕。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;没有人回答他，也没有人走开</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;听见没有？警卫员！快叫军需处长跑步上来！将军两腮的肌肉大幅度地抖动着，不知是由于冷，还是由于愤怒。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这时候，有人小声告诉将军：他就是军需处长</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将军就要发火的手势突然停住了。他怔怔地伫立了足有一分钟。雪花无声地落在他的脸上，溶化成闪烁的泪珠他深深地呼出了一口气，缓缓地举起了右手，举至齐眉处，向那位与云中山化为一体的牺牲者敬了一个庄严的军礼</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;雪更大了，风更狂了。大雪很快覆盖了军需处长的身体，他变成了一座晶莹的丰碑。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将军什么话也没说，大步地钻进了弥天的风雪之中，他听见无数沉重而又坚定的脚步声，那声音似乎在告诉人们：如果胜利不属于这样的队伍，还会属于谁呢？</p>
            </div>
        </el-tab-pane>
        <!-- <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane> -->
        <el-tab-pane label="评价" name="judge"><div class="judge">
            <img src="@/assets/head3.jpg" class="himg" height="180px" width="100%" alt="">
            <p>1：中国工农红军主力从长江南北各苏区向陕甘革命根据地（亦称陕甘苏区）的战略转移。“长征是宣言书，长征是宣传队，长征是播种机。长征是以我们胜利、敌人失败而告终。”。当年红军长征胜利到达陕北之后，毛泽东同志曾就长征作过如此精辟的总结。</p>
            <p>2：1980年8月，在会见意大利记者法拉奇时，邓小平说：“在1935年，我们历史上著名的长征中召开的遵义会议上，确立了毛泽东同志在党和军队中的领导地位，中国共产党才真正形成了一个成形的领导，以前的领导都是很不稳定的，而且也很不成熟。 ”而当邓小平之女毛毛问他长征是怎么过来的，他的回答是—“跟着走”！</p>
            <p>3：江泽民在纪念红军长征胜利六十周年大会上，将长征精神概括为五种精神：</br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;把国家和民族的根本利益看得高于一切，坚定革命的理想和信念，坚信正义事业必定胜利的精神；</br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了救国救民，不怕任何艰难险阻，不惜付出一切牺牲的精神；</br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;坚持独立自主、实事求是，一切从实际出发的精神；</br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顾全大局、严守纪律、紧密团结的精神；</br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;紧紧依靠人民群众，同人民群众生死相依、患难与共、艰苦奋斗的精神。</p>
            <p>4：官方评价：中国工农红军的长征是一部伟大的革命英雄主义史诗。它向全中国和全世界宣告，中国共产党及其领导的人民军队，是一支不可战胜的力量。红军长征，铸就了伟大的长征精神。长征精神，是中国共产党人和人民军队革命风范的生动反映，是中华民族自强不息的民族品格的集中展示，是以爱国主义为核心的民族精神的最高体现。长征精神为中国革命不断从胜利走向胜利提供了强大精神动力。</p>
            <p>5：胡锦涛说：“长征是中国共产党领导中国人民英勇革命的壮丽史诗。”</p>
        </div></el-tab-pane>
    </el-tabs>
      </div>
      
  </div>
</template>
<script>
export default {
  data() {
      return {
        activeName: 'poem'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style lang="stylus" scoped>
.contain
    height 100%
    width 100%
    overflow auto
    padding 15px 60px
    position relative
    & h1
        font-size: 24px;
        margin: 6px 0;
    & h2
        margin: 5px;
    & p
        margin-top: 3px;
    & .pimg
        position relative
        left 300px
        top -139px
    & .poemcontain
        padding-left 20px
    & .onep
        height 245px
.judge p
    padding 10px 30px
.story 
    padding 5px 20px
    & p  
        padding-top 10px
</style>


