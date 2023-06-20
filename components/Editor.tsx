"use client"

import { useCallback, useState } from "react";

export default function Editor({ data, editable }: any) {

  const [pageValue, setPageValue] = useState(data ? data : "...")

  const handleOnChange = useCallback(
    (pageValue: string) => {
      setPageValue(pageValue)
    },[],
  )
  
  return (
    <div className="">Editor</div>
  )
}
