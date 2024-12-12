import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Để lấy id từ URL
import styles from "./LoveBraceletPage.module.scss";
import CardProduct from "~/components/Cards/CardProduct";
import Button from "~/components/Button";
import CountdownTimer from "~/components/CountdownTimer";
import { fetchProductByCategory } from "~/apis";

const cx = classNames.bind(styles);

function LoveBraceletPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("Vòng chủ đề tình yêu");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Gọi API lấy tất cả sản phẩm
        const data = await fetchProductByCategory();

        const filteredProducts = data.filter(
          (product) => product.SupCategoryName === "Vòng chủ đề tình yêu"
        );

        if (filteredProducts.length > 0) {
          setCategoryName(filteredProducts[0].SupCategoryName);
        }

        const updatedProducts = filteredProducts.map((product) => ({
          ...product,
          ReducedPrice: parseInt(product.final_price),
          originalPrice: parseInt(product.original_price),
          discount: product.discount_percentage || 0,
        }));

        setProducts(updatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Chạy lần đầu tiên khi component mount

  return (
    <div className={cx("wrapper", "container")}>
      <div className={cx("header")}>
        <div className={cx("title")}>
          <p>
            Sản phẩm: <span>{categoryName}</span>{" "}
            {/* Hiển thị tên category cần lọc */}
          </p>
        </div>
      </div>

      <div className={cx("product-list")}>
        {loading ? (
          <p>Loading...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <CardProduct
              key={product.product_id}
              id={product.product_id}
              FirstImage={
                product.FirstImage ? product.FirstImage : "placeholder.jpg"
              }
              SupCategoryName={product.SupCategoryName}
              productName={product.productName}
              originalPrice={product.originalPrice}
              reducedPrice={product.ReducedPrice}
              discount={product.discount}
              isNew={product.isNew}
            />
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default LoveBraceletPage;
