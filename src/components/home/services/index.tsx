import Image from "next/image";
import styles from './styles.module.scss'
import { HomeProps } from "@/utils/home.type";

export function Services({object}: HomeProps){
    return(
        <>
            <section className={styles.containerAbout} id="servicos">
                <article className={styles.innerAbout}>
                    <h2 className={styles.title}>Sobre</h2>
                    <p>{object.metadata.about.description}</p>
                </article>
                <div className={styles.bannerAbout}>
                    <Image
                        className={styles.imageAbout}
                        alt="Imagem ilustrativa sobre a empresa"
                        quality={100}
                        fill={true}
                        priority={true}
                        sizes='(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw'
                        src={object.metadata.about.banner.url}
                    ></Image>
                </div>
            </section>

            <h2 className={styles.serviceTitle}>Conheça nossos serviços</h2>
            
            <section className={styles.services}>
            {
                object.metadata.services.map( (service) => (
                    <article key={service.description} className={styles.service}>
                        <div className={styles.innerService}>
                            <Image
                                className={styles.imageService}
                                alt={service.description}
                                quality={100}
                                fill={true}
                                priority={true}
                                sizes='(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw'
                                src={service.image.url}
                            ></Image>
                        </div>
                        <p>
                            {service.description}
                        </p>
                    </article>
                ))
            }
            </section>
        </>
    )
}