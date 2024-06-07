/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, Menu, Package2, Search } from 'lucide-react';

import { Overview } from '@/components/overview';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';

const FALLBACK_DATA_TEMPERATURES = [
  {
    name: 'Jan',
    total: 21,
  },
  {
    name: 'Feb',
    total: 22,
  },
  {
    name: 'Mar',
    total: 20,
  },
  {
    name: 'Apr',
    total: 23,
  },
  {
    name: 'May',
    total: 24,
  },
  {
    name: 'Jun',
    total: 26,
  },
  {
    name: 'Jul',
    total: 28,
  },
  {
    name: 'Aug',
    total: 30,
  },
  {
    name: 'Sep',
    total: 24,
  },
  {
    name: 'Oct',
    total: 23,
  },
  {
    name: 'Nov',
    total: 25,
  },
  {
    name: 'Dec',
    total: 22,
  },
];

const FALLBACK_DATA_POLLUTION = [
  {
    name: 'Jan',
    total: 1,
  },
  {
    name: 'Feb',
    total: 3,
  },
  {
    name: 'Mar',
    total: 4,
  },
  {
    name: 'Apr',
    total: 3,
  },
  {
    name: 'May',
    total: 5,
  },
  {
    name: 'Jun',
    total: 8,
  },
  {
    name: 'Jul',
    total: 6,
  },
  {
    name: 'Aug',
    total: 4,
  },
  {
    name: 'Sep',
    total: 9,
  },
  {
    name: 'Oct',
    total: 10,
  },
  {
    name: 'Nov',
    total: 11,
  },
  {
    name: 'Dec',
    total: 15,
  },
];

export function DashboardPage() {
  const [dataTemperatures, setDataTemperatures] = useState(
    FALLBACK_DATA_TEMPERATURES
  );
  const [dataPollution, setDataPollution] = useState(FALLBACK_DATA_POLLUTION);

  useEffect(() => {
    const fetchTemperatures = async () => {
      try {
        const response: any = await fetch(
          'https://localhost:44355/SeaTemperatures',
          {
            headers: {
              accept: 'application/json',
              'cache-control': 'no-cache',
              pragma: 'no-cache',
              'user-agent': 'Mozilla/5.0',
            },
          }
        );

        if (response.data) {
          setDataTemperatures(response.data);
        }
      } catch (error) {
        console.error(
          'Failed to fetch sea temperatures, using fallback data:',
          error
        );
      }
    };

    const fetchPollution = async () => {
      try {
        const response: any = await fetch(
          'https://localhost:44355/SeaPollutions',
          {
            headers: {
              accept: 'application/json',
              'cache-control': 'no-cache',
              pragma: 'no-cache',
              'user-agent': 'Mozilla/5.0',
            },
          }
        );

        if (response.data) {
          setDataPollution(response);
        }
      } catch (error) {
        console.error(
          'Failed to fetch sea pollution data, using fallback data:',
          error
        );
      }
    };

    fetchTemperatures();
    fetchPollution();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <img
            src="./src/assets/lighthouse.svg"
            alt=""
            className="w-10 object-cover"
          />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Sea Health</span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2 bg-muted"
            x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Sea Temperature</CardTitle>
                <CardDescription>Pacific Ocean</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Overview data={dataTemperatures} />
            </CardContent>
          </Card>
          <Card
            className="xl:col-span-2 bg-muted"
            x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Sea Pollution</CardTitle>
                <CardDescription>Indic Ocean</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Overview data={dataPollution} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
