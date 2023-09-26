import React, { useEffect, useState } from "react";
import { DELETE, GET } from "../../api/products/route";
import Card from "../ui/card";
import AddProductModal from "../Products/AddProductModal";
import UpdateProductModal from "../Products/UpdateProductModal";
import { AiOutlineLoading } from "react-icons/ai";
import ProductFilter from "../Filters/ProductFilter";
import { useTranslation } from "react-i18next";

const Showroom = () => {
  const [t, i18n] = useTranslation();

  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState("newest");
  const [isLoading, setLoading] = useState(false);

  const openUpdateModal = (product: any) => {
    setSelectedProduct(product);
    setUpdateModalOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = () => {
    setModalOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddProduct = (productData: Product) => {
    closeModal();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await GET();
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await DELETE(id);

      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
        // Apply filtering and sorting to the updated products array
        applyFilterAndSort(products.filter((product) => product.id !== id));
      } else {
        console.error(`Error deleting product with ID ${id}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts: Product[]) => [...prevProducts, newProduct]);
    applyFilterAndSort([...products, newProduct]);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts((prevProducts: Product[]) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );

    // Update the filteredProducts array
    setFilteredProducts((prevFilteredProducts: Product[]) =>
      prevFilteredProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const applyFilterAndSort = (productsToFilter: Product[]) => {
    let filteredData = productsToFilter;
    if (sortOrder === "newest") {
      filteredData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortOrder === "oldest") {
      filteredData.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }

    setFilteredProducts(filteredData);
    setIsFiltering(true);
  };

  const handleSort = (order: string) => {
    setIsFiltering(true);
    const sortedProducts = [...filteredProducts];
    if (order === "newest") {
      sortedProducts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (order === "oldest") {
      sortedProducts.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }
    setFilteredProducts(sortedProducts);
    setSortOrder(order);
  };

  return (
    <>
      <div className="button-container">
        <button onClick={openModal} className="button-1">
          {t("registercar")}
        </button>
      </div>
      <ProductFilter
        products={products}
        onFilter={applyFilterAndSort}
        onSort={handleSort}
      />
      {isLoading && (
        <div
          style={{ paddingTop: "2rem", justifyContent: "center" }}
          className="container"
        >
          <AiOutlineLoading className="loading-icon" />
        </div>
      )}
      <div className="showroom-container">
        <div className="showroom-flex">
          {isFiltering
            ? filteredProducts.map((product: Product) => (
                <Card
                  key={product.id}
                  price={product.price}
                  brand={product.brand}
                  color={product.color}
                  date={product.date}
                  model={product.model}
                  image={product.image}
                  id={product.id}
                  onDelete={handleDelete}
                  onUpdate={() => openUpdateModal(product)}
                />
              ))
            : products.map((product: Product) => (
                <Card
                  key={product.id}
                  price={product.price}
                  brand={product.brand}
                  color={product.color}
                  date={product.date}
                  model={product.model}
                  image={product.image}
                  id={product.id}
                  onDelete={handleDelete}
                  onUpdate={() => openUpdateModal(product)}
                />
              ))}
        </div>
        {isModalOpen && (
          <div className="modal-overlay">
            <AddProductModal
              isOpen={isModalOpen}
              onClose={closeModal}
              onSubmit={handleAddProduct}
              addProduct={addProduct}
            />
          </div>
        )}
        <div>
          {isUpdateModalOpen && (
            <UpdateProductModal
              isOpen={isUpdateModalOpen}
              onClose={() => setUpdateModalOpen(false)}
              initialProductData={selectedProduct as Partial<Product>}
              onUpdate={(updatedProduct) => {
                const updatedProductWithId = updatedProduct as Product;
                handleUpdateProduct(updatedProductWithId);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Showroom;
