import React from 'react'

const ModificarVenta = () => {
    return (
        <div>
            <div class = "div1">
                <h3>Modificar ventas</h3><br></br>
                <form>
                    <label for="usuario">ID Cliente:</label><br><br></br></br>
                    <label for="usuario">ID Vendedor:</label><br><br></br></br>
                    <label for="usuario">Fecha de Venta:</label>
                </form>
            </div>
            <div class= "div2">
                <form>
                    <input type="text"></input><br><br></br></br>
                    <input type="text"></input><br><br></br></br>
                    <input type="date"></input>
                </form>
            </div>

            <div class= "div3">
                <form>
                    <label for="usuario">Producto:</label><br><br></br></br>
                    <label for="usuario">Cantidad:</label><br><br></br></br>
                    <label for="usuario">Fecha de Pago:</label>
                </form>
            </div>

            <div class= "div4">
                <form>
                    <input type="text"></input><br><br></br></br>
                    <input type="number"></input><br><br></br></br>
                    <input class="id" type="date"></input>
                </form>
            </div>

            <section>
                <table>
                    <tr>
                        <th>ID Producto</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Estado</th>
                    </tr>
                    <tr>
                        <td>0001</td>
                        <td>Cupcakes</td>
                        <td>5000</td>
                        <td>10</td>
                        <td>Entregado</td>
                    </tr>
                    <tr>
                        <td>0002</td>
                        <td>Cheesecake de mora</td>
                        <td>25000</td>
                        <td>2</td>
                        <td>Pagado</td>
                    </tr>
                    <tr>
                        <td>0003</td>
                        <td>Cheesecake de maracuyá</td>
                        <td>30000</td>
                        <td>1</td>
                        <td>Cancelado</td>
                    </tr>
                    <tr>
                        <td>0004</td>
                        <td>Torta de banano</td>
                        <td>20000</td>
                        <td>3</td>
                        <td>Abonado</td>
                    </tr>

                </table>
            </section>
            <div class= "estado">
                <label for="usuario">Estado:</label>
                <input type="text">&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</input>

                <label for="venta">Total venta:</label>
                <input type="number"></input>
            </div>
            <div class= "botones">
                <input type="submit" value="Guardar">&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</input>
                <input type="submit" value="Cancelar"></input>
            </div>
        </div>
    )
}

export default ModificarVenta
