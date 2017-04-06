var React=require('react');
var Header = require('./header');
var CredentialFields = require('./credentialFields');

module.exports= React.createClass({
    render : function() {
        return  <div className = "mainComponent">
                    <Header />
                    <CredentialFields />
                 </div>
    }
});