import Link from "next/link";
import styles from "./styles.module.scss";
import { Button, Container } from "reactstrap";
const HeaderNoAuth = function () {
  return <>
  <div className={styles.ctaSection}>
		<img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>
    <p>Cadastre-se para ter acesso aos cursos!</p>
    <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>
	</div>
    <Container className={styles.nav}> 
        <img src="/logoOnebitflix (1).svg" alt="logoOnebitflix" className={styles.imgLogoNav}/>
        <div>
            <Link href="/login"><Button className={styles.navBtn} outline >Entrar</Button></Link>
            <Link href="/register"><Button  className={styles.navBtn} outline >Registrar</Button></Link>
        </div>
    </Container>
  </>;

}; 

export default HeaderNoAuth;