import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { CollectionType } from "../types";

type IDropdownProps = {
  collections: CollectionType[];
  mediaId: string | undefined;
  mediaType: string;
};

const Dropdown: React.FC<IDropdownProps> = ({
  collections,
  mediaId,
  mediaType,
}) => {
  const [selectedCollectionId, setSelectedCollectionId] = useState("");
  const navigate = useNavigate();

  const handleSelect = (event: SelectChangeEvent) => {
    setSelectedCollectionId(event.target.value);
  };

  const handleAddition = () => {
    if (selectedCollectionId === "") return;
    fetch(
      `/api/collections/${selectedCollectionId}/add?type=${mediaType}&id=${mediaId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      if (res.ok) {
        navigate(`/collections/${selectedCollectionId}`);
      }
    });
  };
  return (
    <>
      <FormControl sx={{ m: 2, minWidth: 200 }} size="small">
        <InputLabel id="collectionLabel">Collection</InputLabel>
        <Select
          id="select"
          labelId="collectionLabel"
          label="Collection"
          value={selectedCollectionId}
          onChange={handleSelect}
        >
          {collections.map((collection) => (
            <MenuItem key={collection.id} value={collection.id}>
              {collection.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="button" onClick={handleAddition}>
        Add to Collection
      </Button>
    </>
  );
};

export default Dropdown;
