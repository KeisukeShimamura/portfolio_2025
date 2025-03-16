"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

type SnackbarProps = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  type?: "success" | "error";
};

export default function Snackbar({
  message,
  isOpen,
  onClose,
  type = "success",
}: SnackbarProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className="fixed top-4 right-4 z-50"
        >
          <div
            className={`pl-2 pr-6 py-3 rounded-lg shadow-lg bg-white text-sm font-bold flex items-center ${
              type === "success"
                ? "border-2 border-green-600"
                : "border-2 border-red-600"
            }`}
          >
            {type === "success" ? (
              <CheckCircleIcon className="size-6 text-green-600" />
            ) : (
              <ExclamationCircleIcon className="size-6 text-red-600" />
            )}
            <span className="ml-2">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
