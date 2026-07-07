import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Links } from '../components/Links'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title } from '../styles/styles'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Lucas Reis </title>
        <meta
          name="description"
          content="Meu nome é Lucas Reis, sou um desenvolvedor fullstack
            do Brasil."
        />
        <meta property="og:title" content="About | Lucas Reis" />
        <meta
          property="og:description"
          content="Meu nome é Lucas Reis, sou um desenvolvedor fullstack do Brasil."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            <p>../about</p>
            Sobre
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img
                className="AboutImg"
                src="/86315092.jpeg"
                alt="Imagem de perfil"
              />

              <div className="links">
                <ul role="list">
                  <Link href={'https://github.com/LucasReisV1337'}>
                    <a target="_blank" aria-label="Link para o Github">
                      <AiFillGithub size={25} /> @LucasReisV1337
                    </a>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/devlucasreis/'}>
                    <a target="_blank" aria-label="Link para o Linkedin">
                      <BsLinkedin size={25} /> @devlucasreis
                    </a>
                  </Link>
                  <Link
                    href={'https://api.whatsapp.com/send?phone=5571986758027'}
                  >
                    <a target="_blank" aria-label="Link para o WhatsApp">
                      <RiWhatsappFill size={25} /> +55 (71) 98675-8027
                    </a>
                  </Link>
                  <Link
                    href={'https://www.discordapp.com/users/cold4night'}
                  >
                    <a
                      className="dc"
                      target="_blank"
                      aria-label="Link para o Discord"
                    >
                      <FaDiscord size={25} /> @cold4night
                    </a>
                  </Link>
                  <Link href={'mailto:lucasreisvasconcelos@gmail.com'}>
                    <a
                      className="email"
                      target="_blank"
                      aria-label="Link para o email"
                    >
                      <GrMail size={25} /> @lucasreisvasconcelos@icloud.com
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                  Vamos conversar, quem sabe criar um projeto incrível juntos?
                </h3>
                <p>Me mande uma mensagem! 😉</p>
                <Link href={'/contact'}>
                  <a>
                    <ButtonAlt>Contato</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p>
                Meu nome é Lucas Reis, sou um desenvolvedor front-end React
                do Brasil, apaixonado por projetar e codificar. Minha
                especialidade é a criação de interfaces e funcionalidades para
                aplicativos da web usando React.js e Next.js.
              </p>
              <p>
                Iniciei minha jornada na universidade com o objetivo inicial de
                cursar Análise e Desenvolvimento de Sistemas. Sempre tive
                interesse por computadores e uma curiosidade em relação à
                criação de páginas web. Então, decidi unir essas duas paixões e
                ingressei na faculdade para explorar as possibilidades da área
                de TI.
              </p>
              <p>
                Foi somente em 2021, no penúltimo semestre da faculdade, que
                comecei a levar a programação mais a sério. Iniciei minha
                primeira tentativa de aprender HTML e CSS, porém acabei dando
                uma pausa após alguns meses devido à falta de tempo livre.
              </p>
              <p>
                No ano seguinte, em 2022, percebi que precisava definir um
                objetivo claro. Foi então que direcionei meus esforços para
                aprimorar minhas habilidades em HTML, CSS e JavaScript, com o
                objetivo de construir aplicações web e aprofundar meu
                aprendizado. Esse foi o ponto de partida para me tornar um
                desenvolvedor web.
              </p>
              <p>
                Em termos de minha experiência até o momento, tenho uma base
                sólida em desenvolvimento front-end. Gosto de trabalhar com
                React e NextJS para criar interfaces de usuário dinâmicas.
                Atualmente, trabalho como desenvolvedor front-end freelancer,
                utilizando ReactJS e Material UI, além de fazer integrações com
                NodeJS.
              </p>
              <p>
                Além do trabalho, continuo estudando e desenvolvendo projetos
                pessoais para expandir meus conhecimentos, focado no ecossistema
                Javascript para desenvolvimento Front-end utilizando ReactJS,
                Typescript, Next.js, entre outros.
              </p>
              <p>
                Estou sempre em busca de desafios e oportunidades para crescer
                profissionalmente, e estou animado para contribuir com projetos
                interessantes e inovadores no campo do desenvolvimento web.
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
  <Footer />
    </>
  )
}
