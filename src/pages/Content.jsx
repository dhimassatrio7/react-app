import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import { Card } from "flowbite-react";

const Content = () => {
  const [products, setProducts] = useState([]); // State untuk menyimpan data produk
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/products"); // Request ke /products
      setProducts(response.data); // Simpan data produk ke state
      setLoading(false); // Set loading ke false setelah data diterima
    } catch (error) {
      setError(error); // Simpan error jika ada
      setLoading(false); // Set loading ke false meskipun ada error
    }
  };

  useEffect(() => {
    fetchData(); // Panggil fungsi fetchData saat komponen dimuat
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    ); // Menampilkan loading saat data sedang dimuat
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-500">
          Error fetching data: {error.message}
        </div>
      </div>
    ); // Menampilkan error jika ada
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Product List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              imgAlt={product.title}
              imgSrc={product.image} // Gambar produk
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                {product.title} {/* Judul produk */}
              </h5>
              <p className="font-normal text-gray-700 line-clamp-2">
                {product.description} {/* Deskripsi produk */}
              </p>
              <p className="font-semibold text-gray-800 mt-4">
                Price: ${product.price} {/* Harga produk */}
              </p>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Content;
