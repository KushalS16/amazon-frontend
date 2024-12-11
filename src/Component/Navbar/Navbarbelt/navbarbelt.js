import React from 'react';
import './navbarbelt.css';
import amazonLogo from '../../../Assets/amazonLogo.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import india from '../../../Assets/india.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbarbelt = () => {
    return (
        <div className='navbarbelt'>
            <div className="leftNavbelt">
                <div className='leftNavbeltLogo'>
                    <img className='amazonLogoNavbar' src={amazonLogo} alt='amazonLogo'/>
                    <span className='navbar_inLogo'>.in</span>
                </div>
            </div>

            <div className="navbarbeltLocation">
                <div className="navbarbeltLocationImg">
                    <LocationOnOutlinedIcon className='navbarbeltLocationImgIcon' sx={{ fontsize: "22px" }} />
                </div>
                <div className='navbarbeltLocationPlace'>
                    <div className='navbarbeltLocationTop'>Delivering to Karnataka 560001</div>
                    <div className='navbarbeltLocationBottom'>Update Location</div>
                </div>
            </div>

            <div className="navbarbeltSearchBox">
                <div className='navbarbeltSearchDiv'>
                    <div className='navbarbeltSearchBoxAll'>
                        <div className='navbarbeltSearchBoxAllText'>All</div>
                        <ArrowDropDownOutlinedIcon sx={{ fontsize: "20px" }} />
                    </div>
                    <input type='text' className='navbarbeltSearchBox' placeholder='Search Amazon.in' />
                    <div className='searchIconNavbarbelt'>
                        <SearchIcon sx={{ fontsize: "26px" }} className='searchIconNavbarbelt' />
                    </div>
                </div>
            </div>

            <div className="rightsideNavbarbelt">
                <div className='indianFlagCode'>
                    <img src={india} className='indiaFlag' alt='India Flag'/>
                    <div className='indiaCodeNavbarbelt'>EN <ArrowDropDownOutlinedIcon sx={{ fontsize: 16, marginTop: 1, marginLeft: -0.4 }} className='indiaCodeNavbarbeltDrp' /></div>
                </div>

                <div className='helloSignInNavbarbelt'>
                    <div className='helloTopNavbarbelt'>Hello, User</div>
                    <div className='indiaCodeNavbarbelt'>Accounts & Lists</div>
                </div>

                <div className='helloSignInNavbarbelt'>
                    <div className='helloTopNavbarbelt'>Returns</div>
                    <div className='indiaCodeNavbarbelt'>& Orders</div>
                </div>

                <div className='cartNavbarbelt'>
                    <div className='cartTitle'>
                        <ShoppingCartOutlinedIcon />
                        <span className='cartText'>Cart</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbarbelt;