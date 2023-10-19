import { Form, useLoaderData } from "react-router-dom";
import { CollectionType } from "../types";
import Card from "../Components/Card";
import CardSvg from "../assets/checklist.svg";
import { TextField, Button } from "@mui/material";
import { ChangeEventHandler, useState } from "react";
import "./Collections.css";

const Collections = () => {
  const collections: CollectionType[] = useLoaderData() as CollectionType[];
  const [collectionTitle, setCollectionTitle] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value.length > 4) {
      setIsTitleValid(true);
    } else {
      setIsTitleValid(false);
    }
    setCollectionTitle(event.target.value);
  };

  return (
    <div className="collections-container">
      <h1>Collections</h1>
      <Form
        className="input-container"
        method="post"
        action="/collections"
        onSubmit={() => setCollectionTitle("")}
      >
        <TextField
          name="collectionName"
          label="Collection name"
          variant="outlined"
          value={collectionTitle}
          onChange={handleChange}
          error={!isTitleValid}
          helperText={
            isTitleValid ? undefined : "Title should be at least 5 character."
          }
        />
        <Button
          id="addBtn"
          variant="outlined"
          type="submit"
          name="intent"
          value="add"
        >
          Add new collection
        </Button>
      </Form>
      <div className="cards_container">
        {collections.map((collection) => (
          <Card
            key={collection.id}
            id={collection.id}
            posterUrl={CardSvg}
            title={collection.title}
            pathName="/collections"
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
