'use client';

import Image from "next/image";
import {useGSAP} from "@gsap/react";
import {SplitText, ScrollTrigger} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Home(){

    useGSAP(()=>{
        const heroSplit = new SplitText("#title",{type:'chars, words'});
        const subTitleSplit = new SplitText("#sub-title",{type:'chars, words'});

        gsap.from(heroSplit.chars,{
            opacity:0,
            yPercent:-100,
            duration:1.8,
            ease:"expo.inOut",
            stagger:0.06
        })
        gsap.from(subTitleSplit.chars,{
                opacity:0,
                yPercent:-100,
                delay:1.3,
                duration:1.8,
                stagger:0.02,
            })
        gsap.from("#herogirl",{
            opacity:0,
            x:100,
            duration:1,
            delay:3,
        })
        gsap.from("#shop-button",{
            opacity:0,
            yPercent:-100,
            duration:1.8,
            delay:2,
            ease:"bounce.out",
        })
        gsap.from("#fttext",{
            yPercent:-100,
            opacity:0,
            duration:2,
            delay:3,
            ease:"bounce.out",
        })
    },[])

    return (
        <section>
            <section id="hero" className="w-full bg-[#d6f7c8]">
                <div className="flex justify-center items-center">
                    <div className="mx-[120px] py-[50px] space-y-7">
                        <p id="title" className="uppercase text-6xl text-black font-semibold font-sans">
                            Unleash<br/>Your<br/>Style
                        </p>
                        <p id="sub-title" className="text-2xl text-black font-normal">
                            Explore our collection of<br/>
                            designer sunglasses and fashion<br/>
                            essentials
                        </p>
                        <button type="submit" id="shop-button" className="bg-black text-white px-7 py-4 rounded-lg">
                            Shop Now
                        </button>
                    </div>
                    <div className="flex justify-end items-end h-full" id={"herogirl"}>
                        <Image
                            src="/herogirl.png"
                            alt="Fashion model wearing black sunglasses"
                            width={600}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            <section id="features" className="bg-white px-[120px] py-10">
                <p id="fttext" className="text-black font-semibold text-center text-2xl py-5">
                    Featured Collection
                </p>
                <div className="flex justify-center items-center gap-[60px] max-w-[1280px] mx-auto">
                    {[
                        { src: "/model1.png", title: "Aviator Classic", price: "$150" },
                        { src: "/model2.png", title: "Vintage Round", price: "$120" },
                        { src: "/model3.png", title: "Modern Chic", price: "$180" }
                    ].map((item, idx) => (
                        <div key={idx} className="space-y-5 hover:scale-110 transition ease-in duration-200">
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={250}
                                height={100}
                                className="rounded-xl"
                            />
                            <div>
                                <p className="text-lg font-medium">{item.title}</p>
                                <p className="text-sm text-gray-600">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="about" className="bg-[#f5eee8] flex justify-center items-center gap-[300px] px-[120px] py-10">
                <div className="space-y-10">
                    <p className="text-3xl text-semibold font-sans">Who We Are</p>
                    <p className="text-xl  text-black font-normal">
                        At SunVogue, we believe fashion is<br/>
                        about making a statement. Our pieces<br/>
                        blend timeless elegance with<br/>
                        contemporary trends, crafted for<br/>
                        those who dare to stand out.
                    </p>
                </div>
                <div>
                    <Image src="/whorv.png" alt='whorv' width={250} height={150} className="scale-[120%] rounded-xl"/>
                </div>
            </section>

            <section id="shop" className="mt-10">
                <p className="text-4xl text-center">Shop by Style</p>
                <div className="flex justify-center items-center text-center gap-10 py-5">
                    <div>
                        <Image src="/sbs1.png" alt="sbs1" width={200} height={200} className={"rounded-xl my-2"}/>
                        <p className="text-bold text-black text-2xl">Casual Everyday</p>
                        <p>Laid back frames<br/>perfect for daily wear</p>
                    </div>
                    <div>
                        <Image src="/sbs2.png" alt="sbs2" width={200} height={200} className={"rounded-xl my-2"}/>
                        <p className="text-bold text-black text-2xl">Luxury Glam</p>
                        <p>Sophisticated shades<br/>with premium appeal</p>
                    </div>
                    <div>
                        <Image src="/sbs3.png" alt="sbs3" width={200} height={200} className={"rounded-xl my-2"}/>
                        <p className="text-bold text-black text-2xl">Sporty Vibe</p>
                        <p>Activewear-compatible<br/>sunglasses.</p>
                    </div>
                </div>
            </section>

            <section id="review" className='px-[120px] py-10 space-y-5'>
                <div>
                    <p className="text-center text-4xl py-5 font-medium">What our customers say</p>
                </div>
                <div className="flex justify-center items-center text-center gap-10 text-2xl">
                    <div className={"space-y-5"}>
                        <p>
                            The most comfortable<br/>
                            and stylish shades I have<br/>
                            owned. The quality<br/>
                            is next-level!<br/>
                        </p>
                        <span>- Ananya R.</span>
                    </div>
                    <div className="space-y-5">
                        <p>
                            They fit perfectly<br/>
                            and elevate every<br/>
                            outfit i wear.<br/>
                            Totally worth it.<br/>
                        </p>
                        <span className="mt-2">- Kunal M.</span>
                    </div>
                    <div className="space-y-5">
                        <p>
                            I keep getting<br/>
                            complements everywhere<br/>
                            I go with these<br/>
                            shades!<br/>
                        </p>
                        <span className="mt-2">- Shreya V.</span>
                    </div>
                </div>
            </section>

            <section id="stay-in-style" className="flex justify-center items-center gap-[350px] bg-[#0c1c24] px-[120px] mt-[64px] space-y-5 text-white">
                <div className="space-y-5 mt-20">
                    <p className="text-6xl py-5">Stay in Style</p>
                    <p className="text-2xl py-5">
                        Subscribe to our newsletter for<br/>
                        exclusive deals, style fips; and<br/>
                        new arrivals
                    </p>
                    <input placeholder={"Enter your email"} className={"bg-white text-black text-xl px-6 py-3 rounded-lg"} />
                    <div>
                        <button type='submit' className={"bg-red-500 px-8 py-4 rounded text-xl text-semibold"}>Subscribe</button>
                    </div>
                </div>
                <div className={"mt-20"}>
                    <Image src="/sis.png" alt={"sis"} width={400} height={400}/>
                </div>
            </section>
        </section>
    );
}
