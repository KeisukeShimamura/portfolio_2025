"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Snackbar from "./Snackbar";

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const [snackbar, setSnackbar] = useState({
    isOpen: false,
    message: "",
    type: "success" as "success" | "error",
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("送信に失敗しました");
      }

      setSnackbar({
        isOpen: true,
        message: "お問い合わせを受け付けました。",
        type: "success",
      });
      reset(); // フォームをリセット
    } catch (error) {
      setSnackbar({
        isOpen: true,
        message: "エラーが発生しました。時間をおいて再度お試しください。",
        type: "error",
      });
      console.error("Error:", error);
    }
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-objective font-bold text-center mb-8">
          Contact
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm">
              お名前
            </label>
            <input
              {...register("name", { required: "お名前は必須です" })}
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white"
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm">
              メールアドレス
            </label>
            <input
              {...register("email", {
                required: "メールアドレスは必須です",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "有効なメールアドレスを入力してください",
                },
              })}
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm">
              メッセージ
            </label>
            <textarea
              {...register("message", { required: "メッセージは必須です" })}
              id="message"
              rows={6}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-xs">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full lg:w-1/2 mx-auto block cursor-pointer px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-500 transition-colors"
          >
            送信する
          </button>
        </form>
      </div>
      <Snackbar
        message={snackbar.message}
        isOpen={snackbar.isOpen}
        type={snackbar.type}
        onClose={() => setSnackbar((prev) => ({ ...prev, isOpen: false }))}
      />
    </section>
  );
}
