
import React from 'react';
import styles from '../styles/Footer.module.scss';
import {FaInstagram} from "react-icons/fa";

const Footer = () => (
  <footer data-aos="fade-up" data-aos-offset="1" className={styles.footer}>
    <FaInstagram color={'#0e4557'} size={32} />
  </footer>
);

export default Footer;
