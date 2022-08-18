import Grid from "@mui/material/Grid";
import AppCard from "../app-card/app-card.component";
import "./app-container.styles.scss";

const AppContainer = ({ apps }) => {
    return (
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {apps.map((app) => (
                <Grid item xs={2} sm={4} md={4} key={app.id}>
                    <AppCard app={app} />
                </Grid>
            ))}
        </Grid>
    );
};

export default AppContainer;
