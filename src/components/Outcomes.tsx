import React from 'react';

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
      <ul className="space-y-1">
        {outcomes.map((outcome, index) => (
          <li key={index} className="text-sm">
            {outcome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Outcomes;