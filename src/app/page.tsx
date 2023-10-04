import Image from "next/image";
import styles from "./page.module.css";
import CreateAccount from "@/components/CreateAccount";

export default function Home() {
  return (
    <main className={styles.main}>
      <CreateAccount />
    </main>
  );
}
