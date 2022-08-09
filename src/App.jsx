import { useCallback, useEffect } from "react";
import { useState } from "react";
import { httpClient } from "./services/service-axios";
import { Card } from "./components/Card/Card";
import classes from "./App.module.css";

/**
 * React Component for App
 *
 * @return JSX.Element
 */
function App() {
  const [paginateOptions, setPaginateOptions] = useState({
    per_page: 10,
  });
  const [beers, setBeers] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    httpClient
      .get("/beers", {
        params: {
          ...paginateOptions,
        },
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setErrors("");
          setBeers(data);
        } else {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch((err) => {
        setErrors(err);
      });
  }, [paginateOptions]);

  const loadMore = useCallback(() => {
    setPaginateOptions((options) => ({
      ...options,
      per_page: options.per_page + 10,
    }));
  }, []);

  return (
    <div className={classes["app-container"]}>
      {!errors && !beers?.length ? (
        <p className={classes.loading}>Loading ...</p>
      ) : (
        <>
          <h4 className={classes.header}>Beers</h4>
          {errors && <p className={classes.error}>{errors}</p>}
          <div className={classes["list-container"]}>
            {beers.map((beer) => {
              return (
                <Card
                  key={beer.id}
                  name={beer.name}
                  tagline={beer.tagline}
                  ingredients={Object.keys(beer.ingredients).join(",")}
                  description={beer.description}
                  image={beer.image_url}
                />
              );
            })}
          </div>
          <div className={classes["show-more-container"]} onClick={loadMore}>
            <p>Load More</p>
            <i className={"fa fa-angle-down " + classes["down-icon"]} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
