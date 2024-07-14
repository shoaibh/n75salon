import React, { useState } from 'react'
import { Tabs } from '../utils/tabs'

export const Packages = () => {
    const [active, setActive] = useState('all')
    return (
        <div className="bg-[#FAF5F1] w-full px-[150px] py-[150px]">
            <h1>Packages & Offers</h1>

            <div className="mt-[30px] flex justify-between items-center">
                <span>
                    Explore our exclusive package deals and enjoy great savings.{' '}
                    <br /> These offers are for Week Days only.
                </span>
                <div>
                    <Tabs active={active} setActive={setActive} />
                </div>
            </div>
        </div>
    )
}
