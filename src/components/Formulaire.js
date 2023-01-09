import "../sass/Formulaire.scss"
import fenetre from './vitre.jpg'

document.querySelector('form').addEventListener('submit',(e) =>{
    
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    // console.log(data.get('Firstname'));
    // console.log(data.get('Name'))
    // console.log(data.get('Adresse'))
    console.log(data.get('Disponibilite'))
    
});




const Formulaire = () => {
    return (
        <div className="Formulaires">

            <div className="formulaire">

                <form className="formulaire__input">
                    <h1>Formulaire d'inscription</h1>

                    <label htmlFor="Nom">Nom</label><input type="text" id="Nom" name="Name" />
                    <label htmlFor="Prenom">Prénom</label><input type="text" id="Prenom" name="Firstname"/>
                    <label htmlFor="Adresse">Adresse</label><input type="text" id="Adresse" name="Adresse"/>
                    <label htmlFor="Disponibilite">Disponibilité</label><input type="text" id="Disponibilite" name="Disponibilite" />
                    <label htmlFor="Autres">Autres</label><input type="text" id="Autres" />

                    <button className="Submit">Valider</button>
                </form>
                <img src={fenetre} alt="" />
            </div>
        </div>
    )
}

export default Formulaire