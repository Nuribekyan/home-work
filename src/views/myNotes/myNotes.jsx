import Main from "../../components/main/main";
import { useTranslation } from 'react-i18next';

export default function MyNotes() {
    const { t } = useTranslation()

    return (
        <>
            <div className='main'>
                <p className="myNotes-p">{t("common.key1")}</p>
                <Main></Main>
            </div>
        </>
    );
}