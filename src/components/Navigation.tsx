import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif font-bold text-xl text-foreground hidden sm:block">
              AI Growth Comm
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/tools"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/learn"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Learn
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Resources
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Pricing
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent text-white">
              Get Started Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground/70 hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <Link href="/tools" className="block px-3 py-2 text-base font-medium text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-colors">
              Tools
            </Link>
            <Link href="/learn" className="block px-3 py-2 text-base font-medium text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-colors">
              Learn
            </Link>
            <Link href="/resources" className="block px-3 py-2 text-base font-medium text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-colors">
              Resources
            </Link>
            <Link href="/pricing" className="block px-3 py-2 text-base font-medium text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-colors">
              Pricing
            </Link>
            <div className="pt-3 space-y-2">
              <Button variant="ghost" size="sm" className="w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent text-white">
                Get Started Free
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}