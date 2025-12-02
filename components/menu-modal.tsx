"use client"

interface MenuModalProps {
  open: boolean
  onClose: () => void
  name: string
  price: number
  description?: string
  img_url?: string | null
}

export function MenuModal({ open, onClose, name, price, description, img_url }: MenuModalProps) {
  if (!open) return null

  function sendWhatsapp() {
    const businessNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '0000000000'
    const phoneNumber = businessNumber.replace(/^0/, '')
    const message = `Hello, I would like to purchase "${name}". Could you please provide information about its availability and the payment methods?`
    const waUrl = `https://wa.me/62${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(waUrl, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-light-orange rounded-lg shadow-lg max-w-4xl w-full p-4 md:p-6 mx-4 max-h-[calc(100vh-48px)] ">

        <div className="flex flex-col md:flex-row items-stretch gap-6">
          <div className="w-full md:w-1/2 bg-white rounded-md overflow-hidden flex items-center justify-center aspect-square">
            {img_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={img_url} alt={name} className="w-full h-full object-cover" />
              
            ) : (
              <div className="w-full h-64 flex items-center justify-center text-sm">No image</div>
            )}
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-1xl md:text-2xl font-bold tracking-wider uppercase">{name}</h2>
              <p className="text-sm mt-2 uppercase max-h-16 md:max-h-full overflow-auto pr-2">{description}</p>
            </div>

            <div className="mt-4 md:mt-0">
              <div className="text-2xl font-bold  mb-4 normal-case">Rp{new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(price)}</div>

              <button onClick={sendWhatsapp} className="w-full bg-pastel-orange py-3 rounded-md font-semibold uppercase tracking-wider">BUY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
