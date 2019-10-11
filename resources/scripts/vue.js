new Vue({
  el: '#app',
  data: {
    currentTime: null,
    city: 'athens',
    openweathermap: {
      list: [{
        main: {
          temp: '',
          humidity: ''
        },
        weather: [{
          id: '',
          main: '',
          description: '',
          icon: ''
        }]
      }]
    }
  },
  methods: {
    getData: function () {
      var self = this;
      var url = 'http://api.openweathermap.org/data/2.5/forecast';
      var api = 'adba096f4cb1d97d649632a85dd1b593';
      var units = 'metric';
      var lang = 'en';
      $.getJSON(url + '?q=' + self.city + '&appid=' + api + '&units=' + units + '&lang=' + lang, function (json) {
        //console.log("JSON list: ", json.list);
        self.openweathermap = json;
        var iconCode = json.list[0].weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
      });
    }, updateCurrentTime() {
      this.currentTime = moment().format("LTS");
    }
  },
  created() {
    this.currentTime = moment().format("LTS");
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  },
  filters: {
    capitalize: function (value) {
      return value.replace(/\w\S*/g, function(value){
        return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
      });
    },
    round: function roundUp(num, precision) {
      var precision = 1;
      return Math.ceil(num * precision) / precision;
    },
    dates: function (date) {
      return moment(date + ' Z', 'YYYY-MM-DD HH:mm:ss Z', true).format('D MMM YYYY HH:mm');
    }
  }
});