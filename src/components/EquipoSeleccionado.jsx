import React from "react";
import Titulares from "./Titulares";
import Suplentes from "./Suplentes";

const EquipoSeleccionado = () => (
    <section>
        <Titulares />
        <Suplentes />
    </section>
);

EquipoSeleccionado.displayName = "EquipoSeleccionado";

export default EquipoSeleccionado;