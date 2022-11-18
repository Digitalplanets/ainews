import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.Style.css'
import {BiSearch} from 'react-icons/bi'
import { articleData } from '../../data'

const Header = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        setArticles(articleData)
    }, [])
    const [toggleMenu, setToggleMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    function handleToggleMenu() {
        setToggleMenu(!toggleMenu)
        
        let openMenu = document.querySelector('.mobile-menu-container');
        
        if(!toggleMenu){
            openMenu.style.display = 'flex';
        }else{
            openMenu.style.display = 'none';
        }
    }
    function handleToggleSearch() {
        setToggleMenu(!toggleMenu)
        
        let closeSearch = document.querySelector('.mobile-search-container');
        
        if(!toggleMenu){
            closeSearch.style.display = 'flex';
        }else{
            closeSearch.style.display = 'none';
        }
    }
  return (
    <header className='header-container'>
        <NavLink
        role='link'
        to='/'
        className='header-title'>
            hueman
        </NavLink>
        <div className='header-right'>
            <BiSearch
            role='button'
            className='search-icon'
            onClick={handleToggleSearch}/>
            <div className='mobile-search-container'>
                <div
                className='close-search'
                onClick={handleToggleSearch}>
                    <div className='line line-one'></div>
                    <div className='line line-two'></div>
                </div>
                <h1 className='search-title'>Search HUEMAN</h1>
                <form
                className='form-container'
                onSubmit={(e) => e.preventDefault()}>
                    <input className='search-input'
                    type="text" 
                    name="searchInput" 
                    id="searchInput" 
                    placeholder='Search'
                    autoComplete='off'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button 
                    className='submit-btn' 
                    onClick={handleToggleSearch}
                    type='submit'>
                        <BiSearch />
                    </button>
                </form>
            </div>
            <div
            className='open-menu'
            onClick={handleToggleMenu}>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <div className="mobile-menu-container">
                <ul className="mobile-menu">
                    <li className="menu-item">
                        <NavLink
                        role='link'
                        to='/' 
                        className="menu-link"
                        onClick={handleToggleMenu}>
                            Home
                        </NavLink>
                    </li>
                    {articles.map(({category}, id) => {
                        return (
                        <li 
                        className='menu-item'
                        key={id}>
                            <NavLink
                            role='link'
                            to={`/category/${category}`}
                            className='menu-link'
                            onClick={handleToggleMenu}>
                                {category}
                            </NavLink>
                        </li>
                        )
                    })}
                </ul>
                <div
                className='close-menu'
                onClick={handleToggleMenu}>
                    <div className='line line-one'></div>
                    <div className='line line-two'></div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header