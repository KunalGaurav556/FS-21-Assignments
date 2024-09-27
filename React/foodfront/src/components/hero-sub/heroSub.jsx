import './heroSub.modular.css';

const HeroSub = () => {
    return(
        <div className='heroSub'>
            <div className='heroSub-left'>
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="a house photo" />
            </div>
            <div className='heroSub-right'>
                <div className='heroSub-right-content'>
                    <h2 style={{
                    
                        fontSize: "2rem",
                        lineHeight: "2rem"
                    }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                    <button>Get in Touch</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSub