import img1 from '../../components/images/13.jpg'
import img2 from '../../components/images/14.jpg'
import img3 from '../../components/images/15.jpg'
import visa from '../../components/images/visa.png'
const BalanceData = [
    {
        img: visa,
        date: "01.03.2024",
        text: "Пополнение",
        sum: 1680,
        id: 1,
    },
    {
        img: img1,
        date: "10.02.2024",
        text: "Пополнение",
        sum: 750,
        id: 1,
    },
    {
        img: img2,
        date: "21.03.2024",
        text: "Оплата за консультацию",
        sum: -1130,
        id: 2,
    },
    {
        img: visa,
        date: "01.04.2024",
        text: "Пополнение",
        sum: 1560,
        id: 1,
    },
    {
        img: visa,
        date: "05.03.2024",
        text: "Оплата за консультацию",
        sum: -450,
        id: 2,
    },
    {
        img: img3,
        date: "26.02.2024",
        text: "Оплата за консультацию",
        sum: -900,
        id: 2,
    },
]

const result = BalanceData.reduce((acc, item) => {
    return acc += item.sum
}, 0)

export { BalanceData, result }