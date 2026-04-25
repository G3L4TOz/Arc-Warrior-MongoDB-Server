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

// --- ฟังก์ชันช่วยเหลือสำหรับ Gacha (วางไว้ด้านบนหรือในไฟล์เดียวกัน) ---
function getWeightToken(rarity) {
    const tokens = { 1: 1, 2: 2, 3: 5, 4: 10, 5: 20 };
    return tokens[rarity] || 1;
}

function weightedRandom(items) {
    const totalWeight = items.reduce((sum, item) => sum + (item.percentage || 0), 0);
    let random = Math.random() * totalWeight;
    for (const item of items) {
        if (random < item.percentage) return item;
        random -= item.percentage;
    }
    return items[0];
}

// --- ฟังก์ชันหลักสำหรับเรียกจาก API ---
async function runMongoGachaRoll(req, resp) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
        const { player_id, gacha_case_id, roll_count, ticket_item_name } = JSON.parse(body);
        const dbconn = await MongoClient.connect(db_url, options);
        const db = dbconn.db('arcwarrior');

        try {
            // 1. เช็คตั๋วสุ่ม
            const ticketItem = await db.collection('item').findOne({ item_name: ticket_item_name });
            if (!ticketItem) throw new Error("Ticket item not found");

            const playerInv = await db.collection('player_inventory').findOne({ 
                player_id: parseInt(player_id), 
                item_id: ticketItem.item_id 
            });

            if (!playerInv || playerInv.quantity < roll_count) {
                resp.write(JSON.stringify({ success: false, message: "Not enough tickets" }));
                return resp.end();
            }

            // 2. ดึง Pool ไอเทมในตู้
            const pool = await db.collection('gacha_case_item').find({ gacha_case_id: parseInt(gacha_case_id) }).toArray();
            let rolledResults = [];
            let hasEpic = false;

            // 3. เริ่มสุ่ม
            const countToRoll = roll_count === 10 ? 9 : roll_count;
            for (let i = 0; i < countToRoll; i++) {
                let r = weightedRandom(pool);
                if (r.rarity >= 3) hasEpic = true;
                rolledResults.push(r);
            }

            // ระบบการันตี Epic สำหรับการสุ่ม 10 ครั้ง
            if (roll_count === 10) {
                if (!hasEpic) {
                    const epicPool = pool.filter(x => x.rarity >= 3);
                    rolledResults.push(epicPool[Math.floor(Math.random() * epicPool.length)]);
                } else {
                    rolledResults.push(weightedRandom(pool));
                }
            }

            // 4. บันทึกผลและตรวจสอบของซ้ำ
            let finalRewards = [];
            for (let res of rolledResults) {
                // บังคับหา item_id เป็นตัวเลข
                const itemData = await db.collection('item').findOne({ item_id: parseInt(res.item_id) });
                
                if (!itemData) {
                    console.error(`[GACHA] Error: Item ID ${res.item_id} not found in 'item' table!`);
                    continue;
                }

                let isDuplicate = false;
                let tokenGained = 0;

                // ประกอบร่างข้อมูลพื้นฐาน (บังคับทุก ID เป็น Number)
                let itemToReturn = {
                    item_id: parseInt(itemData.item_id),
                    item_name: itemData.item_name,
                    item_type_id: parseInt(itemData.item_type_id),
                    rarity: parseInt(res.rarity), // ใช้ rarity จากตู้สุ่มเป็นค่าหลัก
                    character_id: 0,
                    element_id: 0
                };

                // ตรวจสอบเงื่อนไขตัวละคร (เช็คได้ทั้งเลข 2 และสตริง "2")
                if (itemToReturn.item_type_id == 2) {
                    // ค้นหาใน table character โดยใช้ item_id
                    const charData = await db.collection('character').findOne({ 
                        item_id: parseInt(itemToReturn.item_id) 
                    });
                    
                    if (charData) {
                        // ดึงค่าตามชื่อฟิลด์ใน MongoDB ของคุณเป๊ะๆ
                        itemToReturn.character_id = parseInt(charData.character_id);
                        itemToReturn.rarity = parseInt(charData.rarity_id);
                        itemToReturn.element_id = parseInt(charData.element_id);
                        
                        console.log(`[GACHA] Linked Success: ${itemToReturn.item_name} -> CharID: ${itemToReturn.character_id}`);
                    } else {
                        console.warn(`[GACHA] Found ItemType 2 but NO Data in 'character' table for ItemID: ${itemToReturn.item_id}`);
                    }
            
                    // เช็คของซ้ำ (ถ้ามี character_id แล้ว)
                    if (itemToReturn.character_id > 0) {
                        const existingChar = await db.collection('player_character').findOne({ 
                            player_id: parseInt(player_id), 
                            character_id: itemToReturn.character_id 
                        });
                
                        if (existingChar) {
                            isDuplicate = true;
                            tokenGained = getWeightToken(itemToReturn.rarity);
                            await db.collection('player').updateOne(
                                { player_id: parseInt(player_id) }, 
                                { $inc: { token: tokenGained } }
                            );
                        } 
                        else 
                        {
                            await db.collection('player_character').insertOne({ 
                                player_id: parseInt(player_id), 
                                character_id: itemToReturn.character_id, 
                                level: 1, 
                                tier: 0 
                            });
                        }
                    }
                } 
                else if (itemToReturn.item_type_id == 1) 
                {
                    tokenGained = 1; // 👈 สำคัญ!!!
                    
                    await db.collection('player').updateOne(
                        { player_id: parseInt(player_id) }, 
                        { $inc: { token: tokenGained } }
                    );
                        console.log(`[TOKEN DEBUG] Player ${player_id} gained ${tokenGained}`);
                }
                finalRewards.push({
                    item: itemToReturn,
                    isDuplicate: isDuplicate,
                    rarity: parseInt(res.rarity),
                    tokenAmount: tokenGained
                });
            }

            // 5. หักตั๋วสุ่ม
            await db.collection('player_inventory').updateOne(
                { player_id: parseInt(player_id), item_id: ticketItem.item_id },
                { $inc: { quantity: -roll_count } }
            );

            // ส่งข้อมูลทั้งหมดกลับไปที่ Unity
            resp.write(JSON.stringify({ success: true, data: finalRewards }));

        } catch (err) {
            console.error("[Gacha API Error]:", err);
            resp.write(JSON.stringify({ success: false, message: err.message }));
        } finally {
            await dbconn.close();
            resp.end();
        }
    });
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
        getWeightToken,
        weightedRandom,
        runMongoGachaRoll
}
