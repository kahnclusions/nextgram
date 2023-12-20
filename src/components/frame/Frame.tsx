"use client"

import Image from 'next/image'
import { Photo } from '../../photos'
import { useState } from 'react'
import { answerToTheUltimateQuestionOfLifeTheUniverseAndEverything } from '../../app/[locale]/actions'

export default function Frame({ photo }: { photo: Photo }) {
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState<number>()

  async function handleClick(revalidate?: "path" | "tag") {
    setLoading(true)
    const answer = await answerToTheUltimateQuestionOfLifeTheUniverseAndEverything(revalidate)
    if (revalidate) {
      console.log("I am never executed")
    } else {
      console.log("I executed")
    }
    setLoading(false)
    setAnswer(answer)
  }

  return (
    <>
      <Image
        alt=""
        src={photo.imageSrc}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{photo.name}</h3>
        <button className="block border-2 border-black cursor-pointer" onClick={() => handleClick("path")}>Click me to see the bug (path)</button>
        <button className="block border-2 border-black cursor-pointer" onClick={() => handleClick("tag")}>Click me to see the bug (tag)</button>
        <button className="block border-2 border-black cursor-pointer" onClick={() => handleClick()}>Click me to see it working</button>
        {loading ? <p>Loading</p> : null}
        {!loading && typeof answer === "number" ? <p>The answer is: {answer}</p> : <p>No answer yet</p>}
        <p>Taken by {photo.username}</p>
      </div>
    </>
  )
}
