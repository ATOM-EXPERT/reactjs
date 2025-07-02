import { useEffect, useState } from "react";
import Card from "../component/Card";
import axios from "axios";
import { Loader2 } from "lucide-react";

function Shop() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .finally(() => setIsLoading(false));
  }, []);
  const CardData = [
    {
      header: "State of Unity",
      title: "Abuja",
      imageUrl: "/vite.svg",
    },
    {
      header: "Light of the Nation",
      title: "Anambra",
      imageUrl: "/vite.svg",
    },
    {
      header: "Pace Setter",
      title: "Oyo",
      imageUrl: "/vite.svg",
    },
    {
      header: "Gateway State",
      title: "Ogun",
      imageUrl: "/vite.svg",
    },
    {
      header: "Centre of Excellence",
      title: "Lagos",
      imageUrl: "/vite.svg",
    },
    {
      header: "Coal City",
      title: "Enugu",
      imageUrl: "/vite.svg",
    },
  ];

  return (
    <div>
      {isLoading ? (
        <div>
          <Loader2 className="animate-spin m-auto text-blue-600" size={50} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-4 w-full">
          {data.map((item, index) => (
            <Card
              header={item.header}
              title={item.title}
              imageUrl={item.image}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Shop;
