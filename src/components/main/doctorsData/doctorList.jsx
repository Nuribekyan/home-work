import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { DoctorListSelector } from "../../../store/selectors";
import { Link } from "react-router-dom";

export default function DoctorList() {
  const { t } = useTranslation();
  const { list, loading } = useSelector(DoctorListSelector.doctorList)
  const itemLoading = useMemo(() => {
    return list.map((item, index) => {
      return (
        <div className='container' key={"div" + index}>
          <div className="container1">
            <div className="container1-span">
              <div>
                <span className="container1-icon">&#128198;</span>
                <span className="container1-text">{item.near_date}</span>
              </div>
              <div>
                <span className="container1-icon">&#128339;</span>
                <span className="container1-text">16:00</span>
              </div>
              <div>
                <span className="container1-icon">&#128233;</span>
                <span className="container1-text">Чат</span>
              </div>
            </div>
            <button className={
              item.id === 785 ? "container1-button-orange" : item.id === 786 ? "container1-button-green" : "container1-button-red"
            }>{item.id === 785 ? t("main_text.key1") : item.id === 786 ? t("main_text.key2") : t("main_text.key3")}</button>
          </div>
          <div className='container2'>
            <div className="container2-div1">
              <img className="container2-img" src={item.profile_image} />
              <div className="container2-p">
                <p className="container2-p1">{item.first_name} {item.last_name}</p>
                <p className="container2-p2">{item.user_categories[0].category.title.ru}</p>
                <p className="container2-p3">{t("doctordata.text1")} {new Date().getFullYear() - item.excperience_start_year} {t("doctordata.text2")}</p>
              </div>
            </div>
            <div className="container2-div2">
              <Link to={`/${item.id}`}>
                <button className="container2-button1">{t("doctordata.button1")}</button>
              </Link>
              <button className="container2-button2">{t("doctordata.button2")}</button>
            </div>
          </div>
        </div>
      );
    });
  }, [list]);
  if (loading) {
    return <h2>Loading...</h2>
  } else {
    return itemLoading
  }
}