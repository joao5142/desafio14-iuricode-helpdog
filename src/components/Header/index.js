import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <img src="/assets/logo.svg" alt="" />
        <p className={styles.title}>HelpDog</p>
      </nav>
    </header>
  );
}
