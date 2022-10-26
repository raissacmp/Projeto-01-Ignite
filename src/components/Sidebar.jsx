import { PencilSimpleLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1593887509668-5900ae1fc76f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/62183926?v=4"
          alt=""
        />
        <strong>Raissa Campos</strong>
        <span>Web Developer</span>
        <footer>
          <a href="#">
            <PencilSimpleLine />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
