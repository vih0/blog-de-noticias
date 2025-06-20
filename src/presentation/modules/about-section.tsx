import { Mail, Linkedin, Twitter, BookOpen, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BackButton } from "../components/back-button"

export function AboutSection() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto bg-gray-50 mt-6">
       <BackButton/>
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
            <div className=" text-white p-8">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Equipe NewsHub</h1>
                  <p className="text-xl text-blue-100 mb-4">Jornalistas dedicados a trazer informação de qualidade</p>
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
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

       
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span>Nossa História</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    O NewsHub nasceu em 2020 com a missão de democratizar o acesso à informação de qualidade. Nossa
                    equipe é composta por jornalistas experientes e especialistas em diversas áreas, unidos pela paixão
                    de contar histórias que importam.
                  </p>
                  <p>
                    Acreditamos que o jornalismo de qualidade é fundamental para uma sociedade informada e democrática.
                    Por isso, nos dedicamos a produzir conteúdo factual, bem pesquisado e apresentado de forma clara e
                    acessível.
                  </p>
                  <p>
                    Nosso compromisso é com a verdade, a transparência e o respeito aos nossos leitores. Cada notícia
                    publicada passa por um rigoroso processo de verificação e edição, garantindo a precisão e
                    confiabilidade das informações.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nossa Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Informar, educar e inspirar nossa audiência através de jornalismo ético e de qualidade. Buscamos ser
                    uma fonte confiável de notícias, oferecendo perspectivas equilibradas sobre os acontecimentos que
                    moldam nosso mundo.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
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
              </Card>
            </div>

         
              <Card>
                <CardHeader>
                  <CardTitle>Áreas de Cobertura</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "Tecnologia",
                      "Ciência",
                      "Negócios",
                      "Saúde",
                      "Meio Ambiente",
                      "Política",
                      "Cultura",
                      "Esportes",
                    ].map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Entre em Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>contato@newshub.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>redacao@newshub.com</span>
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
          </div>
        </div>

  )
}
