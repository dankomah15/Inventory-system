import React, { useState } from "react";

const initialStock = [
  { category: "Electronics", id: 101, name: "Smartphone", brand: "Samsung", price: 499, quantity: 25 },
  { category: "Electronics", id: 102, name: "Laptop", brand: "Dell", price: 899, quantity: 10 },
  { category: "Electronics", id: 103, name: "Smart TV", brand: "LG", price: 699, quantity: 15 },
  { category: "Groceries", id: 104, name: "Apples", brand: "Vegetable", price: 1.5, quantity: 30 },
  { category: "Groceries", id: 105, name: "Tomatoes", brand: "Vegetable", price: 2, quantity: 45 },
  { category: "Groceries", id: 106, name: "Sugar 1Kg", brand: "Condiments", price: 3, quantity: 20 },
  { category: "Clothing", id: 107, name: "Men's Jacket", brand: "North Face", price: 100, quantity: 15 },
  { category: "Clothing", id: 108, name: "Sports Short", brand: "Nike", price: 50, quantity: 35 },
  { category: "Clothing", id: 109, name: "Women's Jeans", brand: "Levi's", price: 80, quantity: 40 },
  { category: "Books", id: 110, name: "Educated", brand: "Tara Westove", price: 10, quantity: 22 },
  { category: "Books", id: 111, name: "Becoming", brand: "Biography", price: 12, quantity: 28 },
  { category: "Books", id: 112, name: "Harry Porter", brand: "Fantasy", price: 18, quantity: 30 },
];

const StockPurchase = () => {
  const [stock, setStock] = useState(initialStock);
  const [form, setForm] = useState({
    buyerName: "",
    category: "",
    productName: "",
    brand: "",
    quantity: 1,
  });
  const [message, setMessage] = useState({ text: "", color: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePurchase = () => {
    const { buyerName, category, productName, brand, quantity } = form;
    const qty = parseInt(quantity);
    const matchIndex = stock.findIndex(
      (item) =>
        item.category.toLowerCase() === category.toLowerCase() &&
        item.name.toLowerCase() === productName.toLowerCase() &&
        item.brand.toLowerCase() === brand.toLowerCase()
    );

    if (matchIndex === -1) {
      setMessage({ text: "Product not found. Please check your entries.", color: "text-red-600" });
      return;
    }

    const matchedItem = stock[matchIndex];
    if (qty <= matchedItem.quantity) {
      const updatedStock = [...stock];
      updatedStock[matchIndex].quantity -= qty;
      setStock(updatedStock);

      setMessage({
        text: `Thank you, ${buyerName}! You have successfully purchased ${qty} ${productName}(s).`,
        color: "text-green-600",
      });
    } else {
      setMessage({
        text: `Sorry, only ${matchedItem.quantity} ${productName}(s) are available in stock.`,
        color: "text-red-600",
      });
    }
  };


  return (
    <div className="p-6 space-y-8 bg-blue-700 min-h-screen">
      <h2 className="text-2xl font-bold text-white flex justify-center ">Current Stock Level</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-400 text-black">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Category</th>
              <th className="border p-2">Product ID</th>
              <th className="border p-2">Product Name</th>
              <th className="border p-2">Brand/Details</th>
              <th className="border p-2">Price (GHC)</th>
              <th className="border p-2">Quantity in Store</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.brand}</td>
                <td className="border p-2">{item.price}</td>
                <td className="border p-2">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-blue-700">
  <form
    onSubmit={(e) => {
      e.preventDefault();
      handlePurchase();
    }}
    className="space-y-4 bg-white p-6 shadow-md max-w-sm w-full rounded-xl"
  >
    <h3 className="text-xl font-semibold text-center text-black ">Purchase Form</h3>

    {["buyerName", "category", "productName", "brand", "quantity"].map((field) => (
      <div key={field}>
        <label className="block font-medium capitalize">
          {field === "buyerName" ? "Name of Buyer" : field.replace(/([A-Z])/g, " $1")}
        </label>
        <input
          type={field === "quantity" ? "number" : "text"}
          name={field}
          min={field === "quantity" ? 1 : undefined}
          value={form[field]}
          onChange={handleChange}
          required
          className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    ))}

    <button
      type="submit"
      className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      PURCHASE
    </button>
  </form>
</div>

{message.text && (
  <p className={`font-bold text-center mt-4 ${message.color}`}>{message.text}</p>
)}
</div>
  )
}

export default StockPurchase;
