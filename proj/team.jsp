<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="Keywords"
        content="Government College of Technology, GCT, Coimbatore, SJC, Student Journalist Council, SJCGCT, Aperture, Humans of GCT, ABC Channel, GCT News, GCT Updates">
    <meta name="Description"
        content="The official Student media body of Government College of Technology, Coimbatore. We cover news apropos of the campus. We also publish the official student newsletter of the campus, Aperture.">

    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.min.css">
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick-theme.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">


    <link rel="stylesheet" href="assets/css/style.css">



    <link rel="icon" href="assets/images/icon.png">


    <title>Student Journalist Council - GCT</title>

</head>

<body>
    <%@ include file="header.jsp" %>
    <%@ include file="navbar.jsp" %>

    <div class="container mt-5">
    <!--tab bar-->
        <div id="year-tab">
            <ul class="nav nav-tabs">
                <li class="nav-item" onclick="y2019_2020()" id="2019_2020">
                    <a class="nav-link active" href="#" data-model="1920">2019-20</a>
                </li>
                <li class="nav-item" onclick="y2018_2019()" id="2018_2019">
                    <a class="nav-link" href="#" data-model="1819">2018-19</a>
                </li>
                <li class="nav-item" onclick="y2017_2018()" id="2017_2018">
                    <a class="nav-link" href="#" data-model="1718">2017-18</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-model="1617">2016-17</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-model="1516">2015-16</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-model="1415">2014-15</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-model="1314">2013-14</a>
                </li>
            </ul>
        </div>




        <div class="wrapper">
        <div id="tab"></div>
        </div>

    </div>



    <%@ include file="footer.jsp" %>


    <script>
         window.onload = function() {
            $('#tab').load('assets/htmls/2019_2020.html');
         };
         function y2018_2019()
         {
          $('#tab').load('assets/htmls/2018_2019.html');
          $(".nav-link").removeClass("active");
          $('#2018_2019').addClass('active');
         }
         function y2017_2018()
         {
          $('#tab').load('assets/htmls/2017_2018.html');
          $(".nav-link").removeClass("active");
          $('#2017_2018').addClass('active');
         }
         function y2019_2020()
         {
          $('#tab').load('assets/htmls/2019_2020.html');
          $(".nav-link").removeClass("active");
          $('#2019_2020').addClass('active');
         }

      </script>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    


</body>

</html>