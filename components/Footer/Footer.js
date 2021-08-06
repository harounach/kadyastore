import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a href="" className="link">
            حولنا
          </a>
        </li>
        <li>
          <a href="" className="link">
            سياسة الخصوصية
          </a>
        </li>
        <li>
          <a href="" className="link">
            شروط الإستخدام
          </a>
        </li>
      </ul>
    </footer>
  );
}
