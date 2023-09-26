import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (productData: Product) => void;
  addProduct: (newProduct: Product) => void; 
}

function AddProductModal({ isOpen, onClose, onSubmit, addProduct }: AddProductModalProps) {
  const [isNotification, setNotification] = useState("")
  const [productData, setProductData] = useState<Product>({
    id: 0,
    date: "",
    image: "",
    brand: "",
    model: "",
    price: "",
    color: "",
  });
  const [t, i18n] = useTranslation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    try {
      if (!productData.brand || !productData.image || !productData.price || !productData.color || !productData.model) {
      
        setNotification(() => t("missinginformation"));
        setTimeout(() => {
          setNotification("");
        }, 3000);
        return;
      }
  
  
      const request = new Request("/api/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
  
      const response = await fetch(request);
  
      if (response.ok) {
        const newProduct: Product = await response.json();
        setNotification("Product Added Successfully");
  

        setProductData({
          id: 0,
          date: "",
          image: "",
          brand: "",
          model: "",
          price: "",
          color: "",
        });
  

        setTimeout(() => {
          setNotification("");
        }, 3000); 
        onSubmit(newProduct);

        // Call the addProduct function from the parent component
        addProduct(newProduct);

      } else {
        console.error("Error adding product.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
      <div className="details-modal">
        <div className="details-modal-close">
        <button style={{background: "transparent", outline: "none", border: "none", cursor: "pointer"}} onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path  d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black" />
        </svg>
          </button>
      </div>
        <div className='details-modal-title'>
        <h2>{t("addcartoshowroom")}</h2>
        </div>
        <div className='details-modal-content'>
      <form onSubmit={handleSubmit}>
        <label>
        {t("modalbrand")}
          <input
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
          />
        </label>
        <label>
          Model
          <input
            type="text"
            name="model"
            value={productData.model}
            onChange={handleChange}
          />
        </label>
        <label>
          {t("modalprice")}
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
        </label>
        <label>
        {t("modalcolor")}
          <input
            type="text"
            name="color"
            value={productData.color}
            onChange={handleChange}
          />
        </label>
        <label>
        {t("modalimage")}
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleChange}
          />
        </label>
        <div style={{paddingTop: "20px", flexDirection: "column"}}>
        <button className='button-1' type="submit">{t("modalregister")}</button>
        <div>
        <p style={{paddingTop: "10px"}}>{isNotification}</p>
        </div>
        </div>
      </form>
        </div>
      </div>
  );
}

export default AddProductModal;
