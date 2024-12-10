import React from 'react';
import './navbarbelt.css';
import amazonLogo from '../../../Assets/amazonLogo.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
const Navbarbelt = () => {
    return (
        <div className='navbarbelt'>
            <div className="leftNavbelt">
                <div className="leftNavbelt">
                    <div className='leftNavbeltLogo'>
                        <img className='amazonLogoNavbar ' src={amazonLogo} alt='amazonLogo'/>
                        <span className='navbar_inLogo'>.in</span>
                    </div>
                </div>
            </div>

            <div className="navbarbeltLocation">
                <div className="navbarbeltLocationImg">
                    <LocationOnOutlinedIcon className='navbarbeltLocationImgIcon' sx={{ fontsize:"22px" }}/>
                </div>
                <div className='navbarbeltLocationPlace'>
                    <div className='navbarbeltLocationTop'>Delivering to Karnataka 560001
                    </div>
                    <div className='navbarbeltLocationBottom'>Update Location
                    </div>
                </div>
            </div>
            <div className="navbarbeltSearchBox">
                <div className='navbarbeltSearchDiv'>
                    <div className='navbarbeltSearchBoxAll'>
                        <div className='navbarbeltSearchBoxAllText'>All
                        </div>
                        <ArrowDropDownOutlinedIcon sx={{ fontsize:"20px"}}/>
                    </div>
                    <input type='text' className='navbarbeltSearchBox' placeholder='Search Amazon.in'/>

                    <div className='searchIconNavbarbelt'>
                        <SearchIcon sx={{fontsize:"26px"}} className='searchIconNavbarbelt'/>
                    </div>
                </div>
            </div>
            <div className="rightsideNavbarbelt">

            </div>

        </div>
    )
}

export default Navbarbelt