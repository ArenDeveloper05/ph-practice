import './TopGifts.css'

const TopGifts = () => {
    return(
        <section className='mainContainer'>
            <div className='mainContainer--ChildBox'>
                <div className='childBox--TextPart'>
                    <div className='textPart--heading'>
                        <p>Gifts of the season</p>
                    </div>
                    <div className='textPart--description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis. 
                    </p>
                    </div>
                    <div className='textPart--buttonBox'>
                        <button>shop gifts</button>
                    </div>
                </div>
                <div className='childBox--ImgSection'></div>
            </div>
        </section>
    )
}

export default TopGifts