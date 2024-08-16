
        // let data = fetch("https://official-joke-api.appspot.com/jokes/random");
        // console.log(data);
        let div = document.getElementById("div");
        let btn = document.getElementById("btn");

        function updateUI(data) {

            div.innerHTML = "";

            let innerDiv = document.createElement("p");
            let innerDiv2 = document.createElement("p")
            innerDiv.innerHTML = `Setup : ${data.setup}`;
            innerDiv2.innerHTML = `Punchline : ${data.punchline}`;

            div.appendChild(innerDiv);
            div.appendChild(innerDiv2);

        }

        async function fetchJoke() {
            let response = await fetch("https://official-joke-api.appspot.com/jokes/random");
            let data = await response.json();
            console.log(data);
            updateUI(data);
        }
        // fetchJoke();

        btn.addEventListener("click", function () {
            let pending = document.createElement("p");
            pending.innerHTML = "Joke Loading....";
            div.appendChild(pending);
            setTimeout(() => {
                fetchJoke();
                // pending.style.display = "none";
            }, 3000);

        });
