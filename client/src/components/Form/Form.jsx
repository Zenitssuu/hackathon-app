import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { Input, RTE, Select } from "../index.js";
import axios from "axios";

function Form({ contest }) {
  const { register, handleSubmit, setValue, getValues, control, reset } =
    useForm({
      defaultValues: {
        title: contest ? contest.title : "",
        description: contest ? contest.description : "",
        status: contest ? contest.Status : "Active",
        startDate: contest ? contest.startDate : "",
        endDate: contest ? contest.endDate : "",
        image: contest ? contest.image : "",
        level: contest ? contest.level : "easy",
      },
    });

  const [date, setDate] = useState();
  let c = 0;
  const count = () => {
    c++;
    console.log(c);
  };

  const submit = async (data) => {

    // console.log(data);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    // formData.append("featuredImage", data.poster[0]);
    formData.append("status", data.status);
    formData.append("level", data.level);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);

    
    try {
      console.log(formData);
      
      const response = await axios.post("/contests/add-contest", formData);
      console.log(response);
      if (response.data.message === "added successfully") {
        reset();
      }
    } catch (error) {
      console.error("Error adding contest:", error);
    }
  };
  return (
    <div className="flex justify-start items-center min-h-screen  py-10 px-5">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Challenge Details
        </h1>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-6"
          encType="multipart/form-data"
        >
          {/* title */}
          <Input
            label="Challenge:"
            type="text"
            placeholder="Type your Challenge"
            {...register("title",
              //  { required: "title is required" }

            )}
          />

          {/* start date */}
          <Input
            label="Start Date:"
            type="date"
            className="w-[300px]"
            {...register("startDate",
              //  { required: "Start Date is required" }
              )}
          />

          {/* end date */}
          <Input
            label="Start Date:"
            type="date"
            className="w-[300px]"
            {...register("endDate",
              //  { required: "End date is required" }
              )}
          />

          {/* decription */}
          <RTE
            label="Description:"
            name="description"
            content={getValues("description")}
            control={control}
            {...register("description", 
              // { required: "Description is required",            }
              )}
          />

          {/* image */}
          <Input
            label="Image:"
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            className="w-[250px]"
            {...register("image"
              //  { required: "Image is required" }
              )}
          />

          {/* status */}
          <Select
            options={["Past", "Active", "Upcoming"]}
            label="Status:"
            className="w-full"
            defaultValue="Active"
            {...register("status", 
              // {              required: "Status is required",            }
            )}
          />

          {/* Level */}
          <Select
            options={["Easy", "Medium", "Hard"]}
            label="Level:"
            className="w-full"
            defaultValue="Medium"
            {...register("level", 
              // {              required: "Level is required",            }
              
            )}
          />

          <button
            onClick={count}
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors w-fit"
          >
            {contest ? "Update Challenge" : "Create Challenge"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
