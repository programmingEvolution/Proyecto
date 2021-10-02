const Usuarios = () => {
    return (
        <div className="contenedorFormulario">
            <section> 
                <ul className="contenedorBotonesgrises">
                    <li className="buscadorEspecificoUsu">Buscar ID Usuario</li>
                    <li className="botonNuevoUsu">Nuevo Usuario</li>
                </ul>

            </section>

            <section className="correrTablaUsu">
                <table>
                <tr>
                    <td className="tituloColumnaUsu">IDUsuario</td>
                    <td className="tituloColumnaUsu">Nombre</td>
                    <td className="tituloColumnaUsu">Telefono</td>
                    <td className="tituloColumnaUsu">Fecha Ingreso</td>
                    <td className="tituloColumnaUsu">Rol</td>
                    <td className="tituloColumnaUsu">Acciones</td>
                </tr>
                <tr>
                    <td className="filaImparUsu">123456789123</td>
                    <td className="filaImparUsu">Edna Gonzalez</td>
                    <td className="filaImparUsu">5720784</td>
                    <td className="filaImparUsu">5/e/2020</td>
                    <td className="filaImparUsu">Vendedor</td>
                    <td className="filaImparUsu">Mod-Elim</td>
                    
                </tr>
                <tr>
                    <td className="filaParUsu">123456789124</td>
                    <td className="filaParUsu">Mauricio Peña</td>
                    <td className="filaParUsu">9874562</td>
                    <td className="filaParUsu">15/03/2021</td>
                    <td className="filaParUsu">Vendedor</td>
                    <td className="filaParUsu">Mod-Elim</td>
                </tr>
                <tr>
                    <td className="filaImparUsu">123456789125</td>
                    <td className="filaImparUsu">Juan Silva</td>
                    <td className="filaImparUsu">5720784</td>
                    <td className="filaImparUsu">25/02/2020</td>
                    <td className="filaImparUsu">Vendedor</td>
                    <td className="filaImparUsu">Mod-Elim</td>
                </tr>
                <tr>
                    <td className="filaParUsu">123456789126</td>
                    <td className="filaParUsu">Juli's Pastry</td>
                    <td className="filaParUsu">5720784</td>
                    <td className="filaParUsu">18/01/2020</td>
                    <td className="filaParUsu">Vendedor</td>
                    <td className="filaParUsu">Mod-Elim</td>
                </tr>
                <tr>
                    <td className="filaImparUsu">1234567891237</td>
                    <td className="filaImparUsu">Juli's Pastry</td>
                    <td className="filaImparUsu">5720784</td>
                    <td className="filaImparUsu">02/02/2021</td>
                    <td className="filaImparUsu">Vendedor</td>
                    <td className="filaImparUsu">Mod-Elim</td>
                    
                </tr>
                <tr>
                    <td className="filaParUsu">1234567891237</td>
                    <td className="filaParUsu">Juli's Pastry</td>
                    <td className="filaParUsu">5720784</td>
                    <td className="filaParUsu">15/03/2021</td>
                    <td className="filaParUsu">Vendedor</td>
                    <td className="filaParUsu">Mod-Elim</td>
                </tr>
                
                </table>
            </section>
            
        </div>
    )
}

export default Usuarios
