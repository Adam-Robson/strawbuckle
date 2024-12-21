import { collections } from "@/_constants/collections";

export default function CatalogPaged() {
  return (
    <div>
      <h1>Catalog</h1>
      <p>Here you can find the discography of le fog.</p>

      <h2>Collections</h2>

      {collections.map((collection) => (
        <div key={collection.title}>
          <h3>{collection.title}</h3>

          {collection.items.map((item) => (
            <div key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <ul>
                {item.songs.map((song) => (
                  <li key={song}>{song}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
