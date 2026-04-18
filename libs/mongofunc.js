const { MongoClient }   = require('mongodb')
const dns               = require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])


const   db_protocol     = `mongodb+srv://`,
        db_path         = ``,
        db_host         = `arcwarriordbcluster.mp4lgla.mongodb.net`,  
        db_port         = ``,    
        db_url          = db_protocol+db_host+db_port+db_path

const   authuser = {
        username: `aw_admin_db`, 
        password: `yXXov9nkrDGid7kV`
}

const   options = {            
        auth: authuser ,
        authMechanism: `SCRAM-SHA-1`
}

async function connect()                    { return await MongoClient.connect(db_url, options) }
async function disconnect(dbconn)           { await dbconn.close() }
async function getCollection(dbconn, dbname, colname)  
{
    const db = dbconn.db(dbname)
    return db.collection(colname)
}

// -------------------------------------------------------------------
async function remove(dbname, colname, filter)
{
    let result              = []
    const dbconn            = await connect()
    const collection        = getCollection(dbconn, dbname, colname)
        result              = await collection.deleteMany(filter)
    await disconnect(dbconn)
    return result
}

async function find(dbname, colname, filter)
{
    let result              = []
    const dbconn            = await connect()
    const collection        = getCollection(dbconn, dbname, colname)
        result              = await collection.find(filter).toArray()
    await disconnect(dbconn)
    return result
}

async function insert(dbname, colname, queryobj)
{
    let result              = []
    const dbconn            = await connect()
    const collection        = collection(dbconn, dbname, colname)  
    if(Array.isArray(queryobj)){
        result              = await collection.insertMany(queryobj)
    }else{
        result              = await collection.insert(queryobj)
    }
    await disconnect(dbconn)
    return result
}

async function update(dbname, colname, filter, updateobj)
{
    let result              = []
    const dbconn            = await connect()
    const collection        = getCollection(dbconn, dbname, colname)
        result              = await collection.updateMany(filter, updateobj)
    await disconnect(dbconn)
    return result
}

module.exports = { remove,find,insert,update }