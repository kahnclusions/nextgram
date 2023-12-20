"use server"

import { revalidatePath, revalidateTag } from "next/cache"

export async function answerToTheUltimateQuestionOfLifeTheUniverseAndEverything(revalidate?: "path" | "tag") {
  if (revalidate === "path") {
    console.log("I'm going to revalidate my path now")
    revalidatePath("/")
  }
  if (revalidate === "tag") {
    console.log("I'm going to revalidate my tag now")
    revalidateTag("tags")
  }
  return 42
}
