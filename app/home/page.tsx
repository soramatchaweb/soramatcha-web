import { Navbar } from '../../components/navbar'
import Img from '../../components/img'
import AboutModal from '../../components/about-modal'

export default function HomePage() {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-auto">
            {/* Navbar stays at the top and will remain visible because it's sticky */}
            <Navbar />

            {/* Hero: full-screen section with large centered title */}
            <section className="snap-start h-screen flex items-center justify-center overflow-hidden">
                {/* Responsive heading: uses clamp so it scales with viewport width and won't be cut off on small devices */}
                <h1 className="text-[clamp(2.25rem,12vw,8rem)] tracking-widest uppercase leading-none">
                    SORAMATCHA
                </h1>
            </section>

            {/* About Me: full-bleed section (section spans full viewport width) */}
            <section className="snap-start h-screen flex items-center justify-center ">
                {/* reduce vertical padding on small screens and reduce spacing between blocks on mobile */}
                <div className="w-full p-4 sm:p-6">
                    {/* Content wrapper keeps inner content centered while section is full-bleed */}
                    <div className="max-w-7xl mx-auto space-y-8 md:space-y-20">
                        {/* Block 1: image (1 column) left, text (3 columns) right; responsive: stacks on small screens */}
                        <div className="grid md:grid-cols-6 items-center gap-6 md:gap-8 px-4">
                            <div className="col-span-1 flex justify-center md:justify-start">                            
                                <Img src="/soramatcha_logo.png" alt="Soramatcha Logo" />
                            </div>
                            <div className="col-span-5">
                                <AboutModal
                                    preview={
                                        <div className="uppercase tracking-widest text-gray-orange text-base md:text-lg leading-relaxed line-clamp-4 md:line-clamp-6 text-justify">
                                            <p >
                                                Sora Matcha was born out of a shared passion between two longtime friends who turned their love for matcha into something more. Founded in May 2025, our mission is simple: to redefine what good 
                                                matcha tastes like—with purity, purpose, and a personal touch.
                                                <br />
                                                <br />
                                                We use only organic ceremonial grade matcha sourced directly from Kagoshima, Japan, ensuring every sip is smooth, vibrant, and far from the grassy taste many have come to expect. From our weekly 
                                                limited-edition bottled drinks to our thoughtfully designed event booths, everything we do is rooted in quality, connection, and calm.
                                            </p>
                                        </div>
                                    }
                                    content={                                        
                                        <div className="uppercase tracking-widest text-gray-orange text-base md:text-lg leading-relaxed">
                                            <p >
                                                Sora Matcha was born out of a shared passion between two longtime friends who turned their love for matcha into something more. Founded in May 2025, our mission is simple: to redefine what good 
                                                matcha tastes like—with purity, purpose, and a personal touch.
                                                <br />
                                                <br />
                                                We use only organic ceremonial grade matcha sourced directly from Kagoshima, Japan, ensuring every sip is smooth, vibrant, and far from the grassy taste many have come to expect. From our weekly 
                                                limited-edition bottled drinks to our thoughtfully designed event booths, everything we do is rooted in quality, connection, and calm.
                                                <br />
                                                <br />
                                                At Sora Matcha, we’re not just serving drinks—we’re crafting moments. Whether you’re discovering matcha for the first time or deepening a daily ritual, we invite you to experience matcha the 
                                                Sora way: clean, elevated, and made with intention.
                                                <br />
                                                <br />
                                                Vision
                                                <br />
                                                To be a serene and inspiring lifestyle destination where curated food, art, and experiences come together to nourish both body and soul.
                                                <br />
                                                <br />
                                                Mission
                                                <br />
                                                Lady Savora brings together matcha, cakes, and wholesome bakes in a minimalist setting — offering not just refined flavors, but a space to connect, create, and cultivate a better way of living 
                                                through gatherings, workshops, and meaningful events.
                                            </p>
                                        </div>
                                    }
                                />
                            </div>
                        </div>

                        {/* Block 2: text (4 columns) left, image (1 column) right */}
                        <div className="grid md:grid-cols-6 items-center gap-6 md:gap-8 px-4">
                            <div className="col-span-5 text-center md:text-right">
                                <AboutModal
                                    preview={
                                        <div className="uppercase tracking-widest text-gray-orange text-base md:text-lg leading-relaxed line-clamp-4 md:line-clamp-6 text-justify">
                                            <p >
                                                Lady Savora is a refined pop-up café born from the collaboration of Sora, Savory, and Lady Goh. Beyond offering artisanal matcha, decadent cakes, and wholesome bakes, we are a space dedicated to 
                                                mindful living — hosting curated experiences from sports gatherings to art workshops and cooking classes, all designed to enrich the way we connect, create, and thrive
                                                <br />
                                                <br />
                                                This pop up store is set in a private garage, it offers a unique experience where guests can dine beside a curated collection of beautiful cars.
                                                The space embraces a minimalist aesthetic, softened with natural textures and wheat accents for a warm, organic feel.

                                            </p>
                                        </div>
                                    }
                                    content={                                        
                                        <div className="uppercase tracking-widest text-gray-orange text-base md:text-lg leading-relaxed">
                                            <p >
                                                Lady Savora is a refined pop-up café born from the collaboration of Sora, Savory, and Lady Goh. Beyond offering artisanal matcha, decadent cakes, and wholesome bakes, we are a space dedicated to 
                                                mindful living — hosting curated experiences from sports gatherings to art workshops and cooking classes, all designed to enrich the way we connect, create, and thrive.
                                                <br />
                                                <br />
                                                This pop up store is set in a private garage, it offers a unique experience where guests can dine beside a curated collection of beautiful cars.
                                                The space embraces a minimalist aesthetic, softened with natural textures and wheat accents for a warm, organic feel.
                                                <br />
                                                <br />
                                                While wheat may not be tied directly to matcha or cakes, its presence in our space symbolizes simplicity, warmth, and a return to nature — reflecting the wholesome, mindful lifestyle that Lady Savora embodies.
                                            </p>
                                        </div>
                                    }
                                />
                            </div>
                            <div className="col-span-1 flex justify-center md:justify-end">
                                <Img src="/ladysavora_logo.png" alt="Lady Savora Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}