import { HomeProps } from "@/utils/home.type";
import styles from './styles.module.scss'
import { Clock, Mail, Map, Phone } from "lucide-react";

export function Footer ({ object} : HomeProps){
    return(
        <footer className={styles.footer} id="contato">
            
            <section className={styles.section}>
                <h2 className={styles.title}>Contato</h2>
            
                <div className={styles.content}>
                    <div className={styles.item}>
                        <Mail size={32} color="#fff" />
                        <div>
                            <strong>E-mail</strong>
                            <p>{object.metadata.contact.email}</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Phone size={32} color="#fff" />
                        <div>
                            <strong>Telefone</strong>
                            <p>{object.metadata.contact.phone}</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Map size={32} color="#fff" />
                        <div>
                            <strong>Endereço</strong>
                            <p>{object.metadata.contact.adress}</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Clock size={32} color="#fff" />
                        <div>
                            <strong>Horário de atendimento</strong>
                            <p>{object.metadata.contact.time}</p>
                        </div>
                    </div>
                </div>
            
            </section>

            <a 
                href=""
                target="_blank"
                className={styles.link}
            >
                <Phone size={24} color="#fff"></Phone>
                {object.metadata.cta_button.title}
            </a>

            <p className={styles.copy}>
                Todos os direitos reservados {object.title} @{`${new Date().getFullYear()}`}
            </p>
        </footer>
    )
}