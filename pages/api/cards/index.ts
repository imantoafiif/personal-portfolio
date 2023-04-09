import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse,
) => {

<<<<<<< HEAD
    const uri = 'mongodb+srv://MASTERADMIN:6NJyhkq5gCYMq5n6@portfolio-data.7enq2mj.mongodb.net/test'
=======
    const uri = ''
>>>>>>> 68e3503cbb41f1774a8d41710866a5f072e45bef
    const client = new MongoClient(uri)

    const db = await client.db('web-porto')
    const collections = await db.collection('Cards')

    const cursor = await collections.find({ title: 'React.js' }).toArray()

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

    let data = {
        data: !!cursor.length ? cursor : null,
        meta: {
            pagination: {
                total: cursor.length
            }
        }
    }

    client.close()

    res.status(200).json(data)

}

export default handler;
