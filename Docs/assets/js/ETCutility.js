
    //메일 스크립트
        function AutoHyphen(target) {
            target.value = target.value
                .replace(/[^0-9]/g, '')
                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
        }
        function sendEmailToCompany() {

            if ($("#from_address").val() == "" && $("#from_number").val() == "") {
                $("#send_fail_address").show(350);
                setTimeout(function () { $("#send_fail_address").hide(350); }, 3000);

            } else {



                emailjs.init("yP5NW88G36pmDITtp");
                emailjs.send("service_aichemist", "template_n0zai2h", {
                    from_company: $("#from_company").val(),
                    from_name: $("#from_name").val(),
                    from_address: $("#from_address").val(),
                    from_number: $("#from_number").val(),
                    mail_content: $("#mail_content").val()
                }).then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    $("#send_success").show(350);

                    setTimeout(function () { $("#send_success").hide(350); }, 3000);
                }, function (error) {
                    console.log('FAILED...', error);
                    $("#send_fail").show(350);

                    setTimeout(function () { $("#send_fail").hide(350); }, 3000);
                });
            }
        }

        // 카카오 지도
       /* var container = document.getElementById('map'); 
        var options = { 
            center: new kakao.maps.LatLng(37.472789366186866, 126.88328863459775), 
            level: 3 
        };

        var map = new kakao.maps.Map(container, options); 

        var markerPosition = new kakao.maps.LatLng(37.472789366186866, 126.88328863459775);

        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);*/