"use client";
import { ReactNode, useContext } from "react";

import styles from "@/app/search/components/results/list.module.css";
import ItemComponent from "../item/item.component";
import { ItemsContext } from "../../providers/items/items.provider";


export default function ListComponent(): ReactNode {

  const {filteredItems} = useContext(ItemsContext)
  return (
    <div className={styles.results}>
      <ul>
        {filteredItems.map((number) => {
          return <ItemComponent  key={number.value}  item={number}/>;
        })}
      </ul>
    </div>
  );
}
