import React from 'react';
import { useTranslation } from 'react-i18next';

const Blog = () => {
    const { t } = useTranslation();
    return (
        <div className='item'>
            <p>
                {t('title')}
            </p>
            <p>
                {t('Text for Blog')}
            </p>
        </div>
    )
}
export default Blog;