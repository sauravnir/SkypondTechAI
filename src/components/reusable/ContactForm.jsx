import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Shadcn Skeleton

const ContactForm = ({ formId = "84b62d3b-b4ed-4ce1-94e6-0169b86a335e" }) => {
  const [loading, setLoading] = useState(true);

//   Dummy loader
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, [formId]);

  return (
    <div className="relative">
      {loading && (
        <div className="space-y-4 ">
          <Skeleton className="h-6 w-3/4 bg-muted" />
          <Skeleton className="h-6 w-full bg-muted" />
          <Skeleton className="h-6 w-5/6 bg-muted" />
          <Skeleton className="h-12 w-full bg-muted" />
          <Skeleton className="h-12 w-full bg-muted" />
        </div>
      )}
      <div className="hs-form-frame" data-region="na2" data-form-id={formId} data-portal-id="244306063" > </div>
    </div>
  );
};

export default ContactForm;
