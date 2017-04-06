var React=require('react');

module.exports= React.createClass({
    render : function() {
        return  <div className = "credentialComponent d-flex p-2 justify-content-center align-items-center">
        			<div className = "fields">
	        			<form>
		                    <div className ="d-flex justify-content-center align-items-center textFields input-group">
		                    	<div className = 'text-center'>
		                    		 <input type="text" name="firstname" className = "customPlaceholder" placeholder = "Enter your email"/> 
		                    		 <input type="password" name="firstname" id = 'password' className = "customPlaceholder" placeholder = "Enter your password"/> 
		                    	</div>
		                    </div>
		                    <div width ="100%"><button className = "btn" type='submit'>LOGIN</button></div>
	                    </form>
	                    <div className = 'd-flex flex-row justify-content-between'>
	                    	<span>Forgot your password?</span>
	                    	<span>Sign Up</span>
	                    </div>
	                    {/*<div className = 'row'>
	                    	                    	<div className='col-ld-8'>Forgot your password?</div>
	                    	                    	<div className='col-lg-4 text-right'>Sign Up</div>
	                    	                    </div>*/}
                    </div>
                 </div>
    }
});