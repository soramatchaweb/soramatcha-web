"use client"


interface MenuCardProps {
  id: string
  name: string
  description: string
  price: number
  img_url?: string | null
}

function formatPrice(value?: number) {
  if (value === undefined || value === null || Number.isNaN(value)) return "Rp0"
  try {
    // Format number with Indonesian thousands separator and no decimals, then prepend 'Rp' (no space)
    const nf = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 })
    return `Rp${nf.format(value)}`
  } catch {
    return `Rp${value}`
  }
}

export function MenuCard({ id, name, description, price, img_url }: MenuCardProps) {
  function openWhatsApp() {
    const businessNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '0000000000'
    const phoneNumber = businessNumber.replace(/^0/, '')

    // text for whatsapp message
    const text = `Halo, saya mau membeli "${name}". Mohon informasinya tentang ketersediaan dan cara pembayaran.`
    const waUrl = `https://wa.me/62${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(waUrl, '_blank')
  }
  
  return (
    <div className="w-full bg-light-orange rounded-lg p-3 sm:p-4 shadow-sm">
      <div className="bg-white rounded-md overflow-hidden shadow-inner aspect-square">
        {img_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={img_url} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm text-gray-orange">No image</div>
        )}
      </div>

      <div className="mt-3">
        <h3 className="text-base font-semibold text-gray-orange uppercase truncate">{name}</h3>
        <p className="text-sm sm:text-xs text-gray-orange mt-1 line-clamp-2">{description}</p>

        <div className="mt-3">
          <div className="w-full text-right text-sm sm:text-base font-bold text-gray-orange normal-case">{formatPrice(price)}</div>
        </div>

            <button
              onClick={openWhatsApp}
              className="w-full bg-pastel-orange text-gray-orange py-2 rounded-md font-semibold uppercase text-center mt-3"
            >
              BUY
            </button>
      </div>
    </div>
  )
}