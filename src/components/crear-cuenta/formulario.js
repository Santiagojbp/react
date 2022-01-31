import React from 'react';
export default Formulario

function Formulario() {
	return(
		<React.Fragment>			
			<section>
				<article>
					<ul className="creare">
						<form className="ulfondo" id= "formulario">
							<fieldset className="crear" >
								<h4>Nombre y apellido</h4>
								<li ><input id="nombre" type="text" name="nombre" placeholder="nombre y apellido" className="bar"/></li>
								<h4>N.telefonico o correo electronico</h4>
								<li><input type="text" name="correo" id="correo" placeholder="correo electronico" className="bar"/></li>
								<h4>Edad</h4>			
								<input type="number" id="edad" placeholder="cual es su edad"/>
								<h4>Sexo</h4>	
								<input type="text" id="sexo" placeholder="sexo"/>
								<h4>Direccion</h4>
								<li ><input type="text" id="direccion" name="" placeholder="direccion" className="bar"/></li>
								<input type="reset" name="reset" className="boton"/>
								<input type="submit" name="submit" value="enviar" className="botonc"/>	
							</fieldset>	
						</form>	
					</ul>
				</article>
			</section>			
		</React.Fragment>
	)
}
