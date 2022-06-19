import React, {FC, useState} from "react";
import {data} from '../../utils/data'
import styles from '../Cat-item/styles.module.css'
import CatItem from "../Cat-item/Cat-item";
import {TFoodItem} from "../../type";

const CatList: FC = () => {
    const [foods, setFoods] = useState<TFoodItem[]>(data)
    
    const handleClick = (id:number, e: string, bool:boolean) => {
        setFoods(
            foods.map((item) => {
                if (item.id === id && item.availability !== 'disabled') {
                    switch (e) {
                        case "mouseleave":
                            return {
                                ...item,
                                isHover: bool
                            };
                        case 'mouseenter':
                            return {
                                ...item,
                                isHover: bool
                            };
                        default:
                            return {
                                ...item,
                                availability: item.availability === 'default' ? 'selected' : 'default',
                                isHover: false
                            };
                    }
                }
                return item;
            })
        );
    }
    
    return (
        <>
            <ul className={styles.list}>
                {foods &&
                    foods.map(item => 
                        <li key={item.id}
                            onClick={(e) => handleClick(item.id, e.type, true)} 
                            className={
                                item.availability === 'disabled' ? 
                                `${styles.item} ${styles.item_unavailable}` : 
                                item.availability === 'selected' ? 
                                `${styles.item} ${styles.item_active}` : 
                                styles.item}
                            onMouseEnter={(e) => handleClick(item.id, e.type,true)}
                            onMouseLeave={(e) => handleClick(item.id, e.type, false)}
                        >
                            <CatItem item={item}/>
                        </li>)                    
                }
            </ul>
        </>
    )
}
    
export default CatList;