import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux/Actions";
import { useCatContext } from "../CatContext";

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useCatContext();

  const dispatch = useDispatch();

  const handleAddCart = (item) => {
    console.log(item);
    dispatch(addItem({ ...item, quantity: 1 }));
  };

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      setProducts(data);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  const filteredProducts = category
    ? products.filter((p) => p.category.name === category)
    : products;

  return (
    <div className="py-4 flex flex-wrap space-x-4 px-4 space-y-2">
      {isLoading ? (
        <p>Loading Products</p>
      ) : (
        <>
          {filteredProducts.map((p) => (
            <div
              className="border-2 border-slate-100 px-2 py-2 flex flex-col text-sm space-y-1 bg-gray-200 w-[230px] justify-evenly"
              key={p.id}
            >
              <img
                src={p.images[0]}
                alt="ProductImage"
                className="h-[200px] w-[200px] "
              />
              <h4 className="font-Merriweather text-center">
                {p.title.slice(0, 40)}
              </h4>
              <h6 className="text-center">Category: {p.category.name}</h6>
              <p className="text-center font-semibold">
                Rs. {Number(p.price) * 90}
              </p>
              <button
                className="bg-gray-500 text-white mx-12 py-2 font-semibold rounded-xl"
                onClick={() =>
                  handleAddCart({
                    id: p.id,
                    title: p.title,
                    imgsrc: p.images[0],
                    desc: p.description, // Make sure this property exists
                    price: Number(p.price) * 90,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductsComponent;
