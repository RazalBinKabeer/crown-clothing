import "./DirectoryContainer.styles.scss";
import CategoryItem from "../CategoryItem/CategoryItem.component";

const DirectoryContainer = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem category={category} />;
      })}
    </div>
  );
};

export default DirectoryContainer;
