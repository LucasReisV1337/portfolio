/* eslint-disable @next/next/no-img-element */
import { ButtonSecondAlt, Container, Title } from "../../styles/styles";
import { CVContainer, CVContent, CVDescription, Curriculum } from "./styles"
import { FiDownload } from 'react-icons/fi'

export function CV() {
  return (
    <Container>
      <CVContainer>
        <Title style={{ marginBottom: '3rem' }}>
          <span>
            <FiDownload /> Download
          </span>
        </Title>

        <CVContent>
          <CVDescription>
              <div className="aspas">&ldquo;</div>
              <p>
                Aqui você pode baixar meu currículo clicando no botão de download.
              </p>
              <div className="profile">
                <img src="https://github.com/LucasReisV1337.png" alt="Imagem de perfil" />
                <div className="name">
                  <h3>Lucas Reis</h3>
                  <span>Desenvolvedor FullStack</span>
                </div>
              </div>
          </CVDescription>
          
          <Curriculum>
            <img src="/cv.png" alt="Homem mostrando um botão de download de currículo" />
            <a href="/pdf/Lucas-CV.pdf" download>
              <ButtonSecondAlt>
                <b>Download CV</b> <FiDownload size={20}  />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>        
      </CVContainer>
    </Container>
  )
}