import { useEffect } from "react";
import { useParams } from "react-router-dom";
import httpService from "../../utils/service";

const DetailPage = () => {
  const { id } = useParams();

  const fetchProductDetail = async (prodId) => {
    const response = await httpService.get(`/product/${prodId}`);
    console.log("response", response);
  };
  useEffect(() => {
    fetchProductDetail(id);
  }, []);
  return <div>Detail</div>;
};

export default DetailPage;
