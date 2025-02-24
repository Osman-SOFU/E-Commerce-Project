import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

const roleNames = {
  customer: "Customer",
  store: "Store",
  admin: "Admin",
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [roles, setRoles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingRoles, setIsLoadingRoles] = useState(true); // 🔑 Roller yüklenirken kontrol
  const history = useHistory();
  const selectedRoleId = watch("role_id");

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const { data } = await api.get("/roles");
        setRoles(data);
        const customerRole = data.find(
          (role) => role.name.toLowerCase() === "customer"
        );
        if (customerRole) setValue("role_id", customerRole.id); // Customer varsayılan olarak atanır
      } catch {
        toast.error("Failed to fetch roles.");
      } finally {
        setIsLoadingRoles(false); // 🎯 Roller yüklendi
      }
    };
    fetchRoles();
  }, [setValue]);

  const storeRole = roles.find((role) => role.name.toLowerCase() === "store");

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    const { confirmPassword, ...formData } = values;

    if (selectedRoleId === storeRole?.id) {
      formData.store = {
        name: values["store.name"],
        phone: values["store.phone"],
        tax_no: values["store.tax_no"],
        bank_account: values["store.bank_account"],
      };
    }

    try {
      await api.post("/signup", formData);
      toast.success("Check your email to activate your account.");
      history.goBack();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Signup failed. Please check your input."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // 🛡️ Roller yüklenene kadar form gösterilmez
  if (isLoadingRoles) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold">Loading roles...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Sign Up
        </h2>

        {/* 🎯 Role Selection */}
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Role</label>
          <select
            {...register("role_id", { required: "Role is required." })}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setValue("role_id", e.target.value)}
            value={selectedRoleId || ""}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {roleNames[role.name.toLowerCase()] || role.name}
              </option>
            ))}
          </select>
          {errors.role_id && (
            <p className="text-red-500 text-sm mt-1">
              {errors.role_id.message}
            </p>
          )}
        </div>

        {/* 📝 Common Fields */}
        <div className="mb-4">
          <input
            placeholder="Name"
            {...register("name", {
              required: "Name is required.",
              minLength: { value: 3, message: "Min 3 characters." },
            })}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address.",
              },
            })}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required.",
              minLength: { value: 8, message: "Min 8 characters." },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                message: "Include uppercase, lowercase, number & special char.",
              },
            })}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === watch("password") || "Passwords do not match.",
            })}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* 🏬 Store-specific Fields */}
        {selectedRoleId === storeRole?.id && (
          <div className="mb-6 space-y-4">
            <div>
              <label>Store Name:</label>
              <input
                {...register("store.name", {
                  required: "Store name is required.",
                })}
                className="w-full border rounded-lg p-3"
              />
            </div>
            <div>
              <label>Store Phone:</label>
              <input
                {...register("store.phone", {
                  required: "Store phone is required.",
                })}
                className="w-full border rounded-lg p-3"
              />
            </div>
            <div>
              <label>Store Tax No:</label>
              <input
                {...register("store.tax_no", {
                  required: "Store tax number is required.",
                })}
                className="w-full border rounded-lg p-3"
              />
            </div>
            <div>
              <label>Store Bank Account:</label>
              <input
                {...register("store.bank_account", {
                  required: "Store bank account is required.",
                })}
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 mt-6 rounded-lg text-white font-semibold ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
