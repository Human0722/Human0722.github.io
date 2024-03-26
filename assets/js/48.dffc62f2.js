(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{374:function(e,s,r){"use strict";r.r(s);var t=r(0),v=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h3",{attrs:{id:"redis数据类型及操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis数据类型及操作"}},[e._v("#")]),e._v(" Redis数据类型及操作")]),e._v(" "),s("h4",{attrs:{id:"keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keys"}},[e._v("#")]),e._v(" keys")]),e._v(" "),s("p",[s("strong",[e._v("keys *")]),e._v(" 查看当前库所有 key"),s("br"),e._v(" "),s("strong",[e._v("exists key")]),e._v(" 判断某个 key 是否存在"),s("br"),e._v(" "),s("strong",[e._v("type key")]),e._v(" 查看你的 key 是什么类型"),s("br"),e._v(" "),s("strong",[e._v("del key")]),e._v(" 删除指定的 key 数据"),s("br"),e._v(" "),s("strong",[e._v("unlink key")]),e._v(" 根据 value 选择非阻塞删除,仅将 keys 从 keyspace 元数据中删除,后续自动清理。"),s("br"),e._v(" "),s("strong",[e._v("expire key 10")]),e._v(" 10 秒钟:为给定的 key 设置过期时间"),s("br"),e._v(" "),s("strong",[e._v("ttl key")]),e._v(" 查看还有多少秒过期，-1 表示永不过期，-2 表示已过期"),s("br"),e._v(" "),s("strong",[e._v("select")]),e._v(" 命令切换数据库"),s("br"),e._v(" "),s("strong",[e._v("dbsize")]),e._v(" 查看当前数据库的 key 的数量"),s("br"),e._v(" "),s("strong",[e._v("flushdb")]),e._v(" 清空当前库"),s("br"),e._v(" "),s("strong",[e._v("flushall")]),e._v(" 通杀全部库")]),e._v(" "),s("h4",{attrs:{id:"►string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#►string"}},[e._v("#")]),e._v(" ►String")]),e._v(" "),s("blockquote",[s("p",[e._v("key=>Value 结构， 值最大512M")])]),e._v(" "),s("p",[s("strong",[e._v("set KEY VALUE [EX|PX] [NX|XX]")]),s("br"),e._v(" "),s("strong",[e._v("NX")]),e._v(" :当数据库中 key 不存在时，可以将 key-value 添加数据库"),s("br"),e._v(" "),s("strong",[e._v("XX")]),e._v(" :当数据库中 key 存在时，可以将 key-value 添加数据库，与 NX 参数互斥"),s("br"),e._v(" "),s("strong",[e._v("EX")]),e._v(" :key 的超时秒数"),s("br"),e._v(" "),s("strong",[e._v("PX")]),e._v(" :key 的超时毫秒数，与 EX 互斥"),s("br"),e._v(" "),s("strong",[e._v("get KEY")]),e._v(" 查询对应键值"),s("br"),e._v(" "),s("strong",[e._v("append KEY VALUE")]),e._v("将给定的value 追加到原值的末尾 strlen key获得值的长度"),s("br"),e._v(" "),s("strong",[e._v("setnx KEY VALUE")]),e._v("只有在 key 不存在时 设置 key 的值"),s("br"),e._v(" "),s("strong",[e._v("incr KEY")]),e._v("将 key 中储存的数字值增 1"),s("br"),e._v(" "),s("strong",[e._v("decr KEY")]),e._v("将 key 中储存的数字值减 1"),s("br"),e._v(" "),s("strong",[e._v("incrby / decrby KEY STEP")]),e._v(" 将 key 中储存的数字值增减"),s("br"),e._v(" "),s("strong",[e._v("mset key1 val1 key2 val2")]),e._v(" 同时设置多个值"),s("br"),e._v(" "),s("strong",[e._v("setex KEY TIME VALUE")]),e._v(" 设置键值的同时，设置过期时间，单位秒")]),e._v(" "),s("h4",{attrs:{id:"►list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#►list"}},[e._v("#")]),e._v(" ►list")]),e._v(" "),s("blockquote",[s("p",[e._v("key=>values list, 单键多值，底层双向链表。")])]),e._v(" "),s("p",[s("strong",[e._v("lpush/rpush key value1 value2 value3")]),e._v(" .... 从左边/右边插入一个或多个值")]),e._v(" "),s("p",[s("strong",[e._v("lpop/rpop key")]),e._v(" 从左边/右边吐出一个值。值在键在，值光键亡")]),e._v(" "),s("p",[s("strong",[e._v("rpoplpush key1 key2")]),e._v(" 从key1列表右边吐出一个值，插到key2列表左边"),s("br"),e._v(" "),s("strong",[e._v("lrange key start stop")]),e._v(" 按照索引下标获得元素(从左到右)"),s("br"),e._v(" "),s("strong",[e._v("lindex  key index")]),e._v("按照索引下标获得元素(从左到右)"),s("br"),e._v(" "),s("strong",[e._v("llen key")]),e._v("获得列表长度"),s("br"),e._v(" "),s("strong",[e._v("linsert key before value newvalue")]),e._v("在value的后面插入newvalue插入值"),s("br"),e._v(" "),s("strong",[e._v("lrem key n value")]),e._v("从左边删除 n 个 value(从左到右)"),s("br"),e._v(" "),s("strong",[e._v("lset key index value")]),e._v("将列表 key 下标为 index 的值替换成 value")]),e._v(" "),s("h4",{attrs:{id:"►set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#►set"}},[e._v("#")]),e._v(" ►set")]),e._v(" "),s("blockquote",[s("p",[e._v("Redis 的 Set 是 string 类型的无序集合。它底层其实是一个 value 为 null 的 hash 表，所 以添加，删除，查找的复杂度都是 O(1) .")])]),e._v(" "),s("p",[s("strong",[e._v("sadd key value1 value2 .....")]),e._v("\n将一个或多个 member 元素加入到集合 key 中，已经存在的 member 元素将被忽略 smembers key取出该集合的所有值")]),e._v(" "),s("p",[s("strong",[e._v("sismember key value")]),e._v("  判断集合 key 是否为含有该value 值，有 1，没有 0"),s("br"),e._v(" "),s("strong",[e._v("scard key")]),e._v(" 返回该集合的元素个数"),s("br"),e._v(" "),s("strong",[e._v("srem key val1 val2...")]),e._v(" 删除集合中的某个元素"),s("br"),e._v(" "),s("strong",[e._v("spop key")]),e._v(" 随机从该集合中吐出一个值"),s("br"),e._v(" "),s("strong",[e._v("srandmember key n")]),e._v(" 随机从该集合中取出 n 个值。不会从集合中删除"),s("br"),e._v(" "),s("strong",[e._v("smove source destination value")]),e._v(" 把集合中一个值从一个集合移动到另一个集合"),s("br"),e._v(" "),s("strong",[e._v("sinter key1 key2")]),e._v("返回两个集合的交集元素"),s("br"),e._v(" "),s("strong",[e._v("sunion key1 key2")]),e._v("返回两个集合的并集元素"),s("br"),e._v(" "),s("strong",[e._v("sdiff key1 key2")]),e._v(" 返回两个集合的差集元素(key1 中的，不包含 key2 中的)")]),e._v(" "),s("h4",{attrs:{id:"►hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#►hash"}},[e._v("#")]),e._v(" ►Hash")]),e._v(" "),s("blockquote",[s("p",[e._v("Redis hash 是一个 string 类型的 field 和 value 的映射表，hash 特别适合用于存储对象。")])]),e._v(" "),s("p",[s("strong",[e._v("hset key field value")]),e._v("给key集合中的 field键赋值value"),s("br"),e._v(" "),s("strong",[e._v("hget key1 field")]),e._v("从key1集合field取出 value"),s("br"),e._v(" "),s("strong",[e._v("hmset key1 field1 value1 field2 value2...")]),e._v(" 批量设置 hash 的值"),s("br"),e._v(" "),s("strong",[e._v("hexists key1 field")]),e._v("查看哈希表 key 中，给定域 field 是否存在"),s("br"),e._v(" "),s("strong",[e._v("hkeys key")]),e._v("列出该 hash 集合的所有 field"),s("br"),e._v(" "),s("strong",[e._v("hvals key")]),e._v("列出该 hash 集合的所有 value"),s("br"),e._v(" "),s("strong",[e._v("hincrby key field increment")]),e._v("为哈希表 key 中的域 field 的值加上增量 1 -1"),s("br"),e._v(" "),s("strong",[e._v("hsetnx key field value")]),e._v("将哈希表 key 中的域 field 的值设置为 value ，当且仅当域 field 不存在")]),e._v(" "),s("h4",{attrs:{id:"►sorted-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#►sorted-set"}},[e._v("#")]),e._v(" ►sorted set")]),e._v(" "),s("p",[s("strong",[e._v("zadd key score1 value1 score2 value2...")]),e._v("\n将 member 元素及其 score 值加入到有序集 key 当中"),s("br"),e._v(" "),s("strong",[e._v("zrange key start stop [WITHSCORES]")]),e._v("\n返回有序集 key 中，下标在start stop之间的元素,带 WITHSCORES，可以让分数一起和值返回"),s("br"),e._v(" "),s("strong",[e._v("zrangebyscore key minmax [withscores] [limit offset count]")]),e._v("\n返回有序集 key 中，所有 score 值介于 min 和 max 之间(包括等于 min 或 max )的成员。 有序集成员按 score 值递增(从小到大)次序排列。\n"),s("strong",[e._v("zrevrangebyscore key maxmin [withscores] [limit offset count]")]),e._v(" 同上，改为从大到小排列。"),s("br"),e._v(" "),s("strong",[e._v("zincrby key increment value")]),e._v(" 为元素的 score 加上增量 zrem key value删除该集合下，指定值的元素"),s("br"),e._v(" "),s("strong",[e._v("zcount key min max")]),e._v(" 统计集合分数区间内的元素个数"),s("br"),e._v(" "),s("strong",[e._v("zrank key value")]),e._v("返回该值在集合中的排名，从 0 开始")]),e._v(" "),s("h4",{attrs:{id:"bitmaps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bitmaps"}},[e._v("#")]),e._v(" bitmaps")]),e._v(" "),s("blockquote",[s("p",[e._v("实际上就是字符串，但是可以对位进行操作。")])]),e._v(" "),s("p",[s("strong",[e._v("setbit key offset value")]),e._v(" 设置某个偏移量的值为0或1"),s("br"),e._v(" "),s("strong",[e._v("getbit key offset")]),e._v(" 获得某个偏移量的值\n如可以使用 bitmaps 来记录用户某天是否登陆，使用这样的数据："),s("strong",[e._v("setbit unique:users:20240212 8 1")]),e._v(" 来表示  id=8 的用户在这一天登录了"),s("br"),e._v(" "),s("strong",[e._v("bitcount key [start end]")]),e._v(" 统计1的个数"),s("br"),e._v(" "),s("strong",[e._v("bitop operation destkey key [key]")]),e._v("  位操作key,保存结果到destkey中")]),e._v(" "),s("h4",{attrs:{id:"hyperloglog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hyperloglog"}},[e._v("#")]),e._v(" hyperloglog")]),e._v(" "),s("blockquote",[s("p",[e._v("求集合中不重复元素个数")])]),e._v(" "),s("p",[e._v("Redis HyperLogLog 是用来做基数统计的算法，HyperLogLog 的优点是，在输入元素的数量或者体积非常非常大时，计算基数所需的空间总是固定的、并且是很小 的。")]),e._v(" "),s("p",[e._v("但是，因为 HyperLogLog 只会根据输入元素来计算基数，而不会储存输入元素 本身，所以 HyperLogLog 不能像集合那样，返回输入的各个元素。"),s("br"),e._v(" "),s("strong",[e._v("pfadd key element [element]")]),e._v(" 添加"),s("br"),e._v(" "),s("strong",[e._v("pfcount key [key]")]),e._v(" 计算近似基数"),s("br"),e._v(" "),s("strong",[e._v("pfmerge destkey key [key]")]),e._v(" 合并HLL存储在destkey中")]),e._v(" "),s("h4",{attrs:{id:"geospatial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geospatial"}},[e._v("#")]),e._v(" geospatial")]),e._v(" "),s("blockquote",[s("p",[e._v("地理坐标计算")])]),e._v(" "),s("p",[s("strong",[e._v("geoadd key longitude latitude member")]),e._v(" key是一系列坐标的名称，member是该点的名称"),s("br"),e._v(" "),s("strong",[e._v("geopos key member")]),e._v(" 获得指定member的坐标"),s("br"),e._v(" "),s("strong",[e._v("geodist key member1 member2 [m|km]")]),e._v(" 计算两个点的距离"),s("br"),e._v(" "),s("strong",[e._v("georadius key longitude latitude radius m|km")]),e._v(" 从给定的中心点，找出给定的半径内的坐标点")]),e._v(" "),s("h3",{attrs:{id:"redis的持久化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis的持久化"}},[e._v("#")]),e._v(" Redis的持久化")]),e._v(" "),s("blockquote",[s("p",[e._v("将Redis内存中的数据同步到硬盘中，有 RDB和AOF两种方式。")])]),e._v(" "),s("h4",{attrs:{id:"rdb方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb方式"}},[e._v("#")]),e._v(" RDB方式")]),e._v(" "),s("p",[e._v("RDB 是 Redis Database的缩写，是Redis定时持久化策略。触发时，父进程fork出一个子进程将内存中的数据写到临时文件中，完成后替换原来的RDB文件。\n配置RDB文件的位置以及触发条件：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("dir /DIT/TO/RDB   # 默认为redis启动目录\ndbfilename dump.rdb\nsave 3600 2     # 3600后至少有2个key发生变更才持久化\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("因为RDB的持久化条件，所以最后的数据是因为来不及持久化而丢失的。")]),e._v(" "),s("h4",{attrs:{id:"aof方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof方式"}},[e._v("#")]),e._v(" AOF方式")]),e._v(" "),s("p",[e._v("AOF是 Append Only File  的缩写，以日志的形式来记录写操作，恢复数据时Redis会读取重构数据。 当Redis接受到写操作时，会先放入 AOF缓冲区内，缓冲区根据t同步策略持久化到硬盘中。当AOF文件大小超过重写配置大小，会对AOF文件进行压缩。\n配置AOF打开（默认关闭）：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("appendonly yes\nappendfsync always  #每次操作都同步\nappendfsync everysec # 每秒同步\nappendfsync no ## 交给操作系统\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"几种缓存问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#几种缓存问题"}},[e._v("#")]),e._v(" 几种缓存问题")]),e._v(" "),s("h4",{attrs:{id:"缓存击穿"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[e._v("#")]),e._v(" 缓存击穿")]),e._v(" "),s("p",[e._v("（击穿是动词）缓存击穿是连续访问都无法命中缓存，直接访问数据库导致负载变高。如查询不存在的ID操作。可以使用对空值缓存、bitmaps白名单等方式解决。")]),e._v(" "),s("h4",{attrs:{id:"缓存穿透"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[e._v("#")]),e._v(" 缓存穿透")]),e._v(" "),s("p",[e._v("（穿透是形容词）缓存穿透是缓存存在，但是在key过期的瞬间涌入大量请求，直接访问数据库导致负载变高。即热点数据的实效问题。可以采用提前预加载，动态调整有效期或者加分布式锁来解决。")]),e._v(" "),s("h4",{attrs:{id:"缓存雪崩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[e._v("#")]),e._v(" 缓存雪崩")]),e._v(" "),s("p",[e._v("缓存雪崩是说key对应的数据存在，但是在Redis中过期，此时涌入大量请求导致数据库负载升高。 与缓存穿透不同的是，缓存穿透是单一的key,而雪崩时大量的key。解决办法是缓存失效时间错开，设置过期标识（提前量）并监视更新，使用锁或者队列更新。")]),e._v(" "),s("h3",{attrs:{id:"主从复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[e._v("#")]),e._v(" 主从复制")]),e._v(" "),s("p",[e._v("主从复制是配置多台Redis实现读写分离，使得整个系统更容易拓展和恢复。\n"),s("img",{attrs:{src:"/images/linux/redis/masterslavestruct.jpg",alt:""}}),s("br"),e._v("\n主从复制的搭建方式：首先以指定配置文件的方式启动多台Redis实例，通常需要修改配置文件中的PID，PORT，RDB文件参数值。然后登录SLAVE主机，通过设置命令 "),s("code",[e._v("slaveof masterIP masterPORT")]),e._v("来让该实例成为从服务器。  设置成功后可以使用命令 "),s("code",[e._v("info replication")]),e._v(" 来查看主从信息。"),s("br"),e._v("\n配置文件DEMO：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("include /myreids/redis.conf\npidfile /var/run/redis_6379.pid\nport 6379\ndbfilename dump6379.rdb\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("当主从关系建立之后，"),s("br"),e._v("\n1、在主服务上写正常，在从服务上写报错。"),s("br"),e._v("\n2、主服务宕机，重启即可；从服务宕机，需要重启后重新设置。")]),e._v(" "),s("h4",{attrs:{id:"常用的三种模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的三种模式"}},[e._v("#")]),e._v(" 常用的三种模式")]),e._v(" "),s("p",[e._v("一主二从： 启动三个服务实例，其中一个Master实例，两个Slave实例。"),s("br"),e._v("\n薪火相传： 链表形式，上一个Slave是下一个的Master"),s("br"),e._v("\n反客为主： 当Master实例宕机后，在所有的Slave实例中，谁先执行 "),s("code",[e._v("slaveof no one")]),e._v(",谁就回升级成新的Master实例。")]),e._v(" "),s("h4",{attrs:{id:"哨兵模式-sentinel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哨兵模式-sentinel"}},[e._v("#")]),e._v(" 哨兵模式（sentinel）")]),e._v(" "),s("p",[s("strong",[e._v("反客为主的自动版本")]),e._v("，能够自动检测Master是否故障，然后自动决定一个Slave升级为Master。\n配置方法：\n1、启动三份实例，配置成一主二从。"),s("br"),e._v("\n2、新建sentinel配置文件： sentinel.conf")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sentinel monitor mymaster 127.0.0.1 6379 1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("mymaster 为监控对象起的服务器名称， 1 为至少有多少个哨兵同意迁移的数量\n3、 执行 "),s("code",[e._v("redis-sentinel /path/to/sentinel.conf")]),e._v(" 完成。")]),e._v(" "),s("blockquote",[s("p",[e._v("当 Master 故障时，sentinel 根据 slave-priority 的值来决定将哪一个slave升级成master。slave-priority 配置在 redis.conf中，值越小优先级越高。")])])])}),[],!1,null,null,null);s.default=v.exports}}]);