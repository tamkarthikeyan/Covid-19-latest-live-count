        var name = "India";
        var d1 = "░░░░░░░░░";
        var n = "\n";
        var today_case = "Today Cases";
        var confirmed, active, recovered, deceased, other, delta_confirmed, delta_recovered, delta_deceased, enable;
        var xmlhttp = new XMLHttpRequest();
        var api = "https://api.covid19india.org/v4/min/data.min.json";

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);


                delta_confirmed = myArr.TT.delta.confirmed;
                if (typeof delta_confirmed == "undefined") {
                    delta_confirmed = '0';
                } else {
                    delta_confirmed = "Today Confirmed: " + delta_confirmed;
                }

                delta_recovered = myArr.TT.delta.recovered;
                if (typeof delta_recovered == "undefined") {
                    delta_recovered = '0';
                } else {
                    delta_recovered = "Today Recovered: " + delta_recovered;
                }

                delta_deceased = myArr.TT.delta.deceased;
                if (typeof delta_deceased == "undefined") {
                    delta_deceased = '0';
                } else {
                    delta_deceased = "Today Deceased: " + delta_deceased;
                }

                enable = d1 + "Today Cases" + d1 + n + delta_confirmed + n + delta_recovered + n + delta_deceased

                //------------------------------------------------\\
                confirmed = myArr.TT.total.confirmed;
                if (typeof confirmed == "undefined") {
                    confirmed = 0;
                } else {
                    confirmed = confirmed;
                }

                other = myArr.TT.total.other;
                if (typeof other == "undefined") {
                    other = 0;
                } else {
                    other = other;
                }

                recovered = myArr.TT.total.recovered;
                if (typeof recovered == "undefined") {
                    recovered = 0;
                } else {
                    recovered = recovered;
                }

                deceased = myArr.TT.total.deceased;
                if (typeof deceased == "undefined") {
                    deceased = 0;
                } else {
                    deceased = deceased;
                }
                active = confirmed - other - recovered - deceased;

                //TT_delta_migrated_value = TT_delta_confirmed - TT_delta_recovered - TT_delta_deceased;
                document.write(d1 + name + d1 + n +
                    "Total Confirmed: " + confirmed + n +
                    "Total Active: " + active + n +
                    "Total Recovered: " + recovered + n +
                    "Total Deceased: " + deceased + n + n +
                    enable);
            }
        };
        xmlhttp.open("GET", api, true);
        xmlhttp.send();
