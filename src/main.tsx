import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Loader2 } from "lucide-react";
import "./styles.css";

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
          <Loader2 className="h-6 w-6 animate-spin text-primary" aria-label="Loading portfolio" />
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>,
);
