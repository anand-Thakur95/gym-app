import React from "react";
import Button from "./Button";
export default function Hero() {
    return (
        <div  className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[90rem] w-full max-auto p-4">
            <div className="flex flex-col gap-4">

        <p>IT'S TIME TO GET</p>

            </div>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Swole<span className = "text-blue-400 font-medium">normous</span></h1>
        <p className="text-sm md:text-base font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<snap className = "text-blue-400 font-medium">Molestias nobis eius consequatur, illo debitis praesentium laudantium</snap>  ipsa pariatur ullam excepturi aut quas tenetur,<snap className = "text-blue-400 font-medium">i dolorem commodi atque sae</snap > veniam, obcaecatpe et?</p>
        <Button text={"Accept & Begin"}></Button>
        </div>
    )
}