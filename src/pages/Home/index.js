import classNames from "classnames/bind";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import style from "./Home.module.scss";
import images from "~/assets/images";
import icons from "~/assets/icons";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import BackTop from "antd/es/float-button/BackTop";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function Home() {
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
  });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/productall");
  };

  const handleClickProductOfSubCategory = () => {
    navigate("/product");
  };

  return (
    <div className={cx("wrapper", "container")}>
      <div className={cx("banner-section")}>
        <Slider {...settings} className={cx("banner")}>
          <div className={cx("img-banner")}>
            <img src={images.banner1} alt="Banner 1" />
          </div>
          <div className={cx("img-banner")}>
            <img src={images.banner2} alt="Banner 2" />
          </div>
          <div className={cx("img-banner")}>
            <img src={images.banner3} alt="Banner 3" />
          </div>
        </Slider>
      </div>

      <div className={cx("form-action")}>
        <div className={cx("form-option")}>
          <img src={icons.newProduct} alt="new product" />
          <span>HÀNG MỚI VỀ</span>
        </div>
        <div className={cx("form-option")}>
          <img src={icons.hotSale} alt="new product" />
          <span>BÁN CHẠY</span>
        </div>
        <div className={cx("form-option")}>
          <img src={icons.precent} alt="new product" />
          <span>GIẢM GIÁ</span>
        </div>
        <div className={cx("form-option")}>
          <img src={icons.orderSearch} alt="new product" />
          <span>THEO DÕI ĐƠN HÀNG</span>
        </div>
      </div>
      <hr></hr>
      {/* danh mục chính */}
      <h1 className={cx("text-center", "title_category")}>DANH MỤC CHÍNH</h1>
      <div className={cx("slide__category-main")}>
        <div className={cx("card__category")}>
          <img
            src="https://product.hstatic.net/200000103143/product/pngtrpnt_398425c01_rgb_d1daa2b8511841f9817519953df1144e_aefd79f2ec3748499015da0a10b6c986_master.png"
            alt="dây chuyền"
          />
          <div className={cx("card__category-footer")}>
            <h3>Dây chuyền</h3>
            <button>Xem ngay</button>
          </div>
        </div>
        <div className={cx("card__category")}>
          <img
            src="https://product.hstatic.net/200000103143/product/pngtrpnt_193215c01_rgb_49f69ddb4f9444bba7b4be62b9fd73d2_073a5df9a5f042deaadcf9beb74f8b49_master.png"
            alt="nhẫn"
          />
          <div className={cx("card__category-footer")}>
            <h3>Nhẫn</h3>
            <button>Xem ngay</button>
          </div>
        </div>
        <div className={cx("card__category")}>
          <img
            src="https://file.hstatic.net/200000103143/file/pngtrpnt_593584c01_rgb__1_.png"
            alt="vòng tay"
          />
          <div className={cx("card__category-footer")}>
            <h3>Vòng tay</h3>
            <button>Xem ngay</button>
          </div>
        </div>
        <div className={cx("card__category")}>
          <img
            src="https://product.hstatic.net/200000103143/product/pngtrpnt_293543c01_rgb_1464171da47c42e0b6d9e61d20ad4971_grande.png"
            alt="hoa tai"
          />
          <div className={cx("card__category-footer")}>
            <h3>Hoa tai</h3>
            <button>Xem ngay</button>
          </div>
        </div>
      </div>
      <hr></hr>

      {/* chủ đề tình yêu */}
      <h1 className={cx("text-center", "title__heart-collect")}>
        <FontAwesomeIcon icon={faHeart} /> TRANG SỨC CHỦ ĐỀ TÌNH YÊU{" "}
        <FontAwesomeIcon icon={faHeart} />
      </h1>
      <div className={cx("row")}>
        <div className={cx("col-md-6")}>
          <div className={cx("box__love-theme")}>
            <img
              src="https://product.hstatic.net/200000103143/product/nt_582731c00_abc123_model_ecom_02_rgb_c0f3181d7084462589a488a9dd4eaa8d_787c4636ee91419ebd17cee965062c10_master.png"
              alt="Vòng tay chủ đề tình yêu"
            />
            <div className={cx("overlay")}></div>
            <div className={cx("love__theme-footer")}>
              <h4>Vòng tay chủ đề tình yêu</h4>
            </div>
            <div className={cx("love__theme-button")}>
              <button>Xem thêm</button>
            </div>
          </div>
        </div>
        <div className={cx("col-md-6")}>
          <div className={cx("col-md-12")}>
            <div className={cx("box__love-theme-top")}>
              <img
                src="https://product.hstatic.net/200000103143/product/pngtrpnt_q224_d_pdp_model_single_89_1x1_rgb_aa4e2918e20d4cdd8bd264240c0df6c5_master.png"
                alt="Dây chuyền chủ đề tình yêu"
              />
              <div className={cx("overlay")}></div>
              <div className={cx("love__theme-footer")}>
                <h4>Dây chuyền chủ đề tình yêu</h4>
              </div>
              <div className={cx("love__theme-button")}>
                <button>Xem thêm</button>
              </div>
            </div>
          </div>
          <div className={cx("col-md-12")}>
            <div className={cx("box__love-theme-top")}>
              <img
                src="https://product.hstatic.net/200000103143/product/nt_192491c01_abc123_model_ecom_01_rgb_048bfce716704c7990f9d7447152efdf_9de1b935bba44fccb49fbdb67585b78a_master.png"
                alt="Nhẫn chủ đề tình yêu"
              />
              <div className={cx("overlay")}></div>
              <div className={cx("love__theme-footer")}>
                <h4>Nhẫn chủ đề tình yêu</h4>
              </div>
              <div className={cx("love__theme-button")}>
                <button>Xem thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>
      {/* giới thiệu pandora */}
      <div className={cx("row", 'mt-4')}>
        <div className={cx("box__about-pandora")}>
          <div className={cx("col-md-8", "about__pandora-content")}>
            <h1>Khám giá PANDORA</h1>
            <p>
              Hãy để thế giới lắng nghe câu chuyện của bạn và thể hiện cá tính
              riêng cùng những thiết kế trang sức tuyệt mỹ từ thương hiệu
              Pandora.
            </p>
            <p>
              Thành lập từ năm 1982 tại Copenhagen (Đan Mạch), Pandora đã thiết
              kế nên những món trang sức mang giá trị thẩm mỹ tinh tế, được hoàn
              thiện thủ công từ chất liệu cao cấp để truyền cảm hứng cho phái
              đẹp tự tin thể hiện chính mình một cách sáng tạo.
            </p>
            <p>
              Những người thợ kim hoàn lành nghề đã chế tác trên những chất liệu
              độc đáo, được khai thác có trách nhiệm với môi trường giúp tạo nên
              tuyệt tác trang sức không chỉ chứa đựng tâm huyết của người kiến
              tạo mà còn mang ý nghĩa độc đáo từ câu chuyện rất riêng của mỗi cá
              nhân người sử dụng. Tính bền vững là cốt lõi trong hoạt động kinh
              doanh của Pandora. Chúng tôi cam kết giảm thiểu tác động đến môi
              trường và hướng tới mục tiêu trở thành doanh nghiệp carbon trung
              tính vào năm 2025.
            </p>
          </div>

          <div className={cx("col-md-4", "about__pandora")}>
            <img src="https://file.hstatic.net/200000103143/file/desktop_5ab6c87f2588449d81ff77bf7c8123ff.jpg" />
          </div>
        </div>
      </div>

      <section>
        <div className={cx("wrapper-gift")}>
          <p className={cx("Title-gift")}> QUÀ TẶNG DOANH NGHIỆP </p>
          <p className={cx("content-gift")}>
            Chúng tôi cung cấp quà tặng cao cấp, sáng tạo, giúp doanh nghiệp thể
            hiện sự trân trọng với đối tác và khách hàng.
          </p>
          <p className={cx("content-gift")}>
            Sản phẩm của chúng tôi luôn đảm bảo chất lượng và thiết kế tinh tế.
          </p>
          <div className={cx("box-gift")}>
            <div className={cx("item-gift")}>
              <div className={cx("title")}>
                <img src={icons.diamond} alt="Diamond" />
                <h2>QUÀ TẶNG CAO CẤP</h2>
              </div>
              <div className={cx("content")}>
                <p>
                  Dành cho ngân sách trên 500.000₫, Sản phẩm quà tặng cao cấp,
                  tinh xảo nhiều ý nghĩa, hoặc các bộ combo nhiều món quà đặc
                  sắc
                </p>
              </div>
            </div>

            <div className={cx("item-gift")}>
              <div className={cx("title")}>
                <img src={icons.present} alt="" />
                <h2>QUÀ TẶNG BẢN SẮC</h2>
              </div>
              <div className={cx("content")}>
                <p>
                  Tập trung vào ý nghĩa của sự kiên tâng quà, bản sắc thương
                  hiệu để lựa chọn giải pháp quả tặng độc đáo và ấn tượng nhất
                </p>
              </div>
            </div>

            <div className={cx("item-gift")}>
              <div className={cx("title")}>
                <img src={icons.giftbox} alt="" />
                <h2>QUÀ TẶNG PHỔ THÔNG</h2>
              </div>
              <div className={cx("content")}>
                <p>
                  Thường dành cho các sản phẩm quà tặng truyền thông, sự kiện,
                  khuyến mãi với số lượng lớn
                </p>
              </div>
            </div>

            <div className={cx("item-gift")}>
              <div className={cx("title")}>
                <img src={icons.giftcard} alt="" />
                <h2>QUÀ TẶNG TÔN SẢN PHẨM</h2>
              </div>
              <div className={cx("content")}>
                <p>
                  Những món quà làm nên đề gây sự chú ý vào cho sản phẩm chính
                  hoặc thông điệp chính của doanh nghiệp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BackTop />
    </div>
  );
}

export default Home;
