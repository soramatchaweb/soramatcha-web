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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque est, dapibus
                                                ac placerat vitae, pretium sed lacus. Duis non vestibulum nunc. Aliquam eget
                                                lorem vel libero vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque est, dapibus
                                                ac placerat vitae, pretium sed lacus. Duis non vestibulum nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque est, dapibus
                                                ac placerat vitae, pretium sed lacus. Duis non vestibulum nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque est, dapibus
                                                ac placerat vitae, pretium sed lacus. Duis non vestibulum nunc.
                                            </p>
                                        </div>
                                    }
                                    content={                                        
                                        <div className="uppercase tracking-widest text-gray-orange text-base md:text-lg leading-relaxed">
                                            <p >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida faucibus tristique. Duis ac lacus fringilla, tincidunt ex ac, lobortis dolor. Cras sit amet nunc sit amet felis egestas 
                                                facilisis. Nunc fermentum lacinia orci, in luctus tellus efficitur in. Nullam eleifend eleifend convallis. Sed maximus tortor elit, vel efficitur orci dapibus a. Nunc ultricies mollis magna, a 
                                                scelerisque mauris scelerisque nec. Fusce luctus sed mauris non malesuada. Curabitur sed urna eu dui egestas feugiat vel vel dolor                                            
                                                <br />
                                                <br />
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida faucibus tristique. Duis ac lacus fringilla, tincidunt ex ac, lobortis dolor. Cras sit amet nunc sit amet felis egestas 
                                                facilisis. Nunc fermentum lacinia orci, in luctus tellus efficitur in. Nullam eleifend eleifend convallis. Sed maximus tortor elit, vel efficitur orci dapibus a. Nunc ultricies mollis magna, a 
                                                scelerisque mauris scelerisque nec. Fusce luctus sed mauris non malesuada. Curabitur sed urna eu dui egestas feugiat vel vel dolor
                                                <br />
                                                <br />
                                                Nulla eu nunc sit amet est vehicula vulputate. Fusce mattis ligula erat, ut cursus est vehicula a. Suspendisse potenti. Phasellus tincidunt at neque in hendrerit. Curabitur porttitor tincidunt enim 
                                                fermentum ornare. Sed at ipsum ornare ipsum tristique dictum. Pellentesque dapibus libero sed nulla fringilla gravida. Morbi ligula magna, ornare vel arcu eu, imperdiet blandit mauris. Pellentesque 
                                                ullamcorper mi eu arcu consectetur, at interdum risus porttitor. Fusce tristique nibh sit amet scelerisque lacinia. Sed dignissim sodales sem sed varius. Sed nec sollicitudin diam.
                                                <br />
                                                <br />                                            
                                                Nullam at tincidunt ante. Nunc nunc metus, rhoncus sed urna et, dapibus pellentesque erat. Integer sem urna, imperdiet nec magna sed, bibendum dictum enim. Praesent iaculis quis odio eu vehicula. 
                                                Sed blandit placerat felis nec tempor. Donec sollicitudin et velit quis volutpat. Nullam posuere feugiat augue non scelerisque. Ut ut dui at ligula dapibus venenatis. Praesent dapibus malesuada eros, 
                                                a posuere dolor luctus id. Nunc et tempus velit. Aliquam in consequat diam, quis vulputate sem. Vivamus justo sem, hendrerit mattis leo ut, suscipit ullamcorper sapien. Sed ut lectus ac quam tristique 
                                                ultrices a at lectus. Morbi at ultricies diam.
                                                <br />
                                                <br />
                                                Vestibulum vitae est tortor. Sed bibendum quam sem. Pellentesque nec blandit erat. Ut in laoreet est. Duis auctor interdum eros, eget tristique erat tincidunt sed. In maximus sem non orci lacinia, 
                                                ornare vulputate erat cursus. Aliquam erat volutpat. Morbi varius posuere magna, ac imperdiet odio gravida at. Curabitur ultricies pellentesque lorem, in aliquet diam imperdiet pharetra. Cras faucibus 
                                                venenatis ullamcorper. Duis accumsan justo id scelerisque faucibus. Pellentesque sagittis id nisi non rutrum.
                                                <br />
                                                <br />
                                                Cras velit risus, malesuada sit amet tincidunt et, hendrerit nec ex. Mauris consequat ipsum turpis. Sed imperdiet nisl a est aliquet pretium. Vivamus luctus auctor finibus. Curabitur rhoncus maximus ornare. 
                                                Pellentesque tempor ac ante eleifend tempus. Sed sit amet lorem libero. Proin vel diam id sem dapibus imperdiet.
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque est, dapibus
                                                ac placerat vitae, pretium sed lacus. Duis non vestibulum nunc. Aliquam eget
                                                lorem vel libero vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque est, dapibus
                                                ac placerat vitae, pretium sed lacus. Duis non vestibulum nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque est, dapibus
                                                ac placerat vitae, pretium sed lacus. Duis non vestibulum nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque est, dapibus
                                                ac placerat vitae, pretium sed lacus. Duis non vestibulum nunc.
                                            </p>
                                        </div>
                                    }
                                    content={                                        
                                        <div className="uppercase tracking-widest text-gray-orange text-base md:text-lg leading-relaxed">
                                            <p >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida faucibus tristique. Duis ac lacus fringilla, tincidunt ex ac, lobortis dolor. Cras sit amet nunc sit amet felis egestas 
                                                facilisis. Nunc fermentum lacinia orci, in luctus tellus efficitur in. Nullam eleifend eleifend convallis. Sed maximus tortor elit, vel efficitur orci dapibus a. Nunc ultricies mollis magna, a 
                                                scelerisque mauris scelerisque nec. Fusce luctus sed mauris non malesuada. Curabitur sed urna eu dui egestas feugiat vel vel dolor                                            
                                                <br />
                                                <br />
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida faucibus tristique. Duis ac lacus fringilla, tincidunt ex ac, lobortis dolor. Cras sit amet nunc sit amet felis egestas 
                                                facilisis. Nunc fermentum lacinia orci, in luctus tellus efficitur in. Nullam eleifend eleifend convallis. Sed maximus tortor elit, vel efficitur orci dapibus a. Nunc ultricies mollis magna, a 
                                                scelerisque mauris scelerisque nec. Fusce luctus sed mauris non malesuada. Curabitur sed urna eu dui egestas feugiat vel vel dolor
                                                <br />
                                                <br />
                                                Nulla eu nunc sit amet est vehicula vulputate. Fusce mattis ligula erat, ut cursus est vehicula a. Suspendisse potenti. Phasellus tincidunt at neque in hendrerit. Curabitur porttitor tincidunt enim 
                                                fermentum ornare. Sed at ipsum ornare ipsum tristique dictum. Pellentesque dapibus libero sed nulla fringilla gravida. Morbi ligula magna, ornare vel arcu eu, imperdiet blandit mauris. Pellentesque 
                                                ullamcorper mi eu arcu consectetur, at interdum risus porttitor. Fusce tristique nibh sit amet scelerisque lacinia. Sed dignissim sodales sem sed varius. Sed nec sollicitudin diam.
                                                <br />
                                                <br />                                            
                                                Nullam at tincidunt ante. Nunc nunc metus, rhoncus sed urna et, dapibus pellentesque erat. Integer sem urna, imperdiet nec magna sed, bibendum dictum enim. Praesent iaculis quis odio eu vehicula. 
                                                Sed blandit placerat felis nec tempor. Donec sollicitudin et velit quis volutpat. Nullam posuere feugiat augue non scelerisque. Ut ut dui at ligula dapibus venenatis. Praesent dapibus malesuada eros, 
                                                a posuere dolor luctus id. Nunc et tempus velit. Aliquam in consequat diam, quis vulputate sem. Vivamus justo sem, hendrerit mattis leo ut, suscipit ullamcorper sapien. Sed ut lectus ac quam tristique 
                                                ultrices a at lectus. Morbi at ultricies diam.
                                                <br />
                                                <br />
                                                Vestibulum vitae est tortor. Sed bibendum quam sem. Pellentesque nec blandit erat. Ut in laoreet est. Duis auctor interdum eros, eget tristique erat tincidunt sed. In maximus sem non orci lacinia, 
                                                ornare vulputate erat cursus. Aliquam erat volutpat. Morbi varius posuere magna, ac imperdiet odio gravida at. Curabitur ultricies pellentesque lorem, in aliquet diam imperdiet pharetra. Cras faucibus 
                                                venenatis ullamcorper. Duis accumsan justo id scelerisque faucibus. Pellentesque sagittis id nisi non rutrum.
                                                <br />
                                                <br />
                                                Cras velit risus, malesuada sit amet tincidunt et, hendrerit nec ex. Mauris consequat ipsum turpis. Sed imperdiet nisl a est aliquet pretium. Vivamus luctus auctor finibus. Curabitur rhoncus maximus ornare. 
                                                Pellentesque tempor ac ante eleifend tempus. Sed sit amet lorem libero. Proin vel diam id sem dapibus imperdiet.
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