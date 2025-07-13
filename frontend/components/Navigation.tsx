'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  LayoutDashboard, 
  Factory, 
  Package, 
  Bot, 
  Trophy,
  User,
  Settings,
  LogOut
} from 'lucide-react';

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Suppliers', href: '/supplier/acme-corp', icon: Factory },
  { name: 'Products', href: '/product/BATCH001', icon: Package },
  { name: 'AI Assistant', href: '/genai-assistant', icon: Bot },
  { name: 'Rewards', href: '/rewards', icon: Trophy },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex h-full w-64 flex-col border-r bg-card/95 backdrop-blur-lg">
      {/* Logo */}
      <div className="content-start gap-3 border-b px-6 py-6 bg-gradient-to-r from-background to-accent/30">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl sustainalink-gradient shadow-lg">
          <Package className="h-6 w-6 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold sustainalink-text-gradient leading-tight">
            SustainaLink
          </span>
          <span className="text-xs text-muted-foreground font-medium">
            Sustainability Platform
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 px-4 py-6">
        <div className="mb-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
            Dashboard
          </p>
        </div>
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <li key={item.name}>
                <Link href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-4 px-4 py-3 text-left h-auto transition-all duration-300 rounded-xl",
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl" 
                        : "hover:bg-accent/80 hover:text-accent-foreground hover:shadow-md text-foreground/80 hover:text-foreground"
                    )}
                  >
                    <div className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                      isActive ? "bg-white/20" : "bg-primary/10"
                    )}>
                      <Icon className="h-4 w-4 shrink-0" />
                    </div>
                    <span className="font-semibold text-sm">{item.name}</span>
                  </Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* User Profile */}
      <div className="border-t bg-gradient-to-r from-accent/20 to-secondary/5 p-4">
        <div className="content-start gap-3 rounded-xl p-4 hover:bg-accent/60 transition-all duration-300 cursor-pointer">
          <Avatar className="h-12 w-12 ring-2 ring-primary/30 shadow-lg">
            <AvatarFallback className="sustainalink-gradient text-white font-bold text-sm">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-foreground leading-tight">John Doe</p>
            <p className="text-xs text-muted-foreground font-medium">Sustainability Manager</p>
            <div className="content-start gap-1 mt-1">
              <div className="w-2 h-2 rounded-full bg-success-gradient"></div>
              <span className="text-xs text-success font-medium">Online</span>
            </div>
          </div>
        </div>
        
        <div className="mt-3 space-y-1">
          <Link href="/profile">
            <Button variant="ghost" size="sm" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground hover:bg-accent/60 rounded-lg py-2">
              <User className="h-4 w-4" />
              <span className="font-medium">Profile</span>
            </Button>
          </Link>
          <Link href="/settings">
            <Button variant="ghost" size="sm" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground hover:bg-accent/60 rounded-lg py-2">
              <Settings className="h-4 w-4" />
              <span className="font-medium">Settings</span>
            </Button>
          </Link>
          <Link href="/logout">
            <Button variant="ghost" size="sm" className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10 rounded-lg py-2">
              <LogOut className="h-4 w-4" />
              <span className="font-medium">Sign Out</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
