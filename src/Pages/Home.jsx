import React from 'react';
import { useTranslation } from 'react-i18next';

const Home =() => {
    const { t } = useTranslation();
    return (
        <div className='item'>
            <p>
                {t('title')}
            </p>
            <p>
                {t('Text for Home')} 
            </p>
        </div>
    )
}
export default Home;