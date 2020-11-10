    <script>
        var request = new XMLHttpRequest();    
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                document.getElementById("result").innerHTML = request.responseText;
            }
        };
        var token = document.getElementsByTagName("token").innerHTML;
        request.open("GET", "widgets/experience_auth?destination_url=http://alaa.blog, true);
        request.send();
		alert('Your token is  '+token);

    </script>
