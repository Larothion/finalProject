// Include React
var React = require("react");

// Creating the Form component
var SideNavigation = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "" };
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="side-nav-outline">
        <div className="side-nav-buttons"> <p> Applications </p> </div>
        <div className="side-nav-buttons"> <p> Search</p> </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = SideNavigation;
