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
  runMongoLogin : runMongoLogin,
  runMongoRegister : runMongoRegister
}
