import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineLoading } from 'react-icons/ai';

interface UpdateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (productData: Partial<Product>) => void;
  initialProductData: Partial<Product>;
}

function UpdateProductModal({
  isOpen,
  onClose,
  onUpdate,
  initialProductData,
}: UpdateProductModalProps) {
  const [updatedProductData, setUpdatedProductData] = useState<Partial<Product>>(
    initialProductData
  );
  
  const [isLoading, setIsLoading] = useState(false)
  const [updateNotification, setUpdateNotification] = useState("")
  const [t, i18n] = useTranslation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProductData({ ...updatedProductData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!updatedProductData.brand || !updatedProductData.image || !updatedProductData.price || !updatedProductData.color || !updatedProductData.model) {

        
        setUpdateNotification("Missing required information");
        setTimeout(() => {
          setUpdateNotification("");
        }, 3000);
        return;
      }
  
      setIsLoading(true)
      const response = await fetch(`http://localhost:3004/products/${initialProductData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProductData),
      });

      if (response.ok) {
        const updatedProduct: Partial<Product> = await response.json();
        onUpdate(updatedProduct);
        onClose(); // Close the modal
      } else {
        console.error('Error updating product.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="details-modal">
      <div className="details-modal-close">
        <button
          style={{ background: "transparent", outline: "none", border: "none", cursor: "pointer" }}
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black" />
          </svg>
        </button>
      </div>
      <div className='details-modal-title'>
        <h2>{t("modalupdate")}</h2>
      </div>
      <div className='details-modal-content'>
        <form onSubmit={handleSubmit}>
          <label>
          {t("modalbrand")}
            <input
              type="text"
              name="brand"
              value={updatedProductData.brand}
              onChange={handleChange}
            />
          </label>
          <label>
            Model
            <input
              type="text"
              name="model"
              value={updatedProductData.model}
              onChange={handleChange}
            />
          </label>
          <label>
          {t("modalprice")}
            <input
              type="text"
              name="price"
              value={updatedProductData.price}
              onChange={handleChange}
            />
          </label>
          <label>
          {t("modalcolor")}
            <input
              type="text"
              name="color"
              value={updatedProductData.color}
              onChange={handleChange}
            />
          </label>
          <label>
          {t("modalimage")}
            <input
              type="text"
              name="image"
              value={updatedProductData.image}
              onChange={handleChange}
            />
          </label>
          <div style={{ paddingTop: "20px", flexDirection: "row", display: "flex", gap: "2rem" }}>
            <button className='button-1'type="submit">{t("modalupdatebutton")}</button>
            <p>{updateNotification}</p>
            {isLoading && (
          <AiOutlineLoading style={{fontSize: "2rem", color: "green"}} className="loading-icon" />
      )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProductModal;
