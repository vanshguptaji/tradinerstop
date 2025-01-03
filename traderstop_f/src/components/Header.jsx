import React from 'react'
import Search from './Search'
import { mockCompanyDetails } from '../constants/mock'
import ThemeIcon from './ThemeIcon'

function Header({ name }) {
    return (
        <>
            <div className='xl:px-32'>
                <h1 className='text-5xl'>{name}</h1>
                <Search />
            </div>
            <ThemeIcon/>
        </>
    )
}

export default Header