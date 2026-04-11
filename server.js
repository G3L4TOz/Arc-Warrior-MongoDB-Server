const http = require('http')
const mongo = require('./libs/mongo')

// ---------------------------------------------------------------
const PORT = process.env.PORT || 9888
// ---------------------------------------------------------------
function onClientRequest(req,resp)
{
    const pathname = req.url.split('?')[0]

    resp.writeHead(200, { 'Content-Type' : 'application/json' })

    if(req.method === 'GET' && pathname === '/api/mongo/test')
    {
        mongo.runMongoTest(resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/character')
    {
        mongo.runMongoAwCharacter(resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/element')
    {
        mongo.runMongoAwElement(resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/item')
    {
        mongo.runMongoAwItem(resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/item/shop')
    {
        mongo.runMongoAwItemShop(resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/item/type')
    {
        mongo.runMongoAwItemType(resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/rarity')
    {
        mongo.runMongoAwRarity(resp)
        return
    }

    else
    resp.write(JSON.stringify({messages: [
            '[Arc Warrior Mongo DB]'
        ]
        }))

    resp.end()
}
// ---------------------------------------------------------------
const server = http.createServer( onClientRequest )
server.listen(PORT)
console.log('running on '+PORT)
