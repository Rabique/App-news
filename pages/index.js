import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Home = () => {
    const cardData = [
        { title: '프로젝트 1', content: '이것은 프로젝트 1의 내용입니다.', image: '/images/project1.jpg' },
        { title: '프로젝트 2', content: '이것은 프로젝트 2의 내용입니다.', image: '/images/project2.jpg' },
        { title: '프로젝트 3', content: '이것은 프로젝트 3의 내용입니다.', image: '/images/project3.jpg' },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>카드뉴스 웹앱</h1>
            <h2 className={styles.subtitle}>Featured projects</h2>
            <div className={styles.grid}>
                {cardData.map((card, index) => (
                    <Card key={index} title={card.title} content={card.content} image={card.image} />
                ))}
            </div>
        </div>
    );
};

export default Home;
