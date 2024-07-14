import React from 'react'

export const Tabs = ({ active, setActive }) => {
    return (
        <div className="border-[#B8B8B8] flex border-2 rounded-full">
            <div
                className={`
                    ${
                        active === 'all'
                            ? 'text-white bg-black'
                            : 'text-black bg-transparent'
                    }
                        rounded-full px-7 py-1.5 cursor-pointer
                        `}
                onClick={() => {
                    active !== 'all' && setActive('all')
                }}
            >
                All
            </div>
            <div
                className={`
                    ${
                        active === 'women'
                            ? 'text-white bg-black'
                            : 'text-black bg-transparent'
                    }
                        rounded-full px-7 py-1.5
                        cursor-pointer
                        `}
                onClick={() => {
                    active !== 'women' && setActive('women')
                }}
            >
                Women
            </div>
            <div
                className={`
                    ${
                        active === 'men'
                            ? 'text-white bg-black'
                            : 'text-black bg-transparent'
                    }
                        rounded-full px-7 py-1.5
                        cursor-pointer
                        `}
                onClick={() => {
                    active !== 'men' && setActive('men')
                }}
            >
                Men
            </div>
        </div>
    )
}
