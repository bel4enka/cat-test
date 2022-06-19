import {FC} from "react";
import {TFoodItem} from "../../type";
import styles from './styles.module.css'


type TItem = {
    readonly item: TFoodItem;
}
const CatItem: FC<TItem> = ({item} ) => {
    
    const {name, about, taste, sale, weight, image, desc, availability, isHover, link} = item;
    const descUnavailable = <p className={styles.desc_content}>Печалька, {taste} закончился.</p>
    const descDefault = <p className={styles.desc_content}>Чего сидишь? Порадуй котэ <a href={link} target={"_blank"} rel="noreferrer"> купи</a>.</p>
    const descSelect = <p className={styles.desc_content}>{desc}</p>

    const getDesc = (availability: string) => {
        switch (availability) {
            case "selected":
                return descSelect;
            case 'disabled':
                return descUnavailable;
            default:
                return descDefault;
        }
    }
    
    return (
        <>
            <section className={styles.top}>
                <p className={styles.about}>
                    {isHover && availability === 'selected' ? 'Котэ не одобряет?' : about}
                </p>
            </section>
            <section className={styles.main}>
                <h2 className={styles.name}>{name}</h2>
                <h3 className={styles.subtitle}>{taste}</h3>
                <ul className={styles.sale}>
                    {sale.map((item, i) => <li key={i} className={styles.sale_item}>
                        {item}
                    </li> )}
                </ul>
            </section>
            <section className={styles.bottom}>
                <img src={image} alt={'кошка просит есть'}/>
                <p className={styles.weight}><span className={styles.weight_content}>{weight}</span>кг</p>
            </section>
            <section className={styles.desc}>
                {getDesc(availability)}
            </section>
        </>
    )
}
    
export default CatItem;