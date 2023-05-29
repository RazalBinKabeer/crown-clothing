import DirectoryContainer from "./components/DirectoryContainer/DirectoryContainer.component";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl:
      "https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl:
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 5,
    title: "mens",
    imageUrl:
      "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
];

const App = () => {
  return <DirectoryContainer categories={categories} />;
};

export default App;
