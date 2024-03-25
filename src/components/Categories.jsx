import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../redux/actions/categoriesAction";
import { Stack } from "@mui/material";
import { getProductCategoryState } from "../redux/reducers/categoriesReducer";
import CustomChip from "./CustomChip";
import { useNavigate, useParams } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();

  const categoriesState = useSelector(getProductCategoryState);

  const navigate = useNavigate();

  const navigateToCategory = (cat) => {
    navigate(`/category/${cat}`);
  };

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  const { id } = useParams();

  return (
    <Stack direction={"row"} spacing={4}>
      {Array.isArray(categoriesState) && categoriesState?.length
        ? categoriesState?.map((el) => (
            <CustomChip
              key={el}
              label={el}
              clickable
              variant={id === el ? "filled" : "outlined"}
              onClick={() => {
                navigateToCategory(el);
              }}
            />
          ))
        : null}
    </Stack>
  );
};

export default Categories;
