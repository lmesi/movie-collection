import { useLoaderData, useNavigate } from "react-router-dom";
import { CollectionType } from "../types";
import Card from "../Components/Card";
import CardSvg from "../assets/checklist.svg";
import { TextField, Button } from "@mui/material";
import { ChangeEventHandler, useState } from "react";

const Collections = () => {
  const collections: CollectionType[] = useLoaderData() as CollectionType[];
  const [collectionTitle, setCollectionTitle] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const navigate = useNavigate();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value.length > 4) {
      setIsTitleValid(true);
    } else {
      setIsTitleValid(false);
    }
    setCollectionTitle(event.target.value);
  };

  const handleAddition = () => {
    fetch("/api/collections", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: collectionTitle,
      }),
    }).then(() => {
      navigate(0);
      setCollectionTitle("");
    });
  };

  return (
    <>
      <h1>Collections</h1>
      <TextField
        label="Collection name"
        variant="outlined"
        value={collectionTitle}
        onChange={handleChange}
        error={!isTitleValid}
        helperText={isTitleValid ? undefined : "Incorrect entry."}
      />
      <Button onClick={handleAddition}>Add new collection</Button>
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
    </>
  );
};

export default Collections;
