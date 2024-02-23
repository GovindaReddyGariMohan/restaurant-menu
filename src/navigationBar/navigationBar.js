import '../navigationBar/navigationBar.css'
import React, { useState } from 'react'

const Navigation = (props) => {

    const setFilterItem = props.sItems
    let all = props.all

    const aLLItems = () => {
        setFilterItem(all)
        setNavbar(false)
    }
    const starters = () => {
        const Starter = all.filter((value) => value.category === "Starters")
        setFilterItem(Starter)
        setNavbar(false)
    }
    const mains = () => {
        const Mains = all.filter((value) => value.category === "Mains")
        setFilterItem(Mains)
        setNavbar(false)
    }
    const desserts = () => {
        const Desserts = all.filter((value) => value.category === "Desserts")
        setFilterItem(Desserts)
        setNavbar(false)
    }
    const beverages = () => {
        const Beverages = all.filter((value) => value.category === "Beverages")
        setFilterItem(Beverages)
        setNavbar(false)
    }
    const filterBettons = [
        {
            item: 'ALL',
            click: aLLItems
        },
        {
            item: 'Starters',
            click: starters
        },
        {
            item: 'Mains',
            click: mains
        },
        {
            item: 'Desserts',
            click: desserts
        },
        {
            item: 'Beverages',
            click: beverages
        }
    ]
    const [searchBar, setSearchbar] = useState(false)
    const title = all.map(value => value.title)
    const category = all.map(value => value.category)
    const productList = [...title, ...category]
    const [searchVal, setSearchVal] = useState("");
    function handleSearchClick() {
        setSearchbar(searchBar ? false : true)
        if (searchVal === "") { setFilterItem(all); return; }
        const filterBySearch = productList.filter((item) => {
            if (item.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item; }
        })
        console.log('filterBySearch', filterBySearch)
        let filterSearch
        if (filterBySearch.length > 1) {
            filterSearch = all.filter((item) => item.title === filterBySearch[0] || item.category === filterBySearch[0])
        } else {
            filterSearch = all.filter((item) => item.title === filterBySearch[0] || item.category === filterBySearch[0])

        }
        console.log('filterSearch', filterSearch)
        setFilterItem(filterSearch);

    }
    const [navBar, setNavbar] = useState(false)
    const handleNavbar = () => {
        setNavbar(navBar ? false : true)
    }

    return (
        <div className='navigation'>
            <div className='restorentTitle'>Mohan Restorent</div>
            <div className={searchBar ? "search-input " : " active-input "}>
                <i className="fa-solid fa-xmark remove-search" onClick={() => setSearchbar(false)}></i>
                <div className='res-input'>
                    <input type="text" placeholder='Search' onChange={e => setSearchVal(e.target.value)} />
                    <i className='fa-solid fa-magnifying-glass search-bar-responsive' onClick={handleSearchClick}></i>
                </div>
            </div>
            <div className={navBar ? "filterbuttons " : " active  "}>
                {
                    filterBettons.map((values) => {
                        return (<button key={Math.random()} onClick={values.click} >{values.item}</button>)
                    })
                }
            </div>
            <i className="fa-solid fa-magnifying-glass serch-bar" onClick={handleSearchClick}></i>
            <i className={navBar ? "fas fa-times nav-bar" : "fas fa-bars nav-bar"} onClick={handleNavbar}></i>
        </div>
    )
}

export default Navigation;