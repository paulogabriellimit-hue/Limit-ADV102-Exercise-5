import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type SetupFormInputs = {
  profilePhoto: FileList;
  firstName: string;
  lastName: string;
};

const SetupAccount: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetupFormInputs>();

  const onSubmit: SubmitHandler<SetupFormInputs> = () => {
    navigate("/home");
  };

  return (
    <div>
      <h2>Setup Account</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            {...register("profilePhoto", {
              required: "Profile photo is required",
            })}
          />
          {errors.profilePhoto && (
            <p>{errors.profilePhoto.message}</p>
          )}
        </div>

        <div>
          <label>First Name</label>
          <input
            type="text"
            {...register("firstName", {
              required: "First name is required",
            })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            {...register("lastName", {
              required: "Last name is required",
            })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <button type="submit">Complete Setup</button>
      </form>
    </div>
  );
};

export default SetupAccount;
