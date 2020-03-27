document.querySelector('#generar-botones').addEventListener('submit',generarBotones);

function generarBotones(e)
{
    e.preventDefault();
    
    //Obtengo el número de páginas que me dio el usuario.
    
    const cantidad = document.getElementById("numero").value;

    let botones = "";
    botones+= "<h3>Páginas:</h3>";
    botones+= "<ul class='text-center' id='pag'>";

    for(let i = 1; i <= cantidad; i++)
    {
        botones+= "<li><button>"+i+"</button></li>";
    }
    botones+= "</ul>";

    document.getElementById('paginacion').innerHTML = botones;
}