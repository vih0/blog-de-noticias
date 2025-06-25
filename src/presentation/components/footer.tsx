import { Facebook, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className=" pl-12 flex flex-col gap-2">
        <p>Me siga nas redes sociais</p>
        <div className="flex gap-2">
          <Link href={'/'}>
          <MessageCircle/>
          </Link>
          <Link href={'/'} >
          <Facebook/>
          </Link>
          <Link href={'/'} >
          <Instagram/>
          </Link>
          <Link href={'/'} ></Link>

        </div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Clecio Bertozzi Blog. Todos os direitos reservados.
        </p>
        <Link className="text-sm text-gray-100" href={"https://www.linkedin.com/in/vitoria-araujo-635ab81b4/"}>Desenvolvido por Vitória Araújo ❤️</Link>
      </div>
    </footer>
  );
}
