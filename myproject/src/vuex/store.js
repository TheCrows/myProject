import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
        infoCardData: [
            {
                id: Symbol(),
                headurl: require("../assets/img/userico.jpg"),
                name: 'TheCrows',
                title: '再谈《战争与和平》：女性人物的美与罪',
                time: '2018-03-13',
                place: 'New Jersey / China',
                article: '每个人心中都住着一个英雄。人格心理学可以帮你运用人格的特质来把握自己的命运，成为自己的superman。无论你是何种人格，都可以了解心理分析的这些要点，展现出更好的你。塑造直通美好未来的心理预定能力。活出你想要的样子。'
            }, {
                id: Symbol(),
                headurl: require("../assets/img/userico.jpg"),
                name: 'TheCrows',
                title: '一个工业园区里的文艺青年和他的 10 年',
                time: '2018-03-13',
                place: 'New Jersey / China',
                article: '之前那篇“《战争与和平》：反英雄主义的英雄赞歌”，我从几位男性人物入手，探讨了托尔斯泰的历史观。这一篇则反行其道，从几位女性人物入手，谈谈托尔斯泰的女性观。'
            }, {
                id: Symbol(),
                headurl: require("../assets/img/userico.jpg"),
                name: 'TheCrows',
                title: '千万不要让科学家听摇滚乐！',
                time: '2018-03-13',
                place: 'New Jersey / China',
                article: '界上最可怕的词汇是哪一类？当然是动植物物种的拉丁语名了。 除去那些现存的或者确认灭绝的物种名字，每年都有17000到24000种新发现的动物物种被确认.'
            }, {
                id: Symbol(),
                headurl: require("../assets/img/userico.jpg"),
                name: 'TheCrows',
                title: '[ 废墟纪元 ] 克利夫兰：我与枪击案擦肩而过',
                time: '2018-03-13',
                place: 'New Jersey / China',
                article: '本来刚从洛杉矶回家，累得不想对奥斯卡做任何发言，但是看完颁奖典礼后，对本届颁奖礼和得奖项目的偏向有些想法，就与大家分享我的观察！'
            }, {
                id: Symbol(),
                headurl: require("../assets/img/userico.jpg"),
                name: 'TheCrows',
                title: '90届奥斯卡：呼口号 政治味浓 观众不买账',
                time: '2018-03-13',
                place: 'New Jersey / China',
                article: '“今日下午四时半，本市东区102街枪击案，一人死亡，四人受伤。” 我回到宾馆刚打开电视，一条滚动新闻就从屏幕下方跳了出来。 ——东区102街，正是我和Ben、Isabel、Blake今天探险的地方。'
            },
        ]
    },
    mutations:{
        addInfo(state,msg){
            // let nmsg=msg
            // nmsg.id=Symbol()
            state.infoCardData.unshift(msg)
        }
    }
})

export default store