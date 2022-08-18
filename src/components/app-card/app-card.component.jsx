import "./app-card.styles.scss";

const AppCard = ({ app }) => {
    const { name, imageURL, link } = app;

    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className="app-card-container" onClick={() => openInNewTab(link)}>
            <img src={imageURL} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
            </div>
        </div>
    );
};

export default AppCard;
