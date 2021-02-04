import React from 'react'
import moment from 'moment'
export default function Footer() {
    return (
        <div className='Footer'>
            <p>
            Copyright © {moment().format('YYYY')} - All rights reserved
            </p>

            <a className='CopyRightLink' href='https://project-terminal-80225.web.app/contactUs'>affiliate</a>
            <p>
            Site by:<a className='CopyRightLink' href='https://project-terminal-80225.web.app/contactUs'>Porosh</a>
            </p>
        </div>
    )
}
