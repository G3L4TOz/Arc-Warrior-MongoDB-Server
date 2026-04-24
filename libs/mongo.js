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
        try {
            const data = JSON.parse(body);
            const playerId = parseInt(data.player_id);
            const caseId = parseInt(data.case_id);
            const rollCount = parseInt(data.count);

            const dbconn = await MongoClient.connect(db_url, options);
            const db = dbconn.db('arcwarrior');

            const ticketId = 14; 
            const inventory = await db.collection('inventory').findOne({ player_id: playerId, item_id: ticketId });
            
            if (!inventory || inventory.quantity < rollCount) {
                resp.writeHead(400, { 'Content-Type': 'application/json' });
                resp.write(JSON.stringify({ status: "error", message: "ตั๋วไม่พอ" }));
                await dbconn.close();
                resp.end();
                return;
            }

            const gachaItems = await db.collection('gacha_case_item').find({ case_id: caseId }).toArray();
            const rollResults = [];

            for (let i = 0; i < rollCount; i++) {
                let total = 0;
                gachaItems.forEach(item => total += item.percentage);
                let roll = Math.random() * total;
                let sum = 0;
                let selected = gachaItems[0];

                for (let item of gachaItems) {
                    sum += item.percentage;
                    if (roll <= sum) {
                        selected = item;
                        break;
                    }
                }

                const itemMaster = await db.collection('item').findOne({ item_id: selected.item_id });
                let isDup = false;
                let tAmount = 0;

                if (itemMaster.item_type_id === 2) {
                    const hasChar = await db.collection('player_character').findOne({ 
                        player_id: playerId, 
                        character_id: itemMaster.character_id 
                    });

                    if (hasChar) {
                        isDup = true;
                        tAmount = selected.rarity * 5;
                        await db.collection('player').updateOne({ player_id: playerId }, { $inc: { token: tAmount } });
                    } else {
                        await db.collection('player_character').insertOne({ 
                            player_id: playerId, 
                            character_id: itemMaster.character_id, 
                            level: 1, 
                            tier: 0 
                        });
                    }
                } else {
                    await db.collection('player').updateOne({ player_id: playerId }, { $inc: { token: 1 } });
                }

                rollResults.push({
                    item_id: selected.item_id,
                    is_duplicate: isDup,
                    token_amount: tAmount
                });
            }

            // 3. หักตั๋ว
            await db.collection('inventory').updateOne(
                { player_id: playerId, item_id: ticketId }, 
                { $inc: { quantity: -rollCount } }
            );

            resp.writeHead(200, { 'Content-Type': 'application/json' });
            resp.write(JSON.stringify(rollResults));
            await dbconn.close();
            resp.end();

        } catch (err) {
            resp.writeHead(500, { 'Content-Type': 'application/json' });
            resp.write(JSON.stringify({ status: "error", message: err.message }));
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
  runMongoGachaRoll
}
