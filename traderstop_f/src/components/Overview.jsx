import React from "react";
import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
    return (
        <Card>
            <div className="absolute left-4 top-4 mb-4 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl ">
                {symbol}
            </div>
            <div className="w-full h-full flex items-center justify-around">
                <span className="text-2xl mt-8 xl:text-4xl 2xl:text-5xl flex items-center">
                    ${price}
                    <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
                        {currency}
                    </span>
                </span>
                <span
                    className={`text-lg xl:text-xl 2xl:text-2xl ${change > 0 ? "text-lime-500" : "text-red-500"
                        }`}
                >
                    {change} <span>({changePercent}%)</span>
                </span>
            </div>
        </Card>
    );
};

export default Overview;