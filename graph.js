$(function () {
  var url = "https://pomber.github.io/covid19/timeseries.json";

  $.getJSON(url, function (result) {
    console.log(result);
    var no = 1;
    var confirmed = 0;
    var confirmed1 = 0;
    var confirmed2 = 0;
    var confirmed3 = 0;
    var confirmed4 = 0;
    var confirmed5 = 0;
    var confirmed6 = 0;
    var confirmed7 = 0;
    var confirmed8 = 0;
    var confirmed9 = 0;
    var confirmed10 = 0;
    var confirmed11 = 0;

    var deaths = 0;
    var deaths1 = 0;
    var deaths2 = 0;
    var deaths3 = 0;
    var deaths4 = 0;
    var deaths5 = 0;
    var deaths6 = 0;
    var deaths7 = 0;
    var deaths8 = 0;
    var deaths9 = 0;
    var deaths10 = 0;
    var deaths11 = 0;

    var recovered = 0;
    var recovered1 = 0;
    var recovered2 = 0;
    var recovered3 = 0;
    var recovered4 = 0;
    var recovered5 = 0;
    var recovered6 = 0;
    var recovered7 = 0;
    var recovered8 = 0;
    var recovered9 = 0;
    var recovered10 = 0;
    var recovered11 = 0;


    for (var country in result) {
      var selectedCountry = result[country];
      var total = selectedCountry.length;
      confirmed = confirmed + selectedCountry[total - 1].confirmed;
      confirmed1 = confirmed1 + selectedCountry[total - 2].confirmed;
      confirmed2 = confirmed2 + selectedCountry[total - 3].confirmed;
      confirmed3 = confirmed3 + selectedCountry[total - 4].confirmed;
      confirmed4 = confirmed4 + selectedCountry[total - 5].confirmed;
      confirmed5 = confirmed5 + selectedCountry[total - 6].confirmed;
      confirmed6 = confirmed6 + selectedCountry[total - 7].confirmed;
      confirmed7 = confirmed7 + selectedCountry[total - 8].confirmed;
      confirmed8 = confirmed8 + selectedCountry[total - 9].confirmed;
      confirmed9 = confirmed9 + selectedCountry[total - 10].confirmed;
      confirmed10 = confirmed10 + selectedCountry[total - 11].confirmed;
      confirmed11 = confirmed11 + selectedCountry[total - 12].confirmed;

      deaths = deaths + selectedCountry[total - 1].deaths;
      deaths1 = deaths1 + selectedCountry[total - 2].deaths;
      deaths2 = deaths2 + selectedCountry[total - 3].deaths;
      deaths3 = deaths3 + selectedCountry[total - 4].deaths;
      deaths4 = deaths5 + selectedCountry[total - 5].deaths;
      deaths5 = deaths6 + selectedCountry[total - 6].deaths;
      deaths6 = deaths7 + selectedCountry[total - 7].deaths;
      deaths7 = deaths8 + selectedCountry[total - 8].deaths;
      deaths8 = deaths9 + selectedCountry[total - 9].deaths;
      deaths9 = deaths10 + selectedCountry[total - 10].deaths;
      deaths10 = deaths10 + selectedCountry[total - 11].deaths;
      deaths11 = deaths11 + selectedCountry[total - 12].deaths;

      recovered = recovered + selectedCountry[total - 1].recovered;
      recovered1 = recovered1 + selectedCountry[total - 2].recovered;
      recovered2 = recovered2 + selectedCountry[total - 3].recovered;
      recovered3 = recovered3 + selectedCountry[total - 4].recovered;
      recovered4 = recovered4 + selectedCountry[total - 5].recovered;
      recovered5 = recovered5 + selectedCountry[total - 6].recovered;
      recovered6 = recovered6 + selectedCountry[total - 7].recovered;
      recovered7 = recovered7 + selectedCountry[total - 8].recovered;
      recovered8 = recovered8 + selectedCountry[total - 9].recovered;
      recovered9 = recovered9 + selectedCountry[total - 10].recovered;
      recovered10 = recovered10 + selectedCountry[total - 11].recovered;
      recovered11 = recovered11 + selectedCountry[total - 12].recovered;
    }
    console.log(selectedCountry);

    $("#confirmed").append(confirmed); $("#deaths").append(deaths); $("#recovered").append(recovered);
    var ctx = document.getElementById("myAreaChart");
    var myLineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "-11day",
          "-10day",
          "-9day",
          "-8day",
          "-7day",
          "-6day",
          "-5day",
          "-4day",
          "-3day",
          "-2day",
          "-1day",
          "now",
        ],
        datasets: [
          {
            label: "confirmed",
            lineTension: 0.3,
            backgroundColor: "rgb(0, 64, 255,0.05)",
            borderColor: "rgb(0, 64, 255,1)",
            pointRadius: 3,
            pointBackgroundColor: "rgb(0, 64, 255,1)",
            pointBorderColor: "rgb(0, 64, 255,1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgb(0, 64, 255,1)",
            pointHoverBorderColor: "rgb(0, 64, 255,1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [
              confirmed11,
              confirmed10,
              confirmed9,
              confirmed8,
              confirmed7,
              confirmed6,
              confirmed5,
              confirmed4,
              confirmed3,
              confirmed2,
              confirmed1,
              confirmed
            ],
          },
          {
            label: "deaths",
            lineTension: 0.3,
            backgroundColor: "rgb(248, 168, 78 ,0.05)",
            borderColor: "rgb(248, 168, 78,1)",
            pointRadius: 3,
            pointBackgroundColor: "rgb(248, 168, 78,1)",
            pointBorderColor: "rgb(248, 168, 78,1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgb(248, 168, 78,1)",
            pointHoverBorderColor: "rgb(248, 168, 78,1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [
              deaths11,
              deaths10,
              deaths9,
              deaths8,
              deaths7,
              deaths6,
              deaths5,
              deaths4,
              deaths3,
              deaths2,
              deaths1,
              deaths
            ],
          },
          {
            label: "recovered",
            lineTension: 0.3,
            backgroundColor: "	rgb(0, 255, 191,0.05)",
            borderColor: "	rgb(0, 255, 191,1)",
            pointRadius: 3,
            pointBackgroundColor: "	rgb(0, 255, 191,1)",
            pointBorderColor: "	rgb(0, 255, 191,1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "	rgb(0, 255, 191 ,1)",
            pointHoverBorderColor: "	rgb(0, 255, 191 ,1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [
              recovered11,
              recovered10,
              recovered9,
              recovered8,
              recovered7,
              recovered6,
              recovered5,
              recovered4,
              recovered3,
              recovered2,
              recovered1,
              recovered
            ],
          },
        ],
      },
    });
  });
});
