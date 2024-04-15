import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={500}
            height={500}
            className="AboutImg"
            src="/about.svg"
            alt="Imagem de perfil"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>Deixe-me apresentar</h2>
            <p>
            Me chamo Lucas Reis, sou um desenvolvedor com uma grande paixão por programação. Sou apaixonado por entregar soluções que agregam na vida das pessoas e ao mesmo tempo me desafiam. Aprimorei minhas habilidades como desenvolvedor Front-End, Back-End e atualmente estudando Mobile com React Native.

Desenvolvo sites e aplicações utilizando principalmente React, Next e Node. Tenho familiaridade em desenvolver e resolver problemas que me fornecem. Estou sempre me aprimorando a cada projeto que colocam em minhas mãos.

Atualmente faço parte da TITAN, empresa júnior de computação da UFBA, lá integro a diretoria de desenvolvimento onde tenho a oportunidade de ensinar e aprender nos projetos com os meus colegas de equipe.
            </p>
          </div>

          <div className='aboutButton'>
            <Link href={'/contact'}>
              <a>
                <Button>
                  Entre em contato
                  <TelegramLogo
                    style={{
                      marginBottom: '-0.1rem',
                      marginLeft: '0.2rem',
                    }}
                    size={16}
                    weight="bold"
                  />
                </Button>
              </a>
            </Link>
            <Link href={'/about'}>
              <a>
                <ButtonAlternatives>
                  Ler mais
                  <ArrowRight
                    style={{
                      marginBottom: '-0.1rem',
                      marginLeft: '0.2rem'
                    }}
                    weight="bold"
                    size={16}
                  />
                </ButtonAlternatives>
              </a>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  )
}
