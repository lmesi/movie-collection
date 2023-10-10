import { useLoaderData } from "react-router-dom";
import { CollectionType } from "../types";
import Card from "../Components/Card";
import CardSvg from "../../public/assets/checklist.svg";

const Collections = () => {
  const collections: CollectionType[] = useLoaderData() as CollectionType[];

  return (
    <>
      <h1>Collections</h1>
      <div className="cards_container">
        {collections.map((collection) => (
          <Card
            key={collection.id}
            posterUrl={CardSvg}
            title={collection.title}
            pathName="/collections"
          />
        ))}
      </div>
    </>
  );
};

export function CollectionsLoader(): Promise<CollectionType> {
  return fetch("/api/collections").then((res) => res.json());
}

export default Collections;
