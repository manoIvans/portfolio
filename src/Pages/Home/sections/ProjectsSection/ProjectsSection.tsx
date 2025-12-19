import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "A ALMA (Afrodite)",
            subtitle: "Nov 2025",
            srcImg: "/src/assets/images/Timeline 1.mp4",
            description: "Parte 1 de uma série de curtas-metragens animados que contam a história dos doze deuses do Olimpo em uma nova perspectiva. Cada curta-metragem explora a mitologia, personalidade e desafios enfrentados por cada deus, trazendo à vida suas histórias através de animação de alta qualidade e narrativa cativante. Close-up no rosto de uma estátua da Afrodite. A iluminação é magenta e neon. Um enxame de borboletas brilhantes flutua ao redor dela, pousando no mármore frio.",
            technologies: "Blender",
            websiteURL: "null",
        },
        {
            title: "O ABISMO (Poseidon)",
            subtitle: "Nov 2025",
            srcImg: "/src/assets/images/Poseidon.mp4",
            description: "Parte 2 de uma série de curtas-metragens animados que contam a história dos doze deuses do Olimpo em uma nova perspectiva. Uma visão subaquática do Poseidon brilhante emergindo das profundezas escuras do oceano, iluminado por raios de luz solar que penetram na superfície.",
            technologies: "Blender",
            websiteURL: "null",
        },
        
        {
            title: "A ESTRATÉGIA (Atena)",
            subtitle: "Nov 2025",
            srcImg: "/src/assets/images/0001-0103.mp4",
            description: "Parte 3 de uma série de curtas-metragens animados que contam a história dos doze deuses do Olimpo em uma nova perspectiva. Uma visão aérea da deusa Atena em armadura completa, com a  câmera subindo para encontrar uma silhueta imponente contra um fundo dourado. A luz traseira cria um recorte divino.",
            technologies: "Blender",
            websiteURL: "null",
        },
        {
            title: "O ATAQUE (Apolo)",
            subtitle: "Dez 2025",
            srcImg: "/src/assets/images/0001-0240.mp4",
            description: "Parte 4 de uma série de curtas-metragens animados que contam a história dos doze deuses do Olimpo em uma nova perspectiva. Apolo, o deus do sol, é retratado em um cenário dramático, com raios solares dourados iluminando sua figura enquanto ele segura um arco e flecha, disparando a flecha.",
            technologies: "Blender",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
        },
        {
            title: "O Vazio",
            subtitle: "Jul 2025 - Ago 2025",
            srcImg: "/src/assets/images/Ivan-1.png",
            description: "Esta imagem foi desenvolvida como uma peça de arte conceitual para explorar iluminação dramática e composição. O destaque da cena é o modelo do personagem, que é um asset de minha autoria, criado do zero. O foco deste projeto foi trabalhar a integração do modelo original em um ambiente narrativo, testando texturas de desgaste e o comportamento dos materiais sob luz pontual.",
            technologies: "Blender, Substance Painter",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
        },
        {
            title: "O Interrogatório",
            subtitle: "Jul 2025 - Ago 2025",
            srcImg: "/src/assets/images/Ivan-2.png",
            description: "Arte conceitual retratando uma cena de interrogatório. O foco da composição é um modelo original que desenvolvi, inserido neste ambiente para criar uma narrativa de tensão e suspense.",
            technologies: "Blender, Substance Painter",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
        },
        {
            title: "LOBO Tomia",
            subtitle: "Out 2025 - Nov 2025",
            srcImg: "/src/assets/images/lobo.PNG",
            description: "Esse projeto se trata de um jogo de top down que desenvolvi com mais 3 amigos para uma gamejam com o tema 'O preço da curiosidade'. Realizado na Unreal Engine, onde o objetivo é de escapar do hospicio enquanto o jogador busca pelas suas amigas que desapareceram após entrarem no hospício para investigar os rumores de que o local ser assombrado por um Lobisomen. Fui responsável por parte do visual do jogo, desde criação do mapa e cenários, até nas animações e criações dos icones do jogo.",
            technologies: "Technologies: Unreal, Blender, Substance Painter, Krita",
            websiteURL: "https://manoivans.itch.io/curioso",
        },
        {
            title: "Funcionário do Dia",
            subtitle: "Mai 2025",
            srcImg: "/src/assets/images/l3uJ9J.PNG",
            description: "Esse projeto foi de quando eu participei de uma Game Jam com mais dois amigos, na qual cada integrante da equipe tinha um limite estrito de apenas 3 horas de trabalho no projeto. Fui o único responsável por toda a parte visual do jogo. Para este projeto, o maior desafio não foi técnico, mas logístico porque eu tinha uma janela rígida de 3 horas para conceituar e finalizar toda a arte do jogo.",
            technologies: "Technologies: Aseprite, Godot",
            websiteURL: "https://cynder71.itch.io/funcionrio-do-dia",
        },
        {
            title: "Ossuário",
            subtitle: "Mai 2025 - Jun 2025",
            srcImg: "/src/assets/images/ossuario.png",
            description: "Uma experiência VR de um jogo de puzzle, desenvolvida na Unreal Engine que leva o jogador a explorar um mausoléu. O jogador deve andar pelo mapa para encontrar partes de um quebra-cabeça escondidas, enquanto resolve outros puzzles menores para desbloquear novas áreas do mapa. O objetivo final é completar o quebra-cabeça principal para escapar do mausoléu.",
            technologies: "Technologies: Unreal, Blender, Substance Painter",
            websiteURL: "https://manoivans.itch.io/25-e-1-passos-at-morte",
        },
        {
            title: "Mago Idle",
            subtitle: "Ago 2025",
            srcImg: "/src/assets/images/mago.gif",
            description: "Essa animação foi criada para um jogo que estou desenvolvendo com alguns amigos como projeto independente. O personagem é um mago que seria o protagonista do jogo. A animação mostra o mago em uma pose de idle.",
            technologies: "Technologies: Aseprite",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
        },
        {
            title: "Espada Meele Attack",
            subtitle: "Ago 2025",
            srcImg: "/src/assets/images/espada_teste.gif",
            description: "Essa animação foi criada para um jogo que estou desenvolvendo com alguns amigos como projeto independente. A animação mostra uma espada, que seria um dos primeiros inimigos do jogo, realizando um ataque corpo a corpo (meele attack), sendo apenas uma das animações de ataque do inimigo.",
            technologies: "Technologies: Aseprite",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
