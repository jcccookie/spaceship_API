document.getElementById('getSpaceship').addEventListener('click', getSpaceship);

        async function getSpaceship()  {
            let randomNum = Math.floor((Math.random() * 10) + 1);
            try{
                const resp = await fetch(`https://swapi.co/api/starships/${randomNum}/`);
                const data = await resp.json();

                let output = '<h2 class="mt-10 mb-4">This is your spaceship!</h2>';
                output += `
                    <ul class="list-group" mb-3>
                        <li class="list-group-item">Name: ${data.name}</li>
                        <li class="list-group-item">Model: ${data.model}</li>
                        <li class="list-group-item">Manufacturer: ${data.manufacturer}</li>
                        <li class="list-group-item">Speed: ${data.max_atmosphere_speed}</li>
                        <li class="list-group-item">Passengers: ${data.passengers}</li>
                        <li class="list-group-item">Type: ${data.starship_class}</li>
                    </ul>
                    `;
                document.getElementById('output').innerHTML = output;
            //This doesn't catch 404 error at all
            }catch(err){
                console.log("ooooooooops an error occurred!!!", err);
            }
        }