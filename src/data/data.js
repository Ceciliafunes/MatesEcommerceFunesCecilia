// LISTA DE PRODUCTOS

const productos = [
    {
        id: 1,
        nombre: "mate imperial",
        descripcion: "mate imperial premium de calabaza seleccionada con virola de alpaca",
        stock: 8,
        categoria: "mates",
        imagen: "",
        precio: 27000
    },

    {
        id: 2,
        nombre: "mate camionero",
        descripcion: "camionero de calabaza, forrado en cuero con virola de acero inoxidable",
        stock: 3,
        categoria: "mates",
        imagen: "",
        precio: 17000
    },

    {
        id: 3,
        nombre: "mate torpedo",
        descripcion: "mate torpedo premium, de calabaza seleccionada con virola de alpaca cincelada",
        stock: 5,
        categoria: "mates",
        imagen: "",
        precio: 24900
    },

    {
        id: 4,
        nombre: "mate camionero de algarrobo",
        descripcion: "camionero de algarrobo con virola de acero inoxidable lisa",
        stock: 8,
        categoria: "mates",
        imagen: "",
        precio: 10500
    },

    {
        id: 5,
        nombre: "termo media manija",
        descripcion: "termo de acero inoxidable media manija 1L",
        stock: 18,
        categoria: "termos y accesorios",
        imagen: "",
        precio: 19900
    },

    {
        id: 6,
        nombre: "bombilla pico loro",
        descripcion: "bombilla pico loro de acero inoxidable",
        stock: 20,
        categoria: "termos y accesorios",
        imagen: "",
        precio: 5000
    },

    {
        id: 7,
        nombre: "canasta 100% cuero",
        descripcion: "canasta matera 100% cuero legítimo",
        stock: 2,
        categoria: "termos y accesorios",
        imagen: "",
        precio: 27000
    },

    {
        id: 8,
        nombre: "canasta simil",
        descripcion: "canasta matera simil cuero negra",
        stock: 1,
        categoria: "termos y accesorios",
        imagen: "",
        precio: 11000
    },

    {
        id: 9,
        nombre: "combo imperial completo",
        descripcion: "incluye: mate imperial, bombilla, termo, yerbero y canasta simil",
        stock: 2,
        categoria: "combos",
        imagen: "",
        precio: 51000
    },

    {
        id: 10,
        nombre: "combo imperial y termo",
        descripcion: "mate imperial, bombilla y termo media manija",
        stock: 4,
        categoria: "combos",
        imagen: "",
        precio: 41000
    },

    {
        id: 11,
        nombre: "combo torpedo y termo",
        descripcion: "incluye: mate torpedo premium, bombilla y termo media manija",
        stock: 6,
        categoria: "combos",
        imagen: "",
        precio: 38000
    },



]

const obtenerProductos = () => {
    return new Promise ( (resolve, reject) => {

// retraso de red de 2 segundos

    setTimeout(()=>{
        resolve(productos)
    }, 2000)
    })
}



export { obtenerProductos }