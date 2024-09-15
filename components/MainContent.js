
import React from 'react';
import styles from '../styles/MainContent.module.scss';
import { InterestModal } from "./Modal";

const MainContent = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    return <section className={styles.main}>
        <div>
            <img data-aos="fade-down" className={styles.image} src={'/images/logo.png'} />
            <div data-aos="zoom-in">
                <h1 className={styles.title}>
                    YoFoundation
                </h1>
                <p className={styles.subtitle}>
                    We receive by giving.
                </p>
            </div>
        </div>

        <div className={styles.showcaseContainer}>
            <div data-aos="fade-right" className={styles.card}>
                <div className={styles.number}>$2800+</div>
                <div className={styles.subtitle}>invested in kindness</div>
            </div>
            <div data-aos="fade-left" className={styles.card}>
                <div className={styles.number}>50+</div>
                <div className={styles.subtitle}>happier people</div>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-offset="1">
            <button
                className={styles.cta}
                onClick={onModalOpen}
            >
                How can I support?
            </button>
        </div>

        <InterestModal
            isOpen={isModalOpen}
            onClose={onModalClose}
        />
    </section>
}

export default MainContent;
