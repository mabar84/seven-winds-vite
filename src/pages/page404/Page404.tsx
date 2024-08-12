import img404 from '@assets/img/img.png';

import s from './Page404.module.scss';
import {Link} from "react-router-dom";

export const Page404 = () => {
    return (
        <div className={s.page404}>
            <img alt="404" className={s.img} src={img404}/>
            <Link to="/">
                Вернуться на главную
            </Link>
        </div>
    );
};
