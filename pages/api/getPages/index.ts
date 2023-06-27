import { getPages } from "@/lib/prisma/pages";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method == "GET") {
    try {
      const { pages, error }: any = await getPages()
      if (error) throw new Error(`${error}`);
    //   console.log(pages)
      return response.status(200).json({ pages })
    } catch (error: any) {
      return response.status(500).json({ error: error.message })
    }
  }

  response.setHeader("Allow", ["GET"])
  response.status(425).end(`Method ${request.method} is not allowed`)

}