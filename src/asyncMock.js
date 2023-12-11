const productos = [
    {
      id: '1',
      name: "Remera de manga corta",
      price: 1000,
      category: "remeras",
      img: '/src/components/Item/assets/camiseta.webp',
      description: "asdasdasd asdasd asdasdasd asdasd asdasd adsasd asdasd asdasdasd asdasd asdasdasd asdasd asdasd adsasd asdasd",
    },
    {
      id:'2',
      name: "Pantalon cargo",
      price: 1020,
      category: "pantalones",
      img: "/src/components/Item/assets/pantaloncargo.webp",
      description: "asdasdasd asdasd asdasd asdasdasd asdasd asdasdasd asdasd asdasd adsasd asdasd",
    },
    {
      id: '3',
      name: "Campera Trucker",
      price: 1030,
      category: "camperas",
      img: "/src/components/Item/assets/camperatrucker.webp",
      description: "asdasdasd asdasd asdasd asdasdasd asdasd asdasdasd asdasd asdasd adsasd asdasd",
    },
    {
      id: '4',
      name: "Zapato casual en cuero con cordon",
      price: 1400,
      category: "calzado",
      img: "/src/components/Item/assets/zapatocuero.webp",
      description: "asdasdasd asdasd asdasd asdasdasd asdasd asdasdasd asdasd asdasd adsasd asdasd",
    },
  ];


  export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 500);
    });
  };

  export const getProductosByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.filter((prod) => prod.category === categoryId ));
      }, 500);
    });
  };



  export const getProductoById  = (productoId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(productos.find((prod) => prod.id === productoId))  
        }, 500
        );
    })
  }

  