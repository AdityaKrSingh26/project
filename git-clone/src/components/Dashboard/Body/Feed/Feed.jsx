import * as React from "react";
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import "./Feed.css";
import { MarkGithubIcon } from "@primer/octicons-react";

const repositories = [
  {
    title: "React",
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    url: "https://github.com/facebook/react",
  },
  {
    title: "Vue.js",
    description: "The Progressive JavaScript Framework.",
    url: "https://github.com/vuejs/vue",
  },
  {
    title: "Angular",
    description: "One framework. Mobile & desktop.",
    url: "https://github.com/angular/angular",
  },
  {
    title: "Django",
    description:
      "A high-level Python Web framework that encourages rapid development and clean, pragmatic design.",
    url: "https://github.com/django/django",
  },
  {
    title: "Flask",
    description: "A lightweight WSGI web application framework.",
    url: "https://github.com/pallets/flask",
  },
  {
    title: "Express",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    url: "https://github.com/expressjs/express",
  },
  {
    title: "Laravel",
    description: "The PHP Framework For Web Artisans.",
    url: "https://github.com/laravel/laravel",
  },
  {
    title: "Spring Boot",
    description:
      "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can just run.",
    url: "https://github.com/spring-projects/spring-boot",
  },
  {
    title: "Ruby on Rails",
    description:
      "Ruby on Rails, or Rails, is a server-side web application framework written in Ruby.",
    url: "https://github.com/rails/rails",
  },
  {
    title: "ASP.NET Core",
    description:
      "ASP.NET Core is a free and open-source web framework, a cross-platform successor to ASP.NET, and is used to build modern, cloud-based, and internet-connected applications.",
    url: "https://github.com/dotnet/aspnetcore",
  },
];

export default function Feed() {
  const navigate = useNavigate();
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
        <div
          style={{
            margin: "0px auto",
            display: "flex",
            flexWrap: "wrap",
            // height: "95vh",
            // overflowY: "auto",
            color: "white",
          }}
        >
          <div className="home-result-container">
            <h1 className="HomeText" style={{ margin: "0" }}>Home</h1>
            {/* Filter Button */}
            {isLoading ? (
              <Typography variant="body1" > Loading repositories...</Typography>
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
            <Card sx={{
              width: "90%",
              // maxWidth: "500px",
              minWidth: "300px",
            }}>
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
      </div>
    </>
  );
}
