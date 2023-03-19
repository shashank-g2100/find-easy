import Header from "@/components/header/Header";
import Fotter from "@/components/header/Fotter";
import styles from "@/styles/Product.module.css";

function product() {
  return (
    <div className="wrapper">
      <Header />
      <div className={styles.bigimg}>
        <img src="https://picsum.photos/607/450" alt="Home pic " />
      </div>

      <div className={styles.img}>
        <img
          className={styles.smallimg}
          src="https://picsum.photos/302/248"
          alt="Other pic"
        />
        <img
          className={styles.smallimg1}
          src="https://picsum.photos/302/248"
          alt="Other pic"
        />
      </div>

      <div className={styles.info}>
        <h1 className={styles.name}>
          <strong>Modern Flats and Apartments</strong>
        </h1>
        <h2 className={styles.price}>₹ 1.4 Cr</h2>
        <h3 className={styles.details}>3 Bedroom|2000 sq feet</h3>
        <p className={styles.location}>
          <i className="image.png"></i>
          <span>Andheri, Mumbai, India-400414</span>
        </p>
        <div className={styles.subBtn}>
          <h3 className={styles.Request}>Request a tour</h3>
        </div>
        <div className={styles.subBtn1}>
          <h3 className={styles.Request}>Contact Agent</h3>
        </div>
        <h2 className={styles.property}>About this Property</h2>
        <p className={styles.Description}>
          Best 3 BHK Independent House for modern-day lifestyle is now available
          for sale. Grab this 3 BHK property for sale in one of Bengaluru's top
          location, Attibele. The property price of this unit is Rs 1.4 Cr.
          Monthly maintenance costs Rs 2000. The built-up area is 2220 Square
          feet. There are 3 bedrooms and 3 bathroom.{" "}
        </p>
      </div>
      
      <Fotter />
    </div>
  );
}

export default product;
