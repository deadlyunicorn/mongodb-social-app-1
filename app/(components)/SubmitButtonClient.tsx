"use client"

import { ReactNode } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom"

export const SubmitButtonClient = () => {


  const {pending}=useFormStatus();


  return(
    <button
    className="border bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md">
          {pending?"Loading...":"Submit"}
    </button>
  )
}

