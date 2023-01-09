import "../sass/Formule.scss"

const Formule = () => {
    return (
        <div className="formule">
            <div className="titre">
                <h1>Formules</h1>

            </div>

            <hr />

            <div className="hexagon">

                <div className="element ">

                    <div className="part">
                        <div className="start">
                            <div className="name">
                                <p>Pack Complet</p>
                            </div>

                            <div className="coche">
                                <input type="text" id="coche" />
                            </div>
                        </div>
                        <div className="end">
                            
                                <p>Un grand nettoyage de font en comble</p>
                         
                            <div className="price">
                                <p>Tarifs : 25€</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="element">
                    <div className="part">
                        <div className="start">
                            <div className="name">
                                <p>Pack Simplice</p>
                            </div>

                            <div className="coche">
                                <input type="text" id="coche" />
                            </div>
                        </div>
                        <div className="end">
                            <p>Un nettoyage pour des vitre bien entre-tenue</p>
                            <div className="price">
                                <p>Tarifs : 20€</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="">
                <div className="button">
                    <div className="losange">
                        <h1>Accepts</h1>
                    </div>
                </div>
            </a>

            <div className="hexagon">

                <div className="element ">

                    <div className="part">
                        <div className="start">
                            <div className="name">
                                <p>Pack Economme</p>
                            </div>

                            <div className="coche">
                                <input type="text" id="coche" />
                            </div>
                        </div>
                        <div className="end">
                            <p>Un lavage simple et a prix réduits</p>
                            <div className="price">
                                <p>Tarifs : 10€</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="element">
                    <div className="part">
                        <div className="start">
                            <div className="name">
                                <p>Pack Rigolos</p>
                            </div>

                            <div className="coche">
                                <input type="text" id="coche" />
                            </div>
                        </div>
                        <div className="end">
                            <p>Un nettoyage de vitre avec des motifs</p>
                            <p> choisi au préalable</p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="http://localhost:3000/Formule">
                <div className="button">
                    <div className="losange">
                        <h1>Reset</h1>
                    </div>
                </div>
            </a>

            <div className="hexagon">

                <div className="element un">

                    <div className="part">
                        <div className="start">
                            <div className="name">
                                <p>Pack Suprise 3000</p>
                            </div>

                            <div className="coche">
                                <input type="text" id="coche" />
                            </div>
                        </div>
                        <div className="end">
                            <p> Une suprise suite au service des vitres</p>
                            <div className="price">
                                <p>Tarifs : 10€</p>
                                <p>Attention a prendre avec un autre tarifs</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="element">
                    <div className="part">
                        <div className="start">
                            <div className="name">
                                <p>Pack Formation</p>
                            </div>

                            <div className="coche">
                                <input type="text" id="coche" />
                            </div>
                        </div>
                        <div className="end">
                            <p>Si vous souhaite comprendre les bases des vitres</p>
                            <div className="price">
                                <p>Tarifs : 40€</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Formule