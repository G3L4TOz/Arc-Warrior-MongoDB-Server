const http = require('http')
const mongo = require('./libs/mongo')

// ---------------------------------------------------------------
const PORT = process.env.PORT || 9888
// ---------------------------------------------------------------
function onClientRequest(req,resp)
{
    const pathname = req.url.split('?')[0]

    resp.writeHead(200, { 'Content-Type' : 'application/json' })

    if(req.method === 'GET' && pathname === '/api/mongo/character')
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

    else if(req.method === 'GET' && pathname === '/api/mongo/card')
    {
        mongo.runMongoAwCardData(resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/card/type')
    {
        mongo.runMongoAwCardType(resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/gacha')
    {
        mongo.runMongoAwGachaCase(resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/gacha/item')
    {
        mongo.runMongoAwGachaCaseItem(resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/monster')
    {
        mongo.runMongoAwMonster(resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/shop/item')
    {
        mongo.runMongoAwShopItem(resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/shop/type')
    {
        mongo.runMongoAwShopType(resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/status')
    {
        mongo.runMongoAwStatus(resp)
        return
    }

    else if(req.method === 'POST' && pathname === '/api/mongo/login')
    {
        mongo.runMongoLogin(req, resp)
        return
    }
    
    else if(req.method === 'POST' && pathname === '/api/mongo/register')
    {
        mongo.runMongoRegister(req, resp)
        return
    }

    else if(req.method === 'GET' && pathname === '/api/mongo/player')
    {
        mongo.runMongoGetPlayer(req, resp)
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
