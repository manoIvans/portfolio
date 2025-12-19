import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    websiteURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vw",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));

    const StyledVideo = styled("video")(({ theme }) => ({
        width: "100%",
        objectFit: "cover",
        height: "200px",
        padding: "10px 0",
        pointerEvents: "none",
        [theme.breakpoints.up('md')]: {
            height: "300px", 
        },
    }));

    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid  ${theme.palette.primary.contrastText}`,
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        padding: "20px",
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }));

    const isVideo = srcImg.toLowerCase().endsWith(".mp4");

    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            {isVideo ? (
                <StyledVideo src={srcImg} autoPlay loop muted playsInline/>
            ) : (
                <StyledImg src={srcImg} alt={title} />
            )}
            <Typography>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
            <Grid container spacing={1} pt={2}>
                <Grid item xs={6}>
                    <StyledButton onClick={() => window.open(websiteURL)}>View Project</StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    )
}

export default ProjectCard
