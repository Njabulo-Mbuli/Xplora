import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const DesktopMenuItems = () => {

    return (
        <div className="desktopMenuItems">
            <Link
                to='/'
                className='desktopLink'>
                Home
            </Link>
            <Link
                to='/SpaceXLaunches'
                className='desktopLink'>
                Space-X Launches
            </Link>
            <Link
                to='/PictureOfTheDay'
                className='desktopLink'>
                Picture of the Day
            </Link>
        </div>
    )
}

export default DesktopMenuItems