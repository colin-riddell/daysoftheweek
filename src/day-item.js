// Import some code we need
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

//Create component
var DayItem = React.createClass({
  render: function(){
    return <Text style={styles.day}>
      {this.props.day}
    </Text>
  }
});


//Style component
var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
});

// Make component available elsewhere (export some code)
module.exports = DayItem;  // Export the DayItem component
