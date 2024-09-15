
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
            <img className={styles.image} src={'/images/logo.png'} />
            <h1 className={styles.title}>
                YoFoundation
            </h1>
            <p className={styles.subtitle}>
                We receive by giving.
            </p>
        </div>

        <div className={styles.showcaseContainer}>
            <div className={styles.card}>
                <div className={styles.number}>$2800+</div>
                <div className={styles.subtitle}>invested in kindness</div>
            </div>
            <div className={styles.card}>
                <div className={styles.number}>50+</div>
                <div className={styles.subtitle}>happier people</div>
            </div>
        </div>
        <div>
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
