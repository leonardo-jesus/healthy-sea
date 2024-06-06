import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface Props {
  className?: string;
}

export default function CountBtn({ className }: Props) {
  const [count, setCount] = useState(0);

  return (
    <Button
      onClick={() => setCount((count) => count + 1)}
      className={cn('', className)}
    >
      Count is: {count}
    </Button>
  );
}
