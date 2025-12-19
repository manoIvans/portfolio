import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Modelagem 3D", "Texturização", "Animação", "Low Poly", "Mid Poly", "Arte 2D", "Pixel Art", "Unreal", "Godot"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiência</Typography>
                                <Typography textAlign="center">1+ anos</Typography>
                                <Typography textAlign="center">3D Model</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiência</Typography>
                                <Typography textAlign="center">2+ anos</Typography>
                                <Typography textAlign="center">Artista 2D</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiência</Typography>
                                <Typography textAlign="center">2+ anos</Typography>
                                <Typography textAlign="center">Desenvolvedor de jogos</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                <Typography textAlign="center">Bacharelato em andamento</Typography>
                                <Typography textAlign="center">Tecnologia da Informação</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Entusiasta do universo 3D com experiência prática em modelagem e desenvolvimento de jogos. 
                        Possuo sólida atuação na produção de arte em jogos, desde a modelagem 3D de ambientes e personagens 
                        até o design 2D especializado em Pixel Art, incluindo também experiências em VR.
                        Combino visão artística e habilidade técnica para criar personagens, jogos, cénarios e objetos, 
                        buscando sempre evoluir na qualidade visual e narrativa dos meus projetos. Possuo domínio 
                        técnico em Blender e Substance Painter, além de outros softwares com o foco em arte 2D, como Asesprite, 
                        e foco na entrega de modelos otimizados
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
