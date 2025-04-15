const misProductos = [
  { id: "1", nombre: 'Series', stock: 5, precio: 25000, img: '/img/5854b3_f78c4656ab5f41e7b00904581437032d~mv2.webp', idCat: "novelas" },
  { id: "2", nombre: 'Infantiles', stock: 5, precio: 25000, img: '/img/6-17.webp', idCat: "cine" },
  { id: "3", nombre: 'Cine', stock: 5, precio: 25000, img: '/img/971736-mla31022307958_062019-o-7eb874acb7f88d7a0015739204482557-640-0.jpg', idCat: "series" },
  { id: "4", nombre: 'Dibujitos', stock: 5, precio: 25000, img: '/public/img/bob-asombrado31-ef3a3ec476ade9750a16001158321904-1024-1024.jpg', idCat: "dibujitos" }
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 100);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find(item => item.id === id);
      resolve(producto);
    }, 100);
  });
};

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
      resolve(productosCategoria);
    }, 100);
  });
};
