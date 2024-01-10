import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./0.Routes/routes";
import AuthProvider from "./0.providers/AuthProvider";
// query ...
import { QueryClient, QueryClientProvider } from "react-query";
// query...

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-[1980px] mx-auto bg-[#f5f5f5] text-[#3e574d]">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
