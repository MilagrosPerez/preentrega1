
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
const ingreso = document.querySelector("#formulario");
const usuarioIngreso = document.querySelector("#usuario")
const passIngreso = document.querySelector("#pass")

function iniciarSesion(usuarios) {
  let usuarioEncontrado = usuarios.find((usuario) => {
  return usuario.nombre == usuarioIngreso.value && usuario.pass == passIngreso.value
});
  if (usuarioEncontrado){
    location.href = "./pages/productos.html"
  }else {
    document.querySelector("#msg").innerHTML = "Usuario no encontrado.<br>Porfavor registrese."
  }
}


ingreso.addEventListener('submit', (e)=>{
  e.preventDefault()
  iniciarSesion(usuarios)
});