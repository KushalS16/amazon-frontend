import React from 'react';
import './navbarBanner.css';
import MenuIcon from '@mui/icons-material/Menu';

const NavbarBanner = () => {
    const options = [
        {"name":"Fresh"},{"name":"Amazon miniT"},{"name":"Sell"},
        {"name":"Best Sellers"},{"name":"Today's Deals"},{"name":"Mobiles"},
        {"name":"Electronics"},{"name":"Prime"},{"name":"Customer Service"},
    ]
    return (
        <div className="navbarBanner">
            <div className="navbarBannerOptionsLeft">

                <div className="optionsNavbarBanner">
                    <MenuIcon sx={{ fontsize: "24px" }} />
                    <div className="allOptionsNavbarBanner">All</div>
                </div>
                {
                    options.map((item, ind) => {
                        return (
                            <div className="optionsNavbarBanner" key={ind}>
                                <div className="allOptionsNavbarBanner">{item.name}</div>
                            </div>
                        )
                    })
                }


            </div>
            <div className="navbarBannerRightSide">

            </div>
        </div>

    )
}

export default NavbarBanner