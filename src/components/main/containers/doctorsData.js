import img1 from '../../images/11.jpg'
import img2 from '../../images/12.jpg'
import img3 from '../../images/13.jpg'
import img4 from '../../images/14.jpg'
import img5 from '../../images/15.jpg'
import img6 from '../../images/16.jpg'

const icon1 = (<>&#128198;</>)
const icon2 = (<>&#128339;</>)
const icon3_1 = (<>&#128249;</>)
const icon3_2 = (<>&#128233;</>)

const DoctorData = [
    {
        userId: 1,
        number: 1,
        img: img1,
        name: "Максим Волков",
        p_text1: "Педиатр",
        p_text2: "Стаж 5 лет",
        icon1: icon1,
        icon2: icon2,
        icon3: icon3_2,
        text1: "08 Марта 2024",
        text2: " 14:00",
        text3: "Чат",
        textButton: "Запланировано",
    },
    {
        userId: 2,
        number: 2,
        img: img2,
        name: "Ольга Никитина ",
        p_text1: "Оториноларинголог (ЛОР), Терапевт",
        p_text2: "Стаж 7 лет",
        icon1: icon1,
        icon2: icon2,
        icon3: icon3_1,
        text1: "25 Май 2024",
        text2: " 21:00",
        text3: "Чат",
        textButton: "Состоялась",
    },
    {
        userId: 3,
        number: 1,
        img: img3,
        name: "Вероника Елисеева",
        p_text1: "Травматолог (Травматолог-ортопед)",
        p_text2: "Стаж 9 лет",
        icon1: icon1,
        icon2: icon2,
        icon3: icon3_2,
        text1: "02 Май 2024",
        text2: "16:00",
        text3: "Видео связь",
        textButton: "Запланировано",
    },
    {
        userId: 4,
        number: 1,
        img: img4,
        name: "Егор Петров",
        p_text1: "Педиатр",
        p_text2: "Стаж 13 лет",
        icon1: icon1,
        icon2: icon2,
        icon3: icon3_2,
        text1: "08 Марта 2024",
        text2: " 14:00",
        text3: "Видео связь",
        textButton: "Запланировано",
    },
    {
        userId: 5,
        number: 3,
        img: img5,
        name: "Оксана Алексеева",
        p_text1: "Медсестра",
        p_text2: "Стаж 3 лет",
        icon1: icon1,
        icon2: icon2,
        icon3: icon3_2,
        text1: "01 Марта 2024",
        text2: " 09:00",
        text3: "Чат",
        textButton: "Отменено",
    },
    {
        userId: 6,
        number: 2,
        img: img6,
        name: "Денис  Павлов",
        p_text1: "Невропатолог (невролог)",
        p_text2: "Стаж 15 лет",
        icon1: icon1,
        icon2: icon2,
        icon3: icon3_2,
        text1: "05 Марта 2024",
        text2: " 19:00",
        text3: "Видео связь",
        textButton: "Состоялась",
    },
]



export default DoctorData
