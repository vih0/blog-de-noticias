"use client"

import { Facebook, Twitter, Linkedin, Link2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import toast from 'react-hot-toast';

interface ShareButtonsProps {
  url: string
  title: string
  description?: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : url

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${shareUrl}`)}`,
  }

  const copyToClipboard= async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      toast.success("Link copiado para area de transferencia")
    } catch (err) {
       
     toast.error("Erro interno" + err);
    }
  }

  const openShareWindow = (url: string) => {
    window.open(url, "_blank", "width=600,height=400,scrollbars=yes,resizable=yes")
  }

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Compartilhar esta notícia</h3>

      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => openShareWindow(shareLinks.facebook)}
          className="flex items-center space-x-2 bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
        >
          <Facebook className="h-4 w-4" />
          <span>Facebook</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => openShareWindow(shareLinks.twitter)}
          className="flex items-center space-x-2 bg-sky-500 text-white hover:bg-sky-600 border-sky-500"
        >
          <Twitter className="h-4 w-4" />
          <span>Twitter</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => openShareWindow(shareLinks.linkedin)}
          className="flex items-center space-x-2 bg-blue-700 text-white hover:bg-blue-800 border-blue-700"
        >
          <Linkedin className="h-4 w-4" />
          <span>LinkedIn</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => openShareWindow(shareLinks.whatsapp)}
          className="flex items-center space-x-2 bg-green-600 text-white hover:bg-green-700 border-green-600"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className="flex items-center space-x-2 bg-gray-600 text-white hover:bg-gray-700 border-gray-600"
        >
          <Link2 className="h-4 w-4" />
          <span>Copiar Link</span>
        </Button>
      </div>
    </div>
  )
}
