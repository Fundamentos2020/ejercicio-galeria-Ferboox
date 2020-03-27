document.querySelector('#generar-botones').addEventListener('submit',generarBotones);
let limit = 0;

function generarBotones(e)
{
    e.preventDefault();
    
    //Obtengo el número de páginas que me dio el usuario.
    
    const cantidad = document.getElementById("numero").value;
    limit = 100/cantidad;


    let botones = "";
    botones+= "<h3 class='text-center'>Páginas:</h3>";
    botones+= "<ul class='text-center' id='pag'>";

    for(let i = 1; i <= cantidad; i++)
    {
        botones+= "<li><button type = 'submit' id="+i+" onclick='obtenID(this)'>"+i+"</button></li>";
    }
    botones+= "</ul>";

    document.getElementById('paginacion').innerHTML = botones;
}

function obtenID(comp){
    
    let id = comp.id;

    const xhr = new XMLHttpRequest();

    let url="";
    url += "https://picsum.photos/v2/list?page=";

    url += id;

    url+= "&limit=";

    limit = Math.floor(limit);
    console.log(limit);

    url+= limit;

    

   xhr.open("GET",url,true);

    let n = 1;

    xhr.onload = function()
    {
        if (this.status == 200)
        {
            const imagenes = JSON.parse(this.responseText);
            
            //Generar el HTML
            let htmlImagenes = '<h2>Imagenes generadas</h2>';
           

            //Imprimir cada nombre

            imagenes.forEach(function(imagen){
                    htmlImagenes += `
                            <div class = 'col-m-2 card'>
                                <img class = 'img-fluid' src=${imagen.download_url}>
                            </div>
                           
                    `;
            });

            document.getElementById('contenido').innerHTML = htmlImagenes;
        }
    }

    //Envía el mensaje
    xhr.send();
}
