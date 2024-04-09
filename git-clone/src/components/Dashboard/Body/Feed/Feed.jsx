import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import "./Feed.css";
import { MarkGithubIcon } from "@primer/octicons-react";

export default function Feed() {
  const [repositories, setRepositories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [visibleRepos, setVisibleRepos] = React.useState(4);

  const handleViewMore = () => {
    setVisibleRepos(repositories.length);
  };

  React.useEffect(() => {
    const fetchRepositories = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://backendgit-1.onrender.com/repos");
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <>
      <div className="cards">
        <Box
          sx={{
            display: "flex",
            height: "95vh",
            overflowY: "auto",
            color: "white",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1em",
              margin: "2vw",
              height: "100%",
            }}
          >
            <h1 className="HomeText">Home</h1>
            {isLoading ? (
              <Typography variant="body1">Loading repositories...</Typography>
            ) : (
              repositories.slice(0, visibleRepos).map((repo, index) => (
                <Box key={index} sx={{ width: 750 }}>
                  <Card
                    variant="outlined"
                    sx={{
                      marginBottom:
                        index === repositories.length - 1 ? "20px" : "0",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {repo.name}
                      </Typography>
                      <Typography variant="body2" color="whitesmoke">
                        {repo.content}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Repository
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              ))
            )}
            {visibleRepos < repositories.length && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleViewMore}
                sx={{ marginTop: 2 }}
              >
                View More
              </Button>
            )}
          </Box>

          <Box
            sx={{
              flex: 1,
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              overflowY: "auto",
              marginTop: "4vw",
            }}
          >
            {/* Example GitHub-style side card */}
            <Card sx={{ width: 300 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  GitHub Trending
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check out the most popular repositories on GitHub.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Trending</Button>
              </CardActions>
            </Card>
            <Card sx={{ width: 300 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  GitHub Trending
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check out the most popular repositories on GitHub.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Trending</Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </div>
    </>
  );
}
