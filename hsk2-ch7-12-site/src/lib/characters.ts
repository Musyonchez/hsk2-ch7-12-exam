export type CharEntry = {
  char: string;
  pinyin: string;
  meaning: string;
  word: string;
  wordPinyin: string;
  mnemonic: string;
  review: boolean;
};

export type Chapter = {
  id: string;
  num: number;
  title: string;
  rows: CharEntry[];
};

function row(
  char: string,
  pinyin: string,
  meaning: string,
  word: string,
  wordPinyin: string,
  mnemonic: string,
  review = false
): CharEntry {
  return { char, pinyin, meaning, word, wordPinyin, mnemonic, review };
}

// HSK 2, Chapters 7-12 — every unique character from the New Words tables.
// Source: ../../HSK-DIALOGS.md (lines 867-1127). Nine characters are review
// vocabulary carried over from earlier chapters, marked `review: true`.
//
// `mnemonic` is a memory aid, not rigorous etymology — a way to hang the
// shape and meaning together, in the style of Heisig-esque study aids.
export const CHAPTERS: Chapter[] = [
  {
    id: "ch7",
    num: 7,
    title: "你家离公司远吗",
    rows: [
      row("教", "jiào", "to teach", "教室", "jiàoshì", "孝 (filial respect) + 攵 (a hand with a stick): a teacher taps out discipline and respect."),
      row("室", "shì", "room", "教室", "jiàoshì", "宀 (roof) over 至 (arrive): the place you arrive at and settle under a roof — a room."),
      row("机", "jī", "machine", "机场", "jīchǎng", "木 (wood) + 几 (small table): early machines, built from wood like a loom."),
      row("场", "chǎng", "field, place", "机场", "jīchǎng", "土 (earth) beside a rising-sun shape: open ground lit by the sun — a field, a place."),
      row("路", "lù", "road, way", "路", "lù", "足 (foot) + 各 (each, individual): every foot finds its own road."),
      row("离", "lí", "away from", "离", "lí", "Picture a bird breaking free of its cage and flying off — away from."),
      row("公", "gōng", "public", "公司", "gōngsī", "八 (split apart) over 厶 (private/self): splitting what's private into shares for everyone — public."),
      row("司", "sī", "to manage, take charge of", "公司", "gōngsī", "A figure with authority issuing orders from a doorway — to manage, take charge."),
      row("远", "yuǎn", "far, distant", "远", "yuǎn", "辶 (walk) + 元 (origin): walking all the way back to the very beginning — far."),
      row("共", "gòng", "together", "公共汽车", "gōnggòng qìchē", "Two hands lifting one thing as one — together."),
      row("汽", "qì", "steam, gas", "公共汽车", "gōnggòng qìchē", "氵 (water) + 气 (vapor/air): water turned to vapor — steam, gas."),
      row("车", "chē", "vehicle, car", "公共汽车", "gōnggòng qìchē", "A cart seen from above — wheels, axle, frame — a vehicle."),
      row("小", "xiǎo", "small", "小时", "xiǎoshí", "Three tiny strokes, like little grains of sand — small.", true),
      row("时", "shí", "time", "小时", "xiǎoshí", "日 (sun) + 寺 (temple): the sun's position marked the hours at the temple — time."),
      row("慢", "màn", "slow", "慢", "màn", "忄 (heart) + 曼 (stretched out long): a heart taking its time — slow."),
      row("快", "kuài", "quick, fast", "快", "kuài", "忄 (heart) + 夬 (break away, decisive): a decisive heart that breaks away quickly — fast."),
      row("过", "guò", "to pass (time), to spend", "过", "guò", "辶 (walk) + 寸 (a little bit): walking just a bit further — to pass, to spend (time)."),
      row("走", "zǒu", "to walk", "走", "zǒu", "A person swinging their arms mid-stride — to walk."),
      row("到", "dào", "to arrive, to reach", "到", "dào", "至 (arrive) + 刂 (a mark): arriving right at the mark — to arrive, to reach."),
    ],
  },
  {
    id: "ch8",
    num: 8,
    title: "让我想想再告诉你",
    rows: [
      row("再", "zài", "again, once more", "再", "zài", "One more layer stacked on top of a base — do it again, once more."),
      row("让", "ràng", "to let, to allow", "让", "ràng", "讠 (speech) + 上 (up, offer): speaking up to offer something to someone — to let, to allow."),
      row("告", "gào", "to tell, to inform", "告诉", "gàosu", "牛 (ox) over 口 (mouth): announcing loudly, like calling the village with an ox in tow — to tell."),
      row("诉", "sù", "to relate, to tell", "告诉", "gàosu", "讠 (speech) + 斥 (voice a complaint): speaking your piece — to relate, to tell (as in 告诉)."),
      row("等", "děng", "to wait", "等", "děng", "竹 (bamboo) + 寺 (temple): counting bamboo slips at the temple while you wait."),
      row("找", "zhǎo", "to look for", "找", "zhǎo", "扌 (hand) + 戈 (weapon): hand out, weapon ready, searching for something — to look for."),
      row("事", "shì", "matter, affair", "事情", "shìqing", "A hand gripping a document to be dealt with — a matter, an affair."),
      row("情", "qíng", "feeling, situation", "事情", "shìqing", "忄 (heart) + 青 (pure blue-green): feelings straight from the heart — emotion, situation."),
      row("服", "fú", "to serve; clothes", "服务员", "fúwùyuán", "月 (body) + a kneeling figure + a hand: hands dressing the body — clothes, to serve."),
      row("务", "wù", "affairs, business", "服务员", "fúwùyuán", "力 (effort) at the base: putting in the effort to handle business — affairs."),
      row("员", "yuán", "member, personnel", "服务员", "fúwùyuán", "口 (an opening) over 贝 (money/shell): someone counting money at a shop's counter — a staff member."),
      row("白", "bái", "white", "白", "bái", "A rising sun's first pale ray — white."),
      row("黑", "hēi", "black", "黑", "hēi", "A chimney and window blackened with soot — black."),
      row("贵", "guì", "expensive", "贵", "guì", "中 (middle) + 一 + 贝 (money): stacks of money piled in the middle — expensive."),
    ],
  },
  {
    id: "ch9",
    num: 9,
    title: "题太多，我没做完",
    rows: [
      row("错", "cuò", "wrong, incorrect", "错", "cuò", "钅 (metal) + 昔 (long ago): an old, tarnished piece of metal — something's gone wrong."),
      row("从", "cóng", "from", "从", "cóng", "One 人 (person) following another — from, since."),
      row("跳", "tiào", "to jump", "跳舞", "tiàowǔ", "足 (foot) + 兆 (a great number/omen): feet leaping like an excited crowd — to jump."),
      row("舞", "wǔ", "dance", "跳舞", "tiàowǔ", "A figure holding decorated sleeves mid-performance — dance."),
      row("第", "dì", "(ordinal prefix)", "第一", "dì yī", "竹 (bamboo) + 弟 (younger brother): bamboo slips numbered in order, like ranking siblings — 1st, 2nd…"),
      row("一", "yī", "one", "第一", "dì yī", "A single horizontal stroke — one.", true),
      row("希", "xī", "to hope", "希望", "xīwàng", "A cross-hatch pattern over 巾 (cloth): hoping to weave something rare and fine — to hope."),
      row("望", "wàng", "to hope, to look toward", "希望", "xīwàng", "亡 (gone from sight) + 月 (moon) + 王 (stand tall): standing tall, gazing after the moon — to hope, to look toward."),
      row("问", "wèn", "to ask", "问题", "wèntí", "门 (door) + 口 (mouth): a voice calling in through a door — to ask.", true),
      row("题", "tí", "question, topic", "问题", "wèntí", "是 (is, correct) + 页 (page/head): pinning down what's right on the page — a question, a topic."),
      row("欢", "huān", "happy, joyful", "欢迎", "huānyíng", "又 (hand) + 欠 (an open, yawning mouth): a light, easy gesture of joy — happy."),
      row("迎", "yíng", "to welcome", "欢迎", "huānyíng", "辶 (walk) + 卬 (look up to): stepping out to greet someone warmly — to welcome."),
      row("上", "shàng", "up, above", "上班", "shàngbān", "A short stroke sitting above a long baseline — up, above.", true),
      row("班", "bān", "class, shift", "上班", "shàngbān", "王 (jade) + 刂 (knife) + 王 (jade): cutting jade into equal pieces — a class, a shift, a group."),
      row("懂", "dǒng", "to understand", "懂", "dǒng", "忄 (heart) + 董 (oversee): the heart finally oversees and grasps it — to understand."),
      row("完", "wán", "to finish, to end", "完", "wán", "宀 (roof) + 元 (original state): bringing a project back under the roof, complete — to finish."),
    ],
  },
  {
    id: "ch10",
    num: 10,
    title: "别找了，手机在桌子上呢",
    rows: [
      row("课", "kè", "class, lesson", "课", "kè", "讠 (speech) + 果 (fruit, result): a lesson is speech that bears fruit — a class."),
      row("帮", "bāng", "to help", "帮助", "bāngzhù", "Rooted in 邦 (nation) over 巾 (cloth): banding together like a nation — to help."),
      row("助", "zhù", "to assist", "帮助", "bāngzhù", "且 (also, moreover) + 力 (strength): lending your strength as well — to assist."),
      row("别", "bié", "don't", "别", "bié", "另 (separately) + 刂 (knife): cut it off, keep it separate — don't (do that)."),
      row("哥", "gē", "elder brother", "哥哥", "gēge", "可 (can/may) doubled: doubly capable, dependable — like a reliable elder brother."),
      row("鸡", "jī", "chicken", "鸡蛋", "jīdàn", "又ancestor of 奚 (a hand/rope) + 鸟 (bird): a bird kept close by hand — chicken."),
      row("蛋", "dàn", "egg", "鸡蛋", "jīdàn", "A curved, rolled shape holding 虫 (a tiny creature) — an egg."),
      row("西", "xī", "west", "西瓜", "xīguā", "A bird settling into its nest as the sun sets — the west."),
      row("瓜", "guā", "melon", "西瓜", "xīguā", "A melon hanging heavy on its curling vine — melon."),
      row("正", "zhèng", "exactly, upright", "正在", "zhèngzài", "一 (a goal line) + 止 (stop): stopping exactly on the mark — exactly, upright."),
      row("在", "zài", "at, in, on", "正在", "zhèngzài", "土 (earth) + 才 (just now): standing right here on the ground, right now — to be at.", true),
      row("手", "shǒu", "hand", "手机", "shǒujī", "An open hand, fingers spread — hand."),
      row("洗", "xǐ", "to wash, to bathe", "洗", "xǐ", "氵 (water) + 先 (first, ahead): water goes first, over your hands — to wash."),
    ],
  },
  {
    id: "ch11",
    num: 11,
    title: "他比我大三岁",
    rows: [
      row("唱", "chàng", "to sing", "唱歌", "chànggē", "口 (mouth) doubled beside 昌 (bright, flourishing): voices ringing out brightly — to sing."),
      row("歌", "gē", "song", "唱歌", "chànggē", "哥 (elder brother, phonetic) + 欠 (open mouth): opening up to sing, like your brother does — a song."),
      row("男", "nán", "man, male", "男", "nán", "田 (field) + 力 (strength): the one who works the field with strength — a man."),
      row("女", "nǚ", "woman, female", "女", "nǚ", "A kneeling figure, hands folded — woman."),
      row("孩", "hái", "child", "孩子", "háizi", "子 (child) + 亥 (a small creature): a little one, small as a piglet — child."),
      row("子", "zi", "(noun suffix)", "孩子", "háizi", "A baby wrapped in swaddling, arms out — child, and the everyday noun suffix."),
      row("右", "yòu", "right (side)", "右边", "yòubiān", "又 (hand) over 口 (mouth): the hand you eat with — the right side."),
      row("边", "biān", "side", "右边", "yòubiān", "辶 (walk) beside a boundary shape: walking along the edge of something — a side."),
      row("比", "bǐ", "than", "比", "bǐ", "Two crouching figures standing side by side, measured against each other — than, compared to."),
      row("便", "pián", "cheap (in 便宜)", "便宜", "piányi", "亻 (person) + 更 (change): someone who talks the price down — cheap."),
      row("宜", "yí", "suitable", "便宜", "piányi", "宀 (roof) over neatly stacked layers: everything arranged just right under the roof — suitable."),
      row("说", "shuō", "to speak", "说话", "shuōhuà", "讠 (speech) + 兑 (exchange, pleased mouth): trading words happily — to speak.", true),
      row("话", "huà", "word, speech", "说话", "shuōhuà", "讠 (speech) + 舌 (tongue): words rolling off the tongue — speech, a word."),
      row("可", "kě", "may, can", "可能", "kěnéng", "口 (mouth) + 丁 (a hook/nail): a mouth giving the go-ahead — may, can."),
      row("能", "néng", "can, may", "可能", "kěnéng", "Originally a picture of a bear — strong and capable — can, ability.", true),
      row("去", "qù", "to go", "去年", "qùnián", "土 (ground) + 厶 (a person departing): stepping off this patch of ground — to go.", true),
      row("年", "nián", "year", "去年", "qùnián", "A person carrying a bundle of harvested grain on their back — one full year.", true),
      row("姓", "xìng", "surname, family name", "姓", "xìng", "女 (woman) + 生 (birth): a name carried down the maternal line — surname."),
    ],
  },
  {
    id: "ch12",
    num: 12,
    title: "你穿得太少了",
    rows: [
      row("得", "de", "(complement particle)", "得", "de", "彳 (a step) + a hand grasping something of value: reaching out and getting just the right result."),
      row("妻", "qī", "wife", "妻子", "qīzi", "女 (woman) under a hand holding household tools — a wife running the home."),
      row("雪", "xuě", "snow", "雪", "xuě", "雨 (rain) + a hand sweeping: rain swept into flakes — snow."),
      row("零", "líng", "zero", "零", "líng", "雨 (rain) + 令 (command): raindrops scattered down to nothing — zero."),
      row("度", "dù", "degree", "度", "dù", "广 (shelter) + a hand measuring: measuring things by hand under a roof — a degree."),
      row("穿", "chuān", "to wear, to put on", "穿", "chuān", "穴 (a hole) + 牙 (tooth): a point poking clean through — to pierce through, to wear."),
      row("进", "jìn", "to enter", "进", "jìn", "辶 (walk) + 井 (a well): walking toward the opening — to enter."),
      row("弟", "dì", "younger brother", "弟弟", "dìdi", "A rope wound neatly around a stick, in sequence — the younger one, who comes after."),
      row("近", "jìn", "near, close", "近", "jìn", "辶 (walk) + 斤 (an axe, short-handled): just a short walk away — near, close."),
    ],
  },
];

