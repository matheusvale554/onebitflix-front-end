import categoriesService, { CategoryType } from "@/services/categoriesService";
import useSWR from "swr";
import styles from '../../../../styles/slideCategory.module.scss'
import ListCategoriesSlide from "../listCategoriesSlide";
import PageSpinner from "@/components/common/spinner";
const ListCategories = function () {
    const { data, error } = useSWR("/listCategories", categoriesService.getCategories);

if (error) return error;
if (!data) { return <PageSpinner/>}

return (
    
	<>
	  {data.data.cateogires?.map((category: CategoryType) => (
         <div>
        <ListCategoriesSlide
      key={category.id}
      categoryId={category.id}
      categoryName={category.name}
      />
            </div>

    ))}
	</>
    
)
};
  
  export default ListCategories;