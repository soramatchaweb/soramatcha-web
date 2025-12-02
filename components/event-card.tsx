"use client"

interface EventCardProps {
  id: string
  name: string
  description?: string
  location?: string
  imagurl?: string | null
}

export function EventCard({ id, name, description, location, imagurl }: EventCardProps) {
  
  function openWhatsApp() {
    const businessNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '0000000000'
    const phoneNumber = businessNumber.replace(/^0/, '')

    // text for whatsapp message
    const text = `Hello, I would like to make a reservation for the event "${name}". Could you please provide information about its availability and the payment methods?`
    const waUrl = `https://wa.me/62${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(waUrl, '_blank')
  }

  return (
    <div className="w-full mx-auto bg-light-orange rounded-[8px] p-4 shadow-sm min-h-[200px] overflow-hidden">
      <div className="flex gap-6 items-stretch h-full p-2">
        {/* Left: square image */}
        <div className="w-1/3 flex-shrink-0">
          <div className="bg-white rounded-md overflow-hidden aspect-square shadow-inner">
            {imagurl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imagurl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm text-gray-orange">No image</div>
            )}
          </div>
        </div>

        {/* Right: values only (no labels) */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div className="text-gray-orange min-w-0 ">
            <h3 className="text-lg font-semibold line-clamp-2 uppercase">{name}</h3>
            <p className="text-sm mt-4 max-h-28 overflow-auto uppercase">{description || '-'} </p>
            <p className="text-sm mt-4 line-clamp-2 uppercase">{location || '-'}</p>
          </div>

          <div className="min-w-0">
            <div className="flex justify-start sm:justify-end">
              <button
                onClick={openWhatsApp}
                className="w-full bg-pastel-orange text-gray-orange  py-2 rounded-md font-semibold uppercase"
              >
                Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
