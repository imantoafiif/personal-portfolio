import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse,
) => {

    const uri = ''
    const client = new MongoClient(uri)
    
    const db = await client.db('web-porto')
    const collections = await db.collection('Cards')

    const cursor = await collections.find({})

    // let data:any = []

    // cursor.forEach(item => {
    //     if(!item) {
    //         client.close()
    //         return
    //     }
    //     console.log(item)
    //     data.push(item)
    // })

    // await client.close()

    const cursorJson = await cursor.toArray()

    let data = {
        data: cursorJson,
        meta: {
            pagination: {
                total: cursorJson.length
            }
        }
    }

    cursor.close()

    res.status(200).json(data)

}

export default handler;
