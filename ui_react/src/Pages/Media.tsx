import { useLoaderData, useLocation } from "react-router-dom";
import { Form, Field } from "react-final-form";
import Card from "../Components/Card";
import { MovieType, SeriesType } from "../types";
import "./Media.css";
import { TextField, Button } from "@mui/material";

type IValues = {
  searchTitle?: string;
  searchYear?: number;
};

const Media = () => {
  const { pathname } = useLocation();
  const medias = useLoaderData() as MovieType[] | SeriesType[];
  const mediaType = pathname === "/series" ? "Series" : "Movies";
  const maxYear = new Date().getFullYear() + 5;

  const onSubmit = (values: IValues) => {
    console.log(values);
  };

  return (
    <div className="media-container">
      <h1>{mediaType}</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="form-container">
            <Field name="searchTitle">
              {(props) => (
                <TextField
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                  type="text"
                  label="Search for Title"
                  variant="outlined"
                />
              )}
            </Field>

            <Field name="searchYear" id="searchYear">
              {(props) => (
                <TextField
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                  label="Search for Year"
                  variant="outlined"
                  type="number"
                  sx={{ width: 170, marginLeft: "25px" }}
                  InputProps={{ inputProps: { min: 1900, max: maxYear } }}
                />
              )}
            </Field>
            <Button
              id="searchBtn"
              variant="outlined"
              type="submit"
              sx={{ marginLeft: "25px" }}
            >
              Search
            </Button>
          </form>
        )}
      />
      <div className="cards_container">
        {medias.map((media) => (
          <Card
            key={media.id}
            id={media.id}
            posterUrl={media.posterUrl}
            title={media.title}
            pathName={pathname}
          />
        ))}
      </div>
    </div>
  );
};

export default Media;
