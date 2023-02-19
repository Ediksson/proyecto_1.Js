class productManager {
    
    constructor (){
        this.products = [];
    }
    getproducts = () => {// el getproduct es para ver la lista del array products.
        console.log(this.products);
        return;
      };

    addProduct = () => {
        const product = {

            id: this.products.length + 1,
            title: "producto prueba",
            descripcion: "Este es un producto prueba",
            price: 200,
            thumbnail: "sin imagen",
            code:"abc123",
            stock:25,

        };
        const productoRepetido = this.products.find((product) => product.code === product.code);
        if(!productoRepetido){

            this.products.push(product);
        }else{
            console.log("Sorry I cant add your product because the code is repeated"); // este agrega a la lista o array el producto descargado.

        }
    

    };

    getProductById = (productId) => {// funcion que permite verificar si hay un id para el producto.
        const buscarIdIndex = this.products.findIndex((product) => product.id === productId); // devuelve siempre 0 si es positivo y -1 si es negativo
        const mostrarProducts = this.products.find((product) => product.id === productId);// devuelve el producto que coincida con el id.

        if (buscarIdIndex === -1) {

            console.log(`not found`);
            return;

        }else {
            console.log(mostrarProducts);
        }

    };

}
const Manager = new productManager();
Manager.addProduct();
Manager.getproducts();
Manager.addProduct();
Manager.getProductById(1);
Manager.getProductById(2);






