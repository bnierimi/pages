import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import ShortUniqueId from "short-unique-id";
const mkSid = ()=>{
  const uid = new ShortUniqueId({ length: 10 });
  return uid();
}

async function main() {
  const page = await prisma.page.upsert({
    where: {
      shortid: mkSid()
    },
    update: {},
    create: {
      shortid: mkSid(),
      title: "don't give up on me",
      content: "...",
    }
  });

  console.log({ page });
}

main()
  .then(()=>prisma.$disconnect())
  .catch(async (e:any) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit();
  })