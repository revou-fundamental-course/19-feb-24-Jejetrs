var slideIndex = 0;
        showDivs();

        function plusDivs(n) {
            showDivs((slideIndex += n));
        }

        function showDivs() {
            var i;
            var imgList = document.getElementsByClassName("img-slideshow");

            if (slideIndex >= imgList.length) slideIndex = 0;
            else if (slideIndex < 0) slideIndex = imgList.length - 1;

            for (i = 0; i < imgList.length; i++) {
                imgList[i].style.display = "none";
            }
            imgList[slideIndex].style.display = "block";

            setTimeout(plusDivs, 2000, 1);
        }

        function validateform() {
            let name = document.forms["message-form"]["full-name"].value;
            let dob = document.forms["message-form"]["birth-date"].value;
            let gender = document.querySelector('input[name="gender"]:checked');
            let message = document.forms["message-form"]["message"].value;

            var welcomeMessage = document.getElementById('nama');
            welcomeMessage.textContent = name;

            var displayValues = document.getElementById('displayValues');
            displayValues.innerHTML = "<h2>Keterangan</h2><p>Nama : " + name + "</p><p>Tanggal Lahir : " + dob + "</p><p>Jenis Kelamin : " + (gender ? gender.value : "Not selected") + "</p><p>Pesan : " + message + "</p>";

            return false;
        }

        var name = prompt("Masukkan nama kamu:");
        document.getElementById("nama").innerText = name;