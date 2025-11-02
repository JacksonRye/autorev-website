import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Get started</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Let's Turn Your Business Into a Self-Running Machine
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Every delay costs money. Our automations remove bottlenecks, accelerate cash flow, and scale your output — without scaling your team.
            </p>
          </div>

          <a href="https://calendly.com/northbyte/free-strategy-call" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-4">
              Book a Free Call
            </Button>
          </a>

          <p className="text-sm text-muted-foreground max-w-lg">
            The fastest-growing companies don't work harder — they automate smarter. Let's build that edge for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export { CTA };
