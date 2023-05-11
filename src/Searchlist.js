import { useState } from "react";

const userList = [
  {
    id: "60d0fe4f5311236168a109f5",
    Name: "ms. Charlotte Legrand",
    picture: "https://randomuser.me/api/portraits/med/women/77.jpg",
  },
  {
    id: "60d0fe4f5311236168a109f6",
    Name: "miss. Madison Ambrose",
    picture: "https://randomuser.me/api/portraits/med/women/15.jpg",
  },
  {
    id: "60d0fe4f5311236168a109fa",
    Name: "ms. Ann Mason",
    picture: "https://randomuser.me/api/portraits/med/women/18.jpg",
  },
  {
    id: "60d0fe4f5311236168a109fb",
    Name: "mr. Sohan Pierre",
    picture: "https://randomuser.me/api/portraits/med/men/77.jpg",
  },
  {
    id: "60d0fe4f5311236168a109fc",
    Name: "mr. Gonzaga Ribeiro",
    picture: "https://randomuser.me/api/portraits/med/men/10.jpg",
  },
  {
    id: "60d0fe4f5311236168a109ff",
    Name: "mrs. Josefina Calvo",
    picture: "https://randomuser.me/api/portraits/med/women/3.jpg",
  },
  {
    id: "60d0fe4f5311236168a10a00",
    Name: "mrs. Els Ijsseldijk",
    picture: "https://randomuser.me/api/portraits/med/women/75.jpg",
  },
  {
    id: "60d0fe4f5311236168a10a01",
    Name: "mr jesus Riley",
    picture: "https://randomuser.me/api/portraits/med/men/45.jpg",
  },
  {
    id: "60d0fe4f5311236168a10a03",
    Name: "mr. Adri Leclerc",
    picture: "https://randomuser.me/api/portraits/med/men/57.jpg",
  },
  {
    id: "60d0fe4f5311236168a10a04",
    Name: "mr Konsta Manninen",
    picture: "https://randomuser.me/api/portraits/med/men/24.jpg",
  },
];

const Searchlist = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState(userList);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    const filtered = userList.filter((user) =>
      user.Name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filtered);
  };
  const renderedList = filteredList.map((item, index) => {
    return (
      <div key={index} className="">
        <span className="left-list">
          <img src={item.picture} alt={item.Name} />
          <div>
            <p>{item.id}</p>
            <p className="left-name"> {item.Name} </p>
          </div>
        </span>
      </div>
    );
  });

  return (
    <div>
      <div className="input-div">
        <input
          className="input"
          type="text"
          placeholder="search by name..."
          value={searchValue}
          onChange={handleSearch}
        />
      </div>
      <div className="searchlist">{renderedList}</div>
    </div>
  );
};

export default Searchlist;
