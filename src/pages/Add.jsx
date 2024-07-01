import React from "react";

const Add = () => {
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    img: "",
  });
  const handleChan = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };
  const handSubmit = async () => {
    try {
      const reponse = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        body: JSON.stringify(restaurant),
      });
      if (reponse.ok) {
        alert("Restaurant added successfully!!!");
        setRestaurant({
          title: "",
          type: "",
          img: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return <div>Add</div>;
};

export default Add;
