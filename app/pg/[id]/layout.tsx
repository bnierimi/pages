"use client";

import EditorRenderer from "@/components/EditorRenderer";

import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

import Avatar from 'boring-avatars'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const router = useRouter();
  const params = useParams();

  return (

    // (app page)
    <main className="h-mobileScreen md:h-full w-full relative flex flex-col space-y-1">
      {/* <div className="border border-rose-700">
        {`${JSON.stringify(params)}`}
      </div> */}
      {children}
    </main>
  )
}
