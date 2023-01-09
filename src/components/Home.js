import image from './logo-fenetre.jpg'
import logo from './logo-clean3000.png'
import "../sass/Home.scss"

const Home = () => {
    return (
        <div className="Home">
            <div className="direction">
                <div className="logo-ent">
                    <img src={logo} alt="" />
                </div>
                <div className="liens">
                    <div className="formulaire">
                        <a href="http://localhost:3000/Formulaire">Formulaire</a>
                    </div>
                    <div className="Formule">
                        <a href="http://localhost:3000/Formule">Formule</a>
                    </div>
                </div>

            </div>

            <div className="logo">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Home