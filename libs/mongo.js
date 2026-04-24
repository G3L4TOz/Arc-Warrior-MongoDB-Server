const { MongoClient }   = require('mongodb')
const dns               = require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])


const   db_protocol     = `mongodb+srv://`,
        db_path         = ``,
        db_host         = `arcwarriordbcluster.mp4lgla.mongodb.net`,  
        db_port         = ``,    
        db_url          = db_protocol+db_host+db_port+db_path

let authuser = {
    username: `aw_admin_db`, 
    password: `yXXov9nkrDGid7kV`
}

let options = {            
    auth: authuser ,
    authMechanism: `SCRAM-SHA-1`
}

async function awCharacterMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Character]')

  const collection = db.collection('character')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
}

async function awElementMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Element]')

  const collection = db.collection('element')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
}

async function awItemMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Items]')

  const collection = db.collection('item')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
}

async function awItemTypeMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Item Type]')

  const collection = db.collection('item_type')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
}

async function awRarityMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Rarity]')

  const collection = db.collection('rarity')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
}

async function awCardDataMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Card Data]')

  const collection = db.collection('card_data')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
}

async function awCardTypeMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Card Type]')

  const collection = db.collection('card_type')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
}

async function awGachaCaseMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Gacha Case]')

  const collection = db.collection('gacha_case')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
}

async function awGachaCaseItemMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Gacha Case Item]')

  const collection = db.collection('gacha_case_item')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
}

async function awMonsterMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Monster]')

  const collection = db.collection('monster')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
}

async function awShopItemMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Shop Item]')

  const collection = db.collection('shop_item')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
}

async function awShopTypeMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Shop Type]')

  const collection = db.collection('shop_type')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
}

async function awStatusMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Status]')

  const collection = db.collection('status')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
}

function getRequestBody(req)
{
    return new Promise((resolve, reject) => {
        let body = ''

        req.on('data', chunk => {
            body += chunk.toString()
        })

        req.on('end', () => {
            try {
                resolve(JSON.parse(body))
            } catch (err) {
                reject(err)
            }
        })
    })
}

async function runMongoLogin(req, resp)
{
    try {
        const body = await getRequestBody(req)

        const dbconn = await MongoClient.connect(db_url, options);
        const db = dbconn.db('arcwarrior')

        const collection = db.collection('player')

        const user = await collection.findOne({
            username: body.username,
            password: body.password
        })

        if (user)
        {
            resp.write(JSON.stringify({
                success: true,
                data: {
                    player_id: user.player_id,
                    username: user.username,
                    nickname: user.nickname,
                    level: user.level
                }
            }))
        }
        else
        {
            resp.write(JSON.stringify({ success: false }))
        }

        await dbconn.close()
        resp.end()
    }
    catch (err)
    {
        console.error(err)
        resp.write(JSON.stringify({ success: false }))
        resp.end()
    }
}

async function runMongoRegister(req, resp)
{
    try {
        const body = await getRequestBody(req)

        const dbconn = await MongoClient.connect(db_url, options);
        const db = dbconn.db('arcwarrior')

        const collection = db.collection('player')

        // 🔍 เช็คซ้ำ
        const existing = await collection.findOne({
            $or: [
                { username: body.username },
                { nickname: body.nickname }
            ]
        })

        if (existing)
        {
            resp.write(JSON.stringify({ success: false }))
            await dbconn.close()
            resp.end()
            return
        }

        // 🎲 generate id
        const player_id = Math.floor(100000000 + Math.random() * 900000000)

        await collection.insertOne({
            player_id: player_id,
            username: body.username,
            password: body.password,
            nickname: body.nickname,
            level: 0,
            gold: 5000,
            diamond: 200,
            token: 0
        })

        resp.write(JSON.stringify({ success: true }))
        await dbconn.close()
        resp.end()
    }
    catch (err)
    {
        console.error(err)
        resp.write(JSON.stringify({ success: false }))
        resp.end()
    }
}

async function runMongoGetPlayer(req, resp)
{
    try {
        const url = new URL(req.url, `http://${req.headers.host}`)
        const player_id = parseInt(url.searchParams.get("player_id"))

        const dbconn = await MongoClient.connect(db_url, options);
        const db = dbconn.db('arcwarrior')

        const collection = db.collection('player')

        const user = await collection.findOne({ player_id: player_id })

        if (user)
        {
            resp.write(JSON.stringify({
                success: true,
                data: user
            }))
        }
        else
        {
            resp.write(JSON.stringify({ success: false }))
        }

        await dbconn.close()
        resp.end()
    }
    catch (err)
    {
        console.error(err)
        resp.write(JSON.stringify({ success: false }))
        resp.end()
    }
}

async function runMongoGetInventory(req, resp)
{
    const url = new URL(req.url, `http://${req.headers.host}`)
    const player_id = parseInt(url.searchParams.get("player_id"))

    const dbconn = await MongoClient.connect(db_url, options);
    const db = dbconn.db('arcwarrior')

    const collection = db.collection('player_inventory')

    const result = await collection.find({ player_id: player_id }).toArray()

    resp.write(JSON.stringify(result))

    await dbconn.close()
    resp.end()
}

async function runMongoUpdateCurrency(req, resp) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
        const data = JSON.parse(body);
        const dbconn = await MongoClient.connect(db_url, options);
        const db = dbconn.db('arcwarrior');
        
        await db.collection('player').updateOne(
            { player_id: parseInt(data.player_id) },
            { $set: { gold: data.gold, diamond: data.diamond, token: data.token } }
        );

        resp.write(JSON.stringify({ status: "success" }));
        await dbconn.close();
        resp.end();
    });
}

// ฟังก์ชันสำหรับเพิ่มไอเทม (ถ้ามีอยู่แล้วให้เพิ่มจำนวน ถ้าไม่มีให้ Insert ใหม่)
async function runMongoAddItem(req, resp) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
        const data = JSON.parse(body);
        const dbconn = await MongoClient.connect(db_url, options);
        const db = dbconn.db('arcwarrior');
        
        // ใช้ upsert: true เพื่อที่ว่าถ้ายังไม่มีไอเทมนี้ในตัว จะได้สร้าง row ใหม่เลย
        await db.collection('player_inventory').updateOne(
            { player_id: parseInt(data.player_id), item_id: parseInt(data.item_id) },
            { $inc: { quantity: parseInt(data.quantity) } }, // $inc คือการบวกเพิ่มจากค่าเดิม
            { upsert: true }
        );

        resp.write(JSON.stringify({ status: "success" }));
        await dbconn.close();
        resp.end();
    });
}

async function runMongoGetPlayerCharacters(req, resp) {
    const urlParams = new URL(req.url, `http://${req.headers.host}`).searchParams;
    const playerId = parseInt(urlParams.get('player_id'));

    const dbconn = await MongoClient.connect(db_url, options);
    const db = dbconn.db('arcwarrior');
    
    const characters = await db.collection('player_character').find({ player_id: playerId }).toArray();
    
    resp.write(JSON.stringify(characters));
    await dbconn.close();
    resp.end();
}

async function runMongoUpdateCharacter(req, resp) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
        const data = JSON.parse(body);
        const dbconn = await MongoClient.connect(db_url, options);
        const db = dbconn.db('arcwarrior');
        
        await db.collection('player_character').updateOne(
            { player_id: parseInt(data.player_id), character_id: parseInt(data.character_id) },
            { $set: { level: parseInt(data.level), tier: parseInt(data.tier) } },
            { upsert: true }
        );

        resp.write(JSON.stringify({ status: "success" }));
        await dbconn.close();
        resp.end();
    });
}

