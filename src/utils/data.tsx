import image from './cat.png'
import {TFoodItem} from "../type";

export const data:TFoodItem[] = [
    {
        "id": 1,
        "name":"Нямушка",
        "about":"Сказочное заморское яство",
        "taste":"с фуа-гра",
        "sale": ['10 порций', 'мышь в подарок'],
        "weight":"0,5",
        "availability": "default",
        "image": image,
        "link": "https://www.dogeat.ru/catalog/royal-kanin-kat-indor-27-jivyschie-v-pomeschenii-10-kg.htm",
        "desc": "Печень утки разварная с артишоками.",
        "isHover": false,
    },
    {
        "id": 2,
        "name":"Нямушка",
        "about":"Сказочное заморское яство",
        "taste":"с рыбой",
        "sale":['40 порций', '2 мыши в подарок'],
        "weight":"2",
        "availability": "default",
        "image": image,
        "link": "https://www.dogeat.ru/catalog/royal-kanin-kat-indor-27-jivyschie-v-pomeschenii-10-kg.htm",
        "desc": "Головы щучьи с чесноком да свежайшая сёмгушка.",
        "isHover": false,
    },
    {
        "id": 3,
        "name":"Нямушка",
        "about":"Сказочное заморское яство",
        "taste":"с курой",
        "sale":['100 порций', '5 мышей в подарок', 'заказчик доволен'],
        "weight":"5",
        "availability": "disabled",
        "image": image,
        "link": "https://www.dogeat.ru/catalog/royal-kanin-kat-indor-27-jivyschie-v-pomeschenii-10-kg.htm",
        "desc": "Филе из цыплят с трюфелями в бульоне.",
        "isHover": false,
    },
    ]