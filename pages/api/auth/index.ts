import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method == "POST"){
    res.status(200).json({ auth: '/auth' })
  }else{
    res.status(405).json("Method Not Allowed")
  }
}