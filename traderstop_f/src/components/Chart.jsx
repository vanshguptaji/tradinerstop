import React, { useState, useEffect, useContext } from 'react'
import { mockHistoricalData } from '../constants/mock'
import { convertUnixTimeStampToDate } from '../helpers/date-helper';
import { AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Area } from 'recharts';
import Card from './Card';
import ChartFIlter from './ChartFIlter';
import { chartConfig } from '../constants/config';
import ThemeContext from '../context/ThemeContext';

function Chart() {

    const [data, setData] = useState(mockHistoricalData);
    const [filter, setFilter] = useState("1W");
    const { darkMode } = useContext(ThemeContext);

    const formData = () => {
        return data.c.map((item, index) => {
            return {
                value: item.toFixed(2),
                date: convertUnixTimeStampToDate(data.t[index]),
            }
        })
    }


    return (
        <Card>
            <ul className='flex absolute top-2 right-2 z-40'>
                {Object.keys(chartConfig).map((item) => {
                    return (<li key={item}>
                        <ChartFIlter text={item} active={filter === item} onClick={() => {
                            setFilter(item);
                        }} />
                    </li>)
                })}
            </ul>
            <ResponsiveContainer>
                <AreaChart data={formData()}>
                    <defs>
                        <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value"
                        stroke="#312e81"
                        fill="url(#chartColor)"
                        fillOpacity={1}
                        strokeWidth={0.5}
                    />
                    <XAxis dataKey="date" />
                    <YAxis domain={["dataMin", "dataMax"]} />
                    <Tooltip
                        contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
                        itemStyle={darkMode ? { color: "#818cf8" } : null}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default Chart