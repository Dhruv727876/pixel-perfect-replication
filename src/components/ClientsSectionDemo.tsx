import { ClientsSection, Stat, Testimonial } from "@/components/ui/testimonial-card";

// Define the data for the section - Tweaked for VEXO Activewear
const statsData: Stat[] = [
  { value: "50k+", label: "Elite Athletes" },
  { value: "1.2M", label: "Workouts Tracked" },
  { value: "4.9", label: "Average Rating" },
];

const testimonialsData: Testimonial[] = [
  {
    name: "Marcus Jordan",
    title: "Pro Marathon Runner",
    quote: "VEXO's summer collection is a game changer. The breathability of the Riviera Linen line is unmatched during my high-noon training sessions.",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    rating: 5.0,
  },
  {
    name: "Elena Rodriguez",
    title: "Yoga Instructor",
    quote: "Finally, activewear that moves with me. The all-season blazer is my go-to for transitioning from the studio to corporate meetings effortlessly.",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    name: "Sarah Chen",
    title: "Fitness Influencer",
    quote: "The aesthetic is undeniably premium. I've never felt more confident in my gear, whether I'm at the gym or shooting content outdoors.",
    avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
  },
];

export default function ClientsSectionDemo() {
  return (
    <ClientsSection
      tagLabel="Our Community"
      title="Athlete Approved"
      description="Join thousands of professionals who trust VEXO for their performance and style needs."
      stats={statsData}
      testimonials={testimonialsData}
      primaryActionLabel="Join The Community"
      secondaryActionLabel="Read Success Stories"
      className="bg-card/50"
    />
  );
}
