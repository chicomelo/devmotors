"use client"

import Link from "next/link"
import styles from './error.module.scss'

export default function Error(){
    return(
        <>
        <div className={styles.error}>
            <h1>Ops, essa página nao existe!</h1>
            <Link href="/" title="Voltar para a home">
                Voltar para a home
            </Link>

        </div>
        <footer className={styles.footer}>
            <p className={styles.copy}>
                Todos os direitos reservados @{`${new Date().getFullYear()}`}
            </p>
        </footer>
        </>
    )
}