import Modal from "react-modal";
import styles from "../styles/MainContent.module.scss";
import {FaInstagram} from "react-icons/fa";
import React from "react";
import {FaX} from "react-icons/fa6";
import { CSSTransition } from 'react-transition-group';

export const InterestModal = ({ isOpen, onClose }) => {
    return <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="fade"
        unmountOnExit
    >
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
            overlay: {
                backgroundColor: 'rgba(0,70,88,0.52)',
            },
            content: {
                minWidth: 300,
                maxWidth: 550,
                borderRadius: 20,
                margin: '0 auto',
                inset: 0,
            }
        }}
    >
        <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
                <FaX size={14} color={'#686868'} onClick={onClose} />
            </div>
            <div>
                <img
                    data-aos="fade-down"
                    className={styles.modalImage}
                    src={'/images/logo.png'}
                />
                <h1 data-aos="zoom-in" className={styles.modalTitle}>Thank you!</h1>
                <p data-aos="zoom-in" className={styles.modalSubtitle}>
                    We appreciate your interest! <br/> You can support us in several ways:
                </p>
            </div>

            <div data-aos="zoom-in" className={styles.buttonsContainer}>
                <button className={styles.choiceButton}>Direct donation</button>
                <div className={styles.choiceSeparator}>or</div>
                <button className={styles.choiceButton}>Shop in YoStore</button>
            </div>

            <div data-aos="fade-up" className={styles.modalFooter}>
                <p>
                    Wait! Cannot afford now? <br /><br />
                    No worries, no pressure. Even your subscription and like matter.<br />
                    Let's stay in touch and build the community:
                </p>
                <div className={styles.modalSocial}>
                    <FaInstagram color={'#0e4557'} size={32} />
                </div>
            </div>
        </div>
    </Modal>
    </CSSTransition>
}