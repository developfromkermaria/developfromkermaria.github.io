const RSS_URL = 'https://www.lemonde.fr/rss/une.xml';

$.ajax(RSS_URL, {
  accepts: {
    xml: "application/rss+xml"
  },

  dataType: "xml",

  success: function(data) {
    console.log(data);
  }
});
