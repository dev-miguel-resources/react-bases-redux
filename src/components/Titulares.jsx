import React from "react";
import { connect } from "react-redux"; // les permite conectarse al store
import cancha from "../cancha.svg";

const Titulares = ({ titulares, quitarTitular }) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                titulares.map(j => (
                    <article className="titular" key={j.id}>
                        <div>
                           <img src={j.foto} alt={j.nombre} /> 
                           <button onClick={() => quitarTitular(j)}>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
            <img src={cancha} alt="Cancha de fútbol" />
        </div>
    </section>
);

const mapStateToProps = state => ({
    titulares: state.titulares
});

const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador) {
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
});

Titulares.displayName = "Titulares";

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);

// mapStateToProps = recibe la estructura inicial de alguna propiedad del store
// mapDispatchToProps = que es donde defino mis actions que recibirá el reducer para actualizar mi store