import Image from "next/image";
import React from "react";
import styles from "./Collection.module.scss";

const Collection = ({ items }) => {
  return (
    <div className={styles.wraper}>
      <div className={styles.heading}>
        <h2>Our collection</h2>
      </div>
      <div className={styles.collection_items}>
        {items.map((item) => {
          return <CollectionItem item={item} key={item.name} />;
        })}
      </div>
    </div>
  );
};

const CollectionItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item_image}>
        <Image
          src={`/assets/home/desktop/image-${item.image}.png`}
          layout="fill"
          alt="coffee type image"
        />
      </div>
      <div className={styles.item_description}>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
export default Collection;
