import styles from '../styles/Home.module.css';

const Card = ({ title, content, image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.cardImage} />
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Card;
