import './AboutUsSection.css'

const AboutUsSection = () => {
    return(
        <section className='main_container'>
            <div className='main_container--ImgSection'></div>
            <div className='main_container--TextArea'>
                <div className='textArea--Heading'>
                    <p>What were we made for?</p>
                </div>
                <div className='textArea--Description'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis. 
                    Elementum sagittis vitae et leo duis. Libero nunc consequat interdum varius. Habitant morbi tristique senectus et netus et malesuada fames ac. </p>
                </div>
                <div className='textArea--buttonBox'>
                    <button>About Us</button>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection