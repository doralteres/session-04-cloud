import axios from "axios";
import Input from "./Input";
import { SubmitHandler, useForm } from "react-hook-form";

interface AddNewProductProps {
  fetchFunction: () => void;
}
interface IFormInput {
  name: string;
  price: number;
  imageUrl: string;
}

const AddNewProduct: React.FC<AddNewProductProps> = ({ fetchFunction }) => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.debug(data);
    const apiUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api"
        : "/api";
    axios
      .post(`${apiUrl}/products`, data)
      .then((r) => {
        console.log(r);
        fetchFunction();
        reset();
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="w-full px-4">
      <h2 className="text-lg font-semibold">Add New Product</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between"
      >
        <Input {...register("name")} />
        <Input {...register("price", { valueAsNumber: true })} type="number" />
        <Input {...register("imageUrl")} type="url" />
        <button
          type="submit"
          className="text-white font-semibold bg-indigo-400 px-4 py-2 h-fit rounded-lg"
        >
          Submit
        </button>
      </form>
      <hr className="mt-4" />
    </div>
  );
};

export default AddNewProduct;
