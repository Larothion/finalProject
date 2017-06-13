// Include React
var React = require("react");

// Here we include all of the sub-components
var SideNavigation = require("./children/SideNavigation");
var Results = require("./children/Results");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
 
  // Here we render the function
  render: function() {
    return (
      <div className="container-fluid"> 
         <div className="row">
          <div className="col-lg-12 top-title">
            <h2 className="text-center"> <img className="logo" src="http://www.streamfluence.io/uploads/9/5/3/4/95348280/published/icon-landscaped_7.png?1491843667"/></h2>
            <p className="text-center">
              <em>Accept/Deny applicants or search through the StreamFluence database</em>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 nav-side">
           <SideNavigation />
          </div>
          <div className="col-md-10 main-content">
            <Results />
         </div>
        </div>  
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
