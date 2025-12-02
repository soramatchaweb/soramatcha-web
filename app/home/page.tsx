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
                                                The name Sora Matcha is inspired by the Japanese word “sora” (空), which means “sky.” Just like the sky, Sora Matcha represents clarity, calm, and endless possibilities. It reflects our vision of 
                                                creating a matcha experience that feels light, pure, and intentional—something that lifts your day, grounds your spirit, and gives you a moment to breathe. Every cup is a reminder to slow down and 
                                                savor simplicity, crafted with the finest ceremonial grade matcha and a personal touch that makes it uniquely ours.
                                            </p>
                                        </div>
                                    }
                                    content={                                        
                                        <div className="uppercase tracking-widest text-gray-orange text-base md:text-lg leading-relaxed">
                                            <p >
                                                The name Sora Matcha is inspired by the Japanese word “sora” (空), which means “sky.” Just like the sky, Sora Matcha represents clarity, calm, and endless possibilities. It reflects our vision of 
                                                creating a matcha experience that feels light, pure, and intentional—something that lifts your day, grounds your spirit, and gives you a moment to breathe. Every cup is a reminder to slow down and 
                                                savor simplicity, crafted with the finest ceremonial grade matcha and a personal touch that makes it uniquely ours.
                                                <br />
                                                <br />
                                                Introducing Sora Matcha, established in May 2025, born from a deep passion for matcha that soon blossomed into a thoughtful business. What began as a personal love for this timeless green elixir 
                                                has grown into a mission to redefine what good matcha truly means—elevated with a signature twist that reflects our unique taste and values. At Sora Matcha, we are committed to using only ceremonial 
                                                grade matcha, ensuring each cup delivers purity, richness, and a moment of calm in every sip.
                                                <br />
                                                <br />
                                                Sora Matcha was established in May 2025 by two good friends who shared a deep love for matcha and a dream to turn that passion into something meaningful. What started as a personal ritual quickly 
                                                became a shared journey—to craft a brand that redefines what good matcha means. At Sora Matcha, we’re dedicated to using only ceremonial grade matcha, offering not just quality but an experience 
                                                rooted in authenticity, calm, and connection. With a touch of our own personality in every blend, we hope to bring moments of joy and clarity—just like the name Sora, which means “sky”—to everyone 
                                                who takes a sip.
                                                <br />
                                                <br />                                            
                                                Meet Chitra—our co-founder whose roots in the F&B industry run deep, with over 10 years of experience. A true expert in both coffee and food, Chitra has not only mastered the craft behind the counter 
                                                but also played a key role in shaping the café scene as a trusted consultant for several establishments. She is also the founder behind beloved cafés like De Mier, Konego, and Akaia, bringing a wealth 
                                                of creativity, precision, and industry insight to everything we do at Sora Matcha.
                                                <br />
                                                <br />
                                                Natasha, a devoted housewife with a love for creativity, finds joy in crafting food and drinks that feel both thoughtful and comforting. Her passion for matcha began when she had to give up coffee due 
                                                to acid reflux—leading her to discover the calm, nourishing qualities of matcha that quickly became a daily ritual. Grateful for her 9-year friendship with Chitra, the two often bonded over shared ideas 
                                                and dreams. What started as casual conversations grew into a real business built on trust, passion, and purpose—now brought to life through Sora Matcha.
                                                <br />
                                                <br />
                                                At Sora Matcha, we exclusively use organic ceremonial grade matcha powder sourced directly from Kagoshima, Japan. We’re here to break the common misconception that matcha tastes like grass—because when 
                                                it’s truly high quality, it’s smooth, rich, and naturally sweet. While most matcha lattes on the market are made with culinary or premium grade powder, we’ve chosen a different path. We’re not here to 
                                                follow trends—we’re here to raise the bar and redefine the experience. This isn’t just matcha, it’s our way of elevating the game.
                                                <br />
                                                <br />
                                                At Sora Matcha, our products are crafted in small, thoughtful batches. Each week, we offer four signature flavors—White Chocolate Matcha, Strawberry Matcha, Matcha Latte, and Oat Matcha Latte—alongside a 
                                                rotating weekly specialty such as Sakura Matcha, Thai Tea Matcha, or Yuzu Matcha. We produce only 100 to 200 bottles per week, keeping it intentionally limited due to the rarity and quality of our 
                                                ceremonial-grade powder.
                                                <br />
                                                <br />
                                                Beyond bottles, we also bring Sora Matcha to life through our event booths. In just one month, we’ve served at two events—and to our surprise and delight, it’s quickly become the crowd’s favorite. 
                                                Each time, we’ve sold out completely, with not a single cup left to spare. And this is just the beginning—many more exciting events are on the horizon.
                                                <br />
                                                <br />
                                                Our Sora Matcha booth is designed with a minimalist and elegant aesthetic, making it the perfect fit for any occasion—from weddings and corporate events to birthday parties and family gatherings. 
                                                More than just a beautiful setup, our booth offers a refreshing and healthy drink option that’s enjoyable for all ages. Whether it’s kids sipping on strawberry matcha or adults savoring a creamy 
                                                oat latte, there’s something for everyone to enjoy. At each event, we typically have 2–3 skilled matcharistas in action, serving each cup fresh and with care—bringing both flavor and experience 
                                                to your special day.
                                                <br />
                                                <br />
                                                In addition to our bottled drinks and event booths, Sora Matcha also offers our signature matcha powders for sale. Sourced directly from Kagoshima and made from organic ceremonial grade leaves, 
                                                our powders are perfect for those who want to bring the Sora experience into their own homes. Whether you’re whisking up a morning ritual or experimenting with matcha in your bakes, our premium-grade 
                                                powder delivers the same smooth, rich, and balanced flavor we’re proud to serve. It’s the same matcha we use in all our drinks—pure, vibrant, and never grassy.
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