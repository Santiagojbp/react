import React from 'react'
export default Ayuda
function Ayuda() {
	return(
		<React.Fragment>
			<section>
			  <article>
			    <ul className="creare">  
			      <form className="ulfondo" id= "formularioDos">
			        <fieldset className="ayudame">
			            <div className="form-group">
			              <input type="textarea" placeholder="En que lo podemos ayudar" id= "ayudame"/>
			            </div>
			            <li><input className="boton" type="reset" name="reset"/> </li>  
			            <li><input className="boton" type="submit" value="enviar"/></li>
			        </fieldset>
			      </form>
			    </ul>
			  </article>
			</section> 
		</React.Fragment>
		)
}