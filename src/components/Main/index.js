import styles from "./Main.module.css";
export default function Main() {
  return (
    <main className={styles.main}>
      <div className="row">
        <div
          className={`${styles.content} col-md-5 d-flex flex-column justify-content-center`}
        >
          <p className={styles.title}>Ajude quem precisa de ajuda</p>
          <img className={styles.line} src="/assets/line.svg" alt="" />
          <p>Com apenas 1 real você pode me ajudar a alimentar cães de ruas.</p>

          <div
            className={`${styles.button_container} mt-3 d-flex align-items-center`}
          >
            <button className={styles.button}>Contribuir</button>
            <a className={styles.contact} href="#">
              Entrar em contato
            </a>
          </div>
        </div>

        <div
          className={`${styles.banner_container} d-flex align-items-start col-md-7 position-md-relative`}
        >
          <div>
            <div className={styles.banner}>
              <img
                src="/assets/dog.svg"
                className={`${styles.dog} d-none d-lg-block`}
              />
              <img
                className={`${styles.food} d-none d-lg-block`}
                src="/assets/food.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
