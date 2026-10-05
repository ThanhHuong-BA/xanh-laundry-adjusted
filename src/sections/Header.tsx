import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { LOGO, PHONE_DISPLAY, PHONE_TEL, navItems } from '../data/content';
import { CtaButton } from '../components/CtaButton';
import { cn } from '../lib';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent',
      )}
    >
      <div className="container flex items-center py-3">
        <a href="#" className="flex-shrink-0">
          <img src={LOGO} alt="XANH LAUNDRY" className="h-14 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-6 ml-8">
          {navItems.map((it) => (
            <a key={it.href} href={it.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {it.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <a href={PHONE_TEL} className="flex items-center gap-1.5 text-sm font-medium text-foreground">
            <Phone className="h-4 w-4 text-primary" />
            {PHONE_DISPLAY}
          </a>
          <CtaButton className="px-5 py-2.5 text-sm hover:scale-105" />
        </div>
        <button
          type="button"
          className="md:hidden text-foreground ml-auto"
          aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-background border-t px-4 py-4 space-y-3">
          {navItems.map((it) => (
            <a
              key={it.href}
              href={it.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-foreground/80 py-2"
            >
              {it.label}
            </a>
          ))}
          <CtaButton className="w-full py-2.5 text-sm" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </header>
  );
}
