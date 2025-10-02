import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/" title="Ir para a página inicial">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={116}
                height={32}
                className="h-8 w-auto"
            />
        </Link>
    )
}