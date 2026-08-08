import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { EnquiryModal } from "@/components/enquiry-modal";
import { MasterPlanShowcase } from "@/components/master-plan-showcase";

export const Route = createFileRoute("/master-plan")({
  head: () => ({
    meta: [
      { title: "Green Gardens Master Plan" },
      {
        name: "description",
        content:
          "Explore the Green Gardens master plan with a left plot arm, a central spine of 24 villa plots, 9m roads, and a clubhouse edge.",
      },
      { property: "og:title", content: "Green Gardens Master Plan" },
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