export const DIALOGUE_ONLY_CHARS =
  "七 三 下 不 东 两 个 中 么 也 习 买 了 二 五 些 京 人 什 今 介 他 以 们 件 休 住 体 作 你 候 做 儿 六 写 冷 准 几 出 分 前 动 北 医 十 午 卖 卫 友 叫 吃 同 后 吗 吧 听 呢 和 哪 啊 喜 喝 回 国 坐 块 备 外 多 大 天 太 她 好 妈 始 姐 字 学 家 对 少 就 岁 工 左 已 师 常 床 开 张 影 很 忙 怎 息 您 想 我 房 打 报 斤 新 方 旁 日 早 明 星 昨 是 晚 有 朋 期 条 来 杯 果 样 桌 次 每 气 汉 没 点 王 现 生 电 病 的 看 真 睡 知 米 累 红 纸 绍 经 给 羊 老 考 肉 脑 色 苹 茶 药 衣 要 见 视 觉 认 识 试 语 请 谁 谢 起 跟 身 运 还 这 道 那 都 钟 长 门 间 非 面 飞 饭 馆";

export const TOTAL_CHARS = CHAPTERS.reduce((sum, c) => sum + c.rows.length, 0);

export type FlatCharEntry = CharEntry & { chapter: number };

export const ALL_CHARS: FlatCharEntry[] = CHAPTERS.flatMap((c) =>
  c.rows.map((r) => ({ ...r, chapter: c.num }))
);
