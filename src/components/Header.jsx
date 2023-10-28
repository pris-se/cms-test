import React from 'react'
import tabsData from '../data/tabs.json';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='header'>
            <ul>
                {tabsData.map(tab => (
                    <li key={tab.id}>
                        <NavLink className={({ isActive }) =>
                            "nav-link" + (isActive ? " active" : "")
                        } to={tab.id}>{tab.title}</NavLink>
                    </li>
                ))}
            </ul>
        </header>
    )
}
