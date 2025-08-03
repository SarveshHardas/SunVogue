'use client';

import React from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    useGSAP(()=>{
        gsap.from('#logo',{
            y:-200,
            opacity:0,
            duration:1.6,
            ease:"bounce.out",
        })
    })

    return (
        <div className="px-[100px] py-4 bg-[#d6f7c8] font-bold text-3xl">
            <p id="logo">SunVogue</p>
        </div>
    )
}
export default Navbar
