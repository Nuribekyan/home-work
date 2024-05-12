import './doctorProfile.css'
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DoctorProfileAction } from "../../store/actions"
import { DoctorProfileSelector } from '../../store/selectors';

export default function DoctorProfile() {
  const { id } = useParams()
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const { data, loading } = useSelector(DoctorProfileSelector.doctorProfile);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(DoctorProfileAction.get(id));
  }, [dispatch]);

  if (loading || !data) {
    return <h2>Loading...</h2>
  } else {
    return (
      <>
        <div className='div'>
          <div className="information" >
            <div className="information-div">
              <img className="information-img" src={data.profile_image} />
              <div className="information-p">
                <p className="container2-p1 information-p1">{data.first_name} {data.last_name}</p>
                <p className="container2-p2">{data.user_categories[0].category.title.ru}</p>
                <p className="container2-p3">{t("doctordata.text1")} {new Date().getFullYear() - data.doctor_details.excperience_start_year} {t("doctordata.text2")}</p>
              </div>
            </div>
            <div className="information-span">
              <span>{data.doctor_details.price} &#8381; / {t("doctorInformation.text1")}</span>
              <span>30 {t("doctorInformation.text2")}</span>
            </div>
          </div>
          <div className="doctorInformation">
            <h3>&#128198; &nbsp; {t("doctorInformation.key1_1")}</h3>
            <p>{data.near_date}</p>
            <h3>&#128220; &nbsp; {t("doctorInformation.key2_1")}</h3>
            <p dangerouslySetInnerHTML={{ __html: data.doctor_details.education }}></p>
            <h3>&#10011; &nbsp; {t("doctorInformation.key3_1")}</h3>
            <p dangerouslySetInnerHTML={{ __html: data.doctor_details.experience }}></p>
            <h3>&#10071; &nbsp; {t("doctorInformation.key4_1")}</h3>
            <p dangerouslySetInnerHTML={{ __html: data.doctor_details.extra_info }}></p>
          </div>
        </div>
      </>
    );
  }
}