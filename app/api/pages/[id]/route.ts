import prisma from "@/lib/prisma";

export async function POST(req: Request) {

  // assuming your body has json data
  const { shortid, title, content } = await req.json();

  const addUser: any = await prisma.page.create({
    data: {
      shortid,
      title,
      content
    },
  });

  return addUser;
}
