import React from 'react';
import { Badge } from '@/components/ui/badge';

interface OutcomesProps {
  content: string;
}

const Outcomes: React.FC<OutcomesProps> = ({ content }) => {
  if (!content) return null;
  
  // Split content into individual lines and filter out empty ones
  const outcomes = content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  if (outcomes.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="font-medium mb-4">Key Outcomes</h3>
      <div className="space-y-2">
        {outcomes.map((outcome, index) => (
          <Badge key={index} variant="secondary" className="w-full justify-start text-xs py-2 px-3">
            {outcome}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Outcomes;