'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Package,
  LogOut,
  CheckCircle
} from 'lucide-react';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Auto redirect after 3 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  const handleGoHome = () => {
    router.push('/');
  };

  const handleSignInAgain = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/10 content-center p-6">
      <div className="w-full max-w-md mx-auto">
        <Card className="eco-card shadow-2xl border-0">
          <CardHeader className="text-center pb-8">
            <div className="content-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Successfully Logged Out
            </h1>
            <p className="text-muted-foreground font-medium">
              Thank you for using SustainaLink. You have been safely signed out.
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="p-4 rounded-xl bg-success-soft border border-green-200">
                <LogOut className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-green-800 font-medium">
                  Your session has been terminated securely
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleSignInAgain}
                  className="w-full h-12 sustainalink-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Sign In Again
                </Button>
                
                <Button
                  variant="outline"
                  onClick={handleGoHome}
                  className="w-full h-12 border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Back to Home
                </Button>
              </div>

              <div className="text-center pt-4">
                <div className="content-center gap-2 text-sm text-muted-foreground">
                  <Package className="h-4 w-4" />
                  <span>Redirecting to homepage in 3 seconds...</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
