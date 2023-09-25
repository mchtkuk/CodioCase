"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface ProductFilterProps {
  products: Product[];
  onFilter: (filteredProducts: Product[]) => void;
  onSort: (sortOrder: string) => void;
}

const ProductFilter = ({ products, onFilter, onSort }: ProductFilterProps) => {
  const [filterOptions, setFilterOptions] = useState({
    minPrice: "",
    maxPrice: "",
    startDate: "",
    endDate: "",
  });
  const [t, i18n] = useTranslation();
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    setSortOrder('default');
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFilterOptions({ ...filterOptions, [name]: value });
  };

  const handleSortChange = (e: any) => {
    const { value } = e.target;
    setSortOrder(value);
    onSort(value);
  };

  const handleFilter = () => {
    // Apply the filter logic based on selected options
    const filteredProducts = products.filter((product: Product) => {
      const meetsPriceCriteria =
        (!filterOptions.minPrice ||
          parseFloat(product.price) >= parseFloat(filterOptions.minPrice)) &&
        (!filterOptions.maxPrice ||
          parseFloat(product.price) <= parseFloat(filterOptions.maxPrice));

      const meetsDateCriteria =
        (!filterOptions.startDate ||
          new Date(product.date) >= new Date(filterOptions.startDate)) &&
        (!filterOptions.endDate ||
          new Date(product.date) <= new Date(filterOptions.endDate));

      return meetsPriceCriteria && meetsDateCriteria;
    });

    onFilter(filteredProducts);
  };

  return (
    <div className="container">
      <div className="product-filter">
        <h3>{t("filtertitle")}</h3>
        <label>
          <input
            placeholder={t("filterminprice")}
            type="number"
            name="minPrice"
            value={filterOptions.minPrice}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            placeholder={t("filtermaxprice")}
            type="number"
            name="maxPrice"
            value={filterOptions.maxPrice}
            onChange={handleChange}
          />
        </label>
        <button className="button-1" onClick={handleFilter}>
          {t("filterapply")}
        </button>
        <div>
          <select
            name="sortOrder"
            value={sortOrder}
            onChange={handleSortChange}
            defaultValue="default"
          >
            <option value="default">{t("filtersortby")}</option>
            <option value="newest">{t("filternewest")}</option>
            <option value="oldest">{t("filteroldest")}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
