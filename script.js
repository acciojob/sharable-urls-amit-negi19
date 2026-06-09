  const form = document.getElementById("form");
        const url = document.getElementById("url");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let year = document.getElementById("year").value;

            let params = [];

            if (name !== "") {
                params.push(`name=${name}`);
            }

            if (year !== "") {
                params.push(`year=${year}`);
            }

            let result = "https://localhost:8080/";

            if (params.length > 0) {
                result += "?" + params.join("&");
            }

            url.textContent = result;
        });