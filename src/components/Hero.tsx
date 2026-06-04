import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <Badge className="inline-flex items-center gap-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              AI Tools for Real Growth
            </Badge>

            <div className="space-y-4">
              <h1 className="font-serif font-bold text-5xl lg:text-6xl leading-tight text-foreground">
                Grow Your Business with{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  AI Power
                </span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-xl">
                Join realtors and small business owners discovering, learning, and mastering AI tools that drive real results. No tech skills required.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/pricing">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
                  Get Started Free
                  <Zap className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/tools">
                <Button size="lg" variant="outline">
                  Browse AI Tools
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">2,500+</div>
                  <div className="text-sm text-foreground/60">Active Users</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">4 Tools</div>
                  <div className="text-sm text-foreground/60">AI Powered</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">340%</div>
                  <div className="text-sm text-foreground/60">Avg Growth</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:h-[500px]">
            {/* Placeholder for hero illustration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 rounded-3xl shadow-2xl" />
            <div className="absolute inset-4 bg-card rounded-2xl shadow-xl border border-border flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="font-serif font-bold text-2xl text-foreground">
                  Your AI Growth Journey Starts Here
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="bg-muted rounded-lg p-4">
                    <div className="font-bold text-lg text-primary">Writrr</div>
                    <div className="text-xs text-foreground/60">AI Writing</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="font-bold text-lg text-accent">Trackrr</div>
                    <div className="text-xs text-foreground/60">Analytics</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="font-bold text-lg text-destructive">Inspirr</div>
                    <div className="text-xs text-foreground/60">Content Ideas</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="font-bold text-lg text-primary">Creatrr</div>
                    <div className="text-xs text-foreground/60">Design Gen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}