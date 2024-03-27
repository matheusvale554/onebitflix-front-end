import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
  return <>
  <>
	<Container className={styles.footer}>
	  <img src="/logoOnebitcode.svg" alt="logoFooter" className={styles.footerLogo} />
    <a href="https://www.linkedin.com/in/matheus-silva-4ab385200" target={"blank"} className={styles.footerLink}>Desenvolvido por Matheusº</a>
  </Container>
</>
  </>;
};

export default Footer