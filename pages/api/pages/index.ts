import { getPages, makePage, updatePageByShortId } from "@/lib/prisma/pages";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method == "GET") {
    try {
      const { pages, error }: any = await getPages()
      if (error) throw new Error(`${error}`);
      console.log(pages)
      return response.status(200).json({ pages })
    } catch (error: any) {
      return response.status(500).json({ error: error.message })
    }
  }

  if (request.method == "POST") {
    try {
      const prop = JSON.parse(request.body)
      const { pageFromDB, error }: any = await makePage({ title: prop.title, content: "" })
      if (error) throw new Error(`${error}`);
      // console.log(pageFromDB)
      return response.status(201).json({ pageFromDB })
    } catch (error: any) {
      return response.status(500).json({ error: error.message })
    }
  }
  
  if (request.method == "PATCH") {
    try {
      const prop = JSON.parse(request.body)
      const { page, error }: any = await updatePageByShortId(prop.shortid, prop.content)
      if (error) throw new Error(`${error}`);
      // console.log(pageFromDB)
      return response.status(200).json({ page })
    } catch (error: any) {
      return response.status(500).json({ error: error.message })
    }
  }

  response.setHeader("Allow", ["GET", "PATCH", "POST"])
  response.status(425).end(`Method ${request.method} is not allowed`)

}