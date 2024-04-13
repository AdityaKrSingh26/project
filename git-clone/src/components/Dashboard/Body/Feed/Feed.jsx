import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import "./Feed.css";

const Feed = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [visibleRepos, setVisibleRepos] = React.useState(4);

  const fetchRepoId = async (repoName) => {
    console.log(repoName);
    try {
      const response = await axios.post("http://localhost:3000/repos/repoid", {
        repositoryName: repoName,
      });
      console.log("Id fetched", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch repoId:", error);
      return null;
    }
  };

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
        <div
          style={{
            margin: "0px auto",
            display: "flex",
            flexWrap: "wrap",
            color: "white",
          }}
        >
          <div className="home-result-container">
            <h1 className="HomeText" style={{ margin: "0" }}>
              Home
            </h1>
            {isLoading ? (
              <Typography className="dashboard-card" variant="body1" > Loading repositories...</Typography>
            ) : (repositories.slice(0, visibleRepos).map((repo, index) => (
              <Box key={index} >
                <Card
                  className="dashboard-card"
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
                      onClick={() => navigate("/repoview")}
                    >
                      View Repository
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            )))}
              

            {visibleRepos < repositories.length && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleViewMore}
                sx={{
                  width: "90%",
                }}
              >
                View More
              </Button>
            )}
          </div>

          <div className="side-content-left-container">
            {/* Example GitHub-style side card */}
            <Card
              sx={{
                width: "90%",
                minWidth: "300px",
              }}
            >
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

            <Card sx={{ width: "90%" }}>
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
          </div>
        </div>
      </div >
    </>
  );
};

export default Feed;
