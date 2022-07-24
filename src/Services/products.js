const products = [
  {
    id: 1,
    category: "hombre",
    title: "Campera",
    price: 6800,
    description: "Campera capucha Hoddie",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_970892-MLA31077285725_062019-W.webp",
    stock: 20,
  },
  {
    id: 2,
    category: "hombre",
    title: "Zapatillas Topper",
    price: 11899,
    description: "Topper Gordor II Hombre Adultos",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_875526-MLA49201325445_022022-W.webp",
    stock: 10,
  },
  {
    id: 3,
    category: "mujer",
    title: "Jeans",
    price: 6500,
    description: "Jeans Mujer Elastizado Tiro Medio Alto",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_879978-MLA49630309704_042022-W.webp",
    stock: 30,
  },
  {
    id: 4,
    category: "deportivo",
    title: "Remera Deportiva",
    price: 6400,
    description: "Remera Deportiva Mujer GDO Fit Running Ciclista",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_762111-MLA40003691898_122019-W.webp",
    stock: 17,
  },
  {
    id: 5,
    category: "deportivo",
    title: "Zapatillas Adidas",
    price: 16900,
    description: "Adidas Galaxy 5 Hombre Adultos",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_801371-MLA49850442171_052022-W.webp",
    stock: 20,
  },
  {
    id: 6,
    category: "hombre",
    title: "Jogging",
    price: 8690,
    description: "Jogging Hombre Sport 154 - Con Cierre - Ghy Polo Club",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_975859-MLA46489359055_062021-W.webp",
    stock: 60,
  },
];

const getData = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("Ocurrió un error! no pudimos cargar los productos");
    }
  });
};

export default getData;
