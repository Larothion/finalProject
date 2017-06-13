// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panelHeading">
          <div className="row">
            <div className="col-md-3">
              <h3 className="panel-title text-center">Twitch URL</h3>
            </div>
            <div className="col-md-2">
              <h3 className="panel-title text-center">Email</h3>
            </div>
            <div className="col-md-1">
              <h3 className="panel-title text-center">Followers</h3>
            </div>
            <div className="col-md-2">
              <h3 className="panel-title text-center">Views</h3>
            </div>
            <div className="col-md-2">
              <h3 className="panel-title text-center">Game</h3>
            </div>
            <div className="col-md-2">
              <h3 className="panel-title text-center">Language</h3>
            </div>
          </div>
        </div>
        <div className="panel-body">
          <div className="row applicant-section">
              <div className="col-md-3 applicant-data">
                <h3 className="panel-title text-center">Twitch.com/Pyroelementalist</h3>
              </div>
              <div className="col-md-2 applicant-data">
                <h3 className="panel-title text-center">pyro@gmail.com</h3>
              </div>
              <div className="col-md-1 applicant-data">
                <h3 className="panel-title text-center">80,362</h3>
              </div>
              <div className="col-md-2 applicant-data">
                <h3 className="panel-title text-center">1,567,000</h3>
              </div>
              <div className="col-md-2 applicant-data">
                <h3 className="panel-title text-center">Battlegrounds</h3>
              </div>
              <div className="col-md-2">
                <h3 className="panel-title text-center">English</h3>
              </div>
          </div> 
          <button className="btn-lg btn-success app-buttons"> Accepted </button>
          <button className="btn-lg btn-danger app-buttons"> Declined </button>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;


//on form submit we need the form to send us all the info in the form.
// We then need to do a Twitch API call and store that information in a database
// Then the front-end should display the Twitch_url, Email, followers, views, game, and language of the streamer

//Then need to have two pressable buttons.  
//One that accepts them, updates them to the data base, and sends an "accepted" email
//The other that denies them and sends them a "denial" email.