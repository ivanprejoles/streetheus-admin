'use client'

import { useEffect, useState } from "react"
import { Modal } from "@/components/ui/modal"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"

interface AlertModalProps {
  isOpen: boolean
  onClose: () => void
  image: string
}

export const ImageModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  image
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Modal
      title="Image Zoom"
      description="Switch to full view to see the image in detail."
      isOpen={isOpen}
      onClose={onClose}
    >
        <ScrollArea className="px-0 md:px-3 w-full h-full">
            <div className="w-full h-auto flex gap-2 relative items-center justify-center overflow-hidden rounded-md">
                <Image
                    src={image}
                    width={300}
                    height={300}
                    alt="Image Resize"
                    className="object-cover"
                />
            </div>
        </ScrollArea>
    </Modal>
  )
}