import React from 'react'

const Index = () => {
    return (
        <div>
            <section>
                <h1 class="tituloHome">Admin Juli's Pastry</h1>
                    <p class="introduccion">Aplicacion web de  administracion de ventas para una empresa en crecimiento, donde se logra tener control de la gestion de roles de usuarios, productos, clientes, ventas, informes mensuales. 
                    Con diferentes herramientas para visuaizar el flujo de productos y manejo de bases de datos.   
                    </p>
                </section>

                <section>
                    <h2 class="herramientas">Herramientas</h2>
                        <div>
                        <ul class="contenedorTarjetasHome">
                            <li class="tarjetas">Gestion de Usuarios
                                <img class="fotosHome" src="./media/gestion-de-usuarios.jpeg" alt="foto muffin"/>
                            </li>
                            <li class="tarjetas">Gestion de ventas
                                <img class="fotosHome" src="./media/tortaEmpacada.jpeg" alt="foto muffin"/>
                            </li>
                            <li class="tarjetas">Gestion de productos
                                <img class="fotosHome" src="./media/tortaEspiralGrande.jpeg" alt="foto muffin"/>
                            </li>
                            <li class="tarjetas">Gestion de clientes
                                <img class="fotosHome" src="./media/gestion-de-clientes.jpeg" alt="foto muffin"/>
                            </li>
                        </ul>
                    </div>
            </section>
        
        </div>
    )
}

export default Index
