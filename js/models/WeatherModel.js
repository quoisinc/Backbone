define([
  'underscore',
  'backbone',
], function (_, Backbone) {
    var model = Backbone.Model.extend({
        defaults: {
            zipquery: '',
            daynight: '',
            region: '',
            city: '',
            temp_high: '',
            temp_low: '',
            sunrise: '',
            sunset: '',
            pressure: '',
            humidity: '',
            visibility: '',
            wind: '',
            iconsrc: ''
        },
        initialize: function (options) {
            this.zipquery = options.query;
        },
        url: function () {
            return 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20location%3D%22'+this.zipquery+'%22&format=json&callback=?'
        },
        parse: function (res, req) {
            var weatherdt = {};
            var temp = {};
            for (key in res.query.results.channel) {
                if (typeof res.query.results.channel[key] === 'string') {
                    temp[key] = res.query.results.channel[key];
                } else {
                    for (k in res.query.results.channel[key]) {
                        temp[k] = res.query.results.channel[key][k];
                    }
                }
            };
            weatherdt.zipquery = this.zipquery;
            weatherdt.pressure = temp.pressure;
            weatherdt.humidity = temp.humidity + " %";
            weatherdt.visibility = temp.visibility + " mi";
            weatherdt.wind = "VAR " + temp.speed + " mph";
            var data = res.query.results.channel;
            var dstr = data.lastBuildDate.replace(/PST|EST/g, "")
            var dat = Date.parse(dstr);
            var theDate = new Date(dat);
            var hrs = theDate.getHours();
            var sr = parseInt(data.astronomy.sunrise)
            var ss = parseInt(data.astronomy.sunset) + 12
            if (hrs > ss || hrs < sr) {
                var imgstr = "n.png"
                weatherdt.daynight = 'night';
            } else {
                var imgstr = "d.png"
                weatherdt.daynight = '';
            }
            weatherdt.yw_cond = res.query.results.channel.item.condition.text;
            weatherdt.yw_temp = res.query.results.channel.item.condition.temp;
            weatherdt.dd_temp = res.query.results.channel.item.condition.temp + " F";
            weatherdt.iconsrc = "http://l.yimg.com/a/i/us/nws/weather/gr/" + res.query.results.channel.item.condition.code + imgstr;
            weatherdt.region = res.query.results.channel.location.region + ", ";
            weatherdt.city = res.query.results.channel.location.city + ", ";
            weatherdt.temp_high = res.query.results.channel.item.forecast[0].high;
            weatherdt.temp_low = res.query.results.channel.item.forecast[0].low;
            weatherdt.sunrise = res.query.results.channel.astronomy.sunrise;
            weatherdt.sunset = res.query.results.channel.astronomy.sunset;
            return weatherdt;
        }
    });
    return model;
});
