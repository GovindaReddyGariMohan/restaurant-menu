import React from "react"
import './menuitems.css'
const Menuitems = (props) => {
    const lItems = props.FItems
    console.log('LItems', lItems.length)
    return ( 
        <div className="menuItems"> 
            {
                lItems.map((value) => {
                    return (
                        <div className="items" key={Math.random()}>
                            <img src={value?.img} alt="images" height='250px' width='100%' />
                            <div className="itemDetails">
                                <div className="title">{value?.title}</div>
                                <div className="price">{value?.price}</div>
                                <div className="discription">{value?.description}</div>
                                <div className="category">category: {value?.category}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Menuitems;