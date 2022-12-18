import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className='item'>
            <p>
                {t('title')}
            </p>
            <p>
                {t('Text for About')}
            </p>
        </div>
    )
}
export default About;