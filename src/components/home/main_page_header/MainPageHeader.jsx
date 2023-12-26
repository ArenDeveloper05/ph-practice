import './MainPageHeader.css'

function MainPageHeader(){
    return(
        <header>
            <div className='navigation-tools'>
                <div className='navigation--location-vector-box'></div>
                <div className='navigation--jewerly'>
                    <p>jewerly</p>
                </div>
                <div className='navigation--newReleases'>
                    <p>new releases</p>
                </div>
                <div className='navigation--gifts'>
                    <p>gifts</p>
                </div>
            </div>
            <div className='main-logo-container'>
                <div className='main-logo-container--icon'>

                </div>
            </div>
            <div className='user-tools'>
                <div className='tools--searchBar-box'>
                   <div className='searchBar--inputForm'>
                    <input type="search" id="searchForm" placeholder='Search'/>
                   </div>
                   <div className='searchBar--formIcon'></div>
                </div>
                <div className='tools--liked-box'></div>
                <div className='tools--cart-box'></div>
                <div className='tools--account-box'></div>
            </div>
        </header>
    )
}

export default MainPageHeader