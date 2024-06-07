import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function SignUpPage() {
  return (
    <div className="w-full lg:grid lg:min-h-[100vh] lg:grid-cols-2 xl:min-h-[100vh]">
      <div className="flex flex-col items-center justify-center py-12">
        <div className="flex items-center justify-center">
          <img
            src="./src/assets/lighthouse.svg"
            alt=""
            className="w-2/5 object-cover mb-4"
          />
        </div>
        <Card className="mx-auto max-w-sm w-150 bg-background border-0">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Sign Up
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground text-base">
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link to="/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="hidden bg-muted lg:block">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="./src/assets/data_reports.svg"
            alt=""
            className="w-3/5 h-3/5 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
