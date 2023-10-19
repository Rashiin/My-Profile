"use client";
import react from "react";
import dynamic from "next/dynamic";

const AnimationNum = dynamic(() => {return import ("react-animated-numbers")} , {ssr:false})
const achivmentList = [
    {
        metric: "Projects",
        value: "10",
        postfix:"+"
    },
    {
        metric: "Years",
        value: "3",
        postfix:"+"
    },
    {
        metric: "Awards",
        value: "3",
        postfix:"+"
    },
    {
        metric: "Users",
        value: "1000",
        postfix:"+"
    },
    
]
const Achivment = () => {
    return (
        <div className="xl:gap-16 xl:px-16 sm:py-16 py-8 ">
            <div className="border-neutral-700 border flex flex-row px-16 py-8 justify-around items-center rounded-xl">
            {
                achivmentList.map((achivment, index) => {
                    return (
                        <div className="flex flex-col justify-center items-center mx-4" key={index}>
                            <h3 className="text-3xl font-bold flex flex-row text-slate-800"><AnimationNum includeComma animateToNumber={parseInt(achivment.value)} locale="en-US" CONFIGS={((_, index) => {
                                return {
                                    mass: 1,
                                    friction: 100,
                                    tensions:140 * (index + 1)
                                }
                            })} />{achivment.postfix}
                            </h3>
                            <p className=" font-light text-slate-700">{achivment.metric}</p>
                        </div>
                    );
                })
                }
                </div>
        </div>
    )
}
export default Achivment