import { Mail, BookOpen, Instagram, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BackButton } from "../components/back-button"
import { getAuthorById } from "@/src/infra/functions"
import { notFound } from "next/navigation"
import Image from "next/image"
interface Props {
  id:string
}
export async function AboutSection({id}:Props) {
  const autor = await getAuthorById(id)
  if(!autor){
    return notFound()
  }
  return (
    <div className="min-h-screen max-w-4xl mx-auto bg-gray-50 mt-6">
       <BackButton/>
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
            <div className=" text-white p-8">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <Image src={autor.photo.url} alt={autor.name} width={128} height={128} className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center"/>
                
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{autor.name}</h1>
                  <p className="text-xl text-blue-100 mb-4">Comunicando e inovando na forma de distribuir informação</p>
                  <p className="text-sm text-blue-100 mb-2">Me siga nas redes sociais</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      contato@newshub.com
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Whatsapp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

       
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader className="pt-6">
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span>Biografia</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    {autor.bio}
                  </p>
                </CardContent>
              </Card>

              {/* <Card>
                <CardHeader className="pt-6">
                  <CardTitle>Nossos Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Integridade:</strong> Compromisso com a verdade e transparência em tudo que fazemos
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Qualidade:</strong> Excelência editorial e rigor jornalístico em cada publicação
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Acessibilidade:</strong> Informação clara e compreensível para todos os públicos
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Inovação:</strong> Uso de tecnologia para melhorar a experiência do leitor
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card> */}
                <Card>
                <CardHeader className="pt-6">
                  <CardTitle>Entre em Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>ClecioBertozzi@contato.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>ClecioBertozzi@contato.com</span>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-gray-600">
                      Tem uma sugestão de pauta ou quer colaborar conosco? Entre em contato através dos nossos canais
                      oficiais.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

         
              <Card>
                <CardHeader className="pt-6">
                  <CardTitle>Áreas de Cobertura</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {autor.temasAbordados.map((area) => (
                      <div key={area.id} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{area.nome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            
            </div>
          </div>
        </div>

  )
}
