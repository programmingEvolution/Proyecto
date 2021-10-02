const Productos = () => {
    return (
        <div>
            <section> 
                <ul className="contenedorBotonesgrises">
                    <li className="buscadorEspecifico">Buscar ID Productos</li>
                    <li className="botonNuevoPro">Nuevo Producto</li>
                </ul>

            </section>

            <section className="correrTabla">
                <table>
                <tr>
                    <td className="tituloColumna">IDproductos</td>
                    <td className="tituloColumna">Proveedor</td>
                    <td className="tituloColumna">Nombre</td>
                    <td className="tituloColumna">Variantes</td>
                    <td className="tituloColumna">Precio unidad</td>
                    <td className="tituloColumna">Disponible</td>
                    <td className="tituloColumna">Acciones</td>
                </tr>
                <tr>
                    <td className="filaImpar">0001</td>
                    <td className="filaImpar">Juli's Pastry</td>
                    <td className="filaImpar">Muffins</td>
                    <td className="filaImpar">Zanahoria, manzana, banano y maracuyá.</td>
                    <td className="filaImpar">$4000</td>
                    <td className="filaImpar">60</td>
                    <td className="filaImpar">Mod-Elim</td>
                    
                </tr>
                <tr>
                    <td className="filaPar">0002</td>
                    <td className="filaPar">Juli's Pastry</td>
                    <td className="filaPar">Mini Muffins</td>
                    <td className="filaPar">Zanahoria, manzana, banano y maracuyá.</td>
                    <td className="filaPar">$2000</td>
                    <td className="filaPar">50</td>
                    <td className="filaPar">Mod-Elim</td>
                </tr>
                <tr>
                    <td className="filaImpar">0003</td>
                    <td className="filaImpar">Juli's Pastry</td>
                    <td className="filaImpar">Torta circular grande</td>
                    <td className="filaImpar">Zanahoria, manzana, banano y maracuyá.</td>
                    <td className="filaImpar">$25000</td>
                    <td className="filaImpar">20</td>
                    <td className="filaImpar">Mod-Elim</td>
                </tr>
                <tr>
                    <td className="filaPar">0004</td>
                    <td className="filaPar">Juli's Pastry</td>
                    <td className="filaPar">Torta circular mediana</td>
                    <td className="filaPar">Zanahoria, manzana, banano y maracuyá.</td>
                    <td className="filaPar">$16000</td>
                    <td className="filaPar">10</td>
                    <td className="filaPar">Mod-Elim</td>
                </tr>
                <tr>
                    <td className="filaImpar">0005</td>
                    <td className="filaImpar">Juli's Pastry</td>
                    <td className="filaImpar">Torta circular pequeña</td>
                    <td className="filaImpar">Zanahoria, manzana, banano y maracuyá.</td>
                    <td className="filaImpar">$12000</td>
                    <td className="filaImpar">15</td>
                    <td className="filaImpar">Mod-Elim</td>
                    
                </tr>
                <tr>
                    <td className="filaPar">0006</td>
                    <td className="filaPar">Juli's Pastry</td>
                    <td className="filaPar">Mini Torta</td>
                    <td className="filaPar">Zanahoria, manzana, banano y maracuyá.</td>
                    <td className="filaPar">$8000</td>
                    <td className="filaPar">6</td>
                    <td className="filaPar">Mod-Elim</td>
                </tr>
                
                </table>
            </section>
            
        </div>
    )
}

export default Productos
