export type CharEntry = {
  char: string;
  pinyin: string;
  meaning: string;
  word: string;
  review: boolean;
};

export type Chapter = {
  id: string;
  num: number;
  title: string;
  rows: CharEntry[];
};

function row(char: string, pinyin: string, meaning: string, word: string, review = false): CharEntry {
  return { char, pinyin, meaning, word, review };
}

// HSK 2, Chapters 7-12 — every unique character from the New Words tables.
// Source: ../../HSK-DIALOGS.md (lines 867-1127). Nine characters are review
// vocabulary carried over from earlier chapters, marked `review: true`.
export const CHAPTERS: Chapter[] = [
  {
    id: "ch7",
    num: 7,
    title: "你家离公司远吗",
    rows: [
      row("教", "jiào", "to teach", "教室"),
      row("室", "shì", "room", "教室"),
      row("机", "jī", "machine", "机场"),
      row("场", "chǎng", "field, place", "机场"),
      row("路", "lù", "road, way", "路"),
      row("离", "lí", "away from", "离"),
      row("公", "gōng", "public", "公司"),
      row("司", "sī", "to manage, take charge of", "公司"),
      row("远", "yuǎn", "far, distant", "远"),
      row("共", "gòng", "together", "公共汽车"),
      row("汽", "qì", "steam, gas", "公共汽车"),
      row("车", "chē", "vehicle, car", "公共汽车"),
      row("小", "xiǎo", "small", "小时", true),
      row("时", "shí", "time", "小时"),
      row("慢", "màn", "slow", "慢"),
      row("快", "kuài", "quick, fast", "快"),
      row("过", "guò", "to pass (time), to spend", "过"),
      row("走", "zǒu", "to walk", "走"),
      row("到", "dào", "to arrive, to reach", "到"),
    ],
  },
  {
    id: "ch8",
    num: 8,
    title: "让我想想再告诉你",
    rows: [
      row("再", "zài", "again, once more", "再"),
      row("让", "ràng", "to let, to allow", "让"),
      row("告", "gào", "to tell, to inform", "告诉"),
      row("诉", "sù", "to relate, to tell", "告诉"),
      row("等", "děng", "to wait", "等"),
      row("找", "zhǎo", "to look for", "找"),
      row("事", "shì", "matter, affair", "事情"),
      row("情", "qíng", "feeling, situation", "事情"),
      row("服", "fú", "to serve; clothes", "服务员"),
      row("务", "wù", "affairs, business", "服务员"),
      row("员", "yuán", "member, personnel", "服务员"),
      row("白", "bái", "white", "白"),
      row("黑", "hēi", "black", "黑"),
      row("贵", "guì", "expensive", "贵"),
    ],
  },
  {
    id: "ch9",
    num: 9,
    title: "题太多，我没做完",
    rows: [
      row("错", "cuò", "wrong, incorrect", "错"),
      row("从", "cóng", "from", "从"),
      row("跳", "tiào", "to jump", "跳舞"),
      row("舞", "wǔ", "dance", "跳舞"),
      row("第", "dì", "(ordinal prefix)", "第一"),
      row("一", "yī", "one", "第一", true),
      row("希", "xī", "to hope", "希望"),
      row("望", "wàng", "to hope, to look toward", "希望"),
      row("问", "wèn", "to ask", "问题", true),
      row("题", "tí", "question, topic", "问题"),
      row("欢", "huān", "happy, joyful", "欢迎"),
      row("迎", "yíng", "to welcome", "欢迎"),
      row("上", "shàng", "up, above", "上班", true),
      row("班", "bān", "class, shift", "上班"),
      row("懂", "dǒng", "to understand", "懂"),
      row("完", "wán", "to finish, to end", "完"),
    ],
  },
  {
    id: "ch10",
    num: 10,
    title: "别找了，手机在桌子上呢",
    rows: [
      row("课", "kè", "class, lesson", "课"),
      row("帮", "bāng", "to help", "帮助"),
      row("助", "zhù", "to assist", "帮助"),
      row("别", "bié", "don't", "别"),
      row("哥", "gē", "elder brother", "哥哥"),
      row("鸡", "jī", "chicken", "鸡蛋"),
      row("蛋", "dàn", "egg", "鸡蛋"),
      row("西", "xī", "west", "西瓜"),
      row("瓜", "guā", "melon", "西瓜"),
      row("正", "zhèng", "exactly, upright", "正在"),
      row("在", "zài", "at, in, on", "正在", true),
      row("手", "shǒu", "hand", "手机"),
      row("洗", "xǐ", "to wash, to bathe", "洗"),
    ],
  },
  {
    id: "ch11",
    num: 11,
    title: "他比我大三岁",
    rows: [
      row("唱", "chàng", "to sing", "唱歌"),
      row("歌", "gē", "song", "唱歌"),
      row("男", "nán", "man, male", "男"),
      row("女", "nǚ", "woman, female", "女"),
      row("孩", "hái", "child", "孩子"),
      row("子", "zi", "(noun suffix)", "孩子"),
      row("右", "yòu", "right (side)", "右边"),
      row("边", "biān", "side", "右边"),
      row("比", "bǐ", "than", "比"),
      row("便", "pián", "cheap (in 便宜)", "便宜"),
      row("宜", "yí", "suitable", "便宜"),
      row("说", "shuō", "to speak", "说话", true),
      row("话", "huà", "word, speech", "说话"),
      row("可", "kě", "may, can", "可能"),
      row("能", "néng", "can, may", "可能", true),
      row("去", "qù", "to go", "去年", true),
      row("年", "nián", "year", "去年", true),
      row("姓", "xìng", "surname, family name", "姓"),
    ],
  },
  {
    id: "ch12",
    num: 12,
    title: "你穿得太少了",
    rows: [
      row("得", "de", "(complement particle)", "得"),
      row("妻", "qī", "wife", "妻子"),
      row("雪", "xuě", "snow", "雪"),
      row("零", "líng", "zero", "零"),
      row("度", "dù", "degree", "度"),
      row("穿", "chuān", "to wear, to put on", "穿"),
      row("进", "jìn", "to enter", "进"),
      row("弟", "dì", "younger brother", "弟弟"),
      row("近", "jìn", "near, close", "近"),
    ],
  },
];

export const DIALOGUE_ONLY_CHARS =
  "七 三 下 不 东 两 个 中 么 也 习 买 了 二 五 些 京 人 什 今 介 他 以 们 件 休 住 体 作 你 候 做 儿 六 写 冷 准 几 出 分 前 动 北 医 十 午 卖 卫 友 叫 吃 同 后 吗 吧 听 呢 和 哪 啊 喜 喝 回 国 坐 块 备 外 多 大 天 太 她 好 妈 始 姐 字 学 家 对 少 就 岁 工 左 已 师 常 床 开 张 影 很 忙 怎 息 您 想 我 房 打 报 斤 新 方 旁 日 早 明 星 昨 是 晚 有 朋 期 条 来 杯 果 样 桌 次 每 气 汉 没 点 王 现 生 电 病 的 看 真 睡 知 米 累 红 纸 绍 经 给 羊 老 考 肉 脑 色 苹 茶 药 衣 要 见 视 觉 认 识 试 语 请 谁 谢 起 跟 身 运 还 这 道 那 都 钟 长 门 间 非 面 飞 饭 馆";

export const TOTAL_CHARS = CHAPTERS.reduce((sum, c) => sum + c.rows.length, 0);