async function runMongoGachaRoll(req, resp) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
        const data = JSON.parse(body);
        const { player_id, gacha_case_id, roll_count, ticket_item_name } = data;
        
        const dbconn = await MongoClient.connect(db_url, options);
        const db = dbconn.db('arcwarrior');

        try {
            // 1. เช็คตั๋วสุ่ม
            const ticketItem = await db.collection('item').findOne({ item_name: ticket_item_name });
            const playerTicket = await db.collection('player_inventory').findOne({ 
                player_id: player_id, 
                item_id: ticketItem.item_id 
            });

            if (!playerTicket || playerTicket.quantity < roll_count) {
                resp.write(JSON.stringify({ success: false, message: "Not enough tickets" }));
                return resp.end();
            }

            // 2. ดึงข้อมูลไอเทมในตู้สุ่ม
            const pool = await db.collection('gacha_case_item').find({ gacha_case_id: gacha_case_id }).toArray();
            const results = [];
            let hasEpic = false;

            // ฟังก์ชันสุ่มแบบถ่วงน้ำหนัก (Weighted Random)
            const rollOne = (items) => {
                const totalWeight = items.reduce((sum, i) => sum + i.percentage, 0);
                let random = Math.random() * totalWeight;
                for (const item of items) {
                    if (random < item.percentage) return item;
                    random -= item.percentage;
                }
                return items[0];
            };

            // 3. เริ่มการสุ่ม
            const actualRolls = roll_count === 10 ? 9 : roll_count;
            for (let i = 0; i < actualRolls; i++) {
                const rolled = rollOne(pool);
                if (rolled.rarity >= 3) hasEpic = true;
                results.Add(rolled); // Note: ใน JS ใช้ push แต่เพื่อให้ตรง logic เดิมขอใช้ Array ปกติ
                results.push(rolled);
            }

            // 4. ระบบการันตี (ถ้ากด 10 และยังไม่ได้ Epic)
            if (roll_count === 10) {
                if (!hasEpic) {
                    const epicPool = pool.filter(i => i.rarity >= 3);
                    results.push(epicPool[Math.floor(Math.random() * epicPool.length)]);
                } else {
                    results.push(rollOne(pool));
                }
            }

            // 5. Process ของรางวัล & Update DB
            const finalRewards = [];
            for (const rolled of results) {
                const itemData = await db.collection('item').findOne({ item_id: rolled.item_id });
                let isDuplicate = false;
                let rewardToken = 0;

                if (itemData.item_type_id === 1) { // Currency
                    await db.collection('player').updateOne({ player_id }, { $inc: { token: 1 } });
                } 
                else if (itemData.item_type_id === 2) { // Character
                    const hasChar = await db.collection('player_character').findOne({ 
                        player_id: player_id, 
                        character_id: itemData.character_id 
                    });

                    if (!hasChar) {
                        await db.collection('player_character').insertOne({
                            player_id, character_id: itemData.character_id, level: 1, tier: 0
                        });
                    } else {
                        isDuplicate = true;
                        rewardToken = getWeightToken(rolled.rarity);
                        await db.collection('player').updateOne({ player_id }, { $inc: { token: rewardToken } });
                    }
                }

                finalRewards.push({
                    item_id: itemData.item_id,
                    item_name: itemData.item_name,
                    is_duplicate: isDuplicate,
                    token_gained: rewardToken,
                    rarity: rolled.rarity
                });
            }

            // 6. หักตั๋วสุ่ม
            await db.collection('player_inventory').updateOne(
                { player_id, item_id: ticketItem.item_id },
                { $inc: { quantity: -roll_count } }
            );

            resp.write(JSON.stringify({ success: true, rewards: finalRewards }));

        } catch (err) {
            console.error(err);
            resp.write(JSON.stringify({ success: false, error: err.message }));
        } finally {
            await dbconn.close();
            resp.end();
        }
    });
}

function getWeightToken(rarity) {
    const tokens = { 1: 1, 2: 2, 3: 5, 4: 10, 5: 20 };
    return tokens[rarity] || 1;
}

module.exports = {
  runMongoAwCharacter : awCharacterMongo,
  runMongoAwElement : awElementMongo,
  runMongoAwItem : awItemMongo,
  runMongoAwItemType : awItemTypeMongo,
  runMongoAwRarity : awRarityMongo,
  runMongoAwCardData : awCardDataMongo,
  runMongoAwCardType : awCardTypeMongo,
  runMongoAwGachaCase : awGachaCaseMongo,
  runMongoAwGachaCaseItem : awGachaCaseItemMongo,
  runMongoAwMonster : awMonsterMongo,
  runMongoAwShopItem : awShopItemMongo,
  runMongoAwShopType : awShopTypeMongo,
  runMongoAwStatus : awStatusMongo,
  runMongoLogin,
  runMongoRegister,
  runMongoGetPlayer,
  runMongoGetInventory,
  runMongoUpdateCurrency,
  runMongoAddItem,
  runMongoGetPlayerCharacters,
  runMongoUpdateCharacter,
  runMongoGachaRoll,
  getWeightToken
}
