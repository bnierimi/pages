import { Page } from "@prisma/client";
import prisma from ".";
import { createShortid } from "../utils/shortid";

export async function getPages() {
  try {
    const pages = await prisma.page.findMany()
    // console.log(pages)
    return { pages }
  } catch (error) {
    return { error }
  }
}

interface NewPage {
  title: string,
  content: string
}

export async function makePage(page: NewPage) {
  try {
    const pageFromDB = await prisma.page.create({
      data: { ...page }
    })
    return { pageFromDB }
  } catch (error) {
    return { error }
  }
}

export async function getPageByShortId(shortid: string) {
  try {
    const page = await prisma.page.findUnique({
      where: { shortid }
    })
    // console.log(page?.labels.name)
    // console.log(`from pages: ${JSON.stringify(page)}`)
    return { page }
  } catch (error) {
    return { error }
  }
}

export async function updatePageByShortId(shortid: string, content: any) {
  try {
    const page = await prisma.page.update({
      data: { content }, where: { shortid }
    })
    // console.log(page?.labels.name)
    return { page }
  } catch (error) {
    return { error }
  }
}