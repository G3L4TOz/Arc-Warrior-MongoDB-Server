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

async function runMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB')

  const collection = db.collection('character')

  const findResult = await collection.find({}).toArray()
  resp.write(JSON.stringify(findResult))
  await dbconn.close()

  resp.end()
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

async function awItemShopMongo(resp)
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('arcwarrior')
 
  console.log('Connected to MongoDB [Arc Warrior Item Shop]')

  const collection = db.collection('item_shop')

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

module.exports = {
  runMongoTest : runMongo,
  runMongoAwCharacter : awCharacterMongo,
  runMongoAwElement : awElementMongo,
  runMongoAwItem : awItemMongo,
  runMongoAwItemShop : awItemShopMongo,
  runMongoAwItemType : awItemTypeMongo,
  runMongoAwRarity : awRarityMongo
}