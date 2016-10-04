// Import some code we need
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;

var DayItem = require('./src/day-item');



// Create a react Component
// Learning: One file per Component!
// Learning: A Component represents something we want to show on the screen
// of our device
var Weekdays = React.createClass({
  // Learning: every react Component must have render method
  // render: function() is a key, value  where render is the key, and
  // the function is the value
  // Purpose of the render method is to return some coded that describes
  // what we want our component to look like.
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>

  },
  days: function() {
    var daysItems = [];

    for (var i = 0; i <7; i++){
      var day  = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }

    return daysItems;
  }
});
    // days will be an Array of DayItem components, one for each day of the week
    // days = [DayItem day="Sunday" />, DayItem day="Monday" />,...]

//Style the react component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Moves stuff height wise
    alignItems: 'center' // Moves stuff width wise
  }
});

// Show the react Component on the screen
// Do once per App
// When you try to show the content on the screen for our application called
// 'weekdays', please use the Component Weekdays

// This only gets called once for our app, even if we have miltiple Components,
// all the other Components will ultimately be a child, or rendered by or
// contained by our Weekdays component
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
})
