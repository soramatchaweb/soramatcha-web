"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  preview: React.ReactNode
  content: React.ReactNode
  title?: string
}

export default function AboutModal({ preview, content }: Props) {
  const [open, setOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      <button
        type="button"
        className="w-full text-justify"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <div className="cursor-pointer">{preview}</div>
      </button>

      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === overlayRef.current) setOpen(false)
          }}
        >
          <div className="bg-light-orange max-w-3xl w-full mx-4 md:mx-0 p-6 rounded shadow-lg overflow-hidden">
            <div className="leading-relaxed overflow-y-auto max-h-[60vh] text-justify ">{content}</div>
          </div>
        </div>
      )}
    </>
  )
}
