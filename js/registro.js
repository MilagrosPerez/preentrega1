
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
    const registro = document.querySelector("#registro")
    const inputNombreReg = document.querySelector("#usuarioreg")
    const inputPassReg = document.querySelector("#passreg")
    const inputEmailReg = document.querySelector("#emailreg")
    
    function Usuario(id, nombre, email, pass)
    {
      this.id = id;
      this.nombre = nombre;
      this.pass = pass;
      this.email = email;
    };
    
    function proxId(arr){
      let proxId = 1;
      for (const item of arr) {
        if (item.id > proxId) {
          proxId = item.id;
        }
      }
      return proxId+1;
    };
    
    registro.addEventListener('submit', (e) => {
      e.preventDefault();
      const newUser = new Usuario(proxId(usuarios),inputNombreReg.value, inputEmailReg.value, inputPassReg.value);
      usuarios.push(newUser);
      localStorage.setItem('usuarios',JSON.stringify(usuarios));
      registro.reset()
      location.href = "../index.html"
    });
    
    
    
    