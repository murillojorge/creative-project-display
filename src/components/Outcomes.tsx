import React from 'react';
import { Badge } from '@/components/ui/badge';

interface OutcomesProps {
  content: string;
}

const Outcomes: React.FC<OutcomesProps> = ({ content }) => {
  // Extract key metrics from the content
  const extractMetrics = (text: string) => {
    if (!text) return [];
    
    const metrics: string[] = [];
    
    // Look for percentage improvements (e.g., "65% increase", "40% reduction")
    const percentageMatches = text.match(/(\d+)%\s+[a-zA-Z\s]+(increase|reduction|improvement|compliance|savings|decrease)/gi);
    if (percentageMatches) {
      metrics.push(...percentageMatches.slice(0, 3)); // Limit to 3 metrics
    }
    
    // Look for dollar amounts (e.g., "$250K", "$2M+")
    const dollarMatches = text.match(/\$[\d,]+[KMB]?\+?/gi);
    if (dollarMatches) {
      metrics.push(...dollarMatches.slice(0, 2)); // Limit to 2 dollar metrics
    }
    
    // Look for numbered achievements (e.g., "500+ creators", "100% compliance")
    const numberMatches = text.match(/\d+[\+%]?\s+[a-zA-Z\s]+(creators|users|organizations|compliance|coverage|success)/gi);
    if (numberMatches) {
      metrics.push(...numberMatches.slice(0, 2)); // Limit to 2 number metrics
    }
    
    // Remove duplicates and limit total
    return [...new Set(metrics)].slice(0, 4);
  };

  const metrics = extractMetrics(content);

  if (metrics.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="font-medium mb-4">Key Outcomes</h3>
      <div className="space-y-2">
        {metrics.map((metric, index) => (
          <Badge key={index} variant="secondary" className="w-full justify-start text-xs py-2 px-3">
            {metric}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Outcomes;