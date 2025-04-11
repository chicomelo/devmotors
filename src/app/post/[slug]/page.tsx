import { getItemBySlug } from '@/utils/actions/get-data'
import styles from './styles.module.scss'
import { PostProps } from '@/utils/post.type'
import { Phone } from 'lucide-react'
import { Hero } from '@/components/hero'
import { Container } from '@/components/container'
import Image from 'next/image'
import type { Metadata } from 'next'
import React from 'react'

type MetadataProps = {
  params: Promise<{ slug: string }>
}
 
export async function generateMetadata(
  { params }: MetadataProps
): Promise<Metadata> {
  const { slug } = await params

  try{
    const { objects }: PostProps = await getItemBySlug(slug)
    return{
        title: `DevMotors - ${objects[0].title}`,
        description: `${objects[0].metadata.description.text}`,
        openGraph:{
            title: `DevMotors - ${objects[0].title}`,
            images: [objects[0].metadata.banner.url],
          }
    }

}catch(err){
    return{
        title: "DevMotors - Sua oficina especializada",
        description: "Oficina de carros",
    }
}
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const { objects }: PostProps = await getItemBySlug(slug)
    return (
        <main>
            <Hero
                heading={objects[0].title}
                buttonTitle={objects[0].metadata.button.title}
                buttonUrl={objects[0].metadata.button.url}
                bannerUrl={objects[0].metadata.banner.url}
                icon={<Phone size={24} color="#fff"></Phone>}>
            </Hero>
            <Container>
                <section className={styles.about}>
                    <article className={styles.innerAbout}>
                        <h1 className={styles.title}>
                            {objects[0].metadata.description.title}
                        </h1>
                        <p>
                            {objects[0].metadata.description.text.split('\n').map((linha, index) => (
                                <React.Fragment key={index}>
                                {linha}
                                <br />
                                </React.Fragment>
                            ))}
                            </p>
                    
                        {objects[0].metadata.description.button_active && (
                            <a 
                                href={objects[0].metadata.description.button_url as string}
                                target='_blank'
                                className={styles.link}
                            >
                                {objects[0].metadata.description.button_title}
                            </a>
                        )}
                    </article>

                    <div className={styles.bannerAbout}>
                        <Image
                            className={styles.imageAbout}
                            alt={objects[0].title}
                            quality={100}
                            fill={true}
                            priority={true}
                            sizes='(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw'
                            src={objects[0].metadata.description.banner.url}
                        ></Image>
                    </div>
                </section>
            </Container>
            <footer className={styles.footer}>
                <p className={styles.copy}>
                    Todos os direitos reservados {objects[0].title} @{`${new Date().getFullYear()}`}
                </p>
            </footer>
        </main>
    )
}