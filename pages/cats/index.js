import Head from "next/head";
import DefaultLayout from "../../layouts/Default";
import styles from "../../styles/Home.module.css";
import PetCard from "../../components/Pets/Card/Card";
import { useEffect, useState } from "react";


export default function Home() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();

    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <source />
      <DefaultLayout>
        <div className="container mt-5">
          <div className={styles["cards-container"]}>
            {cats.map((cat) => (
              <PetCard
                name={cat.name}
                id={cat.id} //all this are props from the card.js file
                phone={cat.phone}
                email={cat.email}
                image={{ url: cat.image.url, alt: cat.image.alt }}
                isFavourite={cat.favoured}
              />
            ))}
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
