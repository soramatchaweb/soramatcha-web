import { Navbar } from '../../components/navbar'
import Icon  from '../../components/icon'

export default function ContactPage() {
    const username = process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || 'your_username'
    const businessNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '0000000000'
    
    const text = 'Hello, I would like to get in touch with you.'
    const phoneNumber = businessNumber.replace(/^0/, '')

    const igUrl = `https://instagram.com/${username}`
    const encodedText = encodeURIComponent(text)
    const waUrl = `https://wa.me/62${phoneNumber}?text=${encodedText}`
    return (
        <div className="min-h-screen ">
            <Navbar />

            <main className="max-w-5xl mx-auto px-6 py-16">
                <h1 className="text-[clamp(2.5rem,8vw,6rem)]  uppercase text-center leading-none ">
                    GET IN
                    <br />
                    TOUCH!
                </h1>

                <div className="mt-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
                    {/* IG block */}
                    <div className="w-full md:w-1/3 text-center ">
                        <a href={igUrl} target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center ">
                            <div className="w-12 sm:w-14">
                                <Icon src="/instagram-logo.svg" alt="Instagram" />
                            </div>
                            <div className="mt-0 text-lg ">{username}</div>
                        </a>
                    </div>

                    {/* spacer / center column - keeps heading centered on wide screens */}
                    <div className="hidden md:block md:w-1/3" />

                    {/* WA block */}
                    <div className="w-full md:w-1/3 text-center">
                        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center ">
                            <div className="w-12 sm:w-14">
                                <Icon src="/whatsapp-logo.svg" alt="WhatsApp" />
                            </div>
                            <div className="mt-0 text-lg ">+62 {phoneNumber}</div>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}