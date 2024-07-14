import React from 'react'
import phoneSvg from '../assets/phone.svg'
import { Button } from '../utils/button'

export const NavBar = () => {
    return (
        <div className="flex justify-between text-white items-center">
            <div className="flex justify-between gap-3 text-sm font-medium">
                <div>Location</div>
                <div>About</div>
                <div>Gallery</div>
                <div>Contact Us</div>
            </div>

            <div className="text-2xl ">n75salon</div>

            <div className="flex items-center gap-3">
                <div className="flex gap-2">
                    <img src={phoneSvg} alt="phone" width={20} height={20} />
                    <span className="text-sm font-medium">
                        ​+91 - 76187 81514
                    </span>
                </div>
                <Button />
            </div>
        </div>
    )
}
