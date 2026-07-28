import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { EnquiryModal } from "@/components/enquiry-modal";
import { MasterPlanShowcase } from "@/components/master-plan-showcase";

export const Route = createFileRoute("/master-plan")({
  head: () => ({
    meta: [
      { title: "Greenlands Master Plan" },
      {
        name: "description",
        content:
          "Explore the Greenlands master plan with plotted banks, 9m roads, the clubhouse edge and a secure arrival sequence.",
      },
      { property: "og:title", content: "Greenlands Master Plan" },
    ],
    links: [{ rel: "canonical", href: "/master-plan" }],
  }),
  component: MasterPlanPage,
});

function MasterPlanPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <MasterPlanShowcase onPrimaryAction={() => setEnquiryOpen(true)} />

      <EnquiryModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        title="Download the Master Plan Brochure"
        context="Brochure download - Master Plan"
      />
    </>
  );
}
