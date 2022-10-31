var lines = [];

$(document).ready(function () {
    $.ajax({
        url: "perth.csv",
        dataType: "text",
        success: function (data) {
            var allTextLines = data.split(/\r\n|\n/);
            var titles = allTextLines[0].split(',');
            var headers = allTextLines[1].split(',');
            for (var i = 1; i < allTextLines.length; i++) {
                var data = allTextLines[i].split(',');
                if (data.length == headers.length) {
                    var tarr = [];
                    for (var j = 0; j < headers.length; j++) {
                        tarr.push(data[j]);
                    }
                    lines.push(tarr);
                }
            }
            //            console.log(lines);
        }
    });
    $.ajax({
        url: "apac.csv",
        dataType: "text",
        success: function (data) {
            var allTextLines = data.split(/\r\n|\n/);
            var titles = allTextLines[0].split(',');
            var headers = allTextLines[1].split(',');
            for (var i = 1; i < allTextLines.length; i++) {
                var data = allTextLines[i].split(',');
                if (data.length == headers.length) {
                    var tarr = [];
                    for (var j = 0; j < headers.length; j++) {
                        tarr.push(data[j]);
                    }
                    lines.push(tarr);
                }
            }
            //            console.log(lines);
        }
    });
});

function validate() {
    document.getElementById('btn-submit').disabled = (document.getElementById('instance-id').value == '');
}

function getLab(input) {
    var index = -1;
    if (input.includes("@")) {
        email = String(CryptoJS.MD5(input.trim().toLowerCase()));
        for (var i = 1; i < lines.length; i++)
            if (lines[i][0] == email)
                index = i;
    } else
        for (var i = 1; i < lines.length; i++)
            if (lines[i][7] == input)
                index = i;
    //
    var table_data = '<div class="alert alert-warning" role="alert">Machine ID not found.</div>'
    if (index != -1) {
        table_data = '<H3>Lab Instructions</H3>';
        table_data += '<p>Day 1 - CICS Lab1 Resource Builder Lab <a href="labs/lab1.pdf" target="_blank">view</a></p>';
        table_data += '<p>Day 1 - CICS Lab2 Security Resource Recording Lab <a href="labs/lab2.pdf" target="_blank">view</a></p>';
        table_data += '<p>Day 1 - CICS Lab3 CICS Policy Lab <a href="labs/lab3.pdf" target="_blank">view</a></p>';
        table_data += '<p>Day 2 - z Application DevOps CI/CD Pipeline Lab <a href="labs/lab4a.pdf" target="_blank">IDz</a> or <a href="labs/lab4b.pdf" target="_blank">VSCode</a></p>';
        table_data += '<p>Day 2 - z/OS Connect OAS3 API Lab <a href="labs/lab5.pdf" target="_blank">view</a></p>';
        table_data += '<h3>Connectivity</h3>'
        table_data += '<h4>Using a web browser</h4>';
        table_data += '<p>URL: <br><mark>' + lines[index][1] + '</mark></p>';
        table_data += '<p>Username: <mark>' + lines[index][2] + '</mark></p>';
        table_data += '<p>Password: <mark>' + lines[index][5] + '</mark></p>';
        table_data += '<h4>Or using a Remote Desktop Client <small class="text-muted">(Preferred)</small></h4>';
        table_data += '<p>Host name: <br><mark>' + lines[index][3] + '</mark></p>';
        table_data += '<p>Username: <br><mark>' + lines[index][4] + '</mark></p>';
        table_data += '<p>Password: <mark>' + lines[index][5] + '</mark></p>';
        table_data += '<p><small>On Windows make sure to select More Choice --> Use a different account to input credentials</small></p>';
        table_data += '<h4>During the lab</h4>';
        table_data += '<p>When the password for IBMUSER is required, enter <mark>SYS1</mark>  (IBMUSER is a RACF identity)</p>';
        table_data += '<p>When the password for ibmdev is required, enter <mark>Passw0rd</mark> (ibmdev is for Gitlab login)</p>';
        table_data += '<p><strong>IMPORTANT: <br>Please DO NOT shutdown remote Windows system, just close the session or disconnect from the remote desktop. Otherwise you won&apos;t be able to reconnect.</strong></p>';
    }
    $('#lab').html(table_data);
}
